"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { asset } from "@/_lib/media";

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
        </main>
    );
}
