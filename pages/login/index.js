import useTranslation from 'next-translate/useTranslation'
import Main from '../../components/Main';
import style from './login.module.scss'
import router from 'next/router';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import Logo from '../../components/Logo';

function Login() {

    const { t } = useTranslation('login');

    function onSubmit(e){

        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

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
                <div
                    className={style.back}
                >
                    <span 
                        className="material-symbols-outlined"
                        onClick={() => router.push('/')}
                    >
                        arrow_back
                    </span>
                </div> 
                <Logo />
                <form 
                    className={style.form}
                    onSubmit={onSubmit}
                >
                    <InputText
                        label={t('email')}
                        id='email'
                        name='email'
                        type='email'
                        placeholder='linspector@email.com'
                        className={style.input}
                        required
                    >
                    </InputText>
                    <InputText
                        label={t('password')}
                        id='password'
                        name='password'
                        type='password'
                        placeholder='•••••••••'
                        className={style.input}
                        required
                    >
                    </InputText>
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