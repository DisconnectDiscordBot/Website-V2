import Layout from '../components/layouts/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Layout page='home'>
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
					<img src='/assets/icons/waves.svg' />

					{/* Content */}
					<div className={styles.container}>
						<div className={styles.inner}>
							<h2>Features</h2>
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
										with any filters with your own custom
										playlists.
									</p>
								</div>
								<div className={styles.feature}>
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
								</div>
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
										src='/assets/icons/users.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.title}>Welcoming</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div> 
								{/* <div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/user-plus.svg'
										alt='Role Management Icon'
									/>
									<p className={styles.title}>
										Role Management
									</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div> */}
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/star.svg'
										alt='Engagement Icon'
									/>
									<p className={styles.title}>Engagement</p>
									<p className={styles.description}>
										Get engaged with reputation, suggestions, polls, giveaways, would your rather and more...
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/video.svg'
										alt='Media Icon'
									/>
									<p className={styles.title}>Media</p>
									<p className={styles.description}>
										Connect your favorite platforms and bring tweets, live streams, and youtube video notifications into your community.
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
										Get stats from many of your favorite games in real time or get statistic updates from your server.
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/grid.svg'
										alt='More Icon'
									/>
									<p className={styles.title}>and More...</p>
									<p className={styles.description}>
										Some of the things Disconnect does is hard to mention. Stuff like custom commands, reminders, mocking, and many others are all avalible to use.
									</p>
								</div>
							</div>
						</div>
					</div>
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
										src='/assets/icons/users.svg'
										alt='Servers Icon'
									/>
									<p className={styles.description}>267</p>
									<p className={styles.title}>Servers</p>
								</div> 
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/users.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.description}>254,768</p>
									<p className={styles.title}>Users</p>
								</div> 
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/users.svg'
										alt='Welcoming Icon'
									/>
									<p className={styles.description}>2,654</p>
									<p className={styles.title}>Channels</p>
								</div> 
							</div>

							<div className={styles.stat}>
 								{/* Insert stat icon */}
								<p className={styles.num}>99.9% Uptime</p>
								<h3>But will it ever go down on me?</h3>
								<p>Disconnect will never go down without giving a warning to all users which use Disconnect. Aswell as many updates preformed happen during the U.S. night to prevent inconviences.</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
