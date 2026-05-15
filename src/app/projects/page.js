import Link from "next/link";

export default function Projects() {
    return (
        <main className="main main-projects">
            <nav className="subnav">
                <div className="subnav-content">
                    <ul className="subnav-list">
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>이음,</strong>
                                <span>공모전 출품작,</span>
                                <span>Medical</span>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>Eum,</strong>
                                <span>Case Study,</span>
                                <span>Medical</span>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>Cronometer,</strong>
                                <span>App Revamp,</span>
                                <span>Healthcare</span>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>Liverpool FC,</strong>
                                <span>Web Redesign,</span>
                                <span>Sports</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    );
}
