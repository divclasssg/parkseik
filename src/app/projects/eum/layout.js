import Localnav from "@/app/_components/localnav";

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
