import styles from '../styles/dashboard/Sidebar.module.scss';
import { useState } from 'react';
import fakeData from '../public/fake';
import Link from 'next/link';

export default function Sidebar({ page, id, data }) {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className={styles.main}>
			<Link href='/'>
				<div className={styles.branding}>
					<img src='/disconnect.png' alt='Disconnect Logo' />
					<h2 className={styles.show}>Disconnect</h2>
				</div>
			</Link>
			<div className={styles.divider} />
			<div className={styles.dropdown}>
				<div
					className={styles.selected}
					onClick={() => setDropdown(!dropdown)}>
					<img src={data.icon} alt={`${data.name} Icon`} />
					<h3 className={styles.show}>
						{data.name.slice(0, -(data.name.length - 16))}
						{data.name.length > 16 ? '...' : null}
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
						{Object.keys(fakeData).map((i) => {
							if (fakeData[i] && id !== i) {
								const g = fakeData[i];
								return (
									<Link href={`/dashboard/${g.id}/${page}`}>
										<div className={styles.server}>
											<img
												src={g.icon}
												alt={`${g.name} Icon`}
											/>
											<h3 className={styles.show}>
												{g.name.slice(
													0,
													-(g.name.length - 14),
												)}
												{g.name.length > 14
													? '...'
													: null}
											</h3>
										</div>
									</Link>
								);
							} else {
								return null;
							}
						})}
					</div>
				)}
			</div>
			<div className={styles.divider} />
			<div className={styles.nav}>
				<ul>
					<li>
						<Link href={`/dashboard/${data.id}`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/grid.svg'
									className={
										page === 'main' ? styles.active : null
									}
									alt='Dashboard icon'
								/>
								<p className={styles.show}>Module Gallery</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/settings`}>
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
						<Link href={`/dashboard/${data.id}/premium`}>
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
					<li>
						<div className={styles.divider} />
					</li>
					{/* <li>Levels</li>
					<li>Economy</li> */}
					<li>
						<Link href={`/dashboard/${data.id}/fun`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/smile.svg'
									className={
										page === 'fun' ? styles.active : null
									}
									alt='Fun icon'
								/>
								<p className={styles.show}>Fun</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/games`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/flag.svg'
									className={
										page === 'games' ? styles.active : null
									}
									alt='Games icon'
								/>
								<p className={styles.show}>Games</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/music`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/music.svg'
									className={
										page === 'music' ? styles.active : null
									}
									alt='Music icon'
								/>
								<p className={styles.show}>Music</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/roleplay`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/users.svg'
									className={
										page === 'rp' ? styles.active : null
									}
									alt='Roleplay icon'
								/>
								<p className={styles.show}>Roleplay</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/images`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/images.svg'
									className={
										page === 'images' ? styles.active : null
									}
									alt='Imagery icon'
								/>
								<p className={styles.show}>Imagery</p>
							</div>
						</Link>
					</li>
					<li>
						<div className={styles.divider} />
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/youtube`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/youtube.svg'
									className={
										page === 'youtube'
											? styles.active
											: null
									}
									alt='YouTube icon'
								/>
								<p className={styles.show}>YouTube Notifier</p>
							</div>
						</Link>
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/twitter`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/twitter.svg'
									className={
										page === 'twitter'
											? styles.active
											: null
									}
									alt='Twitter icon'
								/>
								<p className={styles.show}>Twitter Notifier</p>
							</div>
						</Link>
					</li>
					<li>
						<div className={styles.divider} />
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/welcome`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/hand.svg'
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
						<Link href={`/dashboard/${data.id}/moderation`}>
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
						<div className={styles.divider} />
					</li>
					<li>
						<Link href={`/dashboard/${data.id}/misc`}>
							<div className={styles.iconButton}>
								<img
									src='../../assets/icons/dots.svg'
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
