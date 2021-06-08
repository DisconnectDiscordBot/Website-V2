import Link from 'next/link';
import { NavBar, Nav, Branding, NavList } from '../styles/Header';
import { Container } from '../styles/Utils';

export default function Header({ page }) {
	return (
		<Container>
			<NavBar>
				<Nav>
					<Branding>
						<img
							src='./assets/disconnect.png'
							alt='Disconnect Logo'
						/>
						<h2>Disconnect</h2>
					</Branding>
					<NavList>
						<li>Test</li>
						<li>Test</li>
						<li>Test</li>
					</NavList>
				</Nav>
				<div></div>
			</NavBar>
		</Container>
	);
}

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
