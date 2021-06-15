import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children, page }) {
	return (
		<>
			<Head>
				<title>Disconnect • The Discord Bot!</title>
				<meta name='title' content='Disconnect • The Discord Bot!' />
				<meta
					name='description'
					content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
				/>
				<meta name='theme-color' content='#ff1c5f' />

				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://disconnectbot.vercel.app/'
				/>
				<meta
					property='og:title'
					content='Disconnect • The Discord Bot!'
				/>
				<meta
					property='og:description'
					content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
				/>
				<meta
					property='og:image'
					content='https://disconnectbot.com/assets/cover.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://disconnectbot.vercel.app/'
				/>
				<meta
					property='twitter:title'
					content='Disconnect • The Discord Bot!'
				/>
				<meta
					property='twitter:description'
					content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
				/>
				<meta
					property='twitter:image'
					content='https://disconnectbot.vercel.app/assets/cover.png'
				/>
			</Head>

			<div id='stars' />
			<div id='stars2' />
			<div id='stars3' />
			<Header page={page} />
			{children}
			<Footer />
		</>
	);
}
