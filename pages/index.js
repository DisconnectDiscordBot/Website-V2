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
							<div className={styles.grid}></div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
