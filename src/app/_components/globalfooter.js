"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Globalfooter() {
    const pathname = usePathname();
    const isDefaultFooter = pathname === "/" || pathname === "/about";

    if (isDefaultFooter) {
        return (
            <footer className="globalfooter">
                <div className="globalfooter-content">
                    <div className="globalfooter-legal-copyright">
                        &copy; 2026 parkseik. All Rights Reserved.
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="globalfooter globalfooter-sub">
            <div className="globalfooter-content">
                <h2 className="globalfooter-headline">parkseik</h2>
                <nav className="globalfooternav">
                    <ul>
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                            <Link href="/about">about</Link>
                        </li>
                        <li>
                            <Link href="/projects">projects</Link>
                        </li>
                        <li>
                            <Link href="/research">research</Link>
                        </li>
                    </ul>
                </nav>
                <div className="globalfooter-info">
                    <button type="button" className="copy-mail">
                        parkseik@gmail.com
                    </button>
                    &middot;
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        resume
                    </Link>
                </div>
                <div className="globalfooter-legal-copyright">
                    &copy; 2026 parkseik. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
