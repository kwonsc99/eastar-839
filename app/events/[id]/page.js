"use client";

import Header from "../../components/Headers";
import { useState, useEffect } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "이스타를 찾아라, 홈페이지 별 찾기 깜짝 이벤트",
    subtitle: "이스타를 찾아라!",
    image: "/rsh.png",
    period: "2025-07-03~2025-12-31",
    category: "진행중 이벤트",
    btnColor: "#070C1D",
    btnText: "별 찾기 시작하기",
    btnHref: "/login",
  },
  {
    id: 2,
    title: "어깨P자, 청년 힐링 여행 지원 캠페인",
    subtitle: "편도승객 37,200원~",
    description: "특가 & 오즈카 미술관 티켓 증정 이벤트",
    image: "/ksc.png",
    period: "2025-07-01~2025-07-08",
    category: "진행중 이벤트",
    btnColor: "#3b82f6",
    btnText: "캠페인 신청하기",
    btnLink: "https://estar-promotion.vercel.app/",
  },
  {
    id: 3,
    title: "이스타항공 X 흑백요리사2",
    image: "/khn.png",
    period: "2025-05-27~2025-12-31",
    category: "진행중 이벤트",
    btnColor: "#DBA139",
    btnText: "특별 기내식 예약하기",
    btnHref: "/booking",
  },
  {
    id: 4,
    title: "카메라 들고 떠나는 감성 자극 알마티 여행",
    image: "/kys.png",
    thumbnail: "/aa4.png",
    period: "2025-05-27~2025-12-31",
    category: "진행중 이벤트",
    bgColor: "bg-gray-600",
    btnColor: "#059669",
    btnText: "알마티 여행 예약하기",
    btnLink: "https://v0-korean-deployment-blue.vercel.app/",
  },
  {
    id: 5,
    title: "PEANUTS X 이스타항공",
    subtitle: "여행을 떠나는 건 흥미로운 일이야",
    image: "/snpy.jpg",
    thumbnail: "/aa4.png",
    period: "2025-05-27~2025-12-31",
    category: "회원 전용 이벤트",
    bgColor: "bg-yellow-400",
    isSpecial: true,
    btnColor: "#f59e0b",
    btnText: "🎲 럭키드로우 참여하기",
    btnHref: "/events/participate/5",
  },
  {
    id: 6,
    title: "⭐ 깜짝 보너스 적립 이벤트",
    subtitle: "포인트 10배 적립 찬스!",
    image: "/test.jpg",
    thumbnail: "/aa4.png",
    period: "2025-05-27~2025-12-31",
    category: "회원 전용 이벤트",
    bgColor: "bg-yellow-400",
    isSpecial: true,
    btnColor: "#8b5cf6",
    btnText: "⚡ 포인트 10배 받기",
    btnHref: "/events/participate/6",
  },
];

export default function EventDetailPage({ params }) {
  const eventId = parseInt(params.id, 10);
  const event = events.find((e) => e.id === eventId);

  const [stars, setStars] = useState([]);
  const [foundStars, setFoundStars] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  // 별 생성 함수
  const generateStars = () => {
    const newStars = [];
    for (let i = 0; i < 2; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 70 + 10, // 10%~80% 범위
        left: Math.random() * 70 + 10, // 10%~80% 범위
        found: false,
      });
    }
    setStars(newStars);
  };

  // 별 클릭 처리
  const handleStarClick = (starId) => {
    setStars((prev) =>
      prev.map((star) => (star.id === starId ? { ...star, found: true } : star))
    );

    const newFoundCount = foundStars + 1;
    setFoundStars(newFoundCount);
    setShowPopup(true);

    // 2초 후 팝업 닫기
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // 모든 별을 찾았다면 3초 후 쿠폰 페이지로 이동
    if (newFoundCount === 2) {
      setGameCompleted(true);
      setTimeout(() => {
        window.location.href = "/events/coupon";
      }, 3000);
    }
  };

  // 컴포넌트 마운트 시 별 생성
  useEffect(() => {
    if (event?.isSpecial) {
      generateStars();
    }
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">이벤트 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const handleButtonClick = () => {
    if (event.btnHref) {
      window.location.href = event.btnHref;
    } else if (event.btnLink) {
      window.open(event.btnLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 이벤트 제목 섹션 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          {event.title}
        </h1>
        {event.subtitle && (
          <p className="text-lg text-gray-700 mb-3">{event.subtitle}</p>
        )}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <p className="text-sm text-gray-600">
            <span className="font-medium">기간:</span> {event.period}
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
            {event.category}
          </span>
          {event.isSpecial && (
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold animate-pulse">
              ✨ 특별 이벤트
            </span>
          )}
        </div>
        {event.description && (
          <p className="text-gray-600 mb-6">{event.description}</p>
        )}
      </div>

      {/* 전체 화면 이벤트 이미지 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto object-contain"
          />

          {/* 기존 특별 이벤트 효과 */}
          {event.isSpecial && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div
                  className="w-3 h-3 bg-orange-400 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          )}

          {/* 별 찾기 게임 */}
          {event.isSpecial &&
            stars.map(
              (star) =>
                !star.found && (
                  <div
                    key={star.id}
                    className="absolute cursor-pointer transform hover:scale-110 transition-transform duration-200"
                    style={{
                      top: `${star.top}%`,
                      left: `${star.left}%`,
                    }}
                    onClick={() => handleStarClick(star.id)}
                  >
                    <div className="relative">
                      <div className="text-3xl animate-pulse hover:animate-bounce">
                        ⭐
                      </div>
                      {/* 반짝이는 효과 */}
                      <div className="absolute inset-0 animate-ping">
                        <div className="w-8 h-8 bg-yellow-300 rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>

      {/* 이벤트 참여 버튼 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {(event.btnHref || event.btnLink) && (
          <div className="flex justify-center mb-8">
            <button
              onClick={handleButtonClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: event.btnColor }}
            >
              {/* 버튼 배경 효과 */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* 반짝이는 효과 */}
              {event.isSpecial && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
              )}

              {/* 버튼 텍스트 */}
              <span className="relative z-10 flex items-center gap-2">
                {event.btnText}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* 돌아가기 버튼 */}
        <div className="flex justify-center mt-8">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            이벤트 목록으로 돌아가기
          </Link>
        </div>
      </div>

      {/* 별 찾기 성공 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center transform animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              축하합니다!
            </h2>
            <p className="text-gray-600 mb-4">숨겨진 별을 찾았어요!</p>
            <div className="text-xl font-bold text-yellow-600">
              찾은 별 갯수: {foundStars}/2
            </div>
            {gameCompleted && (
              <p className="text-sm text-gray-500 mt-4">
                잠시 후 쿠폰 페이지로 이동합니다...
              </p>
            )}
          </div>
        </div>
      )}

      {/* 반짝이는 애니메이션을 위한 CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
