import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://abdulla.pro.bd"),
  title: {
    default: "Abdulla Al Saba — Full-Stack Developer & UI Specialist",
    template: "%s | Abdulla Al Saba",
  },
  description:
    "Abdulla Al Saba is a Full-Stack & MERN Developer specializing in Next.js, React, Node.js, Express, MongoDB, and modern Tailwind CSS UI development.",
  keywords: [
    "Abdulla Al Saba",
    "Abdullah Al Saba",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Full-Stack Freelance Developer",
    "UI Specialist",
    "JavaScript Developer",
  ],
  authors: [{ name: "Abdulla Al Saba", url: "https://abdulla.pro.bd" }],
  creator: "Abdulla Al Saba",
  publisher: "Abdulla Al Saba",
  openGraph: {
    title: "Abdulla Al Saba — Full-Stack Developer & UI Specialist",
    description:
      "Crafting high-performance Next.js applications and conversion-focused UI/UX designs.",
    url: "https://abdulla.pro.bd",
    siteName: "Abdulla Al Saba Portfolio",
    images: [
      {
        url: "/profile/abdullaal.png",
        width: 1200,
        height: 630,
        alt: "Abdulla Al Saba Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulla Al Saba — Full-Stack Developer & UI Specialist",
    description:
      "Crafting high-performance Next.js applications and conversion-focused UI/UX designs.",
    images: ["/profile/abdullaal.png"],
    creator: "@abdulla_saba",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abdulla.pro.bd",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <JsonLd />
        <link rel="shortcut icon" href="/favicon/my-brand.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans bg-[#ECE8E1] text-[#18181B] antialiased selection:bg-[#18181B] selection:text-[#ECE8E1]">
        {children}
      </body>
    </html>
  );
}
