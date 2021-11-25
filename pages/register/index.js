import Formsy from 'formsy-react';
import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';
import Footer from '../../components/Footer';
import InputField from '../../components/InputField/Index';
import LogoEffect from '../../components/LogoEffect';
import Resources from '../../components/Resources'
import style from '../../styles/register.module.css'

export default function Register(){

    const myRef = useRef(null);

    let {t} = useTranslation('register');

    const [valid, isValid] = useState(false);
    const pw = useState({value: ''});
    const cpw = useState({value: ''});

    function getPassword(event){

        pw = {value: event.target.value};
        console.log('this is:', event);

    }

    function verifyPasswords(event){

        cpw = {value: event.target.value};

        cpw.value === pw.value ? isValid(true) : isValid(false);
    }

    return(
        <div className={style.c}>
            <Resources title={t('register')}/>

            <main className={style.m}>
                <LogoEffect size={60} text={t('register')}/>
                <Formsy ref={myRef} name='form' className={style.form}>
                    <div className={style.nf}>
                        <InputField type="text" w='220px' alert={t('fnalert')} pattern="^[A-Za-z][^\s]{1,12}$" placeholder={t('fn')} id="fn" name="fn" />
                        <InputField type="text" w='220px' alert={t('lnalert')} pattern="^[A-Za-z][^\s]{1,12}$" placeholder={t('ln')} id="ln" name="fn" />
                    </div>
                    <InputField type="text" alert={t('mlalert')} pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9]+\.[a-zA-Z.]+[^.]$" placeholder={t('ml')} id="ml" name="ml" />
                    <InputField type="text" alert={t('unalert')} pattern="^[A-Za-z0-9._-][^\s]{1,12}$" placeholder={t('un')} id="un" name={'un'} />
                    <InputField type="password" func={getPassword} alert={t('pwalert')} pattern="^[a-zA-Z0-9!@#$%&*()_.;,+-]{7,}$" placeholder={t('pw')} id="pw" name="pw" />
                    <InputField type="password" func={verifyPasswords} valid={valid} alert={t('cpwalert')} regexp={false} placeholder={t('cpw')} id="cpw" name="cpw" />
                </Formsy>
            </main>

            <Footer/>
        </div>
    )
}