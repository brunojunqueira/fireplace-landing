import style from './footer.module.scss'

const Footer = () => {

    let year = new Date().getFullYear();

    return(
        <footer className={style.footer}>
            <span>Whales&Koalas © {year}</span>
        </footer>
    )
}

export default Footer;