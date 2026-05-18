import Link from "next/link";

export default function Home() {
    return (
        <main id="main-content" className="main main-home">
            <header className="header-home">
                <h2 className="header-home-headline">
                    <span>
                        세익 -- 世益 &middot; [ se.ik ], <strong>Product Designer</strong>
                    </span>
                    Better experiences, for a better world.
                </h2>
            </header>
            <nav className="homenav" aria-label="주요 섹션">
                <div className="homenav-content">
                    <ul className="homenav-list">
                        <li className="homenav-item">
                            <Link href="/about" className="homenav-link">
                                About
                            </Link>
                        </li>
                        <li className="homenav-item">
                            <Link href="/projects" className="homenav-link">
                                Projects
                            </Link>
                            <div className="homenav-depth2">
                                <ul className="homenav-depth2-list">
                                    <li className="homenav-depth2-item">
                                        <Link href="/projects" className="homenav-depth2-link">
                                            <strong>이음,</strong>
                                            <span>공모전 출품작,</span>
                                            <span>Medical</span>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link href="/projects/eum" className="homenav-depth2-link">
                                            <strong>Eum,</strong>
                                            <span>Case Study,</span>
                                            <span>Medical</span>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href="/projects/cronometer"
                                            className="homenav-depth2-link"
                                        >
                                            <strong>Cronometer,</strong>
                                            <span>App Revamp,</span>
                                            <span>Healthcare</span>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href="/projects/liverpoolfc"
                                            className="homenav-depth2-link"
                                        >
                                            <strong>Liverpool FC,</strong>
                                            <span>Web Redesign,</span>
                                            <span>Sports</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="homenav-item">
                            <Link href="/research" className="homenav-link">
                                Research
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    );
}
