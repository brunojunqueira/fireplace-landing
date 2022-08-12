import useTranslation from "next-translate/useTranslation";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PropTypes from 'prop-types';

import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";
import { SelectInputGroup } from "./SelectInputGroup";

import style from 'pages/register/register.module.scss';

export function Step1RegisterForm ({ setIsStep1Completed, setRegisteredAccountId }) {
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

    async function handleSubmitStep1RegisterForm (model) {
        try {
            model = {
                name: `${model.name} ${model.forname}`,
                email: model.email,
                birthdate: `${model.birthYear}-${model.birthMonth}-${model.birthDay}`
            };

            // const { data: response } = await api.post('/register-endpoint', model);

            // setRegisteredAccountId(response.id);

            setIsStep1Completed(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className={style.content}>
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
        </main>
    );
}

Step1RegisterForm.propTypes = {
    setIsStep1Completed: PropTypes.func.isRequired,
    setRegisteredAccountId: PropTypes.func.isRequired,
};
