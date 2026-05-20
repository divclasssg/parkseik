import "./_style/about.style.scss";
import Link from "next/link";

export default function About() {
    return (
        <main id="main-content" className="main main-about">
            <h2 className="visuallyhidden">About</h2>
            <header className="header-about">
                <div className="about-content">
                    <h2 className="headline">Better Experiences, for a Better World.</h2>
                    <p className="subhead">더 나은 경험으로, 더 나은 세상을.</p>
                    <p>
                        사용자의 불편과 니즈를 리서치 근거로 해석해{" "}
                        <em>
                            제품이 개입할 수 있는 문제로 정의하고, 설계와 프로토타입을 통해 검증
                            가능한 경험으로 구체화하는 <em>프로덕트 디자이너</em>입니다.
                        </em>
                    </p>
                </div>
            </header>
            <section className="section">
                <div className="about-content">
                    <div className="experience-item">
                        <h2>8년, UI &middot; 프론트엔드 구현 경험.</h2>
                        <p>
                            다양한 사용자 대면 &middot; 운영 화면을 구현하며, 디자인 의도와 실제
                            서비스 경험 사이의 간극을 조율해 왔습니다.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h2>HCI 대학원, 문제를 정의하는 법을 배우다.</h2>
                        <p>
                            커리어 전환을 위해 HCI 석사 과정에 진학해 사용자 리서치와 UX 방법론을
                            본격적으로 배웠습니다.
                        </p>
                        <p>
                            LG U+ UX 가이드라인 프로젝트와 HCI 연구를 수행하며,{" "}
                            <em>사용자 문제를 근거로 해석하고 설계 판단으로 연결하는 힘</em>을
                            길렀습니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="about-content">
                    <h2>리서치에서 검증 가능한 경험까지.</h2>
                    <p>
                        사용자의 불편을 발견하는 데서 멈추지 않고, 그 문제를{" "}
                        <em>제품이 해결해야 할 과제로 구조화하는 일</em>에 집중합니다.
                    </p>
                    <p>
                        리서치에서 얻은 인사이트를 정보 구조와 사용자 흐름으로 구체화하고,
                        프로토타입과 테스트를 통해{" "}
                        <em>실제로 검증 가능한 경험으로 발전시키는 디자이너</em>를 지향합니다.
                    </p>
                </div>
            </section>
            <section className="section section-my-philosophy">
                <div className="about-content">
                    <h2 className="visuallyhidden">Closing</h2>
                    <p>더 나은 경험은 사람이 세상을 이해하고 선택하는 방식을 바꿀 수 있습니다.</p>
                    <p>
                        사용자를 더 깊이 이해하고, 그들의 필요와 불편, 현실의 제약을 함께 바라보며
                        그들의 삶을 조금 더 나은 방향으로 더 나은 세상을 만들겠습니다.
                    </p>
                </div>
            </section>
            <section className="section section-my-information">
                <div className="about-content">
                    <h2>
                        <strong>박세익</strong>
                        <span>PARK, Seik</span>
                    </h2>
                    <div>
                        <div className="copy-email-wrapper">
                            <button type="button" className="copy-email">
                                parkseik@gmail.com
                            </button>
                        </div>
                        &middot;
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            Resume
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
