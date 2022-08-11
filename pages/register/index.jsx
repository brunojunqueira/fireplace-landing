import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Main } from "../../layouts/Main";
import { Step1RegisterForm } from "components/register/Step1RegisterForm";
import { Step2RegisterForm } from "components/register/Step2RegisterForm";
import { Logo } from "components/design/Logo";

import style from './register.module.scss';

function Register () {
    const { t } = useTranslation('register');
    const [registeredAccountId, setRegisteredAccountId] = useState(0);
    const [isStep1Completed, setIsStep1Completed] = useState(false);

    return (
        <Main title={t('htmlHeadTitle')}>
            <div className={style.form__logo_container}>
                <Logo />
            </div>
            {!isStep1Completed ? (
                <Step1RegisterForm
                    setIsStep1Completed={setIsStep1Completed}
                    setRegisteredAccountId={setRegisteredAccountId}
                />
            ) : (
                <Step2RegisterForm
                    registeredAccountId={registeredAccountId}
                />
            )}
        </Main>
    );
}

export default Register;
