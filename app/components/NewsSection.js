export default function NewsSection() {
  const notices = [
    {
      title: "2025년 07월 신용카드 무이자 할부 안내",
      date: "2025-07-01",
      link: "#",
    },
    {
      title: "이스타항공 홈페이지 작업 공지",
      date: "2025-06-26",
      link: "#",
    },
    {
      title: "이스타항공, '스카이트랙스 어워드' 대한민국 최고 LCC 선정",
      date: "2025-06-19",
      link: "#",
    },
    {
      title: "국제선(한국발) 유류할증료(2025년 07월)",
      date: "2025-06-18",
      link: "#",
    },
  ];

  const faqTags = [
    "수하물 합산",
    "기내수하물 무게",
    "온라인체크인 방법",
    "탑승확인서",
    "지연/결항 확인서",
    "영수증(매출전표) 확인",
    "휴대용 배터리 기내 반입",
  ];

  const socialLinks = [
    {
      name: "인스타그램",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="url(#insta_a)"
            d="M18.277 6.403a1.201 1.201 0 1 0-2.402 0 1.201 1.201 0 0 0 2.402 0"
          ></path>
          <path
            fill="url(#insta_b)"
            d="M19.881 15.783c-.044.975-.208 1.504-.343 1.856a3.1 3.1 0 0 1-.75 1.15c-.349.35-.682.567-1.149.746-.352.138-.883.302-1.858.348-1.055.046-1.367.056-4.04.056-2.67 0-2.986-.01-4.04-.056-.975-.046-1.504-.21-1.856-.348-.469-.18-.8-.396-1.15-.746a3.05 3.05 0 0 1-.749-1.15c-.135-.352-.3-.881-.343-1.856-.051-1.055-.06-1.372-.06-4.04 0-2.673.009-2.988.06-4.042.042-.975.208-1.504.343-1.859.18-.466.397-.798.75-1.147.349-.35.68-.567 1.15-.749.351-.138.88-.299 1.855-.345 1.054-.047 1.37-.058 4.04-.058 2.673 0 2.985.011 4.04.058.975.046 1.506.207 1.858.345.467.182.8.4 1.148.749.352.35.57.681.751 1.147.135.355.299.884.343 1.86.049 1.053.06 1.368.06 4.041 0 2.668-.011 2.985-.06 4.04"
          ></path>
          <path
            fill="url(#insta_c)"
            d="M11.743 15.072a3.332 3.332 0 1 1 0-6.666 3.334 3.334 0 1 1 0 6.666m0-8.469a5.136 5.136 0 0 0 0 10.272 5.135 5.135 0 1 0 0-10.272"
          ></path>
          <defs>
            <linearGradient
              id="insta_a"
              x1="1.919"
              x2="20.073"
              y1="21.534"
              y2="3.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD521"></stop>
              <stop offset="0.501" stopColor="#F50000"></stop>
              <stop offset="1" stopColor="#B900B4"></stop>
            </linearGradient>
            <linearGradient
              id="insta_b"
              x1="1.923"
              x2="20.091"
              y1="21.56"
              y2="3.392"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD521"></stop>
              <stop offset="0.501" stopColor="#F50000"></stop>
              <stop offset="1" stopColor="#B900B4"></stop>
            </linearGradient>
            <linearGradient
              id="insta_c"
              x1="1.929"
              x2="20.093"
              y1="21.559"
              y2="3.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD521"></stop>
              <stop offset="0.501" stopColor="#F50000"></stop>
              <stop offset="1" stopColor="#B900B4"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      link: "https://www.instagram.com/eastarjet_official/",
    },
    {
      name: "페이스북",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#1877F2"
            d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
          ></path>
          <path
            fill="#fff"
            d="M16.671 15.469 17.203 12h-3.328V9.75c0-.949.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.1 12.1 0 0 0 3.75 0V15.47z"
          ></path>
        </svg>
      ),
      link: "https://www.facebook.com/eastarjet",
    },
    {
      name: "유튜브",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="red"
            d="M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
          ></path>
        </svg>
      ),
      link: "https://www.youtube.com/@EastarJet_ZE/featured",
    },
  ];

  return (
    <div className="mx-auto max-w-[1190px] px-4 mb-10">
      <div className="mb-10 flex justify-between">
        <h2 className="text-[28px] font-bold leading-[1.25]">
          이스타항공의 다양한 소식을 알아 보세요
        </h2>
        <div className="flex gap-x-3">
          {socialLinks.map((social) => (
            <div key={social.name} className="text-center">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <button className="h-12 w-12 rounded-2xl border border-gray-250 p-3 hover:border-primary transition-colors">
                  {social.icon}
                </button>
                <div className="mt-2 text-[13px] font-medium leading-[1.6]">
                  {social.name}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24 flex gap-x-5">
        {/* 공지사항 */}
        <div className="flex-1 rounded-3xl p-10 shadow-md bg-white">
          <div className="flex items-center justify-between pb-10">
            <h2 className="text-[28px] font-bold leading-[1.25]">공지사항</h2>
            <a href="#" className="text-gray-500 hover:text-primary">
              더 보기
            </a>
          </div>

          {notices.map((notice, index) => (
            <a
              key={index}
              className={`flex justify-between gap-x-4 py-5 hover:text-primary transition-colors ${
                index > 0 ? "border-t border-t-gray-250" : ""
              }`}
              href={notice.link}
            >
              <div className="flex-1 overflow-hidden text-ellipsis whitespace-pre max-w-[400px]">
                {notice.title}
              </div>
              <div className="text-gray-400">{notice.date}</div>
            </a>
          ))}
        </div>

        {/* 자주 묻는 질문 */}
        <div className="flex-1 rounded-3xl p-10 shadow-md bg-white">
          <div className="flex items-center justify-between pb-10">
            <h2 className="text-[28px] font-bold leading-[1.25]">
              자주 묻는 질문
            </h2>
            <a href="#" className="text-gray-500 hover:text-primary">
              더 보기
            </a>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {faqTags.map((tag, index) => (
              <a
                key={index}
                className="rounded-full border border-gray-250 px-4 py-3 text-[14px] font-medium leading-[1.6] hover:border-primary hover:text-primary transition-colors"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
