import Image from "next/image";
import { Sparkles, Phone, MessageCircle, Mic, Bot, FileText } from "lucide-react";

export default function HeroSection() {
  const keywords = [
    { label: "32년 공직 경험", icon: FileText },
    { label: "생성형 AI 전문강사", icon: Bot },
    { label: "스피치 & 보이스 트레이닝", icon: Mic },
    { label: "행정 업무 자동화", icon: Sparkles },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FDF9F3] to-[#F6F2EB]">
      {/* Decorative Warm Background Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FDF6EA] to-[#EAE3D9]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Pill Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6EA] border border-[#D4AF37]/30 text-[#B8860B] font-semibold text-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>32년 차 행정공무원 & AI·스피치 강사</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C221E] leading-[1.15]">
                따뜻함과 전문성의 연결,<br />
                <span className="gold-gradient-text">꿀쌤 김은정</span>입니다.
              </h1>
            </div>

            {/* One-Line Intro Highlight */}
            <p className="text-xl sm:text-2xl font-medium text-[#4A3B32] leading-relaxed bg-[#FFFFFF]/80 backdrop-blur-sm p-5 rounded-2xl border border-[#EAE3D9] warm-shadow">
              “32년 행정 경험과 따뜻한 목소리로 AI와 말하기를 쉽고 재미있게 연결합니다.”
            </p>

            {/* Keyword Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {keywords.map((kw, idx) => {
                const IconComponent = kw.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#EAE3D9] text-[#5C4E46] text-sm font-medium shadow-2xs hover:border-[#D4AF37] transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-[#B8860B]" />
                    {kw.label}
                  </span>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2C221E] hover:bg-[#4A3B32] text-[#FDFBF7] px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                강의 요청 / 상담하기
              </a>
              <a
                href="https://open.kakao.com/me/jinenting33"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] px-7 py-4 rounded-2xl font-semibold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#191919]" />
                카카오톡 문의
              </a>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden warm-shadow border-4 border-[#FFFFFF] bg-gradient-to-b from-[#F5F0EB] to-[#EAE3D9]">
              <Image
                src="/my_profile.jpg"
                alt="꿀쌤 김은정 강사 실제 프로필 사진"
                fill
                priority
                unoptimized
                className="object-cover object-top hover:scale-103 transition-transform duration-500"
              />
              {/* Soft Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Profile Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md p-4 rounded-2xl border border-[#EAE3D9] shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6EA] flex items-center justify-center shrink-0 border border-[#D4AF37]/40">
                  <span className="text-2xl">🍯</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C221E] text-base">40~60대 맞춤 교육 전문가</h3>
                  <p className="text-xs text-[#6E5E55]">초보자 눈높이의 다정하고 알찬 수강 환경</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
