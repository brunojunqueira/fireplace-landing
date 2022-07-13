import Footer from "../../components/fixed/Footer"
import Resources from "../../components/fixed/Resources"
import Translations from "../../components/fixed/Translations"

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
            <main
                className={style.main}
            >
                <Translations/>
                { props?.children }
            </main>
            
            <Footer/>
        </div>
    )
}

export default Main;