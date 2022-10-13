import PropTypes from 'prop-types';

import { Footer } from "../../components/fixed/Footer";
import { Resources } from "../../components/fixed/Resources";
import { Translations } from "../../components/fixed/Translations";

import style from './main.module.scss';

export function Main({ id, name, title, sources, children }) {
    return (
        <div
            id={id}
            name={name}
            className={style.content}
        >
            <Resources
                title={title}
                sources={sources}
            />
            <main
                className={style.main}
            >
                <Translations/>
                { children }
            </main>

            <Footer/>
        </div>
    );
};

Main.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    sources: PropTypes.array,
    children: PropTypes.node
};
