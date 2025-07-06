"use client";

import Header from "../../components/Headers";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CouponPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // 5초 후 confetti 효과 중지
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleUseCoupon = () => {
    alert("쿠폰이 적용되었습니다! 예약 페이지로 이동합니다.");
    window.location.href = "/booking";
  };

  const handleSaveCoupon = () => {
    alert("쿠폰이 마이페이지에 저장되었습니다!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 축하 메시지 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 mt-4">
            축하합니다!
          </h1>
          <p className="text-xl text-gray-600 mb-2">모든 별을 찾아내셨네요!</p>
          <p className="text-lg text-gray-500">특별한 보상을 준비했습니다</p>
        </div>

        {/* 쿠폰 카드 */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* 쿠폰 배경 디자인 */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100"></div>

            {/* 쿠폰 테두리 효과 */}
            <div className="absolute inset-0 border-4 border-dashed border-yellow-400 m-4 rounded-2xl"></div>

            {/* 쿠폰 내용 */}
            <div className="relative p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ 별 찾기 완료 보상 ⭐
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  항공료 50% 할인
                </h2>
                <p className="text-gray-600 mb-4">국내선 전 노선 적용 가능</p>
              </div>

              {/* 쿠폰 상세 정보 */}
              <div className="bg-white/80 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">할인율:</span>
                    <span className="text-red-600 font-bold ml-2">50%</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      최대 할인:
                    </span>
                    <span className="text-red-600 font-bold ml-2">
                      100,000원
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      유효기간:
                    </span>
                    <span className="text-gray-600 ml-2">2025.12.31</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      사용 횟수:
                    </span>
                    <span className="text-gray-600 ml-2">1회</span>
                  </div>
                </div>
              </div>

              {/* 쿠폰 코드 */}
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">쿠폰 코드</p>
                <div className="bg-gray-100 rounded-lg p-4 font-mono text-lg font-bold tracking-wider">
                  STAR-FINDER-2025
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleUseCoupon}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    ✈️ 지금 사용하기
                  </span>
                </button>
                <button
                  onClick={handleSaveCoupon}
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-300 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    💾 나중에 사용하기
                  </span>
                </button>
              </div>

              {/* 주의사항 */}
              <div className="mt-6 text-xs text-gray-500">
                <p className="mb-1">※ 본 쿠폰은 1인 1회 사용 가능합니다.</p>
                <p className="mb-1">
                  ※ 다른 할인 혜택과 중복 사용할 수 없습니다.
                </p>
                <p>※ 유효기간 내에 사용하지 않을 경우 자동 소멸됩니다.</p>
              </div>
            </div>

            {/* 쿠폰 가장자리 구멍 효과 */}
            <div className="absolute top-1/2 left-0 w-6 h-6 bg-gray-100 rounded-full transform -translate-x-3 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-6 h-6 bg-gray-100 rounded-full transform translate-x-3 -translate-y-1/2"></div>
          </div>
        </div>

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
    </div>
  );
}
