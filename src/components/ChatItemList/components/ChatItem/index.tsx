import s from "./ChatItem.module.css"
import { IChatList } from "../../../../interface/chatList"


import { useAppDispatch } from "../../../../utils/redux"
import {setCurrentChatId, setCurrentChatTitle} from "../../../../store/chat/index"
import { Avatar } from "../../../Avatar"
import {getTimeWhenMessageWasSend} from "../../../../utils/timeHelper"

const ChatItem = (chat:IChatList) => {
    const {avatar, title, last_message} = chat;
    const dispatch = useAppDispatch()
    
    const onHandleClick = () => {
        dispatch(setCurrentChatId({id: chat.id}))
        dispatch(setCurrentChatTitle({title: chat.title}))
    }

    return (
        <div className={s.wrapper} onClick={onHandleClick}>
            <Avatar src={avatar} size='md'/>
            <div className={s.text_wrapper}>
                <div className={s.text_header}>
                    <p className={s.title} title={title}>{title}</p>
                    <p className={s.text_time}>{getTimeWhenMessageWasSend(chat.last_message.created_at)}</p>
                </div>
             <p className={s.text_body} title={last_message.message}>{last_message.message}</p>
            </div>
        </div>
    )
}

export default ChatItem