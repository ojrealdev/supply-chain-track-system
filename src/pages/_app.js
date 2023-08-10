import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import store from '../store/store';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => (
	<>
		<Header />
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
		<Footer />
	</>
);

export default MyApp;
