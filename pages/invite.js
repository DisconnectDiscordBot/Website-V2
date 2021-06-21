import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Invite() {
	return (
		<>
			<Layout page='invite'>
				<Head>
					<meta
						http-equiv='Refresh'
						content="0.5; url='https://discord.com/api/oauth2/authorize?client_id=576160626095685632&permissions=3203787894&scope=bot%20applications.commands&response_type=code&redirect_uri=https://disconnectbot.com/landing'"
					/>
					<title>Disconnect • Invite</title>
					<meta name='title' content='Disconnect • Invite' />
					<meta name='description' content='Invite Disconnect.' />
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/invite'
					/>
					<meta property='og:title' content='Disconnect • Invite' />
					<meta
						property='og:description'
						content='Invite Disconnect.'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/invite'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Invite'
					/>
					<meta
						property='twitter:description'
						content='Invite Disconnect.'
					/>
				</Head>

				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Redirecting...</h2>
						<p>
							If you are not redirected within 5 seconds please
							click the button below...
						</p>
						<Link href='https://discord.com/api/oauth2/authorize?client_id=576160626095685632&permissions=3203787894&scope=bot%20applications.commands&response_type=code&redirect_uri=https://disconnectbot.com/landing'>
							<a>Invite Disconnect</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
