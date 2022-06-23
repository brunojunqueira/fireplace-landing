import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import Logo from "../../components/Logo";
import Main from "../../components/Main";

import style from './register.module.scss';

function Register() {
    function handleSubmitRegister(event) {
        event.preventDefault();
        return;
    }

    return (
        <Main
            title='Registrar-se em À Lareira'
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
            <main className={style.registerContainer}>
                <form onSubmit={handleSubmitRegister}>
                    <Logo />
                    <h1 className={style.formTitle}>Registre-se</h1>
                    
                    <InputText 
                        label="E-mail"
                        placeholder="linspector@email.com"
                        type="text"
                        name="email"
                        id="email"
                        required
                    />

                    <InputText 
                        label="Nome Completo"
                        placeholder="Linspector"
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                    />

                    <InputText 
                        label="Pseudônimo"
                        placeholder="Lorem Ipsum"
                        type="text"
                        name="pseudonym"
                        id="pseudonym"
                        required
                    />

                    <InputText 
                        label="Senha"
                        placeholder="•••••••••"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />

                    <InputText 
                        label="Confirmar Senha"
                        placeholder="•••••••••"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />

                    <Button type="submit">
                        Criar Conta
                    </Button>
                </form>
            </main>
        </Main>
    );
}

export default Register;