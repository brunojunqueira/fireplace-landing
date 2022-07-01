import useTranslation from 'next-translate/useTranslation'
import router from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import style from './login.module.scss'
import Main from '../../components/Main';
import Logo from '../../components/Logo';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';



function Login() {

    const { t } = useTranslation('login');

    const { handleSubmit, control, setError, clearErrors, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        console.log(data);

    }

    return(
        <Main
            title={t('login')}
            sources={[
            {
                href:'https://fonts.googleapis.com/icon?family=Material+Icons', 
                rel:'stylesheet'
            },
            {
                href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                rel:'stylesheet'
            }
            ]}
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
                        render={ ({field:{ onChange }} ) => (
                            <InputText
                                type='email'
                                variant='minimalist'
                                label={t('email')}
                                onChange={onChange}
                                error={errors?.email}
                            />
                        )}
                        rules={{required: t('emailerror') }}
                    />

                    <Controller 
                        control={control}
                        name='password'
                        render={ ({field:{ onChange }}) => (
                            <InputText
                                type='password'
                                variant='minimalist'
                                label={t('password')}
                                onChange={onChange}
                                error={errors?.password}
                            />
                        )}
                        rules={{required: t('passwordRequired') }}
                    />                    

                    <Button
                        type='submit'
                    >

                        <span>
                            {t('login')}
                        </span>

                        <span className="material-symbols-outlined">
                            login
                        </span>

                    </Button>

                </form>

            </div>

        </Main>
    )
}
export default Login;