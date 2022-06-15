import Footer from "../Footer"
import Resources from "../Resources"

import style from './main.module.scss'

const Main = (props) => {
    return(
        <div 
            id={props?.id} 
            name={props?.name} 
            className={style.content}
        >
            <Resources 
                title={props?.title}
                sources={props?.sources}
            />
            { props.children }
            <Footer/>
        </div>
    )
}

export { Main }