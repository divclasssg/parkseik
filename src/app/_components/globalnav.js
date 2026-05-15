import Link from "next/link";

export default function Globalnav() {
    return (
        <nav className="globalnav" aria-label="전역 메뉴">
            <div className="globalnav-content">
                <div className="globalnav-home">
                    <Link href="/" className="globalnav-link-home">
                        parkseik
                    </Link>
                </div>
                <ul className="globalnav-list">
                    <li className="globalnav-item">
                        <Link href="/about" className="globalnav-link">
                            About
                        </Link>
                    </li>
                    <li className="globalnav-item">
                        <Link href="/projects" className="globalnav-link">
                            Projects
                        </Link>
                    </li>
                    <li className="globalnav-item">
                        <Link href="/research" className="globalnav-link">
                            Research
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
