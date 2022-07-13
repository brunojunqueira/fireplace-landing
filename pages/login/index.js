import useTranslation from 'next-translate/useTranslation'
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

import style from './login.module.scss'
import Main from '../../layouts/Main';
import Logo from '../../components/design/Logo';
import { Button } from '../../components/common/Button';
import { InputText } from '../../components/common/InputText';
import Checkbox from '../../components/common/Checkbox';



function Login() {

    const [remenber, setRemember] = useState(false);

    const { t } = useTranslation('login');

    const { handleSubmit, control, setError, formState: { errors } } = useForm();

    const onToggleCheck = (check) => {
        setRemember(check);
    }

    const onSubmit = async (data) => {
        
        // --Implementation--
        //
        //const email_exist = await api.post(data.email);
        //if(email_exist){
        //      try{
        //          auth.login(data.email, data.password);
        //      } catch {
        //          setError('password', {message: t('passwordError')});
        //      }
        //} else {
        //      setError('email', {message: t('emailerror')});
        //}

        if(data.email != 'brunosdsj@gmail.com'){
            setError('email', {message: t('emailerror')});
        }
        else{
            if(data.password != '12345678'){
                setError('password', {message: t('passwordError')});
            }
            else{
                console.log("Success");
            }
        }

    }

    return(
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
                        className={style.form__submit}
                    >

                        <span>
                            {t('login')}
                        </span>

                        <span className="material-symbols-outlined">
                            login
                        </span>

                    </Button>

                    <Checkbox
                        name='remember'
                        label={t('remember')}
                        onToggleCheck={onToggleCheck}
                    />

                    <Button
                        type='submit'
                        className={style.form__forgot}
                    >
                        <span>
                            {t('forgot')}
                        </span>
                    </Button>

                </form>

            </div>

        </Main>
    )
}

export default Login;