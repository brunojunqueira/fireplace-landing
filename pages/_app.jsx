import Head from 'next/head';

import PropTypes from 'prop-types';

import sources from './sources.json';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            {sources?.map((source, index) => (
                <link key={index} href={source.href} rel={source.rel} />
            ))}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};
