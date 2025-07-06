"use client";
import { useState } from "react";

export default function PriceChart() {
  const [activeTab, setActiveTab] = useState("알마티");

  const destinations = [
    "알마티",
    "오사카/간사이",
    "푸꾸옥",
    "정저우",
    "오키나와",
    "제주",
  ];

  const chartData = {
    알마티: {
      minPrice: "404,400",
      route: "서울/인천 출발, 편도, 성인 1인 기준",
      dates: [
        "7/3",
        "7/4",
        "7/5",
        "7/6",
        "7/7",
        "7/8",
        "7/9",
        "7/10",
        "7/11",
        "7/12",
        "7/13",
        "7/14",
      ],
      prices: [
        null,
        480000,
        null,
        null,
        520000,
        null,
        null,
        null,
        410000,
        null,
        null,
        520000,
      ],
    },
  };

  const currentData = chartData[activeTab] || chartData["알마티"];

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1190px] px-4">
        <h2 className="text-[28px] font-bold leading-[1.25] mb-5">
          한눈에 보는 항공권 가격
        </h2>

        <div className="mt-2.5 min-h-80 rounded-[32px] bg-white pb-8 shadow">
          {/* 탭 메뉴 */}
          <div className="flex items-center border-b min-h-15 justify-start gap-x-8 overflow-auto px-10 pt-1.5">
            {destinations.map((destination) => (
              <button
                key={destination}
                className={`inline-flex items-center justify-center whitespace-nowrap transition-all border-b-2 px-6 py-4 text-[18px] font-bold leading-[1.3] ${
                  activeTab === destination
                    ? "border-b-primary text-gray-900"
                    : "border-b-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab(destination)}
              >
                {destination}
              </button>
            ))}
          </div>

          {/* 차트 내용 */}
          <div className="px-10">
            <div className="mb-5 mt-7 flex justify-between">
              <div>
                <div className="text-gray-500 text-[16px] font-medium leading-[1.3]">
                  {activeTab} 최저가
                </div>
                <div className="mt-2.5 text-[28px] font-bold leading-[1.25]">
                  KRW {currentData.minPrice} ~
                </div>
              </div>
              <div className="text-gray-500 text-[14px] font-medium leading-[1.6]">
                {currentData.route}
              </div>
            </div>

            {/* 차트 영역 */}
            <div className="flex justify-center text-xs h-[150px] w-full">
              <div className="w-full h-full relative">
                {/* X축 라벨 */}
                <div className="absolute bottom-0 w-full flex justify-between px-2">
                  {currentData.dates.map((date, index) => (
                    <div key={index} className="text-gray-400 text-xs">
                      {date}
                    </div>
                  ))}
                </div>

                {/* 차트 바 */}
                <div className="flex items-end justify-between h-[120px] px-2">
                  {currentData.prices.map((price, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-1"
                    >
                      {price && (
                        <div
                          className={`w-6 rounded-t ${
                            index === 8 ? "bg-primary" : "bg-blue-400"
                          } hover:bg-blue-600 transition-colors cursor-pointer`}
                          style={{
                            height: `${
                              ((price - 300000) / 300000) * 80 + 20
                            }px`,
                            minHeight: "20px",
                          }}
                          title={`${
                            currentData.dates[index]
                          }: ${price.toLocaleString()}원`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
