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
                    <div className={style.formHeader}>
                        <h1>Registrar-se</h1>
                    </div>
                    
                    <InputText 
                        label="E-mail"
                        type="text"
                        name="email"
                        id="email"
                    />

                    <InputText 
                        label="Nome Completo"
                        type="text"
                        name="fullName"
                        id="fullName"
                    />

                    <InputText 
                        label="Pseudônimo"
                        type="text"
                        name="pseudonym"
                        id="pseudonym"
                    />

                    <InputText 
                        label="Senha"
                        type="password"
                        name="password"
                        id="password"
                    />

                    <InputText 
                        label="Confirmar Senha"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
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