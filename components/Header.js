import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { openMenu, closeMenu } from '../public/header';

export default function Header({ page }) {
	return (
		<>
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
			<div className={styles.mobile}>
				<div className={styles.menuIcon}>
					<img
						className={styles.feather}
						src='/assets/icons/menu.svg'
						alt='Menu Icon'
						id='openIcon'
						onClick={openMenu}
					/>
				</div>

				<div className={styles.menuContent} id='menuContent'>
					<div id='stars4' />
					<div id='stars5' />
					<div id='stars6' />
					<div className={styles.menuIcon}>
						<img
							className={styles.feather}
							src='/assets/icons/x.svg'
							alt='Close Menu Icon'
							id='closeIcon'
							onClick={closeMenu}
						/>
					</div>

					<div className={styles.mobileNav}>
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
									<div className={styles.group}>
										<img
											className={
												page === 'home'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/home.svg'
											alt='Home Icon'
										/>
										<p>Home</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/commands'>
									<div className={styles.group}>
										<img
											className={
												page === 'commands'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/list.svg'
											alt='Commands Icon'
										/>
										<p>Commands</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/support'>
									<div className={styles.group}>
										<img
											className={
												page === 'support'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/chat.svg'
											alt='Chat Icon'
										/>
										<p>Support</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/status'>
									<div className={styles.group}>
										<img
											className={
												page === 'status'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/server.svg'
											alt='Server Icon'
										/>
										<p>Status</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/vote'>
									<div className={styles.group}>
										<img
											className={
												page === 'vote'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/vote.svg'
											alt='Vote Icon'
										/>
										<p>Vote</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/invite'>
									<div className={styles.group}>
										<img
											className={
												page === 'invite'
													? styles.activeFeather
													: styles.feather
											}
											src='/assets/icons/link.svg'
											alt='Invite Icon'
										/>
										<p>Invite</p>
									</div>
								</Link>
							</li>
							<li>
								<Link href='/dashboard'>
									<div className={styles.group}>
										<img
											className={styles.feather}
											src='/assets/icons/settings.svg'
											alt='Dashboard Icon'
										/>
										<p>Dashboard</p>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
