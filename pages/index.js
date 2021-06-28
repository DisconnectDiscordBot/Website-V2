import Layout from '../components/layouts/Layout';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ servers, members, channels }) {
	return (
		<>
			<Layout page='home'>
				<Head>
					<title>Disconnect • The Discord Bot!</title>
					<meta
						name='title'
						content='Disconnect • The Discord Bot!'
					/>
					<meta
						name='description'
						content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
					/>
					<meta
						property='og:url'
						content='https://www.disconnectbot.com/'
					/>
					<meta
						property='og:title'
						content='Disconnect • The Discord Bot!'
					/>
					<meta
						property='og:description'
						content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • The Discord Bot!'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is an entertainment first Discord bot. Made to spice up any community with a new look at entertainment in Discord.'
					/>
				</Head>
				<div className={styles.container}>
					<div className={styles.main}>
						<div className={styles.info}>
							<h2>Never a dull moment</h2>
							<p>
								Disconnect provides the most entertainment
								focused features designed to engage members and
								create a memorable environment. Featuring music,
								economy, games, notifications, giveaways and
								much more...
							</p>
							<div className={styles.infoButtons}>
								<Link href='/invite'>
									<a>Invite Disconnect</a>
								</Link>
								<Link href='#features'>
									<a>See Features</a>
								</Link>
							</div>
						</div>
						<div className={styles.image}>
							<img
								src='/assets/disconnectLogo.png'
								aly='Disconnect Logo'
							/>
						</div>
					</div>
				</div>
				<div className={styles.features}>
					{/* Wave */}
					<img
						src='/assets/icons/topwave.svg'
						className={styles.topWave}
					/>

					{/* Content */}
					<div className={styles.container}>
						<div className={styles.inner}>
							<h2 id='features'>Features</h2>
							<p>
								Here are just a few of many features contained
								in Disconnect.
							</p>
							<div className={styles.grid}>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/music.svg'
										alt='Music Icon'
									/>
									<p className={styles.title}>Music</p>
									<p className={styles.description}>
										Unlock Disconnect's high quality music
										coming from multiple sources, filtered
										with any filters.
										{/* with your own custom playlists. */}
									</p>
								</div>
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/dollar-sign.svg'
										alt='Economy Icon'
									/>
									<p className={styles.title}>Economy</p>
									<p className={styles.description}>
										Buy things, trade with other, play games
										and reward active members.
									</p>
								</div> */}
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/globe.svg'
										alt='Multilingual Icon'
									/>
									<p className={styles.title}>Multilingual</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div> */}
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/bar-chart.svg'
										alt='Leveling Icon'
									/>
									<p className={styles.title}>Leveling</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div> */}
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/user-plus.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.title}>Welcoming</p>
									<p className={styles.description}>
										Quickly engage and welcome members to
										your server without even being there.
									</p>
								</div>
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/users.svg'
										alt='Role Management Icon'
									/>
									<p className={styles.title}>
										Role Management
									</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div> */}
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/star.svg'
										alt='Engagement Icon'
									/>
									<p className={styles.title}>Engagement</p>
									<p className={styles.description}>
										Get engaged with reputation,
										suggestions, polls, giveaways, would
										your rather and more...
									</p>
								</div> */}
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/video.svg'
										alt='Media Icon'
									/>
									<p className={styles.title}>Media</p>
									<p className={styles.description}>
										Connect your favorite platforms and
										bring tweets, live streams, and youtube
										video notifications into your community.
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/database.svg'
										alt='Statistics Icon'
									/>
									<p className={styles.title}>Statistics</p>
									<p className={styles.description}>
										Get stats from many of your favorite
										games in real time or get statistic
										updates from your server.
									</p>
								</div>
								{/* <div className={styles.feature}>
									<div className={styles.final}>
										<img
											className={styles.feather}
											src='/assets/icons/grid.svg'
											alt='More Icon'
										/>
										<p className={styles.title}>
											and More...
										</p>
										<p className={styles.description}>
											Show images of animals, roleplay a
											little bit... and much more.
											Some of the things Disconnect does
											is hard to mention. Stuff like
											custom commands, reminders, mocking,
											and many others are all avalible to
											use. 
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>

					{/* Wave */}
					<img
						src='/assets/icons/bottomwave.svg'
						className={styles.bottomWave}
					/>
				</div>
				<div className={styles.other}>
					<div className={styles.container}>
						<div className={styles.inner}>
							<h2>Still need convincing?</h2>
							<p>Disconnect is trusted by</p>

							<div className={styles.grid}>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/server.svg'
										alt='Servers Icon'
									/>
									<p className={styles.num}>
										{servers
											? servers.toLocaleString()
											: 'Loading...'}
									</p>
									<p className={styles.title}>Servers</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/users.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.num}>
										{members
											? members.toLocaleString()
											: 'Loading...'}
									</p>
									<p className={styles.title}>Users</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/list.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.num}>
										{channels
											? channels.toLocaleString()
											: 'Loading...'}
									</p>
									<p className={styles.title}>Channels</p>
								</div>
							</div>

							<div className={styles.stat}>
								<h3>But will it ever go down on me?</h3>
								<p>
									Disconnect will never go down without giving
									a warning to all users which use Disconnect.
								</p>
								<p>
									Updates are also preformed during U.S. night
									time to prevent inconveniences, while trying
									to maintain it's 99.9% uptime.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.getStarted}>
					<div className={styles.container}>
						<div className={styles.inner}>
							<h2>Get Started!</h2>
							<p>
								It's time to get this journey started, don't you
								think?
							</p>

							<div className={styles.buttons}>
								<Link href='/invite'>
									<a>Invite Disconnect</a>
								</Link>
								<Link href='/support'>
									<a>Support Server</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	// const res = await fetch('http://localhost:3000/api/stats');
	// const stats = await res.json();

	return {
		props: {
			servers: 276,
			channels: 12504,
			members: 103425,
		},
	};
}
