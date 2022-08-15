import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

// import { api } from "services/api";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Logo } from "components/design/Logo";
import { Main } from "layouts/Main";
import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";
import { SelectInputGroup } from "components/register/SelectInputGroup";

import style from '../register.module.scss';
import { AlertMessage } from "components/design/AlertMessage";

export default function Step1 () {
    const { t } = useTranslation('register');

    const schema = yup.object().shape({
        name: yup.string().strict().trim(t('step1.nameAlert')).required(t('inputRequired')),
        forname: yup.string().strict().trim(t('step1.fornameAlert')).required(t('inputRequired')),
        email: yup.string().email(t('step1.emailAlert')).required(t('inputRequired')),
        birthYear: yup.number().min(1902).max(2006, t('step1.maxYearExceeded')).required(t('inputRequired')),
        birthMonth: yup.number().required(t('inputRequired')),
        birthDay: yup.number().required(t('inputRequired')),
    }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [isStep1Completed, setIsStep1Completed] = useState(false);

    async function handleSubmitStep1RegisterForm (model) {
        try {
            model = {
                name: model.name,
                forname: model.forname,
                email: model.email,
                birthdate: `${model.birthYear}-${model.birthMonth}-${model.birthDay}`
            };

            // const { data: response } = await api.post('/signup', model);

            setIsStep1Completed(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Main title={t('htmlHeadTitle')}>
            <main className={style.content}>
                <div className={style.form__logo_container}>
                    <Logo />
                </div>
                {isStep1Completed ? (
                    <AlertMessage
                        message={t('step1.emailSendedMessage')}
                        icon="mail"
                        type="info"
                    />
                ) : (
                    <form
                        onSubmit={handleSubmit(handleSubmitStep1RegisterForm)}
                        className={style.form}
                    >
                        <div className={style.form__name_field}>

                            <Controller
                                control={control}
                                name='name'
                                render={ ({ field: { onChange } }) => (
                                    <InputText
                                        onChange={onChange}
                                        label={t('step1.namePlaceholder')}
                                        variant="minimalist"
                                        type="text"
                                        name="name"
                                        id="name"
                                        error={errors?.name}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name='forname'
                                render={ ({ field: { onChange } }) => (
                                    <InputText
                                        onChange={onChange}
                                        label={t('step1.fornamePlaceholder')}
                                        variant="minimalist"
                                        type="text"
                                        name="forname"
                                        id="forname"
                                        error={errors?.forname}
                                    />
                                )}
                            />
                        </div>

                        <Controller
                                control={control}
                                name='email'
                                render={ ({ field: { onChange } }) => (
                                    <InputText
                                        onChange={onChange}
                                        label={t('step1.emailPlaceholder')}
                                        variant="minimalist"
                                        type="text"
                                        name="email"
                                        id="email"
                                        error={errors?.email}
                                    />
                                )}
                        />

                        <SelectInputGroup control={control} formErrors={errors} />

                        <Button
                            type="submit"
                            text={t('step1.nextButtonText')}
                            className={style.form__button}
                        />
                    </form>
                )}
            </main>
        </Main>
    );
}
