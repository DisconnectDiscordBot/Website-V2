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
			</DashboardLayout>
		</>
	);
}
