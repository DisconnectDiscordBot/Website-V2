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
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 1</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 2</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 3</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 4</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 5</p>
									<p className={styles.description}>
										Feature Description
									</p>
								</div>
								<div className={styles.feature}>
									<img
										className={styles.feather}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<p className={styles.title}>Feature 6</p>
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
