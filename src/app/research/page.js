import Link from "next/link";

export default function Research() {
    return (
        <main className="main main-research">
            <nav className="subnav">
                <div className="subnav-content">
                    <ul className="subnav-list">
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>완전자율주행차는 어떤 정보를 보여줘야 할까?,</strong>
                                <span>석사학위 논문 -- KCI 등재,</span>
                                <span>2025.01</span>
                            </Link>
                        </li>
                        <li className="subnav-item">
                            <Link href="/" target="_self" className="subnav-link">
                                <strong>건강 습관은 왜 혼자 만들기 어려울까?,</strong>
                                <span> 논문 -- 한국HCI학회 2022년 학술대회 우수논문상,</span>
                                <span>2022.02</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    );
}
