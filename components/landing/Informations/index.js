import useTranslation from 'next-translate/useTranslation';

import style from './informations.module.scss'


const Informations = () => {

    const { t } = useTranslation('home');

    return(
        <section className={style.content}>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>{t('text1')}</h2>
                    <p>{t('subitle1')}</p>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/fireplace-alt.svg'
                />
            </article>
            <article className={`${style.item} ${style.alt}`}>
                <div className={style.item__texts}>
                    <h2>{t('text2')}</h2>
                    <p>{t('subitle2')}</p>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/typewriter.svg'
                />
            </article>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium nulla in enim posuere, euismod aliquam diam sollicitudin. Cras id.</p>
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