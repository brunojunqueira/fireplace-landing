import { createContext, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";

// import { SHA256 } from "crypto-js";

import PropTypes from 'prop-types';
// import axios from "axios";
import router from "next/router";

const AuthenticationContext = createContext({});

export default function AuthenticationProvider({ children }) {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        if (cookies.token) { getSession(cookies.token); }
    }, []);

    useEffect(() => {
        if (session) {
            setUser(session.user);
            router.push('/feed');
        }
    }, [session]);

    const getSession = async (token) => {
        // const session = await axios.post('api.tofireplace.com/v4/login', token);
        let session = null;
        if (token === 'f1f123f12gbj1oirh3oiph1ohb1ouhbd4iou2bgi1ugh3irubu1i3bguog1o23hero1') {
            session = {
                token: 'f1f123f12gbj1oirh3oiph1ohb1ouhbd4iou2bgi1ugh3irubu1i3bguog1o23hero1',
                user: {
                    public_id: "142141",
                    username: "linspector",
                    name: "Linspector Clarice",
                    avatar_url: "",
                }
            };
        }
        if (session) { setSession(session); } else {
            removeCookie('token');
        }
    };

    const login = async (email, password, remember = false) => {
        // const hash = SHA256(email + process.env.salt + password);
        // const session = await axios.post('api.tofireplace.com/v4/login', hash);
        const session = {
            token: 'f1f123f12gbj1oirh3oiph1ohb1ouhbd4iou2bgi1ugh3irubu1i3bguog1o23hero1',
            user: {
                public_id: "142141",
                username: "linspector",
                name: "Linspector Clarice",
                avatar_url: "",
            }
        };
        if (session) {
            if (remember) setCookie('token', session.token);
            setSession(session);
            return 'success';
        }
    };

    const logout = async () => {
        setSession(null);
        setUser(null);
        removeCookie('token');
        router.push('/');
    };

    return (
        <AuthenticationContext.Provider value={{ user, login, logout } }>
            { children }
        </AuthenticationContext.Provider>
    );
}

export const useAuth = () => {
    const authData = useContext(AuthenticationContext);
    return authData;
};

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
};
