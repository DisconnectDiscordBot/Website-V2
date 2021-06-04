import styles from '../styles/components/Header.module.css';
import utils from '../styles/Utils.module.css';
import Link from 'next/link';

export default function Header({page}) {
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
                                <li className={ page === 'home' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Home Icon */}
                                        <a className={styles.hoverAppear}>Home</a>
                                    </Link>
                                </li>
                                <li className={ page === 'commands' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Commands Icon */}
                                        <a className={styles.hoverAppear}>Commands</a>
                                    </Link>
                                </li>
                                <li className={ page === 'status' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Status Icon */}
                                        <a className={styles.hoverAppear}>Status</a>
                                    </Link>
                                </li>
                                <li className={ page === 'support' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Support Icon */}
                                        <a className={styles.hoverAppear}>Support</a>
                                    </Link>
                                </li>
                                <li className={ page === 'invite' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Invite Icon */}
                                        <a className={styles.hoverAppear}>Invite</a>
                                    </Link>
                                </li>
                                <li className={ page === 'vote' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Vote Icon */}
                                        <a className={styles.hoverAppear}>Vote</a>
                                    </Link>
                                </li>
                                <li className={ page === 'premium' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Premium Icon */}
                                        <a className={styles.hoverAppear}>Premium</a>
                                    </Link>
                                </li>
                                <li className={ page === 'docs' ? styles.activePage : null}>
                                    <Link href='/'>
                                        {/* Documentation Icon */}
                                        <a className={styles.hoverAppear}>Documentation</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={utils.right}>
                        <ul>
                            <li>
                                {/* Language Slection Icon */}
                            </li>
                            <li>
                                {/* Toggle Theme Icon */}
                            </li>
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
    )
}
