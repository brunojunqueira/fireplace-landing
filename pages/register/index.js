import { useState } from "react";
import router from "next/router";

import useTranslation from "next-translate/useTranslation";

import Main from "../../layouts/Main";
import Step1Form from 'components/register/Step1RegisterForm';
import Step2Form from 'components/register/Step2RegisterForm';
import Logo from "components/design/Logo";
import { Button } from "components/common/Button";

import style from './register.module.scss';

function Register() {
    const { t } = useTranslation('register');
    const [formInputData, setFormInputData] = useState({
        name: '',
        forname: '',
        email: '',
        birthdayDay: '',
        birthdayMonth: '',
        birthdayYear: '',
        pseudonym: '',
        password: '',
    });
    const [isStep1Completed, setIsStep1Completed] = useState(false);

    function handleSubmitFormInputData() {
        console.log('formInputData', formInputData);
    }

    function handleGoBackPage() {
        if (isStep1Completed) {
            console.log('veio aqui');
            setIsStep1Completed(false);
        } else {
            router.push('/');
        }
    }

    return (
        <Main title={t('htmlHeadTitle')}>
            <div className={style.form__logo_container}>
                <Button className={style.form__back_button} onClick={handleGoBackPage}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </Button>
                <Logo />
            </div>
            {!isStep1Completed ? (
                <Step1Form 
                    formInputData={formInputData}
                    setFormInputData={setFormInputData}
                    setIsStep1Completed={setIsStep1Completed}
                />
            ) : (
                <Step2Form 
                    formInputData={formInputData}
                    setFormInputData={setFormInputData}
                    handleSubmitFormInputData={handleSubmitFormInputData}
                />
            )}
        </Main>
    );
}

export default Register;