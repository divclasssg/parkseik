import Localnav from "@/app/_components/localnav";
import "../_style/projects.style.scss";
import "./_style/projects.eum.scss";

export const metadata = {
    title: "Eum — parkseik",
    description: "Eum — Case Study, Medical",
};

export default function EumLayout({ children }) {
    return (
        <>
            <Localnav />
            {children}
        </>
    );
}
