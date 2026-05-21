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
                                            <div className="project-meta">
                                                <strong>이음,</strong>
                                                <span>Universal Design,</span>
                                                <span>Medical</span>
                                            </div>
                                            <div className="project-summary">
                                                남녀노소 모든 환자들이 쓸 수 있는 이러쿵 저러쿵
                                                (2026 제8회 유니버설디자인 아이디어 대전 출품작)
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link href="/projects/eum" className="homenav-depth2-link">
                                            <div className="project-meta">
                                                <strong>Eum,</strong>
                                                <span>Case Study,</span>
                                                <span>Medical</span>
                                            </div>
                                            <div className="project-summary">
                                                환자 기록을 진료에 연결하고, 의사의 판단과 환자의
                                                이해를 잇는 AI 보조 커뮤니케이션 서비스
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href="/projects/cronometer"
                                            className="homenav-depth2-link"
                                        >
                                            <div className="project-meta">
                                                <strong>Cronometer,</strong>
                                                <span>App Revamp,</span>
                                                <span>Healthcare</span>
                                            </div>
                                            <div className="project-summary">
                                                Cronometer Summary
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="homenav-depth2-item">
                                        <Link
                                            href="/projects/liverpoolfc"
                                            className="homenav-depth2-link"
                                        >
                                            <div className="project-meta">
                                                <strong>Liverpool FC,</strong>
                                                <span>Web Redesign,</span>
                                                <span>Sports</span>
                                            </div>
                                            <div className="project-summary">
                                                콘텐츠 피드형 홈을 팬 여정 중심 클럽 허브로 재구성
                                            </div>
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
