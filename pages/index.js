import Head from 'next/head'
import style from '../styles/home.module.css'
import useTranslation from 'next-translate/useTranslation'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import LogoEffect from '../components/LogoEffect'
import Resources from '../components/Resources'

export default function Home() {

  let {t} = useTranslation('home');

  return (
    <div className={style.c}>
      <Resources title='À Lareira' sshref='https://fonts.googleapis.com/icon?family=Material+Icons'/>

      <main className={style.m}>
        <LogoEffect size={130} text={'À Lareira'}/>
        <Link href='./login'><button className={style.lb}>{t('login')}</button></Link>
        <Link href='./register'><button className={style.sb}>{t('register')}</button></Link>
        <Link href='./feed'><button className={style.nb}>{t('notnow')}</button></Link>
      </main>
      <div className={style.ac}>
        <span onClick={() => scrollTo({top: 1000, behavior:'smooth'})} style={{fontSize:'35px', cursor:'pointer', color:'white'}} className="material-icons">keyboard_arrow_down</span>
      </div>
      <div className={style.ac}>
        <span onClick={() => scrollTo({top: 0, behavior:'smooth'})} style={{fontSize:'35px', cursor:'pointer', color:'white'}} className="material-icons">keyboard_arrow_up</span>
      </div>
      <div className={style.ic}>
        <div className={style.if}>
          <img className={style.ii} src="https://unsplash.com/photos/S_VbdMTsdiA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1MzAyNTI0&force=true"/>
          <span className={style.it}>{t('t1')}</span>
        </div>
        <div className={style.if}>
          <span className={style.it}>{t('t2')}</span>
          <img className={style.ii} src="https://unsplash.com/photos/XqXJJhK-c08/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1Mjc1NDg3&force=true"/>
        </div>
        <div className={style.if}>
          <span className={style.it}>{t('l')}</span>
        </div>
      </div>
      <Footer className={style.footer}/>

    </div>
  )
}
