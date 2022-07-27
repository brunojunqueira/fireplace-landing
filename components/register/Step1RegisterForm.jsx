import useTranslation from "next-translate/useTranslation";

import { Controller, useForm } from "react-hook-form";
import PropTypes from 'prop-types';

import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";
import { SelectInputGroup } from "./SelectInputGroup";

import style from 'pages/register/register.module.scss';

export function Step1RegisterForm ({ formInputData, setFormInputData, setIsStep1Completed }) {
    const { t } = useTranslation('register');
    const { handleSubmit, control } = useForm();

    function handleSubmitStep1RegisterForm (model) {
        console.log('model step 1', model);

        setFormInputData({
            ...formInputData,
            ...model
        });

        setIsStep1Completed(true);
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
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired')
                        }}
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
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired')
                        }}
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
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired')
                        }}
                />

                <SelectInputGroup control={control} />

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
    formInputData: PropTypes.object.isRequired,
    setFormInputData: PropTypes.func.isRequired,
    setIsStep1Completed: PropTypes.func.isRequired
};
