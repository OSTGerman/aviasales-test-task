import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import { useStore } from '@store/store';
import { Provider } from 'mobx-react';

function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
