import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />
		<Component {...pageProps} />
		<Footer />
	</>
);

export default MyApp;
