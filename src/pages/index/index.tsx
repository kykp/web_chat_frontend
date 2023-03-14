import {FC, useEffect, useState} from "react";
import { IPage } from "../../interface/page";
import Header from "../../components/Header";
import ChatItemList from "../../components/ChatItemList";
import Chat from "../../components/Chat"
import Input from "../../components/Input";
import {PlugComponent} from "../../components/PlugComponent"
import { ReactComponent as PaperClip } from "../../assets/icons/PapperClip.svg"
import { ReactComponent as SendMessageIcon } from "../../assets/icons/Send.svg"
import { useWindowSize } from "../../utils/windowSize";
import s from "./index.module.css" 

export const PageIndex: FC<IPage> = (props: IPage) => {
    const [showPlug, setShowPlug] = useState(false)
    
    const { title } = props;
    const windowSize = useWindowSize();

    useEffect(() => {
        setShowPlug(windowSize[0] <= 700);
      
        return () => {
          setShowPlug(false);
        };
      }, [windowSize]);
      

    return (
        <div className={s.wrapper}>
        {!showPlug && (
            <>
            <ChatItemList />
            <div className={s.right_side}>
                <Header title={title} />
                <Chat />
                {title && (
                <div className={s.sticky}>
                    <Input />
                    <div className={s.input_icons}>
                    <PaperClip className={s.icon} />
                    <SendMessageIcon className={s.icon} />
                    </div>
                </div>
                )}
            </div>
            </>
        )}
        {showPlug && <PlugComponent />}
        </div>

    )
}