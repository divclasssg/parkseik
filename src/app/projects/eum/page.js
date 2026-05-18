"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { asset } from "@/_lib/media";
import SectionKeyScreens from "./_components/sectionkeyscreens";

const VIDEOS = [
    {
        key: "01",
        src: "eum/videos/hero/final_prototype_01.mp4",
        w: 1320,
        h: 2868,
        frame: "phone",
        rate: 10,
    },
    {
        key: "02",
        src: "eum/videos/hero/final_prototype_02.mp4",
        w: 3024,
        h: 1964,
        frame: "monitor",
        rate: 10,
    },
    {
        key: "03",
        src: "eum/videos/hero/final_prototype_03.mp4",
        w: 774,
        h: 1678,
        frame: "phone",
        rate: 5,
    },
];

export default function Eum() {
    const ref0 = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const refs = [ref0, ref1, ref2];
    const [active, setActive] = useState(0);

    useEffect(() => {
        const total = refs.length;
        const cleanups = refs.map((ref, i) => {
            const v = ref.current;
            if (!v) return () => {};
            const onEnded = () => setActive((i + 1) % total);
            v.addEventListener("ended", onEnded);
            return () => v.removeEventListener("ended", onEnded);
        });
        return () => cleanups.forEach((fn) => fn());
    }, []);

    useEffect(() => {
        refs.forEach((ref, i) => {
            const v = ref.current;
            if (!v) return;
            if (i === active) {
                v.currentTime = 0;
                v.playbackRate = VIDEOS[i].rate ?? 1.0;
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, [active]);

    return (
        <main id="main-content" className="main main-projects main-projects-eum">
            <section className="section section-hero">
                <div className="video-wrapper" role="group" aria-label="Eum 프로토타입 데모">
                    {VIDEOS.map((v, i) => {
                        const isActive = i === active;
                        const frameClass =
                            v.frame === "phone"
                                ? `phone-frame phone-frame-${v.key}`
                                : `monitor-frame monitor-frame-${v.key}`;
                        const videoEl = (
                            <video
                                ref={refs[i]}
                                className={`video-item video-item-${v.key}`}
                                src={asset(v.src)}
                                width={v.w}
                                height={v.h}
                                muted
                                playsInline
                                preload="metadata"
                                aria-label={`Eum 프로토타입 데모 ${i + 1}`}
                            />
                        );
                        return (
                            <div
                                key={v.key}
                                className={`${frameClass}${isActive ? " active" : ""}`}
                                aria-hidden={!isActive}
                            >
                                {v.frame === "monitor" ? (
                                    <div className="monitor-frame-screen">{videoEl}</div>
                                ) : (
                                    videoEl
                                )}
                                {v.frame === "phone" && (
                                    <img
                                        className="phone-frame-bezel"
                                        src="/images/iPhone 17 Pro Max - Deep Blue - Portrait.png"
                                        alt=""
                                        aria-hidden="true"
                                        width={1470}
                                        height={3000}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="section-content">
                    <h2 className="hero-marquee">Eum</h2>
                    <p className="hero-headline">환자와 의사를 이음.</p>
                    <p className="hero-violator">기록이 진료가 되고, 진료가 이해로 남는.</p>
                    <Link
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-elevated"
                    >
                        Eum Demo 체험하기
                    </Link>
                </div>
            </section>
            <section className="section section-highlight">
                <div className="section-content">
                    <h2 className="visuallyhidden">Eum Highlight</h2>
                    <p className="typography-highlight">
                        환자 기록을 진료에 연결하고,
                        <br />
                        의사의 판단과 환자의 이해를 잇는
                        <br />
                        AI 보조 커뮤니케이션 서비스.
                    </p>
                    <div className="snapshot">
                        <dl>
                            <div>
                                <dt>Duration</dt>
                                <dd>10 Weeks</dd>
                            </div>
                            <div>
                                <dt>Type</dt>
                                <dd>Personal Project &middot; End-to-End Project</dd>
                            </div>
                            <div>
                                <dt>My Role</dt>
                                <dd>
                                    Product Designer &middot; Product Engineer &middot; AI-Assisted
                                    Prototyping &middot; Vibe-coded prototype development
                                </dd>
                            </div>
                            <div>
                                <dt>Focus</dt>
                                <dd>Patient-Doctor Communication &middot; Medical UX</dd>
                            </div>
                            <div>
                                <dt>Contribution</dt>
                                <dd>
                                    Service Flow Design &middot; AI Workflow Design &middot;
                                    Multi-model Pipeline &middot; Prototype Validation
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            <SectionKeyScreens />
            <section id="overview" className="section section-projects-overview">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow">Project Overview</h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-large-emphasize">
                            바이브 코딩으로 직접 설계 &middot; 구현한
                            <br />
                            AI 보조 진료 서비스.
                        </p>
                        <p className="headline-regular">
                            환자기록을 정리해 의사는 빨리 판단하고,
                            <br />
                            환자는 결과를 쉽게 이해할 수 있도록 했습니다.
                        </p>
                    </div>
                </div>
            </section>
            <section id="background" className="section section-projects-background">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow-emphasize-strong">Background</h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-large">
                            진료 결과는 정상이었지만,
                            <br />
                            환자의 증상은 계속 됐고
                            <br />
                            병원을 전전하는 계기가 됐다.
                        </p>
                    </div>
                    <p>
                        의사는 판단을 마쳤지만, 검사 결과는 정상인데 증상이 계속되는(PPS/MUS) 환자는
                        왜 그런 판단인지, 이후 어떻게 관리해야 하는지 모른 채 돌아갔습니다. 이
                        문제가 가장 선명한 곳은 1차의료기관이었습니다. 동네 의원은 환자의 첫
                        접점이고, 지속 증상이 자주 모이며, 5분이라는 진료 시간이 환자와 의사
                        모두에게 소통의 제약이 되기 때문입니다.
                    </p>
                </div>
            </section>
            <section
                id="designProcess"
                className="section section-design-process section-dp-double-diamond section-half-padding"
            >
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow-emphasize-strong">Double Diamond</h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-large">
                            문제를 넓게 보고 핵심만 남긴 뒤,
                            <br />
                            바이브 코딩으로 프로토타입까지.
                        </p>
                    </div>
                    <p>
                        병명이나 기능부터 정하지 않고, 환자와 의사 사이에서 무엇이 끊기는지 먼저
                        찾았습니다. 그 끊김을 줄이는 최소 진료 연결 서비스로 좁혔습니다.
                    </p>
                </div>
            </section>
            <section className="section section-dd-discover section-half-padding">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow-emphasize-medium">
                            01. Discover &middot; 답답함을 읽음.
                        </h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            환자는 정상인데 증상이 계속되는 답답함과 막막함이,
                            <br />
                            의사는 짧은 시간안에 파악할 정보 구조의 부족이 문제.
                        </p>
                    </div>
                    <p>
                        문헌 15개, 환자 텍스트 데이터, 환자 · 의사 인터뷰를 함께 보니 환자 쪽에서는
                        &apos;정상&apos;이라는 결과가 안심이 아니라 답답함으로 이어졌고, 의사
                        쪽에서는 짧은 진료 안에 핵심을 파악할 수 있는 정보 구조가 부족했습니다.
                    </p>
                    <div className="ai-workflow">
                        <dl>
                            <dt>AI 워크플로우</dt>
                            <dd>
                                AI로 리서치 자료를 빠르게 정리 &middot; 비교해, 핵심 문제를 찾는
                                속도를 높였습니다.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="card-content">
                    <h3 className="card-eyebrow">Secondary Research.</h3>
                    <div className="card-wrapper">
                        <div className="card-set-full-bleed">
                            <div className="content-body">
                                <h4 className="eyebrow">문헌 분석</h4>
                                <p className="headline">
                                    시간 제약 안에서 의사와 환자는
                                    <br />
                                    충분히 소통하지 못했다.
                                </p>
                                <p>
                                    핵심 문제는 정보 부족이 아니라, 환자 경험이 임상 정보로 번역되지
                                    않는 데 있었습니다. 15개 문헌에서 안심 실패, 번역 실패, 시간
                                    압박을 핵심 문제로 정리한 뒤, 환자 텍스트와 인터뷰로
                                    검증했습니다.
                                </p>
                                <div className="tags">
                                    <ul>
                                        <li>#문헌조사</li>
                                        <li>#키워드도출</li>
                                        <li>#코딩프레임설계</li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <Link
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-tertiary"
                                    >
                                        원문 데이터 보기 &#xE001;
                                    </Link>
                                </div>
                            </div>
                            <div className="content-image">
                                <picture></picture>
                            </div>
                        </div>
                        <div className="card-set-full-bleed">
                            <div className="content-body">
                                <h4 className="eyebrow">환자 데이터 마이닝</h4>
                                <p className="headline">
                                    진료 결과를 받아들이지 못한 환자는
                                    <br />
                                    스스로 답을 차아 검색을 반복했다.
                                </p>
                                <p>
                                    가장 자주 나타난 문제는 진료 결과가 환자에게 이해되지 않는다는
                                    것이었고, 환자는 답을 찾아 같은 검색을 반복했습니다.
                                </p>
                                <div className="tags">
                                    <ul>
                                        <li>#온라인텍스트코딩</li>
                                        <li>#Python</li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <Link
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-tertiary"
                                    >
                                        원문 데이터 보기 &#xE001;
                                    </Link>
                                </div>
                            </div>
                            <div className="content-image">
                                <picture></picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <h3 className="card-eyebrow">Primary Research.</h3>
                    <div className="card-wrapper">
                        <div className="card-set-full-bleed">
                            <div className="content-body">
                                <h4 className="eyebrow">사용자 인터뷰</h4>
                                <p className="headline">
                                    환자는 병원을 전전하며 답을 찾았지만 달라지지 않았고,
                                    <br />
                                    의사는 짧은 시간 안에 환자를 온전히 파악하기 어려워했다.
                                </p>
                                <p>
                                    문헌과 온라인 데이터만으로는 이 상황이 진료 현장에서 실제로
                                    어떻게 벌어지는지 확인하기 어려웠습니다. 그래서 사전 인터뷰로
                                    질문을 다듬고, 환자와 의사를 1:1로 만나 실제 경험을 들었습니다.
                                    다음으로 환자와 의료진 관점을 따로 정리한 뒤, 어디서 어긋나는지
                                    비교했습니다.
                                </p>
                                <p>
                                    다음으로 환자와 의료진 관점을 따로 정리한 뒤, 어디서 어긋나는지
                                    비교했습니다.
                                </p>
                                <div className="tags">
                                    <ul>
                                        <li>#사전서면인터뷰</li>
                                        <li>#1:1심층인터뷰</li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <Link
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-tertiary"
                                    >
                                        원문 데이터 보기 &#xE001;
                                    </Link>
                                </div>
                            </div>
                            <div className="content-image">
                                <picture></picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-dd-define section-half-padding">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow-emphasize-medium">
                            02. define &middot; 소통의 끊김을 읽음.
                        </h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            진료시간 5분은
                            <br />
                            환자와 의사 모두에게 소통하기 부족한 시간.
                        </p>
                    </div>
                    <p>
                        검사 결과가 정상이어도 환자에겐 불안이 남았고, 환자 경험은 짧은 진료 안에서
                        충분히 쓰이지 못했습니다. 문제를 &apos;환자 기록 &rarr; 진료 맥락, 진료 결과
                        &rarr; 환자 이해와 다음 행동&apos;이 끊기는 구조로 정의했습니다.
                    </p>
                    <div className="ai-workflow">
                        <dl>
                            <dt>AI 워크플로우</dt>
                            <dd>
                                AI로 흩어진 인사이트를 묶고 비교해, 가장 먼저 풀 문제를
                                정의했습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className="card-callout-wrapper">
                        <h3 className="visuallyhidden">환자와 의료진에게 필요했던 것들</h3>
                        <div className="card-column-2">
                            <div className="card-callout">
                                <h4 className="eyebrow-small patient">
                                    &quot;환자에게 필요했던 것&quot;
                                </h4>
                                <p className="headline">
                                    왜 그런 결과이고, 다음에 무엇을 해야 하는지.
                                </p>
                                <p>
                                    정상이라는 말은 환자에게 정보가 아니라 &quot;갈 길이
                                    없다&quot;는 상태로 느껴졌고, 환자가 원한 것은 결과 한 줄이
                                    아니라 이유와 다음 단계가 연결된 구조였습니다.
                                </p>
                            </div>
                            <div className="card-callout">
                                <h4 className="eyebrow-small doctor">
                                    &quot;의료진에게 필요했던 것&quot;
                                </h4>
                                <p className="headline">짧은 시간 안에 빠르게 훑을 수 있는 요약.</p>
                                <p>
                                    의료진에게 더 필요한 것은 더 많은 정보가 아니라, 판단에 바로 쓸
                                    수 있는 핵심 정보와 한눈에 읽히는 요약 포맷이었습니다.
                                    소스에서도 최소 의사결정 정보와 선호 포맷을 따로 구조화했고,
                                    &quot;눈에 팍 보이게&quot; 읽히는 정보가 필요하다는 표현이
                                    반복되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
