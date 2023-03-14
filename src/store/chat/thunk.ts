import {createAsyncThunk} from "@reduxjs/toolkit"; 
import {getChatList, getChatMessages} from "../../api/chat/index"
import { IGetChatList, IGetChatMessage } from "../../interface/api";

export const getAllChatListItems = createAsyncThunk(
  'tasks/getAllChatListItems',
  async({offset, limit}: IGetChatList): Promise<any> => {
    try {
      const result = await getChatList({offset, limit})
      return result.response
    } catch (e: any) {
      console.log(e)
    }
  }
)

export const getMesagesFromChat = createAsyncThunk(
  'tasks/getMesagesFromChat',
  async({id, offset, limit}: IGetChatMessage): Promise<any> => {
    try {
      const result = await getChatMessages({id, offset, limit})
      return result.response
    } catch (e: any) {
      console.log(e)
    }
  }
)
