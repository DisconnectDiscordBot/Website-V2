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
										alt='Invite Icon'
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
										alt='Invite Icon'
									/>
									<p className={styles.title}>Economy</p>
									<p className={styles.description}>
										Buy things, trade with other, play games
										and reward active members.
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/globe.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Multilingual</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/bar-chart.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Leveling</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/users.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Welcoming</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/user-plus.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>
										Role Management
									</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/star.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Engagement</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/video.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Media</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/database.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Statistics</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/grid.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>and More...</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
