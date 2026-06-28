import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "꿀쌤 김은정 | 32년 행정 경험의 AI & 스피치 강사",
  description: "32년 행정 경험과 따뜻한 목소리로 AI와 말하기를 쉽고 재미있게 연결하는 강사 꿀쌤 김은정입니다. ChatGPT, Gemini, NotebookLM, 스피치 훈련, 행정 자동화 교육.",
  keywords: ["꿀쌤 김은정", "AI강사", "스피치강사", "행정자동화", "ChatGPT교육", "Gemini교육", "NotebookLM", "1분스피치"],
  openGraph: {
    title: "꿀쌤 김은정 | AI & 스피치 강사",
    description: "32년 행정 경험과 따뜻한 목소리로 AI와 말하기를 쉽고 재미있게 연결합니다.",
    images: ["/my_profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#2C221E]">{children}</body>
    </html>
  );
}
