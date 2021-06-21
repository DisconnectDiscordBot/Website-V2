import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Support() {
	return (
		<>
			<Layout page='support'>
				<Head>
					<meta
						http-equiv='Refresh'
						content="0.5; url='https://discord.gg/gFJasaP5bf'"
					/>
					<title>Disconnect • Support</title>
					<meta name='title' content='Disconnect • Support' />
					<meta
						name='description'
						content='Join the Disconnect Support Server.'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/support'
					/>
					<meta property='og:title' content='Disconnect • Support' />
					<meta
						property='og:description'
						content='Join the Disconnect Support Server.'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/support'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Support'
					/>
					<meta
						property='twitter:description'
						content='Join the Disconnect Support Server.'
					/>
				</Head>

				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Redirecting...</h2>
						<p>
							If you are not redirected within 5 seconds please
							click the button below...
						</p>
						<Link href='https://discord.gg/gFJasaP5bf'>
							<a>Join the Support Server!</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
