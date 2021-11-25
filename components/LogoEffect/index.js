import style from "./style.module.css"

export default function LogoEffect ( { size,  text}) {

    if(size==null) size = 135;

    return( 
        <span className={style.title} style={{ fontSize: size }}>
            {text}
        </span>       
    )
}