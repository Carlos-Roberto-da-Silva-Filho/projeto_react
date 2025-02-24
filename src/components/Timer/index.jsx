import { useEffect, useState } from 'react'

const Timer = ({ isRunning }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    return <h2>{time}</h2>
};

export default Timer
