import "./_style/style.scss";
import Globalnav from "./_components/globalnav";
import Globalfooter from "./_components/globalfooter";
import { R2_ORIGIN } from "@/_lib/media";

export const metadata = {
    title: "parkseik",
    description: "parkseik 개인 사이트",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon/favicon.svg", type: "image/svg+xml" },
            {
                url: "/favicon/favicon-32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
    appleWebApp: {
        title: "parkseik",
        statusBarStyle: "black-translucent",
    },
};

export const viewport = {
    themeColor: "#1d1d1f",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <link rel="preconnect" href={R2_ORIGIN} crossOrigin="" />
                <link rel="dns-prefetch" href={R2_ORIGIN} />
            </head>
            <body>
                <a href="#main-content" className="skip-to-content">
                    본문 바로가기
                </a>
                <h1 className="visuallyhidden">PARK, Seik&apos; Portfolio</h1>
                <Globalnav />
                {children}
                <Globalfooter />
            </body>
        </html>
    );
}
