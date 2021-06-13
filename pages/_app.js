import Head from 'next/head';

import '../styles/globals.css';

export default function LoadApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
