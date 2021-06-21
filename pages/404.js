import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Head from 'next/head';

export default function Custom404() {
	return (
		<>
			<Layout page='404'>
				<Head>
					<title>Disconnect • 404 Page Not Found</title>
					<meta
						name='title'
						content='Disconnect • 404 Page Not Found'
					/>
					<meta
						name='description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/404'
					/>
					<meta
						property='og:title'
						content='Disconnect • 404 Page Not Found'
					/>
					<meta
						property='og:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/404'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • 404 Page Not Found'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
				</Head>

				{/* About Disconnect */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>404</h2>
						<p>
							You seem lost. But it is nice to meet you! I hope
							you find where you are going!
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
}
