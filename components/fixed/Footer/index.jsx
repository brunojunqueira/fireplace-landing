import style from './footer.module.scss';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <span>Whales&Koalas © {year}</span>
        </footer>
    );
};
