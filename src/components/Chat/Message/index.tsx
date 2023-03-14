import { IChatMessage } from "../../../interface/chatList"
import { Avatar } from "../../Avatar"
import { getTimeWhenMessageWasSend } from "../../../utils/timeHelper"
import { ReactComponent as DoubleArrows } from "../../../assets/icons/DoubleArrows.svg"
import s from "./Message.module.css"
import dayjs from "dayjs"

const formatTime = (unixTime: number): string => {
    const time = dayjs.unix(unixTime).format('HH:mm');
    return time;
  };
  

const Message = (message:IChatMessage) =>{
    const isMyMessage = message.user.you
    return (
        <>
        <div className={(isMyMessage ? `${s.wrapper} ${s.my_message_wrapper}` : s.wrapper)}>
          {!isMyMessage && <Avatar src={message.user.avatar} size='sm' />}
          <div className={s.block_message}>
            {!isMyMessage && (
              <p className={s.user_name}>{`${message.user.name} ${message.user.surname}`}</p>
            )}
            <div
              className={
                isMyMessage
                  ? `${s.message_wrapper} ${s.my_message}`
                  : `${s.message_wrapper} ${s.not_my_message}`
              }
            >
              <p>{message.message}</p>
              <div className={s.time_message_wrapper}>
                <p className={s.time_message}>{formatTime(message.created_at)}</p>
                {!message.is_new && <DoubleArrows />}
              </div>
            </div>
          </div>
        </div>
        {!message.isSameDay && (
          <div className={s.message_date}>
            Created at {getTimeWhenMessageWasSend(message.created_at)}
          </div>
        )}
      </>
      
    )
}

export default Message