import useTranslation from 'next-translate/useTranslation'
import { useForm, Controller, set } from 'react-hook-form';

import style from './login.module.scss'
import Main from '../../templates/Main';
import Logo from '../../components/design/Logo';
import { Button } from '../../components/common/Button';
import { InputText } from '../../components/common/InputText';



function Login() {

    const { t } = useTranslation('login');

    const { handleSubmit, control, setError, formState: { errors } } = useForm();


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
                        className={style.form__button}
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