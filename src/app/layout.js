import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const font = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.intro,
};

const themeScript = `try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={font.className}>
        <noscript><style>{".loader{display:none}"}</style></noscript>
        <ThemeProvider>
          <Loader name={site.name} />
          <div className="relative z-10 min-h-screen bg-bg" style={{ marginBottom: "var(--footer-h, 28rem)" }}>
            <CursorGlow />
            <Navbar name={site.name} short={site.short} />
            {children}
          </div>
          <Footer site={site} />
        </ThemeProvider>
      </body>
    </html>
  );
}
