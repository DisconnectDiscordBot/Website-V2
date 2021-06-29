import DashboardLayout from '../../../components/layouts/DashboardLayout';
import styles from '../../../styles/dashboard/Dashboard.module.scss';
import Link from 'next/link';

export default function Dashboard() {
	return (
		<>
			<DashboardLayout page='settings'>
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
							<Link href='/dashboard/1'>
								<a className={styles.currentPage}>Settings</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.container}>
					<h2>General Settings</h2>
					<p>
						What trivial settings can we change to mess with people?
					</p>

					<div className={styles.group}>
						<h3>Main Settings</h3>
						<p>How will I look today?</p>
						<div className={styles.divider} />
						<div className={styles.settings}>
							<div className={styles.setting}>
								<p className={styles.title}>Nickname</p>
								<p>
									Change my nickname to your server's
									standards
								</p>
								<input
									type='text'
									id='nickname'
									name='nickname'
									maxLength='32'
									placeholder='Disconnect'
								/>
							</div>
							<div className={styles.setting}>
								<p className={styles.title}>Prefix</p>
								<p>
									Change the prefix I respond to{' '}
									<i>(max: 3 letters)</i>
								</p>
								<input
									type='text'
									id='prefix'
									name='prefix'
									maxLength='3'
									placeholder='!'
								/>
							</div>
						</div>
						<button>Save Changes</button>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
}
