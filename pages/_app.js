import Head from 'next/head';
import '../styles/globals.css';
// import { AuthProvider } from '../auth';

export default function LoadApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/assets/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/assets/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/assets/favicon-16x16.png'
				/>
			</Head>
			{/* <AuthProvider> */}
			<Component {...pageProps} />
			{/* </AuthProvider> */}
		</>
	);
}
