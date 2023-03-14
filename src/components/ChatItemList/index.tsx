import { useEffect, useState } from "react"
import s from "./ChatItemList.module.css"
import ChatItem from "./components/ChatItem"
import { useAppDispatch, useAppSelector } from "../../utils/redux"
import { getAllChatListItems } from "../../store/chat/thunk"
import { getAllItemsList } from "../../store/chat/reselect"

const ChatItemList = () => {
    const dispatch = useAppDispatch()
    const selectAllItems = useAppSelector(getAllItemsList);

    useEffect(() => {
        dispatch(getAllChatListItems({offset: 0,limit: 20}))
    }, [])
    
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>All chats</h2>
            {selectAllItems && selectAllItems.map(chat => (<ChatItem key={chat.id} {...chat}/>))}
        </div>
    )
}

export default ChatItemList