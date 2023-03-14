import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";
import { IGetChatList, IGetChatMessage } from "../../interface/api";


export const getChatList = (params: IGetChatList) => {
    return wrapper("get", `${URLS.LIST}?offset=${params.offset}&limit=${params.limit}`)
}

export const getChatMessages = (params: IGetChatMessage) => {
    return wrapper('get', `${URLS.MESSAGES}?chat_id=${params.id}&offset=${params.offset}&limit=${params.limit}`)
}