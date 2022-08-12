import useTranslation from "next-translate/useTranslation";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from 'prop-types';

import { Button } from "../../components/common/Button";
import { InputText } from "../../components/common/InputText";

import style from 'pages/register/register.module.scss';

export function Step2RegisterForm({ registeredAccountId }) {
    const { t } = useTranslation('register');

    const schema = yup.object().shape({
        pseudonym: yup.string().strict().trim(t('step2.usernameAlert')).matches(/[a-zA-Z\\.,_-]{3,}/, t('step2.usernameAlert')).required(t('inputRequired')),
        password: yup.string().strict().trim(t('step2.passwordAlert')).min(8, t('step2.passwordAlert')).required(t('inputRequired')),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], t('step2.confirmPasswordAlert')).required(t('inputRequired')),
    }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function handleSubmitRegister(model) {
        try {
            model = {
                pseudonym: model.pseudonym,
                password: model.password,
            };

            // await api.put(`/register-endpoint/${registeredAccountId}`, model);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className={style.content}>
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
        </main>
    );
}

Step2RegisterForm.propTypes = {
    registeredAccountId: PropTypes.number.isRequired,
};
