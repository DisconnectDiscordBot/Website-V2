import Layout from '../components/layouts/Layout';
import styles from '../styles/Redirect.module.scss';
import Head from 'next/head';

export default function Custom500() {
	return (
		<>
			<Layout page='404'>
				<Head>
					<title>Disconnect • About</title>
					<meta name='title' content='Disconnect • Error' />
					<meta
						name='description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/500'
					/>
					<meta property='og:title' content='Disconnect • Error' />
					<meta
						property='og:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/500'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Error'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
				</Head>

				{/* About Disconnect */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>500</h2>
						<p>
							I see an error has occurred. Please try again later.
							Or just keep refreshing...
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
}
