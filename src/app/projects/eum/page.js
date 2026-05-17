import Link from "next/link";

export default function Eum() {
    return (
        <main id="main-content" className="main main-projects main-projects-eum">
            <section className="section section-hero">
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
