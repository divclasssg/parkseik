import Link from "next/link";

export default function Localnav() {
    return (
        <nav className="localnav" aria-label="현재 프로젝트">
            <div className="localnav-content">
                <div className="content-collapsed-wrapper">
                    <div className="project-name">
                        <Link href="/projects/eum" className="link">
                            Title
                        </Link>
                    </div>
                    <ul className="cta-buttons">
                        <li>
                            <button
                                type="button"
                                className="button-project-more"
                                aria-expanded="false"
                                aria-controls="localnav-expanded"
                            >
                                프로젝트 더보기
                            </button>
                        </li>
                        <li>
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-project-live"
                            >
                                Eum Demo 체험하기
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="localnav-expanded" className="content-expand-wrapper">
                    <nav className="menu-wrapper" aria-label="사이트 메뉴">
                        <ul className="menu-list">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="link">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="link">
                                    Research
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="project-action">
                        <div className="project-name">
                            <p>Eum</p>
                        </div>
                        <Link href="/" target="_blank" rel="noopener noreferrer">
                            Eum Demo 체험하기
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
