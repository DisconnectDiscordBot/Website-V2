import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children, page }) {
	return (
		<>
			<Head>
				<meta name='theme-color' content='#ff1c5f' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://disconnectbot.com/assets/cover.png'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:image'
					content='https://disconnectbot.com/assets/cover.png'
				/>
				<meta
					name='keywords'
					content='Disconnect, Disconnect Bot, Discord Bot, Disconnect Discord Bot, Top.gg, Music Bot Bot, Music, Entertainment, Entertainment Bot, Entertainment Discord Bot, YouTube, Spotify, Soundcloud, Radio, Always online'
				/>
				<link
					rel='icon'
					type='image/png'
					href='https://disconnectbot.com/disconnect.png'
				/>
				<link
					rel='apple-touch-icon'
					type='image/png'
					href='https://disconnectbot.com/assets/disconnectLogo.png'
				/>
				<meta rel='canonical' href='https://disconnectbot.com' />
				<link rel='canonical' href='https://disconnectbot.com' />
			</Head>

			{/* <div id='stars' />
			<div id='stars2' />
			<div id='stars3' /> */}
			<div id='content' style={{ overflow: 'hidden' }}>
				{children}
			</div>
			<Header page={page} />
			<div id='footer'>
				<Footer />
			</div>
		</>
	);
}
