import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import LogoEffect from '../components/LogoEffect'
import Resources from '../components/Resources'

import style from '../styles/home.module.css'

export default function Home() {

  const {t} = useTranslation();

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
        <Link href='./login'><button className={style.loginbtn}>{t('global:login')}</button></Link>
        <Link href='./register'><button className={style.registerbtn}>{t('global:register')}</button></Link>
        <Link href='./feed'><button className={style.notnowbtn}>{t('global:notnow')}</button></Link>
      </main>
      <div className={style.arrowcontainer}>
        <span onClick={() => scrollTo({top: window.innerHeight, behavior:'smooth'})} style={{ cursor:'pointer' }} className="material-icons">keyboard_arrow_down</span>
        <span onClick={() => scrollTo({top: 0, behavior:'smooth'})} style={{ cursor:'pointer' }} className="material-icons">keyboard_arrow_up</span>
      </div>
      <div className={style.infoContainer}>
        <div className={style.info}>
          <img className={style.infoimg} src="https://images.unsplash.com/photo-1582894535021-f875b7d0c4ea" alt='image'/>
          <span className={style.infotxt}>{t('home:t1')}</span>
        </div>
        <div className={style.info}>
          <span className={style.infoimg}>{t('home:t2')}</span>
          <img className={style.infotxt} src="https://images.unsplash.com/photo-1521022969448-49639904ed7b" alt='image'/>
        </div>
        <div className={style.info}>
          <span className={style.infotxt}>{t('home:l')}</span>
        </div>
      </div>
      <Footer className={style.footer}/>

    </div>
  )
}
