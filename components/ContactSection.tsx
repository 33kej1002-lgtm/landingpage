"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, BookOpen, Copy, Check, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedKakao, setCopiedKakao] = useState(false);

  const handleCopy = (text: string, type: "phone" | "email" | "kakao") => {
    const copyText = type === "kakao" ? "jinenting33" : text;
    navigator.clipboard.writeText(copyText);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedKakao(true);
      setTimeout(() => setCopiedKakao(false), 2000);
    }
  };

  const channels = [
    {
      title: "전화 문의",
      value: "031-5191-8910",
      desc: "강의 및 출강 관련 유선 상담",
      iconType: "phone",
      actionText: "전화 걸기",
      actionHref: "tel:031-5191-8910",
      copyable: true,
      copyType: "phone" as const,
      color: "bg-[#2C221E] text-white",
    },
    {
      title: "이메일 문의",
      value: "33kej1002@gmail.com",
      desc: "제안서 및 상세 수강 문의",
      iconType: "mail",
      actionText: "메일 보내기",
      actionHref: "mailto:33kej1002@gmail.com",
      copyable: true,
      copyType: "email" as const,
      color: "bg-[#2C221E] text-white",
    },
    {
      title: "카카오톡 프로필",
      value: "ID: jinenting33",
      desc: "실시간 1:1 카카오톡 오픈채팅 연결",
      iconType: "kakao",
      actionText: "카톡 연결하기",
      actionHref: "https://open.kakao.com/o/sujbExci",
      copyable: true,
      copyType: "kakao" as const,
      external: true,
      color: "bg-[#FEE500] text-[#191919]",
    },
    {
      title: "네이버 블로그",
      value: "blog.naver.com/33kej",
      desc: "강의 후기 및 최근 소식 소통",
      iconType: "blog",
      actionText: "블로그 방문",
      actionHref: "https://blog.naver.com/33kej",
      external: true,
      color: "bg-[#03C75A] text-white",
    },
    {
      title: "유튜브 채널",
      value: "@AI톡톡TV",
      desc: "유용한 AI 및 스피치 영상 콘텐츠",
      iconType: "youtube",
      actionText: "유튜브 구독하기",
      actionHref: "https://www.youtube.com/@AI%ED%86%A1%ED%86%A1TV",
      external: true,
      color: "bg-[#FF0000] text-white",
    },
  ];

  const renderChannelIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="w-6 h-6 text-[#B8860B]" />;
      case "mail":
        return <Mail className="w-6 h-6 text-[#B8860B]" />;
      case "kakao":
        return <MessageCircle className="w-6 h-6 text-[#B8860B]" />;
      case "blog":
        return <BookOpen className="w-6 h-6 text-[#B8860B]" />;
      case "youtube":
        return (
          <svg className="w-6 h-6 text-[#B8860B] fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F2EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#B8860B] font-bold text-sm uppercase tracking-wider bg-[#FDF6EA] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block">
            Connect & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] tracking-tight">
            연락하기
          </h2>
          <p className="text-lg text-[#6E5E55]">
            강의 의뢰, 출강 문의, 제휴 제안 등 언제든 편하게 연락 주시면 친절히 안내해 드립니다.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#EAE3D9] hover:border-[#D4AF37] transition-all warm-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF6EA] flex items-center justify-center border border-[#D4AF37]/30">
                    {renderChannelIcon(ch.iconType)}
                  </div>
                  {ch.copyable && (
                    <button
                      onClick={() => handleCopy(ch.value, ch.copyType!)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#B8860B] hover:text-[#2C221E] bg-[#FDF6EA] px-2.5 py-1.5 rounded-lg border border-[#D4AF37]/30 transition-colors"
                      title="복사하기"
                    >
                      {(ch.copyType === "phone" ? copiedPhone : ch.copyType === "email" ? copiedEmail : copiedKakao) ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600">복사됨!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>복사</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#B8860B] uppercase tracking-wider">{ch.title}</h3>
                  <p className="text-xl font-bold text-[#2C221E] mt-1 break-all">{ch.value}</p>
                  <p className="text-xs text-[#6E5E55] mt-1">{ch.desc}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F6F2EB]">
                <a
                  href={ch.actionHref}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl font-bold text-sm transition-all shadow-sm hover:shadow-md hover:opacity-95 ${ch.color}`}
                >
                  <span>{ch.actionText}</span>
                  {ch.external ? <ExternalLink className="w-4 h-4" /> : null}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Warm closing card */}
        <div className="mt-16 bg-[#FFFFFF] rounded-3xl p-8 border border-[#EAE3D9] text-center max-w-2xl mx-auto warm-shadow">
          <div className="w-14 h-14 rounded-full bg-[#FDF6EA] flex items-center justify-center mx-auto mb-4 text-2xl border border-[#D4AF37]/30">
            🍯
          </div>
          <h3 className="text-xl font-bold text-[#2C221E] mb-2">"배움은 즐겁고 말하기는 자신감입니다"</h3>
          <p className="text-sm text-[#6E5E55]">
            꿀쌤 김은정 강사와 함께 디지털 시대의 새로운 가능성과 소통의 기쁨을 경험해보세요.
          </p>
        </div>

      </div>
    </section>
  );
}
