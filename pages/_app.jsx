import Head from 'next/head';

import PropTypes from 'prop-types';

import sources from './sources.json';

import '../_assets/scss/globals.scss';

import AuthenticationProvider from 'contexts/AuthenticationContext';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <AuthenticationProvider>
                <Head>
                {sources?.map((source, index) => (
                    <link key={index} href={source.href} rel={source.rel} />
                ))}
                </Head>
                <Component {...pageProps} />
            </AuthenticationProvider>
        </>
    );
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};
