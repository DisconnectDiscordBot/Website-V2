import DashboardLayout from '../../../components/layouts/DashboardLayout';
import styles from '../../../styles/dashboard/Dashboard.module.scss';
import { useRouter } from 'next/router';
import fakeData from '../../../public/fake';
import Link from 'next/link';

export default function Dashboard() {
	const router = useRouter();
	const { id } = router.query;
	const data = fakeData[id] ?? null;

	if (!id) {
		return (
			<>
				<div className={styles.loadingContainer}>
					<div className={styles.loading}>
						<h2>Guild Loading...</h2>
						<p>
							If guild does not load within a minute there may be
							an error... If so please click the button below...
						</p>
						<Link href='/dashboard'>
							<a>Select Guild</a>
						</Link>
					</div>
				</div>
			</>
		);
	} else if (!data) {
		return (
			<>
				<div className={styles.loadingContainer}>
					<div className={styles.loading}>
						<h2>No Guild Found!</h2>
						<p>
							It seems like I was unable to find the guild you are
							looking for! I may not be invited or you have went
							to a random link. Please click the button below to
							go back.
						</p>
						<Link href='/dashboard'>
							<a>Select Guild</a>
						</Link>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<DashboardLayout page='main' data={data} id={id}>
					<div className={styles.container}>
						<ul className={styles.breadcrumbs}>
							<li>
								<Link href='/dashboard'>
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href={`/dashboard/${id}`}>
									<a className={styles.currentPage}>
										{data.name}
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.container}>
						<h2>Module Gallery</h2>
						<p>What modules would you like to configure today?</p>
						<div className={styles.group}>
							<h3>Entertainment Modules</h3>
							<p>What kind of fun can we have?</p>
							<div className={styles.divider} />
							<div className={styles.settings}>
								<Link href={`/dashboard/${id}/music`}>
									<div className={styles.module}>
										<img
											src='../../assets/icons/music.svg'
											alt='Music Icon'
										/>
										<p className={styles.title}>Music</p>
										<p>
											Play songs from YouTube, Spotify and
											Soundcloud
										</p>
									</div>
								</Link>
								<Link href='/dashboard/1/fun'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/smile.svg'
											alt='Misc Icon'
										/>
										<p className={styles.title}>Fun</p>
										<p>
											Jokes, Facts, Memes, and other
											Random Fun
										</p>
									</div>
								</Link>
								<Link href='/dashboard/1/games'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/flag.svg'
											alt='Games Icon'
										/>
										<p className={styles.title}>Games</p>
										<p>
											Play games like rock paper scissors,
											russian roulette and more
										</p>
									</div>
								</Link>
								<Link href='/dashboard/1/roleplay'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/cap.svg'
											alt='Roleplay Icon'
										/>
										<p className={styles.title}>Roleplay</p>
										<p>Kick, Punch, Slap, Feed, etc...</p>
									</div>
								</Link>
								<Link href='/dashboard/1/images'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/images.svg'
											alt='Imagery Icon'
										/>
										<p className={styles.title}>Images</p>
										<p>
											Random images of animals and other
											things
										</p>
									</div>
								</Link>
							</div>
						</div>
						<div className={styles.group}>
							<h3>Social Modules</h3>
							<p>What kind of ways can we get social?</p>
							<div className={styles.divider} />
							<div className={styles.settings}>
								<Link href='/dashboard/1/youtube'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/youtube.svg'
											alt='Youtube Icon'
										/>
										<p className={styles.title}>
											YouTube Notifier
										</p>
										<p>
											Get notifications for new YouTube
											videos and streams
										</p>
									</div>
								</Link>
								<Link href='/dashboard/1/twitter'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/twitter.svg'
											alt='Twitter Icon'
										/>
										<p className={styles.title}>
											Twitter Notifier
										</p>
										<p>Get notifications for new Tweets</p>
									</div>
								</Link>
							</div>
						</div>
						<div className={styles.group}>
							<h3>Moderation Modules</h3>
							<p>
								What kind of ways can we control this community?
							</p>
							<div className={styles.divider} />
							<div className={styles.settings}>
								<Link href='/dashboard/1/moderation'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/lock.svg'
											alt='Moderation Icon'
										/>
										<p className={styles.title}>
											General Moderation
										</p>
										<p>
											Kick, Ban, Purge... That kind of
											stuff
										</p>
									</div>
								</Link>
								<Link href='/dashboard/1/welcome'>
									<div className={styles.module}>
										<img
											src='../../assets/icons/hand.svg'
											alt='Welcoming Icon'
										/>
										<p className={styles.title}>
											Welcoming {'&'} Farewell
										</p>
										<p>
											Welcome new members and say goodbye
											to those who left
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</DashboardLayout>
			</>
		);
	}
}
