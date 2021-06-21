import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Status() {
	return (
		<>
			<Layout page='about'>
				<Head>
					<title>Disconnect • Status</title>
					<meta name='title' content='Disconnect • Status' />
					<meta
						name='description'
						content='Check disconnects status.'
					/>
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/status'
					/>
					<meta property='og:title' content='Disconnect • Status' />
					<meta
						property='og:description'
						content='Check disconnects status.'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/status'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Status'
					/>
					<meta
						property='twitter:description'
						content='Check disconnects status.'
					/>
				</Head>

				{/* Status Page Panels */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Status</h2>
						<p>
							The status page is still in development. But
							Disconnect is believed to be online 24/7. If you
							have any questions or issues please take them up in
							our support server.
						</p>
						<Link href='https://discord.gg/gFJasaP5bf'>
							<a>Join the Support Server</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
