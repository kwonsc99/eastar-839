"use client";
import { useState } from "react";

export default function EventSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250401125752_PC_EVENT_01.jpg",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250609015031_pc.jpg",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250401013142_04_신한카드.jpg",
      link: "#",
    },
    {
      id: 4,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250520100617_pc.jpg",
      link: "#",
    },
    {
      id: 5,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250401014836_09_신라면세점.jpg",
      link: "#",
    },
    {
      id: 6,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250512104119_롯데PC.jpg",
      link: "#",
    },
    {
      id: 7,
      image:
        "https://zeimage.eastarjet.com/newstar/images/admin/event/20250401014749_05_돈키호테.jpg",
      link: "#",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < events.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="hidden sm:block mx-auto max-w-[1190px] px-4 mb-20">
        <h2 className="text-[28px] font-bold leading-[1.25] mb-5">
          진행 중인 이벤트
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex h-[180px] transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="min-w-0 shrink-0 grow-0 pl-4 basis-1/3"
                >
                  <a href={event.link}>
                    <img
                      className="h-[180px] w-[380px] rounded-3xl object-cover hover:scale-105 transition-transform duration-300"
                      src={event.image}
                      alt={`이벤트 ${index + 1}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            className={`absolute rounded-full top-1/2 -translate-y-1/2 -right-4 flex h-10 w-10 items-center justify-center border border-gray-250 bg-white hover:border-primary transition-colors ${
              currentIndex >= events.length - 3
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={nextSlide}
            disabled={currentIndex >= events.length - 3}
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
            className={`absolute rounded-full top-1/2 -translate-y-1/2 -left-5 flex h-10 w-10 items-center justify-center border border-gray-250 bg-white hover:border-primary transition-colors ${
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
      </div>
      {/* ✅ Mobile View */}
      <div className="block sm:hidden px-4 mb-10 mt-5">
        <h2 className="text-[28px] sm:text-[24px] font-bold leading-[1.25] mb-5">
          진행 중인 이벤트
        </h2>

        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {events.map((event) => (
            <a
              href={event.link}
              key={event.id}
              className="block group flex-shrink-0"
            >
              <img
                src={event.image}
                alt="이벤트"
                className="w-80 h-48 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group-hover:brightness-105"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
