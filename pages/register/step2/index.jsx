import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// import { api } from "services/api";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";

import style from 'pages/register/register.module.scss';
import { Main } from "layouts/Main";
import { Logo } from "components/design/Logo";
import { AlertMessage } from "components/design/AlertMessage";

export default function Step2() {
    const { t } = useTranslation('register');

    const schema = yup.object().shape({
        pseudonym: yup.string().strict().trim(t('step2.usernameAlert')).matches(/[a-zA-Z\\.,_-]{3,}/, t('step2.usernameAlert')).required(t('inputRequired')),
        password: yup.string().strict().trim(t('step2.passwordAlert')).min(8, t('step2.passwordAlert')).required(t('inputRequired')),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], t('step2.confirmPasswordAlert')).required(t('inputRequired')),
    }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const router = useRouter();
    const { guid } = router.query;
    const [registeredAccountId, setRegisteredAccountId] = useState(0);
    const [invalidError, setInvalidError] = useState('');
    const [isAccountRegistered, setIsAccountRegistered] = useState(false);

    const errorMessages = {
        guid: t('step2.invalidGuidErrorMessage'),
        "already-registered": t('step2.userAlreadyRegisteredErrorMessage'),
    };

    useEffect(() => {
        if (guid) {
            checkGuidValidation();
        } else {
            goBackToLandingPage();
        }
    }, [guid]);

    async function checkGuidValidation() {
        try {
            // const { data: preRegisteredUserId } = api.get(`/signup-resume?guid=${guid}`);
            const preRegisteredUserId = 1;

            setRegisteredAccountId(preRegisteredUserId);
        } catch (error) {
            switch (error.message) {
                case 'Invalid GUID':
                    setInvalidError('guid');
                    break;
                case 'User already registered':
                    setInvalidError('already-registered');
                    break;
                default:
                    console.log(error.message);
            }
        }
    }

    function handleSubmitRegister(model) {
        try {
            model = {
                id: registeredAccountId,
                pseudonym: model.pseudonym,
                password: model.password,
            };

            // await api.put(`/signup-finish`, model);

            setIsAccountRegistered(true);
        } catch (error) {
            console.log(error);
        }
    }

    function goBackToLandingPage() {
        router.push("/");
    }

    function goToLoginPage() {
        router.push("/login");
    }

    return (
        <Main title={t('htmlHeadTitle')}>
            <div className={style.form__logo_container}>
                <Logo />
            </div>
            <main className={style.content}>
                {invalidError ? (
                    <div className={style.container__error_message}>
                        <AlertMessage
                            message={errorMessages[invalidError]}
                            type="error"
                        />

                        <Button
                            className={style.back_button}
                            text={t('step2.backButtonText')}
                            onClick={goBackToLandingPage}
                        />
                    </div>
                ) : isAccountRegistered ? (
                    <div className={style.container__error_message}>
                        <AlertMessage
                            message={"Registro realizado com sucesso! Clique no botão para ir ao login."}
                            type="info"
                        />

                        <Button
                            className={style.back_button}
                            text={"Ok"}
                            onClick={goToLoginPage}
                        />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(handleSubmitRegister)} className={style.form}>
                        <Controller
                            control={control}
                            name='pseudonym'
                            render={ ({ field: { onChange } }) => (
                                <InputText
                                    onChange={onChange}
                                    label={t('step2.usernamePlaceholder')}
                                    variant="minimalist"
                                    type="text"
                                    name="pseudonym"
                                    id="pseudonym"
                                    error={errors?.pseudonym}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password'
                            render={ ({ field: { onChange } }) => (
                                <InputText
                                    onChange={onChange}
                                    label={t('step2.passwordPlaceholder')}
                                    variant="minimalist"
                                    type="password"
                                    name="password"
                                    id="password"
                                    error={errors?.password}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='confirmPassword'
                            render={ ({ field: { onChange } }) => (
                                <InputText
                                    onChange={onChange}
                                    label={t('step2.confirmPasswordPlaceholder')}
                                    variant="minimalist"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    error={errors?.confirmPassword}
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            text={t('step2.registerButtonText')}
                            className={style.form__button}
                        />
                    </form>
                )}
            </main>
        </Main>
    );
}
