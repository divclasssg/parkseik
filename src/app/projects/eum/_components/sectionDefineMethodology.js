"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { asset } from "@/_lib/media";
import defineMethodology from "../_data/defineMethodology";

const ITEM_COUNT = defineMethodology.length;

// 이미지 타이밍 (각 아이템 로컬 진행도 0~1 기준)
const IMG_IN_END = 0.22; //  0 ~ 22% : 슬라이드 업 + fade-in (첫 이미지는 opacity 1 고정)
const IMG_DIM_START = 0.3; // 22 ~ 30% : 정지 (크리스프)
const IMG_DIM_END = 0.55; // 30 ~ 55% : opacity 1 → DIM (텍스트 진입과 동시)
// 55 ~ 82% : DIM 유지 (희미한 배경)
// 82 ~ 100%: 텍스트와 함께 DIM → 0 + 상향 드리프트

// 텍스트 타이밍
const TXT_IN_START = 0.3;
const TXT_IN_END = 0.55;
const HOLD_END = 0.82; // 55 ~ 82% : HOLD (읽기 시간)

const IMG_RISE_VH = 15;
const IMG_DRIFT_VH = 3;
const IMG_DIM_OPACITY = 0.08;
const TXT_RISE_PX = 120;

const easeOut = (t) => 1 - (1 - t) * (1 - t);
const smoothStep = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => Math.max(0, Math.min(1, v));

export default function SectionDefineMethodology() {
    const containerRef = useRef(null);
    const imageRefs = useRef([]);
    const contentRefs = useRef([]);
    const rafRef = useRef(null);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollTop = -rect.top;
        const scrollHeight = container.offsetHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const totalProgress = clamp01(scrollTop / scrollHeight);
        const segmentSize = 1 / ITEM_COUNT;

        imageRefs.current.forEach((el, i) => {
            if (!el) return;

            const local = (totalProgress - i * segmentSize) / segmentSize;
            const isFirst = i === 0;
            const isLast = i === ITEM_COUNT - 1;

            let tyVh;
            let op;

            if (local < 0) {
                tyVh = IMG_RISE_VH;
                op = 0;
            } else if (local < IMG_IN_END) {
                const t = smoothStep(local / IMG_IN_END);
                tyVh = (1 - t) * IMG_RISE_VH;
                op = isFirst ? 1 : t;
            } else if (local < IMG_DIM_START) {
                tyVh = 0;
                op = 1;
            } else if (local < IMG_DIM_END) {
                const t = easeOut((local - IMG_DIM_START) / (IMG_DIM_END - IMG_DIM_START));
                tyVh = 0;
                op = 1 - t * (1 - IMG_DIM_OPACITY);
            } else if (local < HOLD_END) {
                tyVh = 0;
                op = IMG_DIM_OPACITY;
            } else if (isLast) {
                // 마지막 아이템은 fade-out 생략 — DIM hold 유지한 채 sticky 자연 해제 → 다음 섹션 등장.
                // 트레일링 100vh 동안 op=0 빈 화면이 보였던 "여백" 회귀를 제거.
                tyVh = 0;
                op = IMG_DIM_OPACITY;
            } else if (local < 1) {
                const t = easeOut((local - HOLD_END) / (1 - HOLD_END));
                tyVh = -t * IMG_DRIFT_VH;
                op = IMG_DIM_OPACITY * (1 - t);
            } else {
                tyVh = -IMG_DRIFT_VH;
                op = 0;
            }

            el.style.transform = `translate3d(0, ${tyVh}vh, 0)`;
            el.style.opacity = String(clamp01(op));
        });

        contentRefs.current.forEach((el, i) => {
            if (!el) return;

            const local = (totalProgress - i * segmentSize) / segmentSize;
            const isLast = i === ITEM_COUNT - 1;

            let tyPx;
            let op;

            if (local < TXT_IN_START) {
                tyPx = TXT_RISE_PX;
                op = 0;
            } else if (local < TXT_IN_END) {
                const raw = (local - TXT_IN_START) / (TXT_IN_END - TXT_IN_START);
                tyPx = (1 - smoothStep(raw)) * TXT_RISE_PX;
                op = easeOut(raw);
            } else if (local < HOLD_END) {
                tyPx = 0;
                op = 1;
            } else if (isLast) {
                // 마지막 아이템은 fade-out 생략 — HOLD 유지한 채 sticky 자연 해제 → 다음 섹션 등장.
                tyPx = 0;
                op = 1;
            } else if (local < 1) {
                const raw = (local - HOLD_END) / (1 - HOLD_END);
                tyPx = -smoothStep(raw) * TXT_RISE_PX;
                op = 1 - easeOut(raw);
            } else {
                tyPx = -TXT_RISE_PX;
                op = 0;
            }

            const opClamped = clamp01(op);
            el.style.transform = `translate3d(0, ${tyPx}px, 0)`;
            el.style.opacity = String(opClamped);
            el.style.pointerEvents = opClamped > 0.5 ? "auto" : "none";
        });
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    return (
        <div className="define-methodology-scroll-container" ref={containerRef}>
            <h3 className="visuallyhidden">UX Research Methodology</h3>

            <div className="define-methodology-sticky">
                <div className="define-methodology-asset-area">
                    {defineMethodology.map((item, i) => (
                        <div
                            className="define-methodology-asset"
                            key={item.title}
                            ref={(el) => {
                                imageRefs.current[i] = el;
                            }}
                        >
                            <picture>
                                <source srcSet={`${asset(item.image.src)} 1x`} type="image/png" />
                                <img
                                    src={asset(item.image.src)}
                                    alt={item.image.alt}
                                    width={item.image.width}
                                    height={item.image.height}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    ))}
                </div>

                <div className="define-methodology-callout-area">
                    {defineMethodology.map((item, i) => (
                        <div
                            className="define-methodology-callout"
                            key={item.title}
                            ref={(el) => {
                                contentRefs.current[i] = el;
                            }}
                        >
                            <h4 className="define-methodology-callout-eyebrow">{item.title}</h4>
                            <p className="define-methodology-callout-headline">{item.headline}</p>
                            {item.paragraphs.map((paragraph, idx) => (
                                <p className="define-methodology-callout-copy" key={idx}>
                                    {paragraph}
                                </p>
                            ))}
                            <div className="tags">
                                <h5 className="visuallyhidden">UX Research Methodology keywords</h5>
                                <ul>
                                    {item.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href={item.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary"
                            >
                                {`${item.link.label} `}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
