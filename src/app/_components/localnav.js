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
                                className="button-small button-small-secondary button-project-more"
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
                                className="button-small button-small-primary link-project-live"
                            >
                                Eum Demo 체험하기
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="localnav-expanded" className="content-expanded-wrapper">
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
                        <button type="button" className="button-close-expanded">
                            <span className="blind">닫기</span>
                        </button>
                    </nav>
                    <div className="content-action">
                        <div className="content-name">
                            <p>Eum</p>
                        </div>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-small button-small-primary"
                        >
                            Eum Demo 체험하기
                        </Link>
                    </div>
                    <nav className="contentnav" aria-label="프로젝트 목차">
                        <ul className="contentnav-list">
                            <li>
                                <Link href="#overview">개요</Link>
                            </li>
                            <li>
                                <Link href="#background">배경</Link>
                            </li>
                            <li>
                                <Link href="#designProcess">디자인 프로세스</Link>
                            </li>
                            <li>
                                <Link href="#keytakeaway">주요 시사점</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
