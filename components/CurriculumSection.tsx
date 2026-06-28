import { Sparkles, MonitorPlay, MessageSquare, ShieldCheck, Clock, Target, Users } from "lucide-react";

export default function CurriculumSection() {
  const courses = [
    {
      category: "생성형 AI & 디지털 역량",
      items: [
        {
          title: "생성형 AI(ChatGPT, Gemini, NotebookLM) 기초 및 활용",
          target: "AI를 전혀 몰라도 바로 시작하고 싶은 입문자 & 중장년층",
          duration: "2시간 ~ 4시간 특강/실습",
          desc: "프롬프트 입문의 기본 원리부터 자료 검색, 문서 요약, 아이디어 기획까지 쉽고 확실하게 배웁니다.",
        },
        {
          title: "AI 숏폼 콘텐츠 & 마케팅 홍보 영상 만들기",
          target: "자신만의 브랜드나 업무를 숏폼으로 알리고 싶은 분",
          duration: "3시간 ~ 6시간 워크숍",
          desc: "AI 대본 작성, AI 아바타 및 음성 생성 도구를 활용하여 빠르게 매력적인 숏폼 영상을 제작합니다.",
        },
      ],
    },
    {
      category: "스피치 & 커뮤니케이션",
      items: [
        {
          title: "따뜻한 보이스 트레이닝 & 명확한 발성 훈련",
          target: "발음이 뭉개지거나 목소리에 신뢰감을 더하고 싶은 분",
          duration: "2시간 ~ 4시간 훈련",
          desc: "복식 호흡, 공명 발성, 정확한 발음 교정을 통해 듣기 편안하고 매력적인 음성을 만듭니다.",
        },
        {
          title: "당당한 나를 만드는 1분 오프닝 스피치",
          target: "회의, 발표, 인삿말 등 무대 공포증을 극복하고 싶은 분",
          duration: "2시간 ~ 4시간 실습",
          desc: "핵심 메시지를 임팩트 있게 전달하는 스피치 구조화 및 자신감 넘치는 무대 매너를 습득합니다.",
        },
      ],
    },
    {
      category: "공직 & 기업 행정 자동화",
      items: [
        {
          title: "32년 공직 노하우 기반 스마트 보고서 작성법",
          target: "보고서 작성이 부담스러운 공공기관 및 기업 실무자",
          duration: "3시간 ~ 6시간 교육",
          desc: "상사가 한눈에 알아보는 한 페이지 보고서 구조 설계와 AI를 결합한 초속 보고서 작성 팁.",
        },
        {
          title: "행정 업무 자동화 및 디지털 워크 리더십",
          target: "반복 업무 부담을 줄이고 효율을 극대화하고 싶은 조직",
          duration: "3시간 ~ 4시간 특강",
          desc: "실무 문서 자동화, 정보 수집 자동 프로세스 구축으로 칼퇴근과 업무 몰입도를 동시에 실현합니다.",
        },
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#B8860B] font-bold text-sm uppercase tracking-wider bg-[#FDF6EA] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
            Lecture Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] tracking-tight">
            강의 분야
          </h2>
          <p className="text-lg text-[#6E5E55]">
            요청기관의 목적과 수강생 수준에 맞춰 1:1 맞춤 커리큘럼으로 설계 및 출강합니다.
          </p>
        </div>

        {/* Course Modules Stack */}
        <div className="space-y-12">
          {courses.map((group, gIdx) => (
            <div key={gIdx} className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 border border-[#EAE3D9] warm-shadow">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#EAE3D9]">
                <div className="w-3 h-8 bg-[#D4AF37] rounded-full" />
                <h3 className="text-2xl font-bold text-[#2C221E]">{group.category}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#EAE3D9] hover:border-[#D4AF37] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-[#2C221E] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#5C4E46] leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F6F2EB] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6E5E55]">
                      <div className="flex items-center gap-1.5 bg-[#F6F2EB] px-3 py-2 rounded-xl">
                        <Users className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                        <span className="truncate">{item.target}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F6F2EB] px-3 py-2 rounded-xl">
                        <Clock className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2C221E] to-[#4A3B32] text-[#FDFBF7] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">맞춤형 강의 및 출강 요청</h3>
            <p className="text-sm sm:text-base text-[#EAE3D9]">
              공공기관, 지자체, 기업, 교육청, 도서관, 복지관 등 대상별 맞춤 교안을 준비해 드립니다.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#D4AF37] hover:bg-[#C59B27] text-[#2C221E] font-bold px-7 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg"
          >
            출강 문의하기
          </a>
        </div>

      </div>
    </section>
  );
}
