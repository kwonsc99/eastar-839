"use client";
import { useState } from "react";

export default function DestinationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      id: 1,
      departure: "서울/인천(ICN)",
      destination: "삿포로/신치토세(CTS)",
      price: "104,900",
      date: "2025.09.22(월)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250213085609_CTS.jpg",
    },
    {
      id: 2,
      departure: "서울/인천(ICN)",
      destination: "푸꾸옥(PQC)",
      price: "157,900",
      date: "2025.09.28(일)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250213091058_PQC.jpg",
    },
    {
      id: 3,
      departure: "서울/인천(ICN)",
      destination: "알마티(ALA)",
      price: "284,400",
      date: "2025.09.15(월)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250512033411_신규홈페이지__ALA_도착지이미지.jpg",
    },
    {
      id: 4,
      departure: "부산(PUS)",
      destination: "구마모토(KMJ)",
      price: "37,100",
      date: "2025.09.29(월)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250217091435_KMJ.jpg",
    },
    {
      id: 5,
      departure: "서울/인천(ICN)",
      destination: "후쿠오카(FUK)",
      price: "51,100",
      date: "2025.09.04(목)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250512033455_신규홈페이지_FUK_도착지이미지.jpg",
    },
    {
      id: 6,
      departure: "서울/인천(ICN)",
      destination: "치앙마이(CNX)",
      price: "146,000",
      date: "2025.09.13(토)",
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/destination/20250213090402_CNX.jpg",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < destinations.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mx-auto max-w-[1190px] px-4 mb-20">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[28px] sm:text-[24px] font-bold leading-[1.25]">
          미리 준비하는 최저가 여행
        </h2>
        <div className="text-gray-500 text-[14px] sm:text-[12px] font-medium leading-[1.6]">
          편도 총액
        </div>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden sm:block relative min-h-72">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="min-w-0 shrink-0 grow-0 pl-4 basis-1/4"
              >
                <div className="group cursor-pointer">
                  <button className="w-full text-left">
                    <img
                      className="h-[280px] rounded-3xl w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={destination.image}
                      alt={destination.destination}
                    />
                  </button>
                  <div className="px-4 py-3">
                    <div className="text-gray-700 text-[16px] font-normal leading-[1.3]">
                      {destination.departure}
                    </div>
                    <div className="mt-1 text-[18px] font-bold leading-[1.3]">
                      {destination.destination}
                    </div>
                    <div className="mt-2">
                      <span className="text-gray-500 text-[16px] font-medium leading-[1.6]">
                        KRW
                      </span>
                      <span className="px-1.5 text-[20px] font-bold leading-[1.3]">
                        {destination.price}
                      </span>
                    </div>
                    <div className="text-[15px] font-bold leading-[1.6]">
                      {destination.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <button
          className={`absolute rounded-full -translate-y-1/2 -right-5 top-[140px] flex h-10 w-10 items-center justify-center border border-gray-250 bg-white hover:border-primary transition-colors ${
            currentIndex >= destinations.length - 4
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex >= destinations.length - 4}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className={`absolute rounded-full -translate-y-1/2 -left-5 top-[140px] flex h-10 w-10 items-center justify-center border border-gray-250 bg-white hover:border-primary transition-colors ${
            currentIndex === 0 ? "opacity-0 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* ✅ Mobile View */}
      <div className="block sm:hidden">
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {destinations.map((destination) => (
            <div key={destination.id} className="flex-shrink-0 w-64">
              <div className="group cursor-pointer">
                <button className="w-full text-left">
                  <img
                    className="h-48 rounded-2xl w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={destination.image}
                    alt={destination.destination}
                  />
                </button>
                <div className="px-2 py-3">
                  <div className="text-gray-700 text-[14px] font-normal leading-[1.3]">
                    {destination.departure}
                  </div>
                  <div className="mt-1 text-[16px] font-bold leading-[1.3]">
                    {destination.destination}
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-[14px] font-medium leading-[1.6]">
                      KRW
                    </span>
                    <span className="px-1.5 text-[18px] font-bold leading-[1.3]">
                      {destination.price}
                    </span>
                  </div>
                  <div className="text-[13px] font-bold leading-[1.6]">
                    {destination.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
