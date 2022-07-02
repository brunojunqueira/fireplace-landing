import useTranslation from "next-translate/useTranslation";
import { Button } from "../../components/common/Button";
import { InputText } from "../../components/common/InputText";
import Logo from "../../components/design/Logo";
import Main from '../../templates/Main';

import style from './register.module.scss';

function Register() {

    const { t } = useTranslation('register');

    function handleSubmitRegister(event) {
        event.preventDefault();
        return;
    }

    return (
        <Main title={t('register')}>
            <main className={style.content}>
                <Logo />
                <form onSubmit={handleSubmitRegister} className={style.form}>

                    <div className={style.form__name_field}>
                        <InputText 
                            label={t('name')}
                            variant="minimalist"
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                        <InputText 
                            label={t('forname')}
                            variant="minimalist"
                            type="text"
                            name="forname"
                            id="forname"
                            required
                        />
                    </div>
                    
                    <InputText 
                        label={t('email')}
                        variant="minimalist"
                        type="text"
                        name="email"
                        id="email"
                        required
                    />

                    <InputText 
                        label={t('userName')}
                        variant="minimalist"
                        type="text"
                        name="pseudonym"
                        id="pseudonym"
                        required
                    />

                    <InputText 
                        label={t('password')}
                        variant="minimalist"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />

                    <InputText 
                        label={t('confirmPassword')}
                        variant="minimalist"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />

                    <Button 
                        type="submit" 
                        text={t('register')}
                        className={style.form__button}
                    />
                </form>
            </main>
        </Main>
    );
}

export default Register;