import Layout from '../../components/layouts/Layout';
import styles from '../../styles/Redirect.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Dashboard() {
	return (
		<>
			<Layout page='dashboard'>
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
					<meta
						property='og:title'
						content='Disconnect • Dashboard'
					/>
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
				</Head>
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Dashboard</h2>
						<p>
							The Dashboard is still in development. To check out
							teasers for the upcoming dashboard join the support
							server.
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
