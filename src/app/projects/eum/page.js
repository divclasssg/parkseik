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
                        <h2 className="section-eyebrow-emphasize">Background</h2>
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
        </main>
    );
}
