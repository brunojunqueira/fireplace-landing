import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Main } from "../../layouts/Main";
import { Step1RegisterForm } from "components/register/Step1RegisterForm";
import { Step2RegisterForm } from "components/register/Step2RegisterForm";
import { Logo } from "components/design/Logo";

import style from './register.module.scss';

function Register () {
    const { t } = useTranslation('register');
    const [formInputData, setFormInputData] = useState({
        name: '',
        forname: '',
        email: '',
        birthDate: '',
        pseudonym: '',
        password: ''
    });

    const [isStep1Completed, setIsStep1Completed] = useState(false);

    function handleSubmitFormInputData () {
        console.log('formInputData', formInputData);
    }

    return (
        <Main title={t('htmlHeadTitle')}>
            <div className={style.form__logo_container}>
                <Logo />
            </div>
            {!isStep1Completed ? (
                <Step1RegisterForm
                    formInputData={formInputData}
                    setFormInputData={setFormInputData}
                    setIsStep1Completed={setIsStep1Completed}
                />
            ) : (
                <Step2RegisterForm
                    formInputData={formInputData}
                    setFormInputData={setFormInputData}
                    handleSubmitFormInputData={handleSubmitFormInputData}
                />
            )}
        </Main>
    );
}

export default Register;
