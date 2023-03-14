import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChatList, IChatMessage} from "../../interface/chatList"
import {getAllChatListItems, getMesagesFromChat} from "./thunk"
const name = 'chat' 

type chatState = {
  currentChatMessages: IChatMessage[]
  chatItemsList: IChatList[],
  currentChatId: string,
  currentChatTitle: string,
  requestStatus: {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
  },
}
const initialState: chatState = {
  currentChatMessages: [],
  chatItemsList: [],
  currentChatId: '',
  currentChatTitle: '',
  requestStatus: {
    isLoading: false,
    isError: false,
    errorMessage: ''
    },
}

export const chatSlice = createSlice({
  name,
  initialState,
  reducers: { 
    setCurrentChatId(state: chatState, {payload}:PayloadAction<{id: string}>) {
      state.currentChatId = payload.id
    }, 
    setCurrentChatTitle(state: chatState, {payload}: PayloadAction<{title: string}>){
      state.currentChatTitle = payload.title
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllChatListItems.pending.type, (state: chatState) =>{
        state.requestStatus.isLoading = true;
        state.requestStatus.isError = false;
        state.requestStatus.errorMessage = '';
      })
      .addCase(getAllChatListItems.fulfilled.type, (state: chatState, {payload}: PayloadAction<IChatList[]>) => {
        state.requestStatus = initialState.requestStatus;
        state.chatItemsList = payload
      })
      .addCase(getAllChatListItems.rejected.type, (state: chatState, {payload}: PayloadAction<string>) => {
        state.requestStatus.isLoading = false;
        state.requestStatus.isError = true;
        state.requestStatus.errorMessage = payload;
      })

      .addCase(getMesagesFromChat.pending.type, (state: chatState) =>{
        state.requestStatus.isLoading = true;
        state.requestStatus.isError = false;
        state.requestStatus.errorMessage = '';
      })
      .addCase(getMesagesFromChat.fulfilled.type, (state: chatState, {payload}: PayloadAction<IChatMessage[]>) => {
        state.requestStatus = initialState.requestStatus;
        state.currentChatMessages = payload
      })
      .addCase(getMesagesFromChat.rejected.type, (state: chatState, {payload}: PayloadAction<string>) => {
        state.requestStatus.isLoading = false;
        state.requestStatus.isError = true;
        state.requestStatus.errorMessage = payload;
      })
  },
})

export const {setCurrentChatId, setCurrentChatTitle} = chatSlice.actions
export default chatSlice.reducer
