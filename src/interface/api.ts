export interface IGetChatList {
    offset: number,
    limit: number,
}

export interface IGetChatMessage extends IGetChatList {
    id: string
}