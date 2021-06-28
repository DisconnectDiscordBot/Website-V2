import Layout from '../../components/layouts/Layout';
import styles from '../../styles/dashboard/Home.module.scss';
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
						<h2>Please Select a Server</h2>
						<div className={styles.servers} id='servers'>
							<Link href='/dashboard/1'>
								<div className={styles.guild}>
									<div className={styles.innerGuild}>
										<img
											src='/disconnect.png'
											alt='test image'
										/>
										<p>Disconnect Valley</p>
									</div>
									<a className={styles.goTo}>
										Go to Dashboard
									</a>
								</div>
							</Link>
							<div className={styles.guild}>
								<div className={styles.innerGuild}>
									<img
										src='/assets/DukeBotCircle.png'
										alt='test image'
									/>
									<p>Duke - Support Server</p>
								</div>
								<a>Invite and Setup</a>
							</div>
							<div className={styles.guild}>
								<div className={styles.innerGuild}>
									<img
										src='/assets/Cytech.png'
										alt='test image'
									/>
									<p>Cytech Testing Server</p>
								</div>
								<a>Invite and Setup</a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
