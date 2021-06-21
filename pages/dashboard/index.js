import Layout from '../../components/layouts/Layout';
import styles from '../../styles/Redirect.module.scss';
import Link from 'next/link';

export default function Dashboard() {
	return (
		<>
			<Layout page='dashboard'>
				<div className={styles.container}>
					<div className={styles.inner}>
						<h2>Dashboard</h2>
						<p>
							The Dashboard is still in development. To check out
							teasers for the upcoming dashboard join the support
							server.
						</p>
						<Link href='https://discord.gg/gFJasaP5bf'>
							<a>Join the Support Server</a>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
