import { useRouter } from 'next/router';
import Link from 'next/dist/client/link';

import style from './translations.module.scss'

const Translations = () => {

    let router = useRouter();

    return(
        <ul className={style.language_list}>
            <span className="material-symbols-outlined">
                language
            </span>
            {router.locales.map(locale => (
                <li className={style.language_list__item} key={locale}>
                    <Link href={router.asPath} locale={locale}>
                        <a>
                            {(locale === 'en-US') ? 'English (US)' : 'Português (Brasil)'}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Translations;