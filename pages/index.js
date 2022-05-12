import Head from 'next/head'
import style from '../styles/home.module.css'
import useTranslation from 'next-translate/useTranslation'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import LogoEffect from '../components/LogoEffect'
import Resources from '../components/Resources'

export default function Home() {

  let {t} = useTranslation(['global', 'home']);

  return (
    <div className={style.content}>
      <Resources 
        title='À Lareira' 
        sources={[
          {href:'https://fonts.googleapis.com/icon?family=Material+Icons', rel:'stylesheet'}
        ]}
      />
      <main className={style.main}>
        <LogoEffect size={130} text={'À Lareira'}/>
        <Link href='./login'><button className={style.loginbtn}>{global.t('login')}</button></Link>
        <Link href='./register'><button className={style.registerbtn}>{global.t('register')}</button></Link>
        <Link href='./feed'><button className={style.notnowbtn}>{global.t('notnow')}</button></Link>
      </main>
      <div className={style.arrowcontainer}>
        <span onClick={() => scrollTo({top: window.screenY, behavior:'smooth'})} style={style.arrow} className="material-icons">keyboard_arrow_down</span>
        <span onClick={() => scrollTo({top: 0, behavior:'smooth'})} style={style.arrow} className="material-icons">keyboard_arrow_up</span>
      </div>
      <div className={style.infoContainer}>
        <div className={style.info}>
          <img className={style.infoimg} src="https://unsplash.com/photos/S_VbdMTsdiA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1MzAyNTI0&force=true"/>
          <span className={style.infotxt}>{home.t('t1')}</span>
        </div>
        <div className={style.info}>
          <span className={style.infoimg}>{home.t('t2')}</span>
          <img className={style.infotxt} src="https://unsplash.com/photos/XqXJJhK-c08/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1Mjc1NDg3&force=true"/>
        </div>
        <div className={style.info}>
          <span className={style.infotxt}>{home.t('l')}</span>
        </div>
      </div>
      <Footer className={style.footer}/>

    </div>
  )
}
