import DashboardLayout from '../../../components/layouts/DashboardLayout';
import styles from '../../../styles/dashboard/Dashboard.module.scss';
import Link from 'next/link';

export default function Premium() {
	return (
		<>
			<DashboardLayout page='premium'>
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
							<Link href='/dashboard/1/premium'>
								<a className={styles.currentPage}>Premium</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.container}>
					<h2>Premium</h2>
					<p>Support Disconnect and Give Your Community The Best!</p>
					<p>Disconnect is supported entirely by its donators.</p>
					<p>Perks will be awarded based on donation.</p>
				</div>
			</DashboardLayout>
		</>
	);
}
