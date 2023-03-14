import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

export const getChatState = (state: RootState) => state.chat

export const getAllItemsList = (state: RootState) =>  state.chat.chatItemsList
export const getCurrentChatId = (state: RootState) => state.chat.currentChatId
export const getCurrentChatMessages = (state: RootState) => state.chat.currentChatMessages
export const getCurrentTitle = (state: RootState) => state.chat.currentChatTitle