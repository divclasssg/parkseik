import Link from "next/link";

export default function Globalnav() {
    return (
        <nav className="globalnav">
            <div className="globalnav-content">
                <div className="globalnav-home">
                    <Link
                        href="/"
                        target="_self"
                        className="globalnav-link-home"
                    >
                        parkseik
                    </Link>
                </div>
                <ul className="globalnav-list">
                    <li className="globalnav-item">
                        <Link
                            href="/about"
                            target="_self"
                            className="globalnav-link"
                        >
                            About
                        </Link>
                    </li>
                    <li className="globalnav-item">
                        <Link
                            href="/projects"
                            target="_self"
                            className="globalnav-link"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="globalnav-item">
                        <Link
                            href="/research"
                            target="_self"
                            className="globalnav-link"
                        >
                            Research
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
