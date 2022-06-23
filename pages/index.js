import useTranslation from 'next-translate/useTranslation'
import Logo from '../components/Logo'
import Main from '../components/Main';

import router from 'next/router';

import style from '../styles/home.module.scss'

export default function Home() {

    const { t } = useTranslation('home');

    return (
        <Main 
            title='Fireplace'
            sources={[
            {
                href:'https://fonts.googleapis.com/icon?family=Material+Icons', 
                rel:'stylesheet'
            },
            {
                href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                rel:'stylesheet'
            }
            ]}
        >
            <div className={style.content}>
                <main className={style.main}>
                    <Logo/>
                    <button 
                        className={style.loginbtn}
                        onClick={ () => router.push('/login') }
                    >
                        <span>
                            {t('login')}
                        </span>
                        <span className="material-symbols-outlined">
                            login
                        </span>
                    </button>

                    <button 
                        className={style.registerbtn}
                        onClick={ () => router.push('/register') }
                    >
                        {t('register')}
                    </button>
                    <button 
                        className={style.notnowbtn}
                        onClick={ () => router.push('/feed') }
                    >
                        {t('notnow')}
                    </button>
                </main>
            </div>
        </Main>
    )
}
