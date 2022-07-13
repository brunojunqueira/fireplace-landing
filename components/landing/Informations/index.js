import useTranslation from 'next-translate/useTranslation';

import style from './informations.module.scss'


const Informations = () => {

    const { t } = useTranslation('home');

    return(
        <section className={style.content}>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>{t('text1')}</h2>
                    <h3>{t('subitle1')}</h3>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/fireplace-alt.svg'
                />
            </article>
            <article className={`${style.item} ${style.alt}`}>
                <div className={style.item__texts}>
                    <h2>{t('text2')}</h2>
                    <h3>{t('subitle2')}</h3>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/typewriter.svg'
                />
            </article>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>{t('text3')}</h2>
                    <h3>{t('subitle3')}</h3>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/book.svg'
                />
            </article>
        </section>
    )
}

export default Informations;