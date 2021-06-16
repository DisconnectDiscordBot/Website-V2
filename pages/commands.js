import Layout from '../components/layouts/Layout';
import styles from '../styles/Commands.module.scss';
import commands from '../public/commands.json';
import Link from 'next/link';
import Head from 'next/head';

export default function Commands() {
	let numberOfCategories = Object.keys(commands).length;
	let numberOfCommands = Object.keys(commands)
		.map((i) => Object.keys(commands[i]).length - 1)
		.reduce((a, b) => a + b, 0);

	return (
		<>
			<Layout page='commands'>
				<Head>
					<title>Disconnect • Commands</title>
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/commands'
					/>
					<meta property='og:title' content='Disconnect • Commands' />
					<meta
						property='og:description'
						content='Disconnect is an entertainment first Discord bot with over 100+ commands.'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/commands'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Commands'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is an entertainment first Discord bot with over 100+ commands.'
					/>
				</Head>

				{/* Body */}
				<div className={styles.information}>
					<h2>Disconnect Commands</h2>
					<p>
						Disconnect has over {numberOfCategories} categories with{' '}
						{numberOfCommands} commands.
					</p>
				</div>
			</Layout>
		</>
	);
}
