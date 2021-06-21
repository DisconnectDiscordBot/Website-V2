import Head from 'next/head';
import '../styles/globals.css';
import { AuthProvider } from '../auth';

export default function LoadApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='./assets/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='./assets/disconnectLogo.png'
				/>
			</Head>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}
