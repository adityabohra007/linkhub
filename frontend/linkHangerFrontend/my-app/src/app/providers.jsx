// app/providers.js
'use client';

import { Provider } from 'react-redux';
import { useEffect } from 'react';
import {store} from '../store';
import { addToken } from '../features/auth';

export default function Providers({ children }) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('loading token',token)
            store.dispatch(addToken(token));
        }
    }, []);

    return <Provider store={store}>{children}</Provider>;
}
