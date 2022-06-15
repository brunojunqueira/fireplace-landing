import React from 'react'
import { useRouter } from "next/router"

import style from "./logo.module.scss"

const Logo = ({clickable = false, color = '#FFFFFF', ...props}) => {

    const router = useRouter();

    return( 
        <div
            onClick={clickable ? ()=>router.push('/feed') : ()=>{}}
            className={clickable ? style.logoClickable : style.logo}
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={color} style={{ width: '16%' }} viewBox="68.5 87.30000305175781 375.0999755859375 337.5">
                <path d="M68.5 87.3v37.5h18.8v300h56.6V312.6c0-62.1 50.4-112.5 112.5-112.5s112.5 50.4 112.5 112.5v112.1h55.9v-300h18.8V87.3H68.5z"></path>
                <path d="M297.9 424.4c8.8-10 14.3-23 14.3-37.3-.1-31.1-56.6-93.5-56.6-93.5s-56 62.9-55.9 94c.1 14.4 5.6 27.3 14.5 37.2 16.6-28 41.6-56.2 41.6-56.2s25.3 27.9 42.1 55.8z"></path>
            </svg>
            <h1 
                style={{
                    color: color, 
                    fontSize:'88px',
                    fontWeight:'400',
                    fontFamily: 'Lora'
                }}
            >   fireplace
            </h1>
        </div>
    )
}

export { Logo }