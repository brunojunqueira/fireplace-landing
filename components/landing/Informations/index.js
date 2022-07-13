import useTranslation from 'next-translate/useTranslation';

import style from './informations.module.scss'


const Informations = () => {

    const { t } = useTranslation('home');

    return(
        <section className={style.content}>
            <article className={style.item}>
                <div className={style.item__texts}>
                    <h2>{t('text1')}</h2>
<<<<<<< HEAD
                    <p>{t('subitle1')}</p>
=======
                    <h3>{t('subitle1')}</h3>
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/fireplace-alt.svg'
                />
            </article>
            <article className={`${style.item} ${style.alt}`}>
                <div className={style.item__texts}>
                    <h2>{t('text2')}</h2>
<<<<<<< HEAD
                    <p>{t('subitle2')}</p>
=======
                    <h3>{t('subitle2')}</h3>
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/typewriter.svg'
                />
            </article>
            <article className={style.item}>
                <div className={style.item__texts}>
<<<<<<< HEAD
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium nulla in enim posuere, euismod aliquam diam sollicitudin. Cras id.</p>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/original.gif'
=======
                    <h2>{t('text3')}</h2>
                    <h3>{t('subitle3')}</h3>
                </div>
                <img 
                    className={style.item__image} 
                    src='./assets/book.svg'
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
                />
            </article>
        </section>
    )
}

export default Informations;