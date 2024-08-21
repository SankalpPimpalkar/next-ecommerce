import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full min-h-screen max-w-6xl mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}