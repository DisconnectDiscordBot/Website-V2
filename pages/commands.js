import Layout from '../components/layouts/Layout';
import styles from '../styles/Commands.module.scss';
import { commands, categoryTranslation } from '../public/commands';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Commands() {
	const [activeCategory, setActive] = useState('all');
	const [shownCommands, setShownCommands] = useState([]);
	const categories = new Map();
	Object.keys(commands).map((i) =>
		categories.set(i, Object.keys(commands[i]).length),
	);

	let numberOfCommands = Object.keys(commands)
		.map((i) => Object.keys(commands[i]).length)
		.reduce((a, b) => a + b, 0);

	function hideCommand(command) {
		setShownCommands(shownCommands.filter((item) => item !== command));
	}

	function displayCommands(category, title) {
		return (
			<div className={styles.spread}>
				{title && (
					<div className={styles.title}>
						<h2>{categoryTranslation[category]} Commands</h2>
					</div>
				)}
				{commands[category].map((item) => {
					function display() {
						return (
							<div className={styles.commandContent}>
								<p>{item.longDesc}</p>
							</div>
						);
					}

					return item ? (
						<div className={styles.cmds}>
							<div className={styles.command}>
								<div
									className={styles.commandHead}
									onClick={() =>
										shownCommands.includes(item.name)
											? hideCommand(item.name)
											: setShownCommands((arr) => [
													...arr,
													item.name,
											  ])
									}>
									<p className={styles.cmd}>{item.name}</p>
									<p>-</p>
									<p>{item.desc}</p>
								</div>
								{shownCommands.includes(item.name) && display()}
							</div>
						</div>
					) : null;
				})}
			</div>
		);
	}

	return (
		<>
			<Layout page='commands'>
				<Head>
					<title>Disconnect • Commands</title>
					<meta
						property='og:url'
						content='https://disconnectbot.vercel.app/commands'
					/>
					<meta property='og:title' content='Disconnect • Commands' />
					<meta
						property='og:description'
						content='Disconnect is an entertainment first Discord bot with over 100+ commands.'
					/>
					<meta
						property='twitter:url'
						content='https://disconnectbot.vercel.app/commands'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Commands'
					/>
					<meta
						property='twitter:description'
						content='Disconnect is an entertainment first Discord bot with over 100+ commands.'
					/>
				</Head>

				{/* Body */}
				<div className={styles.container}>
					<div className={styles.information}>
						<div className={styles.syntax}>
							<h3>Disconnect Command Syntax</h3>
							<p>
								Do not remember your prefix? Just{' '}
								<code>@Disconnect</code>
								and he will remind you!
							</p>
							<p className={styles.note}>
								<i>
									(Please do not include these when typing
									commands)
								</i>
							</p>
							<div className={styles.codeblock}>
								<code>{'<required>'}</code>
								<code>{'[optional]'}</code>
								<code>{'<Select || One>'}</code>
								<code>{'★ is a Premium Command'}</code>
								<code>{'⚙ is a Configurable Command'}</code>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.container}>
					<div className={styles.commands}>
						<div className={styles.sidebar}>
							<h2>Categories</h2>
							<ul>
								<li onClick={() => setActive('all')}>
									<code>{numberOfCommands}</code> All
								</li>
								<li onClick={() => setActive('fun')}>
									<code>
										{categories.get('fun')
											? categories.get('fun')
											: 0}
									</code>{' '}
									Fun
								</li>
								<li onClick={() => setActive('games')}>
									<code>
										{categories.get('games')
											? categories.get('games')
											: 0}
									</code>{' '}
									Games
								</li>
								<li onClick={() => setActive('music')}>
									<code>
										{categories.get('music')
											? categories.get('music')
											: 0}
									</code>{' '}
									Music
								</li>
								{/* <li><code>10</code> Economy</li>
								<li><code>10</code> Leveling</li> */}
								<li onClick={() => setActive('social')}>
									<code>
										{categories.get('social')
											? categories.get('social')
											: 0}
									</code>{' '}
									Social
								</li>
								<li onClick={() => setActive('images')}>
									<code>
										{categories.get('images')
											? categories.get('images')
											: 0}
									</code>{' '}
									Imagery
								</li>
								<li onClick={() => setActive('rp')}>
									<code>
										{categories.get('rp')
											? categories.get('rp')
											: 0}
									</code>{' '}
									Roleplay
								</li>
								<li onClick={() => setActive('info')}>
									<code>
										{categories.get('info')
											? categories.get('info')
											: 0}
									</code>{' '}
									Information
								</li>
								<li onClick={() => setActive('stats')}>
									<code>
										{categories.get('stats')
											? categories.get('stats')
											: 0}
									</code>{' '}
									Statistics
								</li>
								<li onClick={() => setActive('mod')}>
									<code>
										{categories.get('mod')
											? categories.get('mod')
											: 0}
									</code>{' '}
									Moderation
								</li>
								<li onClick={() => setActive('utils')}>
									<code>
										{categories.get('utils')
											? categories.get('utils')
											: 0}
									</code>{' '}
									Utility
								</li>
								<li onClick={() => setActive('misc')}>
									<code>
										{categories.get('misc')
											? categories.get('misc')
											: 0}
									</code>{' '}
									Misc
								</li>
								<li onClick={() => setActive('nsfw')}>
									<code>
										{categories.get('nsfw')
											? categories.get('nsfw')
											: 0}
									</code>{' '}
									NSFW
								</li>
							</ul>
						</div>
						<div className={styles.content}>
							{activeCategory === 'all' ||
							!commands[activeCategory] ? (
								<div className={styles.spread}>
									<div className={styles.title}>
										<h2>All Commands</h2>
									</div>
									{displayCommands('info', false)}
									{displayCommands('utils', false)}
								</div>
							) : (
								displayCommands(activeCategory, true)
							)}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
