import useTranslation from 'next-translate/useTranslation'
<<<<<<< HEAD
import { useForm, Controller, set } from 'react-hook-form';

import style from './login.module.scss'
import Main from '../../templates/Main';
import Logo from '../../components/design/Logo';
import { Button } from '../../components/common/Button';
import { InputText } from '../../components/common/InputText';
=======
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

import style from './login.module.scss'
import Main from '../../layouts/Main';
import Logo from '../../components/design/Logo';
import { Button } from '../../components/common/Button';
import { InputText } from '../../components/common/InputText';
import Checkbox from '../../components/common/Checkbox';
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450



function Login() {

<<<<<<< HEAD
=======
    const [remenber, setRemember] = useState(false);

>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
    const { t } = useTranslation('login');

    const { handleSubmit, control, setError, formState: { errors } } = useForm();

<<<<<<< HEAD
=======
    const onToggleCheck = (check) => {
        setRemember(check);
    }
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450

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
<<<<<<< HEAD
                        className={style.form__button}
=======
                        className={style.form__submit}
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
                    >

                        <span>
                            {t('login')}
                        </span>

                        <span className="material-symbols-outlined">
                            login
                        </span>

                    </Button>

<<<<<<< HEAD
=======
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

>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
                </form>

            </div>

        </Main>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
export default Login;