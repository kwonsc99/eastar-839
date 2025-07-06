"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Event = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [show839Modal, setShow839Modal] = useState(false);

  // 로그인 상태 체크 (가벼운 방법)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginStatus = localStorage.getItem("isLoggedIn");
      const name = localStorage.getItem("userName");

      if (loginStatus === "true") {
        setIsLoggedIn(true);
        setUserName(name || "User");
      }
    }
  }, []);

  const events = [
    {
      id: 1,
      title: "이스타를 찾아라, 홈페이지 별 찾기 깜짝 이벤트",
      subtitle: "이스타를 찾아라",
      image: "/eventaa.jpg",
      thumbnail: "/thumb1.png",
      period: "2025-07-03~2025-12-31",
      category: "진행중 이벤트",
      bgColor: "bg-red-500",
      btnColor: "#",
    },
    {
      id: 2,
      title: "어깨P자, 청년 힐링 여행 지원 캠페인",
      subtitle: "편도승객 37,200원~",
      description: "특가 & 오즈카 미술관 티켓 증정 이벤트",
      image: "/pp.png",
      thumbnail: "/thumb2.png",
      period: "2025-07-01~2025-07-08",
      category: "진행중 이벤트",
      bgColor: "bg-blue-400",
    },
    {
      id: 3,
      title: "흑백요리사",
      image: "/dog-event.jpg",
      thumbnail: "/thumb3.png",
      period: "2025-05-27~2025-12-31",
      category: "진행중 이벤트",
      bgColor: "bg-gray-600",
    },
    {
      id: 4,
      title: "카메라 들고 떠나는 감성 자극 알마티 여행",
      image: "/kys.jpg",
      thumbnail: "/thumb4.png",
      period: "2025-05-27~2025-12-31",
      category: "진행중 이벤트",
      bgColor: "bg-gray-600",
    },
    // 로그인한 사용자만 볼 수 있는 특별 이벤트
    ...(isLoggedIn
      ? [
          {
            id: 5,
            title: "PEANUTS X 이스타항공",
            subtitle: "여행을 떠나는 건 흥미로운 일이야",
            image: "/snpy.jpg",
            thumbnail: "/thumb5.png",
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
            title: "TEST 이벤트",
            subtitle: "TEST 이벤트",
            image: "/test.jpg",
            thumbnail: "/thumb6.png",
            period: "2025-05-27~2025-12-31",
            category: "회원 전용 이벤트",
            bgColor: "bg-yellow-400",
            isSpecial: true,
          },
        ]
      : []),
  ];

  const tabs = ["진행중 이벤트", "종료된 이벤트", "당첨자 발표"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 로그인 환영 메시지 */}
      {isLoggedIn && (
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 shadow-sm">
          <div className="flex items-center">
            <div className="animate-bounce mr-3 text-2xl">🎉</div>
            <div>
              <p className="text-yellow-800 font-bold text-lg">
                환영합니다, {userName}님!
              </p>
              <p className="text-yellow-700 text-sm">
                회원 전용 별찾기 이벤트가 공개되었습니다! 반짝이는 별들을
                찾아보세요 ✨
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 페이지 제목과 팔삼구 이벤트 버튼 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl sm:text-2xl font-bold">이벤트</h1>

        <button
          onClick={() => setShow839Modal(true)}
          className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:from-[#357ABD] hover:to-[#4A90E2] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
        >
          <span>🎯</span>
          <span>팔삼구 이벤트 알아보기</span>
        </button>
      </div>

      {/* 탭 네비게이션 */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 sm:space-x-4 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  index === 0
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden sm:block space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className={`flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
              event.isSpecial
                ? "ring-2 ring-yellow-400 animate-pulse shadow-yellow-200"
                : ""
            }`}
          >
            <Link href={`/events/${event.id}`} className="flex w-full">
              {/* 이벤트 이미지 */}
              <div className="relative w-96 h-64 overflow-hidden">
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-lg"
                />

                {/* 특별 이벤트 오버레이 */}
                {event.isSpecial && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-l-lg">
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                        ✨
                      </span>
                    </div>
                    {/* 반짝이는 점들 */}
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <div
                        className="w-2 h-2 bg-orange-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* 이벤트 정보 */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      event.isSpecial ? "text-yellow-800" : ""
                    }`}
                  >
                    {event.title}
                  </h4>
                  {event.subtitle && (
                    <p className="text-gray-600 text-sm mb-2">
                      {event.subtitle}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm mb-4">
                    이벤트기간: {event.period}
                  </p>
                </div>

                <div className="flex justify-between items-center"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Mobile View */}
      <div className="block sm:hidden space-y-4">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <div
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] mb-3 ${
                event.isSpecial
                  ? "ring-2 ring-yellow-400 animate-pulse shadow-yellow-200"
                  : ""
              }`}
            >
              {/* 이벤트 이미지 */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />

                {/* 이벤트 뱃지 */}
                <div className="absolute top-3 left-3">
                  {event.isSpecial ? (
                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                      ✨ 특별 이벤트
                    </span>
                  ) : (
                    <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      진행중
                    </span>
                  )}
                </div>

                {/* 특별 이벤트 반짝이는 효과 */}
                {event.isSpecial && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20">
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <div
                        className="w-2 h-2 bg-orange-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* 이벤트 정보 */}
              <div className="p-4">
                <h4
                  className={`text-base font-bold mb-2 line-clamp-2 ${
                    event.isSpecial ? "text-yellow-800" : ""
                  }`}
                >
                  {event.title}
                </h4>
                {event.subtitle && (
                  <p className="text-gray-600 text-sm mb-2">{event.subtitle}</p>
                )}
                <p className="text-gray-600 text-sm mb-3">{event.period}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded ${
                      event.isSpecial
                        ? "bg-yellow-100 text-yellow-800 font-semibold"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.category}
                  </span>
                  <div
                    className={`text-sm font-medium ${
                      event.isSpecial
                        ? "text-yellow-600 animate-pulse"
                        : "text-blue-600"
                    }`}
                  >
                    {event.isSpecial ? "🎁 참여하기 →" : "자세히 보기 →"}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 팔삼구 이벤트 모달  */}
      {show839Modal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 z-50">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl w-full h-full md:w-[90vw] md:h-[90vh] max-w-6xl overflow-hidden shadow-2xl flex flex-col">
            {/* 헤더 */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
                <span className="mr-3">🎯</span>
                팔삼구 이벤트란?
              </h3>
              <button
                onClick={() => setShow839Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-4xl transition-colors hover:scale-110"
              >
                ×
              </button>
            </div>

            {/* 스크롤 가능한 컨텐츠 영역 */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* 이벤트 이미지 */}
              <div className="mb-8">
                <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/839-event.jpg"
                    alt="팔삼구 이벤트"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
