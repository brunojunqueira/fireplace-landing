import useTranslation from 'next-translate/useTranslation'
import Link from 'next/dist/client/link'
import Logo from '../components/Logo'
import Main from '../components/Main';

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
                    <Logo
                    style={{
                        height:'150px', 
                        width:'500px', 
                        paddingBottom:'75px'
                    }}
                    color='var(--alt-red)'
                    />
                    <Link href='./login'>
                    <button 
                        className={style.loginbtn}>
                        <span>
                            {t('login')}
                        </span>
                        <span className="material-symbols-outlined">
                            login
                        </span>
                    </button>
                    </Link>
                    <Link href='./register'>
                    <button 
                        className={style.registerbtn}>
                        {t('register')}
                    </button>
                    </Link>
                    <Link href='./feed'>
                    <button className={style.notnowbtn}>{t('notnow')}</button>
                    </Link>
                </main>
            </div>
        </Main>
    )
}
