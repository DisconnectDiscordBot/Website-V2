import '../styles/globals.css';
import Head from 'next/head';
// import { AuthProvider } from '../auth';

export default function LoadApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href='https://www.disconnectbot.com/favicon.ico'
				/>
			</Head>
			{/* <AuthProvider> */}
			<Component {...pageProps} />
			{/* </AuthProvider> */}
		</>
	);
}
