import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({ page }) {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.navbar}>
					<Link href='/'>
						<div className={styles.branding}>
							<img
								src='./assets/disconnect.png'
								alt='Disconnect Logo'
							/>
							<h2>Disconnect</h2>
						</div>
					</Link>
					<ul>
						<li>
							<Link href='/'>
								<div className={styles.icon}>
									<img
										className={
											page === 'home'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/home.svg'
										alt='Home Icon'
									/>
									<span className={styles.iconText}>
										Home
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/commands'>
								<div className={styles.icon}>
									<img
										className={
											page === 'commands'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/list.svg'
										alt='Commands Icon'
									/>
									<span className={styles.iconText}>
										Commands
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/support'>
								<div className={styles.icon}>
									<img
										className={
											page === 'support'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/chat.svg'
										alt='Chat Icon'
									/>
									<span className={styles.iconText}>
										Support
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/status'>
								<div className={styles.icon}>
									<img
										className={
											page === 'status'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/server.svg'
										alt='Server Icon'
									/>
									<span className={styles.iconText}>
										Status
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/vote'>
								<div className={styles.icon}>
									<img
										className={
											page === 'vote'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/vote.svg'
										alt='Vote Icon'
									/>
									<span className={styles.iconText}>
										Vote
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link href='/invite'>
								<div className={styles.icon}>
									<img
										className={
											page === 'invite'
												? styles.activeFeather
												: styles.feather
										}
										src='/assets/icons/link.svg'
										alt='Invite Icon'
									/>
									<span className={styles.iconText}>
										Invite
									</span>
								</div>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.dash}>
					<Link href='/dashboard'>
						<a>Login</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
