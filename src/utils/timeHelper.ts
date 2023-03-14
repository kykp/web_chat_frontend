import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const getTimeWhenMessageWasSend = (time: number) => {
    const lastMessage = dayjs.unix(time)

    return lastMessage.format('DD.MM.YYYY')
}

export const isItSameDay = (time1:number, time2:number) => dayjs.unix(time1).isSame(dayjs.unix(time2), 'day')