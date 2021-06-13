import Head from 'next/head';
import Header from '../Header';

export default function Layout({ children, page }) {
	return (
		<>
			<Head>
				<title>Disconnect • The Discord Bot!</title>
			</Head>

			<div id='stars' />
			<Header page={page}></Header>
			{children}
		</>
	);
}
