type TLastMessage = {
    created_at: number,
    message: string,
    user_id: string
    user_name:  string,
    user_surname: string,
    you: boolean,
}

export interface IUser {
    avatar: string,
    id: string,
    name: string,
    surname: string,
    you: boolean
}
export interface IChatList {
    avatar: string,
    count_unread: number,
    created_at:number,
    id: string
    last_message:  TLastMessage
    private: boolean,
    title: string,
    users: [IUser]
} 

export interface IChatMessage {
    id: string,
    created_at: number,
    user: IUser,
    message: string,
    is_new: boolean,
    isSameDay?:boolean
}