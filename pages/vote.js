import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Vote() {
	return (
		<>
			<Layout page='vote'>
				<Head>
					<meta
						http-equiv='Refresh'
						content="0.5; url='https://top.gg/bot/576160626095685632/vote'"
					/>
					<title>Disconnect • Invite</title>
					<meta name='title' content='Disconnect • Invite' />
					<meta name='description' content='Vote for Disconnect.' />
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/vote'
					/>
					<meta property='og:title' content='Disconnect • Vote' />
					<meta
						property='og:description'
						content='Vote for Disconnect.'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/vote'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Vote'
					/>
					<meta
						property='twitter:description'
						content='Vote for Disconnect.'
					/>
				</Head>

				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Redirecting...</h2>
						<p>
							If you are not redirected within 5 seconds please
							click the button below...
						</p>
						<Link href='https://top.gg/bot/576160626095685632/vote'>
							<a>Vote for Disconnect</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
