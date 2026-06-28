import { Cpu, Mic, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhatIDoSection() {
  const services = [
    {
      badge: "Generative AI",
      title: "생성형 AI 초보 맞춤 교육",
      icon: Cpu,
      description: "ChatGPT, Gemini, NotebookLM 등 최신 AI 도구를 어려움 없이 누구나 손쉽게 활용할 수 있도록 눈높이 맞춤으로 교육합니다.",
      details: [
        "ChatGPT & Gemini 기초부터 실무 프롬프트 작성법",
        "NotebookLM을 활용한 정보 정리 및 논문·자료 요약",
        "디지털 기기가 서툰 중장년층도 쉽게 따라 하는 실습 위주 진행",
      ],
      colorBg: "bg-[#FDFBF7]",
      borderColor: "border-[#EAE3D9]",
    },
    {
      badge: "Speech & Voice",
      title: "스피치 자신감 리프팅 강의",
      icon: Mic,
      description: "말하기의 두려움을 없애고, 정확한 발음·발성 및 1분 스피치 실습으로 명확하고 당당한 소통 전문가로 거듭납니다.",
      details: [
        "호흡, 발성, 발음 교정을 통한 따뜻하고 신뢰감 있는 목소리 완성",
        "생각을 논리정연하게 정리하여 전달하는 1분 오프닝 스피치",
        "무대 공포증 극복 및 대중 연설 리더십 트레이닝",
      ],
      colorBg: "bg-[#FDFBF7]",
      borderColor: "border-[#D4AF37]/40",
      featured: true,
    },
    {
      badge: "Admin & Smart Work",
      title: "행정 실무 & Smart 업무 자동화",
      icon: Zap,
      description: "32년 공직 현장의 깊은 경험을 바탕으로 보고서 작성, 홍보 콘텐츠 제작, 숏폼 영상 제작 및 업무 자동화를 전수합니다.",
      details: [
        "공공기관 및 기업 맞춤형 기획서·보고서 자동화 작성법",
        "AI를 활용한 SNS 카드뉴스 및 숏폼 홍보 영상 제작",
        "반복적인 행정 업무 시간을 절반으로 줄이는 스마트 팁",
      ],
      colorBg: "bg-[#FDFBF7]",
      borderColor: "border-[#EAE3D9]",
    },
  ];

  return (
    <section id="what-i-do" className="py-20 lg:py-28 bg-[#F6F2EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#B8860B] font-bold text-sm uppercase tracking-wider bg-[#FDF6EA] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
            Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] tracking-tight">
            내가 하는 일
          </h2>
          <p className="text-lg text-[#6E5E55]">
            실무 현장에서 검증된 3가지 핵심 강의 영역을 통해 수강생의 변화와 성장을 만듭니다.
          </p>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative warm-shadow ${
                  service.featured
                    ? "bg-[#FFFFFF] border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/10 scale-102"
                    : "bg-[#FFFFFF] border border-[#EAE3D9] hover:border-[#D4AF37]/50 hover:-translate-y-1"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    인기 대표 강의
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] bg-[#FDF6EA] px-3 py-1 rounded-lg border border-[#D4AF37]/20">
                      {service.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F6F2EB] flex items-center justify-center text-[#B8860B]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#2C221E] mb-3">{service.title}</h3>
                    <p className="text-sm text-[#6E5E55] leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <div className="border-t border-[#F6F2EB] pt-6 space-y-3">
                    <h4 className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">주요 학습 내용</h4>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#5C4E46] leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#F6F2EB]">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#2C221E] hover:text-[#B8860B] group"
                  >
                    <span>강의 커리큘럼 문의</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B8860B]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
