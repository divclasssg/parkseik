import Link from "next/link";

export default function Projects() {
    return (
        <main id="main-content" className="main main-projects">
            <nav className="subnav" aria-label="프로젝트 목록">
                <div className="subnav-content">
                    <ul className="subnav-list">
                        <li className="subnav-item">
                            <Link href="/" className="subnav-link">
                                <div className="project-meta">
                                    <strong>이음,</strong>
                                    <span>Universal Design,</span>
                                    <span>Medical</span>
                                </div>
                                <div className="project-summary">
                                    남녀노소 모든 환자들이 쓸 수 있는 이러쿵 저러쿵 (2026 제8회
                                    유니버설디자인 아이디어 대전 출품작)
                                </div>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/projects/eum" className="subnav-link">
                                <div className="project-meta">
                                    <strong>Eum,</strong>
                                    <span>Case Study,</span>
                                    <span>Medical</span>
                                </div>
                                <div className="project-summary">
                                    환자 기록을 진료에 연결하고, 의사의 판단과 환자의 이해를 잇는 AI
                                    보조 커뮤니케이션 서비스
                                </div>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/projects/cronometer" className="subnav-link">
                                <div className="project-meta">
                                    <strong>Cronometer,</strong>
                                    <span>App Revamp,</span>
                                    <span>Healthcare</span>
                                </div>
                                <div className="project-summary">Cronometer Summary</div>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/projects/liverpoolfc" className="subnav-link">
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
            </nav>
        </main>
    );
}
