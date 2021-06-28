import styles from '../styles/dashboard/Sidebar.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ page }) {
	const guildName = 'Disconnect Valley';
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className={styles.main}>
			<div className={styles.branding}>
				<img src='/disconnect.png' alt='Disconnect Logo' />
				<h2 className={styles.show}>Disconnect</h2>
			</div>
			<div className={styles.divider} />
			<div className={styles.dropdown}>
				<div
					className={styles.selected}
					onClick={() => setDropdown(!dropdown)}>
					<img src='/disconnect.png' alt='Disconnect Valley Icon' />
					<h3 className={styles.show}>
						{guildName.slice(0, -(guildName.length - 16))}
						{guildName.length > 16 ? '...' : null}
					</h3>
					<img
						src={
							dropdown
								? '../../assets/icons/up.svg'
								: '../../assets/icons/down.svg'
						}
						className={styles.arrow}></img>
				</div>
				{dropdown && (
					<div className={styles.otherServers}>
						<div className={styles.server}>
							<img
								src='/assets/Cytech.png'
								alt='Cytech Testing Server Icon'
							/>
							<h3 className={styles.show}>
								{'Cytech Testing Server'.slice(
									0,
									-('Cytech Testing Server'.length - 14),
								)}
								{'Cytech Testing Server'.length > 14
									? '...'
									: null}
							</h3>
						</div>
						<div className={styles.server}>
							<img
								src='/assets/DukeBotCircle.png'
								alt='Duke Support Server Icon'
							/>
							<h3 className={styles.show}>
								{'Duke Support Server'.slice(
									0,
									-('Duke Support Server'.length - 14),
								)}
								{'Duke Support Server'.length > 14
									? '...'
									: null}
							</h3>
						</div>
					</div>
				)}
			</div>
			<div className={styles.divider} />
			<div className={styles.nav}>
				<ul>
					<li>
						<Link href='/dashboard/1'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/grid.svg'
									className={
										page === 'main' ? styles.active : null
									}
									alt='Dashboard icon'
								/>
								<p className={styles.show}>Dashboard</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/1/settings'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/settings.svg'
									className={
										page === 'settings'
											? styles.active
											: null
									}
									alt='Settings icon'
								/>
								<p className={styles.show}>Settings</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/1/premium'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/cart.svg'
									className={
										page === 'premium'
											? styles.active
											: null
									}
									alt='Premium icon'
								/>
								<p className={styles.show}>Premium</p>
							</div>
						</Link>
					</li>
					{/* <li>Levels</li>
					<li>Economy</li> */}
					<li>
						<Link href='/dashboard/1/welcome'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/user-plus.svg'
									className={
										page === 'welcome'
											? styles.active
											: null
									}
									alt='Welcome icon'
								/>
								<p className={styles.show}>Welcoming</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/1/moderation'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/lock.svg'
									className={
										page === 'mod' ? styles.active : null
									}
									alt='Moderation icon'
								/>
								<p className={styles.show}>Moderation</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/1/misc'>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/plus.svg'
									className={
										page === 'misc' ? styles.active : null
									}
									alt='Miscellaneous icon'
								/>
								<p className={styles.show}>Miscellaneous</p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
