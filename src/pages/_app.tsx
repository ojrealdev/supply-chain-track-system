import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/global.css';


const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />
		<Component {...pageProps} />
		<Footer />
	</>
);

export default MyApp;
