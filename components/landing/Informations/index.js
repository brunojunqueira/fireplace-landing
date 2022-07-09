import style from './informations.module.scss'

const Informations = () => {
    return(
        <section className={style.content}>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium nulla in enim posuere, euismod aliquam diam sollicitudin. Cras id.</h3>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/original.gif'
                />
            </article>
        </section>
    )
}

export default Informations;