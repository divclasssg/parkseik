"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { asset } from "@/_lib/media";
import SectionKeyScreens from "./_components/sectionkeyscreens";
import SectionDefineMethodology from "./_components/sectionDefineMethodology";

// Hero mp4 video 자동재생.
// v0.3.21~v0.3.29의 hi/lo + DPR 분기는 lo가 소스÷2로 사전 다운샘플된 H.264라
// DPR=1 모니터에서도 글자 디테일이 복원되지 않아 깨져 보임 → hi 단일로 회귀.
const VIDEOS = [
    {
        key: "01",
        src: "eum/videos/hero/final_prototype_01.mp4",
        w: 1320,
        h: 2868,
        frame: "phone",
    },
    {
        key: "02",
        src: "eum/videos/hero/final_prototype_02.mp4",
        w: 3024,
        h: 1964,
        frame: "monitor",
    },
    {
        key: "03",
        src: "eum/videos/hero/final_prototype_03.mp4",
        w: 774,
        h: 1678,
        frame: "phone",
    },
];

export default function Eum() {
    const ref0 = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const refs = [ref0, ref1, ref2];
    const [active, setActive] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const SLIDE_COUNT = 3;
    const carouselRef = useRef(null);
    const sectionRef = useRef(null);
    const activeRef = useRef(active);
    const isVisibleRef = useRef(true);

    const goToSlide = (idx) => {
        setSlideIndex(idx);
        const container = carouselRef.current;
        const items = container?.querySelectorAll(".slider-item");
        if (!items?.[idx]) return;
        items[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    useEffect(() => {
        activeRef.current = active;
    }, [active]);

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
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting;
                const v = refs[activeRef.current]?.current;
                if (!v) return;
                if (entry.isIntersecting) {
                    v.play().catch(() => {});
                } else {
                    v.pause();
                }
            },
            { threshold: 0 },
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        refs.forEach((ref, i) => {
            const v = ref.current;
            if (!v) return;
            if (i === active) {
                v.currentTime = 0;
                if (isVisibleRef.current) v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, [active]);

    return (
        <main id="main-content" className="main main-projects main-projects-eum">
            <section className="section section-hero" ref={sectionRef}>
                <div className="video-wrapper" role="group" aria-label="Eum 프로토타입 데모">
                    {VIDEOS.map((v, i) => {
                        const isActive = i === active;
                        const frameClass =
                            v.frame === "phone"
                                ? `phone-frame phone-frame-${v.key}`
                                : `monitor-frame monitor-frame-${v.key}`;
                        const resolvedSrc = asset(v.src);
                        const videoEl = (
                            <video
                                ref={refs[i]}
                                className={`video-item video-item-${v.key}`}
                                src={resolvedSrc}
                                width={v.w}
                                height={v.h}
                                muted
                                playsInline
                                preload="auto"
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
                                    <>
                                        {videoEl}
                                        <img
                                            className="phone-frame-bezel"
                                            src="/images/iPhone 17 Pro Max - Deep Blue - Portrait.png"
                                            alt=""
                                            aria-hidden="true"
                                            width={1470}
                                            height={3000}
                                        />
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="section-content">
                    <div className="hero-body">
                        <div>
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
                    </div>
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
            <section id="overview" className="section section-standalone section-projects-overview">
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
            <section
                id="background"
                className="section section-standalone section-projects-background"
            >
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
                <div className="card-group">
                    <h3 className="card-group-label">Secondary Research.</h3>
                    <div className="card card-bleed">
                        <div className="card-body">
                            <h4 className="eyebrow">문헌 분석</h4>
                            <p className="headline">
                                시간 제약 안에서 의사와 환자는
                                <br />
                                충분히 소통하지 못했다.
                            </p>
                            <p>
                                핵심 문제는 정보 부족이 아니라, 환자 경험이 임상 정보로 번역되지
                                않는 데 있었습니다. 15개 문헌에서 안심 실패, 번역 실패, 시간 압박을
                                핵심 문제로 정리한 뒤, 환자 텍스트와 인터뷰로 검증했습니다.
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
                                    className="button-secondary"
                                >
                                    원문 데이터 보기 &#xE001;
                                </Link>
                            </div>
                        </div>
                        <div className="card-media">
                            <picture>
                                <source
                                    srcSet={`${asset(
                                        "eum/screenshots/discover/secondary_research/secondary_research_01_o6zgrd.png"
                                    )} 1x`}
                                    type="image/png"
                                />
                                <img
                                    src={asset(
                                        "eum/screenshots/discover/secondary_research/secondary_research_01_o6zgrd.png"
                                    )}
                                    alt="문헌 분석 원본 자료 캡쳐본"
                                    width={1178}
                                    height={1008}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="card card-bleed">
                        <div className="card-body">
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
                                    className="button-secondary"
                                >
                                    원문 데이터 보기 &#xE001;
                                </Link>
                            </div>
                        </div>
                        <div className="card-media">
                            <picture>
                                <source
                                    srcSet={`${asset(
                                        "eum/screenshots/discover/secondary_research/secondary_research_02_dkrjye.png"
                                    )} 1x`}
                                    type="image/png"
                                />
                                <img
                                    src={asset(
                                        "eum/screenshots/discover/secondary_research/secondary_research_02_dkrjye.png"
                                    )}
                                    alt="환자 데이터 마이닝 원본 자료 캡쳐본"
                                    width={1164}
                                    height={1008}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <h3 className="card-group-label">Primary Research.</h3>
                    <div className="card card-bleed">
                        <div className="card-body">
                            <h4 className="eyebrow">사용자 인터뷰</h4>
                            <p className="headline">
                                환자는 병원을 전전하며 답을 찾았지만 달라지지 않았고,
                                <br />
                                의사는 짧은 시간 안에 환자를 온전히 파악하기 어려워했다.
                            </p>
                            <p>
                                문헌과 온라인 데이터만으로는 이 상황이 진료 현장에서 실제로 어떻게
                                벌어지는지 확인하기 어려웠습니다. 그래서 사전 인터뷰로 질문을
                                다듬고, 환자와 의사를 1:1로 만나 실제 경험을 들었습니다. 다음으로
                                환자와 의료진 관점을 따로 정리한 뒤, 어디서 어긋나는지 비교했습니다.
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
                                    className="button-secondary"
                                >
                                    원문 데이터 보기 &#xE001;
                                </Link>
                            </div>
                        </div>
                        <div className="card-media">
                            <picture>
                                <source
                                    srcSet={`${asset(
                                        "eum/screenshots/discover/primary_research/primary_research_cshxll.png"
                                    )} 1x`}
                                    type="image/png"
                                />
                                <img
                                    src={asset(
                                        "eum/screenshots/discover/primary_research/primary_research_cshxll.png"
                                    )}
                                    alt="사용자 인터뷰 원본 자료 캡쳐본"
                                    width={1050}
                                    height={1008}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
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
                    <div className="card-group col-2" aria-label="환자와 의료진에게 필요했던 것들">
                        <div className="card">
                            <div className="card-body">
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
                        </div>
                        <div className="card">
                            <div className="card-body">
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
                <SectionDefineMethodology />
            </section>
            <section className="section section-dd-develop">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="section-eyebrow-emphasize-medium">
                            03. Develop &middot; 판단과 이해를 이음.
                        </h2>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            기능을 줄이고,
                            <br />
                            환자 기록 &rarr; 의사 판단 &rarr; 환자 이해로
                            <br />
                            이어지는 최소 구조만.
                        </p>
                    </div>
                    <p>
                        기능 수가 아니라 핵심 루프가 기준이었습니다. 기록이 진료로 연결되고, 판단이
                        환자 이해로 이어지는 흐름만 남겼습니다.
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
                    <div className="button-wrapper">
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-primary"
                        >
                            원문 데이터 보기 &#xE001;
                        </Link>
                    </div>
                </div>
                <div className="card-group col-3" aria-label="Develop 방법론">
                    <div className="card card-tile">
                        <div className="card-body">
                            <h4 className="eyebrow">브레인스토밍.</h4>
                            <p>
                                가능한 기능을 먼저 넓게 펼쳤습니다. 처음부터 답을 좁히면 핵심
                                가치보다 개별 기능에 끌릴 위험이 커서, 환자와 의사 양쪽의 아이디어를
                                폭넓게 수집했습니다.
                            </p>
                        </div>
                        <div className="card-media">
                            <picture></picture>
                        </div>
                    </div>
                    <div className="card card-tile">
                        <div className="card-body">
                            <h4 className="eyebrow">MoSCoW.</h4>
                            <p>
                                핵심 루프에 필요한 기능만 다시 좁혔습니다. 모든 기능을 같은 무게로
                                두지 않고, 준비 -- 연결 -- 판단 -- 이해 흐름을 직접 만드는 기능을
                                우선순위 기준으로 걸러냈습니다.
                            </p>
                        </div>
                        <div className="card-media">
                            <picture></picture>
                        </div>
                    </div>
                    <div className="card card-tile">
                        <div className="card-body">
                            <h4 className="eyebrow">최종 MVP 요약.</h4>
                            <p>
                                끝가지 남길 최소 범위를 확정했습니다. 우선순위 결과를 다시 정리해,
                                판단과 이해를 잇는 핵심 루프만 MVP에 남기고 나머지는 보류하거나 확장
                                범위로 분리했습니다.
                            </p>
                        </div>
                        <div className="card-media">
                            <picture></picture>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-standalone section-dd-develop-mvp">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="visuallyhidden">03. Develop</h2>
                        <h3 className="section-eyebrow">MVP &middot; Minimum Viable Product</h3>
                    </div>
                    <div className="section-headline">
                        <p className="headline-large-emphasize">
                            AI로 환자는 증상을 쉽게 기록하고,
                            <br />
                            의사는 핵심 정보를 빠르게 파악하며,
                            <br />
                            진료 결과는 환자가 이해하고 치료 계획으로
                            <br />
                            이어지게 하는 최소 진료 연결 서비스.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section section-dd-develop-review">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="visuallyhidden">03. Develop</h2>
                        <h3 className="section-eyebrow">검토 기준 &middot; 규제와 원칙 먼저.</h3>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            의료는 작은 오해도 위험할 수 있고
                            <br />법 &middot; 규제가 AI 역할과 환자 데이터 처리를 제한하므로,
                            <br />
                            화면보다 AI의 역할 범위 &middot; 의사 판단의 정보 위계 &middot; 환자
                            설명 원칙을 먼저 검토.
                        </p>
                    </div>
                    <p>
                        화면 설계에 들어가기 전, 관련 법과 규제가 AI의 역할 범위와 환자 데이터 처리
                        방식에 어떤 제약을 두는지, 의료 데이터 하이어라키가 짧은 진료 안에서 의사가
                        무엇부터 빠르게 확인해야 하는지를 어떻게 구조화하는지, 의료 UX writing
                        원칙이 환자 설명과 건강 문해력 측면에서 어떤 기준을 요구하는지를 먼저 검토한
                        뒤, 이를 바탕으로 와이어프레임과 프로토타입의 정보 구조와 문구 체계를
                        설계했습니다.
                    </p>
                    <div className="ai-workflow">
                        <dl>
                            <dt>AI 워크플로우</dt>
                            <dd>
                                법 &middot; 규제, 데이터 위계, 설명 원칙을 먼저 검토해 AI의 역할
                                범위와 단계적 구조를 확정한 뒤, 그 위에 화면 설계를 올렸습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className="card-group col-3" aria-label="중점적으로 검토한 3가지">
                        <div className="card card-white">
                            <div className="card-body">
                                <h5 className="eyebrow">관련 법과 규제 검토.</h5>
                                <p>
                                    AI는 진단이 아니라 참고 정보 범위로 제한해야 했고, 민감한
                                    건강정보와 국외 이전에는 별도 동의가 필요했으며, 의사용 화면에는
                                    비닫힘 경고와 검토 책임 고지가 계속 노출되어야 했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="card card-white">
                            <div className="card-body">
                                <h5 className="eyebrow">의료 데이터 하이어라키 검토.</h5>
                                <p>
                                    의사용 패널은 좁은 플로팅 구조 안에서 핵심 판단 정보를 먼저
                                    보여줘야 했기 때문에, 알레르기 &middot; 주호소 &middot; 위험
                                    신호를 우선 배치하고 나머지 데이터는 단계적으로 확인할 수 있는
                                    구조로 정리했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="card card-white">
                            <div className="card-body">
                                <h5 className="eyebrow">의료 UX writing 원칙 검토.</h5>
                                <p>
                                    환자용 문구는 의학적으로 정확해야 할 뿐 아니라, 건강 문해력을
                                    고려해 쉬운 말을 먼저 쓰고 필요한 경우에만 의학용어를 병기해야
                                    했으며, AI가 풀어쓴 내용이라는 점도 명확히 드러나야 했습니다.
                                    의사용 화면 역시 320-360px 안에서 빠르게 읽을 수 있도록 간결한
                                    텍스트 기준이 필요했습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-dd-develop-wireframe-to-prototype section-half-padding">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="visuallyhidden">03. Develop</h2>
                        <h3 className="section-eyebrow">
                            Wireframe &rarr; prototype &middot; 프로토타입까지 이음.
                        </h3>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            손스케치로 구조를 잡고,
                            <br />
                            바이브 코딩으로
                            <br />
                            실제 AI가 작동하는 프로토타입까지.
                        </p>
                    </div>
                    <p>
                        손스케치와 로우파이로 구조를 잡은 뒤, 바이브 코딩으로 실제 AI가 연결된
                        프로토타입까지 만들었습니다.
                    </p>
                    <div className="ai-workflow">
                        <dl>
                            <dt>AI 워크플로우</dt>
                            <dd>
                                바이브 코딩과 실제 AI 연결로 핵심 화면을 작동하는 프로토타입으로
                                구현했습니다.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="carousel-slider" ref={carouselRef}>
                    <div className="slider-wrapper">
                        <div className="slider-item slider-item-steps">
                            <div className="slider-body">
                                <div className="slider-intro">
                                    <h4 className="slider-eyebrow">Key Screen 01.</h4>
                                    <h5 className="slider-headline">증상 기록 &middot; 환자</h5>
                                    <p className="slider-subhead">
                                        환자의 자유 입력을, 의사가 읽을 수 있는 기록으로 바꾸는
                                        시작점입니다.
                                    </p>
                                </div>
                                <div className="slider-steps">
                                    <dl className="slider-step-list">
                                        <div className="slider-step">
                                            <dt>Sketch</dt>
                                            <dd>
                                                증상 입력의 핵심 요소와 대화 흐름을 빠르게 탐색.
                                            </dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Low-fi</dt>
                                            <dd>
                                                질문, 답변, 심각도 선택, 기록 저장의 우선순위를
                                                정리.
                                            </dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Prototype</dt>
                                            <dd>
                                                바이브 코딩으로 실제 입력과 구조화 저장이 작동하도록
                                                구현.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="slider-visual"></div>
                        </div>
                        <div className="slider-item slider-item-steps">
                            <div className="slider-body">
                                <div className="slider-intro">
                                    <h4 className="slider-eyebrow">Key Screen 02.</h4>
                                    <h5 className="slider-headline">대시보드 &middot; 의사</h5>
                                    <p className="slider-subhead">
                                        짧은 진료 안에서 환자 정보와 AI 브리핑을 빠르게 파악하는
                                        화면입니다.
                                    </p>
                                </div>
                                <div className="slider-steps">
                                    <dl className="slider-step-list">
                                        <div className="slider-step">
                                            <dt>Sketch</dt>
                                            <dd>의사가 먼저 봐야 할 정보와 화면 계층 정리.</dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Low-fi</dt>
                                            <dd>프로필, 기록, AI 참고 정보를 읽는 순서를 정리.</dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Prototype</dt>
                                            <dd>
                                                바이브 코딩으로 실제 AI 브리핑이 연결된 상태로 구현.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="slider-visual"></div>
                        </div>
                        <div className="slider-item slider-item-steps">
                            <div className="slider-body">
                                <div className="slider-intro">
                                    <h4 className="slider-eyebrow">Key Screen 03.</h4>
                                    <h5 className="slider-headline">진료 요약 &middot; 환자</h5>
                                    <p className="slider-subhead">
                                        의사의 결과를 환자가 다시 확인할 수 있게 정리한 화면입니다.
                                    </p>
                                </div>
                                <div className="slider-steps">
                                    <dl className="slider-step-list">
                                        <div className="slider-step">
                                            <dt>Sketch</dt>
                                            <dd>환자에게 꼭 남겨야 할 결과 정보의 뼈대를 정리.</dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Low-fi</dt>
                                            <dd>
                                                결과, 계획, 처방, 다음 안내의 읽는 순서를 구조화.
                                            </dd>
                                        </div>
                                        <div className="slider-step">
                                            <dt>Prototype</dt>
                                            <dd>
                                                바이브 코딩으로 결과와 다음 안내를 다시 볼 수 있는
                                                화면으로 구현.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="slider-visual"></div>
                        </div>
                    </div>
                </div>
                <div className="slider-nav">
                    <div className="slider-dots">
                        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                            <button
                                key={i}
                                className={`slider-dot${slideIndex === i ? " active" : ""}`}
                                onClick={() => goToSlide(i)}
                                aria-label={`슬라이드 ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        className="slider-arrow slider-arrow-prev"
                        onClick={() => goToSlide(Math.max(0, slideIndex - 1))}
                        disabled={slideIndex === 0}
                        aria-label="이전 슬라이드"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        className="slider-arrow slider-arrow-next"
                        onClick={() => goToSlide(Math.min(SLIDE_COUNT - 1, slideIndex + 1))}
                        disabled={slideIndex === SLIDE_COUNT - 1}
                        aria-label="다음 슬라이드"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </section>
            <section className="section section-dd-develop-usability-testing section-half-padding">
                <div className="section-content">
                    <div className="section-eyebrow-wrapper">
                        <h2 className="visuallyhidden">03. Develop</h2>
                        <h3 className="section-eyebrow">
                            Usability Testing &middot; 더 선명하게 잇길.
                        </h3>
                    </div>
                    <div className="section-headline">
                        <p className="headline-regular">
                            환자는 더 개인화된 설명을,
                            <br />
                            의사는 더 빠른 요약을.
                        </p>
                    </div>
                    <p>
                        핵심 문제는 기능 부족이 아니라, 기록 &middot; AI &middot; 진료가 연결돼도
                        환자에게는 이해로, 의사에게는 판단으로 바로 이어지지 않는 구조였습니다.
                    </p>
                    <p>
                        사용성 테스트는 MVP가 어디를 더 선명하게 해야 이 강점이 제대로 읽히는지를
                        확인 할 수 있는 과정이었습니다.
                    </p>
                    <p>
                        검증 결과, 사용자가 크게 느낀 가치는 기록 기능 자체보다 기록이 진료와 이해로
                        이어지는 연결에 있었습니다. 그래서 이후 수정도 기능을 바꾸는 데보다, 왜 이런
                        판단이 나왔는지와 다음에 무엇을 해야 하는지가 더 먼저 읽히도록 메시지, 정보
                        구조, 출처 표기, AI 역할 구분을 다듬는 데 집중했습니다.
                    </p>
                </div>
            </section>
        </main>
    );
}
