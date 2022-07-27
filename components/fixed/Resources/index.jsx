import Head from "next/head";
import PropTypes from 'prop-types';

export function Resources({ title, sources }) {
    return (
        <Head>
            <title>{title ?? 'À Lareira'}</title>
            <link rel="icon" type="image/x-icon" href="/assets/logo.svg"/>
            {sources?.map((source, index) => {
                return (
                    <link key={index} href={source.href} rel={source.rel}/>
                );
            })}
        </Head>
    );
};

Resources.propTypes = {
    title: PropTypes.string,
    sources: PropTypes.array
};
