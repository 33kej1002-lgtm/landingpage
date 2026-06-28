import { Award, HeartHandshake, BookOpen, UserCheck } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "32년 공직 리더십",
      desc: "오랜 행정 경험으로 누구보다 공공·기업 업무 생태계와 보고 체계를 깊이 이해합니다.",
    },
    {
      icon: HeartHandshake,
      title: "따뜻한 눈높이 소통",
      desc: "새로운 기술이 두려운 초보자와 40~60대 학습자도 편안하게 익히도록 친절히 이끕니다.",
    },
    {
      icon: BookOpen,
      title: "실무 직결 강의",
      desc: "단순 이론을 넘어 바로 다음 날 업무와 일상에 적용하는 실용적인 커리큘럼을 제공합니다.",
    },
    {
      icon: UserCheck,
      title: "스피치 자신감 완성",
      desc: "정확한 발성·발체 훈련으로 어디서나 당당하고 설득력 있게 말하는 자신감을 만들어 드립니다.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#B8860B] font-bold text-sm uppercase tracking-wider bg-[#FDF6EA] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
            About 꿀쌤 김은정
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] tracking-tight">
            풍부한 경험과 따뜻한 목소리로<br />
            세상과 기술을 연결합니다
          </h2>
          <p className="text-lg text-[#6E5E55] leading-relaxed">
            32년간의 행정 현장에서 맺은 소중한 인연들과 노하우를 바탕으로,<br className="hidden sm:inline" />
            빠르게 변화하는 AI 디지털 시대에도 모두가 소외됨 없이 성장할 수 있도록 돕고 있습니다.
          </p>
        </div>

        {/* Story Banner Box */}
        <div className="bg-[#F6F2EB] rounded-3xl p-8 sm:p-12 border border-[#EAE3D9] warm-shadow mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-[#2C221E]">
              <h3 className="text-2xl font-bold text-[#B8860B] flex items-center gap-2">
                <span>🍯</span> 왜 '꿀쌤' 김은정인가요?
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#4A3B32]">
                어렵게 느껴지는 ChatGPT, Gemini, NotebookLM 등 생소한 AI 용어도 꿀처럼 달콤하고 쉽게 이해시켜 드린다고 해서 수강생분들이 붙여주신 친근한 애칭입니다.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#4A3B32]">
                32년 공직 생활 동안 쌓아온 정교한 보고서 작성법, 행정 처리 노하우, 그리고 사람의 마음을 움직이는 스피치 기술을 결합하여, 학습자가 당장 업무성과를 내고 삶의 자신감을 되찾도록 돕는 것이 저의 사명입니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#EAE3D9] text-center shadow-sm w-full max-w-xs">
                <div className="text-4xl font-extrabold text-[#B8860B] mb-1">32 Years</div>
                <div className="text-sm font-semibold text-[#2C221E]">행정 전문 노하우</div>
                <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-3" />
                <div className="text-xs text-[#6E5E55]">공공기관·기업·성인학습자<br />맞춤형 프레임워크</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FDFBF7] p-7 rounded-2xl border border-[#EAE3D9] hover:border-[#D4AF37] transition-all hover:-translate-y-1 warm-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FDF6EA] flex items-center justify-center border border-[#D4AF37]/30 text-[#B8860B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C221E]">{item.title}</h4>
                  <p className="text-sm text-[#6E5E55] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
