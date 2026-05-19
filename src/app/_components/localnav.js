"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import IconClose from "./icons/close";

export default function Localnav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const expandedRef = useRef(null);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        const panelHeight = isExpanded ? (expandedRef.current?.offsetHeight ?? 0) : (navRef.current?.offsetHeight ?? 0);
        const offset = panelHeight + 16 + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav ref={navRef} className={`localnav${isVisible ? " visible" : ""}`} aria-label="현재 프로젝트">
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
                                aria-expanded={isExpanded}
                                aria-controls="localnav-expanded"
                                onClick={() => setIsExpanded(true)}
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
                <div ref={expandedRef} id="localnav-expanded" className={`content-expanded-wrapper${isExpanded ? " open" : ""}`}>
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
                        <button type="button" className="button-close-expanded" onClick={() => setIsExpanded(false)}>
                            <IconClose size={24} />
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
                                <Link href="#overview" onClick={(e) => scrollToSection(e, "#overview")}>개요</Link>
                            </li>
                            <li>
                                <Link href="#background" onClick={(e) => scrollToSection(e, "#background")}>배경</Link>
                            </li>
                            <li>
                                <Link href="#designProcess" onClick={(e) => scrollToSection(e, "#designProcess")}>디자인 프로세스</Link>
                            </li>
                            <li>
                                <Link href="#keytakeaway" onClick={(e) => scrollToSection(e, "#keytakeaway")}>주요 시사점</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
