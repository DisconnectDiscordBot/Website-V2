import Layout from '../components/layouts/Layout';
import styles from '../styles/About.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Layout page='about'>
				<Head>
					<title>Disconnect • About</title>
					<meta name='title' content='Disconnect • About' />
					<meta
						name='description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/about'
					/>
					<meta property='og:title' content='Disconnect • About' />
					<meta
						property='og:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/about'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • About'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is a fully functional Discord bot for all of your entertainment needs. Disconnect was started two years ago, around June of 2019. Since then...'
					/>
				</Head>

				{/* About Disconnect */}
				<div className={styles.container}>
					<div className={styles.innerTop}>
						<h2>About Disconnect</h2>
						<p>
							Disconnect is a fully functional Discord bot for all
							of your entertainment needs. Disconnect was started
							two years ago, around June of 2019. Since then,
							Disconnect's core functionality has been rewritten
							three times to keep up with the ever-changing
							digital environments. Started as a learning project,
							Disconnect would later be, released to the public.
							Due to the steady growth of the project, Disconnect
							has slowly become what it is today. Even after being
							given up on a few times but never going down since
							then.
						</p>
					</div>
				</div>

				{/* Getting Started */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Getting Started</h2>
						<p>Getting Stared with Disconnect is as simple as...</p>
						<ul>
							<li>
								<Link href='/invite'>
									<a>Inviting him to your server.</a>
								</Link>
							</li>
							<li>
								<Link href='/dashboard'>
									<a>
										And Customizing him to your
										specifications.
									</a>
								</Link>
							</li>
							<li>Then sit back and relax!</li>
						</ul>
					</div>
				</div>

				{/* Developers */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>The Team</h2>
						<div className={styles.card}>
							<img
								src='/assets/devcytech.png'
								alt='Cytechs profile picture'
							/>
							<p className={styles.username}>Cytech</p>
							<p className={styles.position}>Creator</p>
							<p className={styles.bio}>
								Nothing is perfect, but what is the harm in
								trying.
							</p>
							<div className={styles.links}>
								<ul>
									<li>
										<Link href='https://devcytech.com'>
											<img
												src='/assets/icons/globe.svg'
												alt='Cytechs Portfolio'
											/>
										</Link>
									</li>
									<li>
										<Link href='https://github.com/devcytech'>
											<img
												src='/assets/icons/github.svg'
												alt='Cytechs GitHub Account'
											/>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Extra */}
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Quick Mentions</h2>
						<div className={styles.buttons}>
							{/* <Link href='/faq'>
								<a>Frequently Asked Questions</a>
							</Link>
							<Link href='/changelog'>
								<a>View the Changelog</a>
							</Link>
							<Link href='/docs'>
								<a>View the Documentation</a>
							</Link> */}
							<Link href='/invite'>
								<a>Invite Disconnect</a>
							</Link>
							<Link href='/support'>
								<a>Get Support</a>
							</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
