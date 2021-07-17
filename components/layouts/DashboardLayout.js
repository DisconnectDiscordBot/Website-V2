import Sidebar from '../Sidebar';
import Head from 'next/head';
import styles from '../../styles/dashboard/Sidebar.module.scss';

export default function DashboardLayout({ children, page, id, data }) {
	return (
		<>
			<Head>
				<title>Disconnect • Dashboard</title>
				<meta name='title' content='Disconnect • Dashboard' />
				<meta
					name='description'
					content='Completely customize Disconnect using his dashboard. Coming Soon!'
				/>
				<meta
					property='og:url'
					content='https://disconnectbot.vercel.app/dashboard'
				/>
				<meta property='og:title' content='Disconnect • Dashboard' />
				<meta
					property='og:description'
					content='Completely customize Disconnect using his dashboard. Coming Soon!'
				/>
				<meta
					property='twitter:url'
					content='https://disconnectbot.vercel.app/dashboard'
				/>
				<meta
					property='twitter:title'
					content='Disconnect • Dashboard'
				/>
				<meta
					property='twitter:description'
					content='Completely customize Disconnect using his dashboard. Coming Soon!'
				/>
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
				<meta name='og:site_name' content='Disconnect' />
				<meta rel='canonical' href='https://disconnectbot.com' />
				<link rel='canonical' href='https://disconnectbot.com' />
			</Head>

			<Sidebar page={page} data={data} id={id} />
			<div id='content' className={styles.pageContent}>
				{children}
			</div>
		</>
	);
}
