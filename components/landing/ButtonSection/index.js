import useTranslation from 'next-translate/useTranslation'

import { Button } from "../../common/Button";

import style from './buttonsection.module.scss'

const ButtonSection = () => {

    const { t } = useTranslation('home');

    return(
        <div className={style.buttons}>

            <Button 
                className={style.buttons__register} 
                redirectTo='/register' 
                text={t('register')} 
            />                            
            <h3>{t('or')}</h3>
            <Button 
                className={style.buttons__not_now} 
                redirectTo='/feed' 
                text={t('notnow')} 
            />
        </div>
    )
    
}

export default ButtonSection;