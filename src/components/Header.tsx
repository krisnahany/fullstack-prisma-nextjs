'use client'

import Link from "next/link"
import styles from './Header.module.css'
import { usePathname } from "next/navigation"

export default function Header() {
    const routePathName = usePathname();
    const isActive: (pathname: string) => boolean = (pathname) => routePathName === pathname

    return (
        <header>
            <nav>
                <div className={styles.left}>
                    <Link href="/" legacyBehavior>
                        <a className={styles.bold} data-active={isActive('/')}>Home</a>
                    </Link>
                    <Link href="/blog" legacyBehavior>
                        <a data-active={isActive('/blog')}>Blog</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}