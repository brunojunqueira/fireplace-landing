import useTranslation from 'next-translate/useTranslation'
import Main from '../../components/Main';
import style from './login.module.scss'
import router from 'next/router';

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
                <form 
                    className={style.form}
                    onSubmit={onSubmit}
                >
                    <span
                        className={style.label}
                    >
                        {t('email')}:
                    </span>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='linspector@email.com'
                        className={style.input}
                        required
                    >
                    </input>
                    <span
                        className={style.label}
                    >
                        {t('password')}:
                    </span>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='•••••••••'
                        className={style.input}
                        required
                    >
                    </input>
                    <button 
                        className={style.loginbtn}
                        type='submit'
                    >
                        <span>
                            {t('login')}
                        </span>
                        <span className="material-symbols-outlined">
                            login
                        </span>
                    </button>
                </form>
            </div>
        </Main>
    )
}

export { Login }