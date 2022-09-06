import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import { Main } from "layouts/Main";
import style from "_assets/scss/recover.module.scss";

import { Logo } from "components/design/Logo";
import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";
import { Spinner } from "components/design/Spinner";

export default function Step1() {
    const [part, setPart] = useState(1);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    const { t } = useTranslation('recover');

    const { handleSubmit, control, setError, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setPart(2);

        if (data.email === 'brunosdsj@gmail.com') {
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
            }, 5000);
        } else {
            setTimeout(() => {
                setPart(1);
                setLoading(true);
                setSuccess(false);
                setError('email', { message: 'Ocorreu um erro' });
            }, 5000);
        }
    };

    return (
        <Main
            title={t('recover')}
        >
            <div className={ style.content }>

                <Logo />

                {part === 1 &&
                    <form
                        className={style.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Controller
                            control={control}
                            name='email'
                            render={ ({ field: { onChange } }) => (
                                <InputText
                                    type='email'
                                    variant='minimalist'
                                    label='Email'
                                    onChange={onChange}
                                    error={errors?.email}
                                />
                            )}
                            rules={{ required: t('emailerror') }}
                        />

                        <span
                            className={style.form__label}
                        >
                            {t('label')}
                        </span>

                        <Button
                            type='submit'
                            className={style.form__send}
                        >
                            <span>
                                {t('send')}
                            </span>
                        </Button>

                    </form>
                }
                {
                    part === 2 && (
                        <Spinner
                            size="8"
                            className={style.content__spinner}
                            loading={ loading }
                            success={ success }
                            label = { t('success') }
                        />
                    )
                }
            </div>
        </Main>
    );
}
