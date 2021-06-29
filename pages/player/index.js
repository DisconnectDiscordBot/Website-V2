import Layout from '../../components/layouts/Layout';
import styles from '../../styles/Redirect.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Player() {
	return (
		<>
			<Layout page='status'>
				<Head>
					<title>Disconnect • Player</title>
					<meta name='title' content='Disconnect • Player' />
					<meta
						name='description'
						content='Coming Soon! Shhhh...!!!!'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/player'
					/>
					<meta property='og:title' content='Disconnect • Player' />
					<meta
						property='og:description'
						content='Coming Soon! Shhhh...!!!!'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/player'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Player'
					/>
					<meta
						property='twitter:description'
						content='Coming Soon! Shhhh...!!!!'
					/>
				</Head>

				{/* Status Page Panels */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Player</h2>
						<p>Coming Soon! shhh...!!!</p>
						<Link href='https://discord.gg/gFJasaP5bf'>
							<a>Join the Support Server</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
