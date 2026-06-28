"use client";

import { useState } from "react";
import { MessageSquare, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "소개", href: "#about" },
    { name: "내가 하는 일", href: "#what-i-do" },
    { name: "강의 분야", href: "#curriculum" },
    { name: "연락하기", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE3D9] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            꿀쌤
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-[#2C221E]">꿀쌤 김은정</span>
            <span className="text-xs text-[#B8860B] font-medium">AI & 스피치 전문 강사</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#5C4E46] hover:text-[#B8860B] font-medium transition-colors text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2C221E] hover:bg-[#4A3B32] text-[#FDFBF7] px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            강의 문의하기
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C221E] hover:text-[#B8860B] focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EAE3D9] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C221E] font-medium text-lg hover:text-[#B8860B] border-b border-[#F6F2EB]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#2C221E] text-[#FDFBF7] py-3 rounded-xl font-medium mt-4 shadow"
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            강의 문의하기
          </a>
        </div>
      )}
    </header>
  );
}
