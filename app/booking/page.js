// app/booking/page.js
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  CheckCircle,
  Star,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function InflightMeal() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const scrollRef = useRef(null);
  const router = useRouter();

  const meals = [
    {
      id: 1,
      name: "하늘 위 참치 비빔밥",
      description: "신선한 참치와 각종 나물이 어우러진 건강한 비빔밥",
      price: 25000,
      image: "/tuna.png",
      chef: "흑백요리사",
      rating: 4.8,
      prepTime: "15분",
      badge: "BEST",
    },
    {
      id: 2,
      name: "나폴리맛피아의 리조또",
      description: "진짜 이탈리아 맛을 재현한 크리미한 리조또",
      price: 28000,
      image: "/risotto.png",
      chef: "흑백요리사",
      rating: 4.9,
      prepTime: "20분",
      badge: "NEW",
    },
  ];

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handlePurchase = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = () => {
    setShowPaymentModal(false);
    router.back();
  };

  const handleBack = () => {
    router.back();
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <ArrowLeft
            className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800 transition-colors"
            onClick={handleBack}
          />
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">
              흑백요리사 한정판 기내식
            </h1>
            <p className="text-sm text-gray-500">특별한 하늘 위 식사</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-32">
        {/* 항공권 예약 완료 안내 */}
        <div className="my-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <span className="text-green-800 font-bold text-lg">
                항공권 예약 완료!
              </span>
              <p className="text-green-700 text-sm mt-1">
                추가로 특별한 기내식을 선택해보세요 ✈️
              </p>
            </div>
          </div>
        </div>

        {/* 메뉴 목록 - 좌우 버튼과 함께 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xl font-bold text-gray-900">셰프 특선 메뉴</h2>
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto pb-4 px-1 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {meals.map((meal) => (
              <div
                key={meal.id}
                className={`bg-white rounded-3xl shadow-lg transition-all cursor-pointer flex-shrink-0 w-72 overflow-hidden ${
                  selectedMeal?.id === meal.id
                    ? "border-3 border-[#D21521] shadow-2xl transform scale-105"
                    : "border border-gray-100 hover:shadow-xl hover:scale-102"
                }`}
                onClick={() => handleMealSelect(meal)}
              >
                {/* 메뉴 이미지 - 1024:1536 비율 (2:3) */}
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    fill
                    className="object-cover object-center"
                    sizes="288px"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjM4NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuq4sOuCtOyLnSDsnbTrr4jihKM8L3RleHQ+PC9zdmc+";
                    }}
                  />

                  {/* 배지 */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
                        meal.badge === "BEST"
                          ? "bg-[#D21521] text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {meal.badge}
                    </span>
                  </div>

                  {/* 선택 표시 */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                      selectedMeal?.id === meal.id
                        ? "border-white bg-[#D21521] shadow-lg scale-110"
                        : "border-white bg-white bg-opacity-90 backdrop-blur-sm"
                    }`}
                  >
                    {selectedMeal?.id === meal.id && (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </div>

                  {/* 하단 그라데이션 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* 이미지 위 텍스트 */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">
                          {meal.rating}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-white/80" />
                        <span className="text-sm ml-1">{meal.prepTime}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 leading-tight">
                      {meal.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {meal.description}
                    </p>
                  </div>
                </div>

                {/* 메뉴 정보 */}
                <div className="p-4">
                  {/* 셰프 정보 및 가격 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {meal.chef}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#D21521]">
                        {meal.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">원</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 선택하지 않음 옵션 */}
            <div
              className={`bg-white rounded-3xl shadow-lg transition-all cursor-pointer flex-shrink-0 w-72 overflow-hidden border-2 border-dashed ${
                selectedMeal === null
                  ? "border-[#D21521] bg-red-50 shadow-2xl transform scale-105"
                  : "border-gray-300 hover:shadow-xl hover:scale-102"
              }`}
              onClick={() => setSelectedMeal(null)}
            >
              <div className="p-6 h-full flex flex-col justify-center items-center min-h-[450px]">
                <div
                  className={`w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center mb-6 transition-all ${
                    selectedMeal === null
                      ? "border-[#D21521] bg-[#D21521] shadow-lg scale-110"
                      : "border-gray-300"
                  }`}
                >
                  {selectedMeal === null ? (
                    <Check className="w-8 h-8 text-white" />
                  ) : (
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full" />
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-lg text-center mb-3">
                  기내식 선택 안함
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed mb-6">
                  추가 기내식 없이
                  <br />
                  진행하기
                </p>
                <div className="text-2xl font-bold text-gray-400">0원</div>
              </div>
            </div>
          </div>
        </div>

        {/* 주문 요약 */}
        {selectedMeal && (
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              주문 요약
            </h3>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <span className="font-medium text-gray-900">
                  {selectedMeal.name}
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedMeal.chef} 셰프 특선
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-[#D21521]">
                  {selectedMeal.price.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 하단 구매 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
        <div className="max-w-md mx-auto">
          <button
            onClick={handlePurchase}
            className="w-full bg-gradient-to-r from-[#D21521] to-[#B01419] text-white py-4 rounded-2xl font-bold text-lg transition-all hover:from-[#B01419] hover:to-[#9E1216] active:scale-98 shadow-lg"
          >
            {selectedMeal
              ? `${selectedMeal.price.toLocaleString()}원 결제하기 💳`
              : "기내식 없이 계속하기 ✈️"}
          </button>
        </div>
      </div>

      {/* 결제 완료 팝업 */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                결제 완료! 🎉
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {selectedMeal
                  ? `${selectedMeal.name} 주문이 완료되었습니다. 맛있는 기내식을 즐겨보세요!`
                  : "항공권 예약이 완료되었습니다. 즐거운 여행 되세요!"}
              </p>
              <button
                onClick={handlePaymentComplete}
                className="w-full bg-gradient-to-r from-[#D21521] to-[#B01419] text-white py-4 rounded-2xl font-bold text-lg transition-all hover:from-[#B01419] hover:to-[#9E1216] shadow-lg"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
