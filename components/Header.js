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
			</div>
		</div>
	);
}

/*

	Home 
	Commands
	

*/

function noHeader({ page }) {
	const darkTheme = true;
	const language = 'en';

	return (
		<div className={utils.container}>
			<div className={utils.flex}>
				<div className={utils.spaceBetween}>
					<div className={utils.left}>
						<div className={styles.branding}>
							<Link href='/'>
								{/* Image Here */}
								<h2>Disconnect</h2>
							</Link>
						</div>
						<div className={styles.nav}>
							<ul>
								<li
									className={
										page === 'home'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Home Icon */}
										<a className={styles.hoverAppear}>
											Home
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'commands'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Commands Icon */}
										<a className={styles.hoverAppear}>
											Commands
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'status'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Status Icon */}
										<a className={styles.hoverAppear}>
											Status
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'support'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Support Icon */}
										<a className={styles.hoverAppear}>
											Support
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'invite'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Invite Icon */}
										<a className={styles.hoverAppear}>
											Invite
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'vote'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Vote Icon */}
										<a className={styles.hoverAppear}>
											Vote
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'premium'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Premium Icon */}
										<a className={styles.hoverAppear}>
											Premium
										</a>
									</Link>
								</li>
								<li
									className={
										page === 'docs'
											? styles.activePage
											: null
									}>
									<Link href='/'>
										{/* Documentation Icon */}
										<a className={styles.hoverAppear}>
											Documentation
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={utils.right}>
						<ul>
							<li>{/* Language Slection Icon */}</li>
							<li>{/* Toggle Theme Icon */}</li>
							<li>
								<Link href='/login'>
									<a className={styles.loginButton}>Login</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
