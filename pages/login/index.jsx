import useTranslation from 'next-translate/useTranslation';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

import style from '_assets/scss/login.module.scss';

import { Main } from '../../layouts/Main';
import { Logo } from '../../components/design/Logo';
import { Button } from '../../components/common/Button';
import { InputText } from '../../components/common/InputText';
import { Checkbox } from '../../components/common/Checkbox';

import { useAuth } from 'contexts/AuthenticationContext';
import router from 'next/router';

function Login() {
    const { t } = useTranslation('login');

    const { login } = useAuth();

    const [remember, setRemember] = useState(false);

    const { handleSubmit, control, setError, formState: { errors } } = useForm();

    const onToggleCheck = (check) => {
        setRemember(check);
    };

    const onSubmit = async (data) => {
        const result = await login(data.email, data.password, remember);
        if (result === 'success') {
            router.push('/feed');
        } else if (result === 'password') {
            setError('password', t('passwordError'));
        } else {
            setError('email', t('emailError'));
        }
    };

    return (
        <Main
            title={t('login')}
        >
            <div className={ style.content }>

                <Logo />

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
                                label={t('email')}
                                onChange={onChange}
                                error={errors?.email}
                            />
                        )}
                        rules={{ required: t('emailerror') }}
                    />

                    <Controller
                        control={control}
                        name='password'
                        render={ ({ field: { onChange } }) => (
                            <InputText
                                type='password'
                                variant='minimalist'
                                label={t('password')}
                                onChange={onChange}
                                error={errors?.password}
                            />
                        )}
                        rules={{ required: t('passwordRequired') }}
                    />

                    <Button
                        type='submit'
                        className={style.form__submit}
                    >

                        <span>
                            {t('login')}
                        </span>

                        <span className="material-symbols-outlined">
                            login
                        </span>

                    </Button>

                </form>

                <Checkbox
                    name='remember'
                    label={t('remember')}
                    onToggleCheck={onToggleCheck}
                />

                <Button
                    redirectTo='/login/recover/step1'
                    className={style.content__forgot}
                >
                    <span>
                        {t('forgot')}
                    </span>
                </Button>

            </div>

        </Main>
    );
}

export default Login;
