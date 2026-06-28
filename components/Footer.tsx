export default function Footer() {
  return (
    <footer className="bg-[#2C221E] text-[#EAE3D9] py-12 border-t border-[#4A3B32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#2C221E] font-bold text-lg shrink-0">
              꿀쌤
            </div>
            <div>
              <h4 className="font-bold text-white text-base">꿀쌤 김은정</h4>
              <p className="text-xs text-[#A89F91]">32년 행정 경험의 AI & 스피치 전문 강사</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#A89F91]">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">소개</a>
            <a href="#what-i-do" className="hover:text-[#D4AF37] transition-colors">내가 하는 일</a>
            <a href="#curriculum" className="hover:text-[#D4AF37] transition-colors">강의 분야</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">연락하기</a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-[#382E2B] text-center text-xs text-[#8C8075]">
          <p>© {new Date().getFullYear()} 꿀쌤 김은정. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
