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
					<>
						<div className={styles.controls}>
							<code>
								{categories.get(category)
									? categories.get(category)
									: 0}
							</code>
						</div>
						<div className={styles.title}>
							<h2>{categoryTranslation[category]} Commands</h2>
						</div>
					</>
				)}
				{commands[category].map((item) => {
					function display() {
						return (
							<div className={styles.commandContent}>
								<p>{item.longDesc}</p>
								<div className={styles.context}>
									{item.aliases && item.aliases.length ? (
										<div className={styles.innerContext}>
											<p className={styles.commandTitle}>
												Aliases
											</p>
											<code>
												{item.aliases.join(', ')}
											</code>
										</div>
									) : null}
									{item.name !== item.usage ? (
										<div className={styles.innerContext}>
											<p className={styles.commandTitle}>
												Usage
											</p>
											<code>{item.usage}</code>
										</div>
									) : null}
								</div>
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
									<p className={styles.hidden}>-</p>
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
						content='https://www.disconnectbot.com/commands'
					/>
					<meta name='title' content='Disconnect • Commands' />
					<meta
						name='description'
						content='The full command list for Disconnect the Discord bot.'
					/>
					<meta property='og:title' content='Disconnect • Commands' />
					<meta
						property='og:description'
						content='The full command list for Disconnect the Discord bot'
					/>
					<meta
						property='twitter:url'
						content='https://www.disconnectbot.com/commands'
					/>
					<meta
						property='twitter:title'
						content='Disconnect • Commands'
					/>
					<meta
						property='twitter:description'
						content='The full command list for Disconnect the Discord bot'
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
								<code>
									{'★ is a Premium Command (Coming Soon!)'}
								</code>
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
								<li
									className={
										activeCategory === 'all'
											? styles.active
											: null
									}
									onClick={() => setActive('all')}>
									All
								</li>
								<li
									className={
										activeCategory === 'fun'
											? styles.active
											: null
									}
									onClick={() => setActive('fun')}>
									Fun
								</li>
								<li
									className={
										activeCategory === 'games'
											? styles.active
											: null
									}
									onClick={() => setActive('games')}>
									Games
								</li>
								<li
									className={
										activeCategory === 'music'
											? styles.active
											: null
									}
									onClick={() => setActive('music')}>
									Music
								</li>
								{/* <li><code>10</code> Economy</li>
								<li><code>10</code> Leveling</li> */}
								<li
									className={
										activeCategory === 'social'
											? styles.active
											: null
									}
									onClick={() => setActive('social')}>
									Social
								</li>
								<li
									className={
										activeCategory === 'images'
											? styles.active
											: null
									}
									onClick={() => setActive('images')}>
									Imagery
								</li>
								<li
									className={
										activeCategory === 'rp'
											? styles.active
											: null
									}
									onClick={() => setActive('rp')}>
									Roleplay
								</li>
								<li
									className={
										activeCategory === 'info'
											? styles.active
											: null
									}
									onClick={() => setActive('info')}>
									Information
								</li>
								{/* <li
									className={
										activeCategory === 'stats'
											? styles.active
											: null
									}
									onClick={() => setActive('stats')}>
									<code>
										{categories.get('stats')
											? categories.get('stats')
											: 0}
									</code>{' '}
									Statistics
								</li> */}
								<li
									className={
										activeCategory === 'mod'
											? styles.active
											: null
									}
									onClick={() => setActive('mod')}>
									Moderation
								</li>
								<li
									className={
										activeCategory === 'utils'
											? styles.active
											: null
									}
									onClick={() => setActive('utils')}>
									Utility
								</li>
								{/* <li
									className={
										activeCategory === 'misc'
											? styles.active
											: null
									}
									onClick={() => setActive('misc')}>
									<code>
										{categories.get('misc')
											? categories.get('misc')
											: 0}
									</code>{' '}
									Misc
								</li> */}
								<li
									className={
										activeCategory === 'nsfw'
											? styles.active
											: null
									}
									onClick={() => setActive('nsfw')}>
									NSFW
								</li>
							</ul>
						</div>
						<div className={styles.content}>
							{activeCategory === 'all' ||
							!commands[activeCategory] ? (
								<div className={styles.spread}>
									<div className={styles.controls}>
										<code>{numberOfCommands}</code>
									</div>
									<div className={styles.title}>
										<h2>All Commands</h2>
									</div>
									{displayCommands('fun', false)}
									{displayCommands('games', false)}
									{displayCommands('music', false)}
									{displayCommands('social', false)}
									{displayCommands('images', false)}
									{displayCommands('rp', false)}
									{displayCommands('info', false)}
									{/* {displayCommands('stats', false)} */}
									{displayCommands('mod', false)}
									{displayCommands('utils', false)}
									{/* {displayCommands('misc', false)} */}
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
