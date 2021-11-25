import { useRouter } from 'next/router';
import style from './style.module.css'
import Link from 'next/dist/client/link';

export default function Footer(){

    let router = useRouter();
    let year = new Date().getFullYear();

    return(
        <footer className={style.footer}>
            <span>Whales&Koalas © {year}</span>
            <ul className={style.ls}>
            {router.locales.map(locale => (
                <li className={style.litem} key={locale}>
                <Link href={router.asPath} locale={locale}>
                    <a>{(locale === 'en-US') ? 'English (US)' : 'Português (Brasil)'}</a>
                </Link>
                </li>
            ))}
            </ul>
        </footer>
    )
}
