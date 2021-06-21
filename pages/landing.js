import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Landing() {
	return (
		<>
			<Layout page='landing'>
				<Head>
					<title>Disconnect • Landing</title>
					<meta name='title' content='Disconnect • Landing' />
					<meta
						name='description'
						content='Thank you for inviting Disconnect!'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/landing'
					/>
					<meta property='og:title' content='Disconnect • Landing' />
					<meta
						property='og:description'
						content='Thank you for inviting Disconnect!'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/landing'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Landing'
					/>
					<meta
						property='twitter:description'
						content='Thank you for inviting Disconnect!'
					/>
				</Head>

				{/* Status Page Panels */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<img
							src='./assets/disconnectLogo.png'
							alt='Disconnect Logo'
						/>
						<p className={styles.title}>
							Thank you for Inviting Disconnect to your server!
						</p>
						<p>Here are some links that you may find useful.</p>
						<div className={styles.buttons}>
							<Link href='/commands'>
								<a>View the Command List</a>
							</Link>
							<Link href='/dashboard'>
								<a>Visit the Dashboard</a>
							</Link>
							<Link href='https://discord.gg/gFJasaP5bf'>
								<a>Join the Support Server</a>
							</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
