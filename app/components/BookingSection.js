"use client";
import { useState } from "react";

export default function BookingSection() {
  const [tripType, setTripType] = useState("round");
  const [departure, setDeparture] = useState("서울(모든 공항)");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState({ adults: 1, children: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const cities = [
    "서울(모든 공항)",
    "김포",
    "인천",
    "제주",
    "부산",
    "대구",
    "여수",
    "도쿄(나리타)",
    "오사카",
    "삿포로",
    "타이페이",
    "상하이",
    "베이징",
  ];

  return (
    <>
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          50% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-1px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .shake-animation {
          animation: shake 0.5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .shake-animation:hover {
          animation: none;
          transform: scale(1.02);
          transition: transform 0.2s ease;
        }
      `}</style>

      <div className="hidden sm:block">
        <div className="mx-auto max-w-[1190px] relative -translate-y-[50px] px-4">
          {/* 우측 상단 장식 이미지 */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="absolute -top-[75px] right-4 h-24 w-[428px] rounded-t-2xl bg-white/80 py-4 px-4 backdrop-blur-sm flex items-center justify-center shake-animation cursor-pointer hover:bg-white/90 transition-all"
          >
            <p className="text-l font-semibold text-gray-700">
              ✈️ 팔삼구 단독 온라인 프로모션! 지금 바로 참여해보세요.
            </p>
          </button>

          {/* 예매 폼 */}
          <div className="relative rounded-3xl bg-white px-4 py-5 shadow-lg">
            {/* 탭 메뉴 */}
            <div className="mb-7 flex items-center">
              <div className="flex items-center justify-center mr-14 text-[16px] font-bold leading-[1.3]">
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full px-5 py-2 ${
                    tripType === "round"
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-400"
                  }`}
                  onClick={() => setTripType("round")}
                >
                  왕복
                </button>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full px-5 py-2 ${
                    tripType === "oneway"
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-400"
                  }`}
                  onClick={() => setTripType("oneway")}
                >
                  편도
                </button>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full px-5 py-2 ${
                    tripType === "multi"
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-400"
                  }`}
                  onClick={() => setTripType("multi")}
                >
                  다구간
                </button>
              </div>
            </div>

            {/* 예매 폼 */}
            <div className="flex items-center gap-x-1">
              {/* 출발지 */}
              <div className="flex flex-1 items-center">
                <select
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="text-[26px] font-bold leading-[1.25] h-[55px] w-full border-b-2 border-b-gray-250 pl-3 bg-transparent focus:outline-none focus:border-b-primary"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* 교환 버튼 */}
              <div>
                <button className="mx-1 flex min-h-10 min-w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m16 3 4 4-4 4"></path>
                    <path d="M20 7H4"></path>
                    <path d="m8 21-4-4 4-4"></path>
                    <path d="M4 17h16"></path>
                  </svg>
                </button>
              </div>

              {/* 도착지 */}
              <div className="flex flex-1 items-center">
                <select
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className={`text-[26px] font-bold leading-[1.25] h-[55px] w-full border-b-2 border-b-gray-250 pl-3 bg-transparent focus:outline-none focus:border-b-primary ${
                    !arrival ? "text-gray-400" : "text-gray-900"
                  }`}
                >
                  <option value="">도착지</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* 날짜 선택 */}
              <div className="flex items-center">
                <button className="flex items-center gap-x-2 border border-gray-250 p-4 text-gray-900 hover:border-gray-300 h-[55px] w-[274px] rounded-none border-x-0 border-b-2 border-t-0 border-b-gray-250 text-[16px] font-medium leading-[1.6]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      className="h-6 w-6"
                    >
                      <path
                        fill="#5C6A86"
                        fillRule="evenodd"
                        d="M5 0c-.69 0-1.25.56-1.25 1.25V2.5H2.5A2.5 2.5 0 0 0 0 5v12.5A2.5 2.5 0 0 0 2.5 20h15a2.5 2.5 0 0 0 2.5-2.5V5a2.5 2.5 0 0 0-2.5-2.5h-1.25V1.25a1.25 1.25 0 1 0-2.5 0V2.5h-7.5V1.25C6.25.56 5.69 0 5 0zm0 6.25a1.25 1.25 0 1 0 0 2.5h10a1.25 1.25 0 1 0 0-2.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="mt-0.5 text-gray-400">날짜</span>
                </button>
              </div>
            </div>

            {/* 하단 옵션들 */}
            <div className="mt-5 flex h-0 items-center gap-x-7 overflow-hidden">
              <div className="border-b-2 border-b-gray-250">
                <button className="flex h-[44px] w-[290px] items-center gap-x-2 rounded-lg border-none p-4 text-gray-900">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        fill="#001B2A"
                        d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                      ></path>
                      <path
                        fill="#001B2A"
                        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[15px] font-medium leading-[1.6] mt-0.5">
                    성인 1
                  </p>
                </button>
              </div>

              <div>
                <div className="flex h-9 min-w-[360px] items-center rounded-full border border-transparent bg-gray-100 p-2">
                  <span className="rounded-full bg-white px-4 py-1 text-[13px] font-medium leading-[1.6]">
                    프로모션 코드
                  </span>
                  <input
                    className="border-none bg-transparent text-[14px] font-medium leading-[1.6] flex-1 px-4 focus:outline-none"
                    placeholder="코드를 입력해 주세요"
                    maxLength="8"
                  />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-1 justify-end">
                <button
                  className={`text-[18px] font-bold leading-[1.3] h-14 min-w-[274px] rounded-xl px-6 pt-px transition-all ${
                    departure && arrival
                      ? "bg-primary text-white hover:bg-primary-500"
                      : "bg-gray-250 text-white cursor-not-allowed"
                  }`}
                  disabled={!departure || !arrival}
                >
                  검색
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        {/* 모바일 프로모션 박스 */}
        <div className="px-4 pt-4 pb-2">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl shake-animation cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">✈️</span>
              <p className="text-sm font-semibold">
                팔삼구 단독 온라인 프로모션!
              </p>
            </div>
            <p className="text-xs mt-1 opacity-90">지금 바로 참여해보세요</p>
          </button>
        </div>

        {/* 모바일 예매 폼 */}
        <div className="px-4 pt-2 pb-6 bg-white rounded-xl shadow-md mx-4 mt-2 space-y-4">
          <div className="flex justify-center gap-x-2 text-sm font-medium">
            {["round", "oneway", "multi"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full ${
                  tripType === type ? "bg-primary text-white" : "bg-gray-100"
                }`}
                onClick={() => setTripType(type)}
              >
                {type === "round"
                  ? "왕복"
                  : type === "oneway"
                  ? "편도"
                  : "다구간"}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-xs mb-1 text-gray-600">출발지</label>
            <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs mb-1 text-gray-600">도착지</label>
            <select
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">도착지를 선택해주세요</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              className={`w-full py-3 rounded-lg text-white text-sm font-bold ${
                departure && arrival
                  ? "bg-primary hover:bg-primary-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!departure || !arrival}
            >
              항공권 검색
            </button>
          </div>
        </div>
      </div>

      {/* 비디오 모달 */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold">
                팔삼구 온라인 홈페이지 프로모션
              </h2>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m18 6-12 12"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>

            <div className="relative w-full h-0 pb-[56.25%]">
              <video
                className="absolute inset-0 w-full h-full rounded-lg"
                controls
                autoPlay
                poster="/api/placeholder/800/450"
              >
                <source src="/eastar_media.mp4" type="video/mp4" />
                {/* 실제 비디오 파일 경로로 변경하세요 */}
                비디오를 재생할 수 없습니다.
              </video>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                당신을 위한 특별한 프로모션을 확인해보세요!
              </p>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm sm:text-base"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
