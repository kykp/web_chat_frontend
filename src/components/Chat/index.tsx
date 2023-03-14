import React, { useEffect } from "react"
import s from "./Chat.module.css"
import { useAppDispatch, useAppSelector } from "../../utils/redux"
import { getCurrentChatId, getCurrentChatMessages } from "../../store/chat/reselect"
import { getMesagesFromChat } from "../../store/chat/thunk"
import Message from "./Message"
import {isItSameDay} from "../../utils/timeHelper"
import NewMessages from "../NewMessages"

const Chat = () => {
    const id = useAppSelector(getCurrentChatId)
    const dispatch = useAppDispatch()
    const currentChatMessages = useAppSelector(getCurrentChatMessages)

    useEffect(() => {
        dispatch(getMesagesFromChat({id, offset: 0, limit: 20}))
    },[id])
    
    const renderMessages = () => {
        if (!currentChatMessages) {
          return null;
        }
    
        return currentChatMessages.map((message, i) => {
            const prevMessage = currentChatMessages[i - 1];
            const isSame = prevMessage
            ? isItSameDay(message.created_at, prevMessage.created_at)
            : false;
            const messageProps = { ...message, isSameDay: isSame };
            const newMessages = message.is_new && <NewMessages />;

            return (
                <React.Fragment key={message.id}>
                    <Message {...messageProps} />
                    {newMessages}
                </React.Fragment>
            );
        });
    };
    
    return <div className={s.wrapper}>{renderMessages()}</div>;
}

export default Chat