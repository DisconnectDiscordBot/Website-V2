import DashboardLayout from '../../../components/layouts/DashboardLayout';
import styles from '../../../styles/dashboard/Dashboard.module.scss';
import Link from 'next/link';

export default function Settings() {
	return (
		<>
			<DashboardLayout page='music'>
				<div className={styles.container}>
					<ul className={styles.breadcrumbs}>
						<li>
							<Link href='/dashboard'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/dashboard/1'>
								<a>Disconnect Valley</a>
							</Link>
						</li>
						<li>
							<Link href='/dashboard/1/music'>
								<a className={styles.currentPage}>Music</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.container}>
					<h2>Music Settings</h2>
					<p>How will music be managed?</p>

					{/* <Link href='/player/1'>
						<a className={styles.button}>View Music Player</a>
					</Link> */}

					<div className={styles.group}>
						<h3>General Settings</h3>
						<p>What are the basics needing to be changed?</p>
						<div className={styles.divider} />
						<div className={styles.settings}>
							<div className={styles.setting}>
								<p className={styles.title}>DJ Role</p>
								<p>
									Add a DJ role that can control music without
									issue
								</p>
							</div>
							<div className={styles.setting}>
								<p className={styles.title}>Music Channel</p>
								<p>
									Add definitive music channels which the bot
									will work in. Others will be ignored
								</p>
							</div>
							<div className={styles.setting}>
								<p className={styles.title}>Live Streams</p>
								<p>Allow Live Streams in your voice channels</p>
							</div>
							<div className={styles.setting}>
								<p className={styles.title}>Duration Limit</p>
								<p>Limit how long songs can be</p>
							</div>
							<div className={styles.setting}>
								<p className={styles.title}>Audio Effects</p>
								<p>
									Allow the use of audio effects in your
									server
								</p>
							</div>
						</div>
						<button>Save Changes</button>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
}
