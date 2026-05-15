import Link from "next/link";

export default function Home() {
    return (
        <main className="main main-home">
            <header className="header-home">
                <h1 className="visuallyhidden">PARK, Seik&apos; Portfolio</h1>
                <h2 className="header-home-headline">
                    <span>세익 -- 世益 · [ se.ik ]</span>
                    Better experiences, for a better world.
                </h2>
            </header>
            <nav className="homenav">
                <div className="homenav-content">
                    <ul className="homenav-list">
                        <li className="homenav-item">
                            <Link
                                href="/about"
                                target="_self"
                                className="homenav-link"
                            >
                                About
                            </Link>
                        </li>
                        <li className="homenav-item">
                            <Link
                                href="/projects"
                                target="_self"
                                className="homenav-link"
                            >
                                Projects
                            </Link>
                            <div className="homenav-depth2">
                                <ul className="homenav-depth2-list">
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href=""
                                            target="_self"
                                            className="homenav-depth2-link"
                                        ></Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href=""
                                            target="_self"
                                            className="homenav-depth2-link"
                                        ></Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href=""
                                            target="_self"
                                            className="homenav-depth2-link"
                                        ></Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href=""
                                            target="_self"
                                            className="homenav-depth2-link"
                                        ></Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="homenav-item">
                            <Link
                                href="/research"
                                target="_self"
                                className="homenav-link"
                            >
                                Research
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    );
}
