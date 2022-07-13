import Logo from '../components/design/Logo'
import Main from '../layouts/Main';

import style from '../styles/home.module.scss'
import ButtonSection from '../components/landing/ButtonSection';
import Informations from '../components/Landing/Informations';
import { Button } from '../components/common/Button';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {

    const { t } = useTranslation('home');

    return (
        <Main title='Fireplace'>
            <div className={style.content}>
                <Button 
                    className={style.login_button} 
                    redirectTo='/login' 
                    rightIcon='login'
                    text={t('login')}
                />  
                <div className={style.content__main}>
                    <div className={style.main__card}>
                        <Logo />
                        <h2>{t('slogan')}</h2>
                    </div>
                    <ButtonSection />
                </div>
                <div className={style.content__informations}>
                    <Informations />
                </div>
            </div>
        </Main>
    )
}
