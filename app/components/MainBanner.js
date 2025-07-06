"use client";
import { useState, useEffect } from "react";

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const banners = [
    {
      id: 1,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250702124804_pc2.jpg",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250625023100_pc.jpg",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250620092919_pc.jpg",
      link: "#",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, banners.length]);

  return (
    <>
      {/* ✅ 공지 영역 - PC용 */}
      <div className="hidden sm:block mx-auto min-w-[1280px] max-w-[1920px] overflow-hidden rounded-xl bg-gray-100 mt-4">
        <div className="mx-auto max-w-[1190px] flex items-center gap-x-4 px-4 py-2">
          <span className="text-[16px] font-bold leading-[1.3]">
            [공지사항]
          </span>
          <div className="flex-1">
            <div className="overflow-hidden">
              <div className="flex flex-col h-[42px]">
                <a href="#" className="flex items-center h-full">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-medium leading-[1.6]">
                    이스타항공, 팔삼구 온라인 프로모션 엄청난 인기!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ 배너 - PC 전용 */}
      <div className="hidden sm:block mx-auto min-w-[1280px] max-w-[1920px] mt-5">
        <div className="flex justify-center">
          <div className="min-w-[1920px]">
            <div className="relative">
              <div className="relative mx-auto w-[1840px] overflow-hidden rounded-3xl">
                <div className="overflow-hidden">
                  <div
                    className="flex h-[520px] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {banners.map((banner, index) => (
                      <div key={banner.id} className="min-w-full">
                        <a href={banner.link}>
                          <img
                            className="h-[520px] w-full rounded-3xl object-cover"
                            src={banner.image}
                            alt={`배너 ${index + 1}`}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 배너 컨트롤 */}
              <div className="absolute bottom-[70px] left-0 flex w-full justify-center">
                <div className="flex items-center rounded-[18px] bg-black/40 py-1 pl-4 pr-2 text-gray-200 text-[14px] font-bold leading-[1.3]">
                  {currentSlide + 1} /{" "}
                  <span className="ml-1 text-gray-200">{banners.length}</span>
                  <button
                    className="ml-1 p-1"
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev > 0 ? prev - 1 : banners.length - 1
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button
                    className="ml-1 p-1"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                  >
                    {isAutoPlay ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                        <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="6,4 20,12 6,20"></polygon>
                      </svg>
                    )}
                  </button>
                  <button
                    className="ml-1 p-1"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % banners.length)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ 모바일 전용 배너 */}
      <div className="block sm:hidden mt-4 px-4">
        <div className="relative w-full rounded-xl overflow-hidden">
          <a href={banners[currentSlide].link}>
            <img
              src={banners[currentSlide].image}
              alt={`모바일 배너 ${currentSlide + 1}`}
              className="w-full h-48 object-cover rounded-xl"
            />
          </a>
          {/* 간단한 컨트롤 (좌우) */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
