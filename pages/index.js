import useTranslation from 'next-translate/useTranslation'
import Logo from '../components/design/Logo'
import Main from '../templates/Main';

import style from '../styles/home.module.scss'
import { Button } from '../components/common/Button';

export default function Home() {

    const { t } = useTranslation('home');

    return (
        <Main title='Fireplace'>
            <div className={style.content}>
                <div className={style.content__main}>
                    <Logo />

                    <div className={style.buttons}>
                        <Button 
                            className={style.buttons__login} 
                            redirectTo='/login' 
                            rightIcon='login' 
                            text={t('login')} 
                        />  

                        <Button 
                            className={style.buttons__register} 
                            redirectTo='/register' 
                            text={t('register')} 
                        />                            
                        
                        <Button 
                            className={style.buttons__not_now} 
                            redirectTo='/feed' 
                            text={t('notnow')} 
                        />
                    </div>
                </div>
            </div>
        </Main>
    )
}
