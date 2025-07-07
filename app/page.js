"use client";

import { useState, useEffect } from "react";
import Header from "./components/Headers";
import MainBanner from "./components/MainBanner";
import BookingSection from "./components/BookingSection";
import EventSection from "./components/EventSection";
import DestinationSection from "./components/DestinationSection";
import PriceChart from "./components/PriceChart";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  useEffect(() => {
    setShowNoticeModal(true);
  }, []);

  const closeModal = () => {
    setShowNoticeModal(false);
  };

  return (
    <main>
      <Header />
      <MainBanner />
      <BookingSection />
      <EventSection />
      <DestinationSection />
      <PriceChart />
      <NewsSection />
      <Footer />

      {/* 공지사항 모달 */}
      {showNoticeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-center mb-4">
                📢 <strong>멘토님 및 심사위원분들께 감사드립니다</strong>
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  이번 프로젝트를 통해 현업에서만 들을 수 있는 깊이 있는 조언과
                  실질적인 피드백을 받을 수 있어 정말 값진 시간이었습니다.
                  바쁘신 와중에도 열정적으로 참여해 주신 모든 멘토님과
                  심사위원분들께 진심으로 감사드립니다.
                </p>

                <p>
                  덕분에 저희 팀도 한층 더 성장할 수 있었고, 무엇보다 실전
                  중심의 마케팅 관점을 배우는 뜻깊은 경험이 되었습니다.
                </p>

                <p>
                  혹시 이후에도 저희 팀에게 궁금한 점이나 간단한 피드백, 또는
                  추가로 나누고 싶은 이야기가 있으시다면 언제든 편하게 연락
                  주세요! 저희는 항상 열려 있습니다 😊
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-1 text-sm">
                    <li>• 권석찬: 010-8567-5197 / kwonsc99@gmail.com</li>
                    <li>• 김윤서: 010-3850-6574 / dbstj7457@naver.com</li>
                    <li>• 김하늘: 010-7642-7294 / khn7294@naver.com</li>
                    <li>• 류석현: 010-2447-8516 / darkknightttt@naver.com</li>
                  </ul>
                </div>

                <p className="text-center font-medium">
                  다시 한 번 감사드리며, 앞으로도 좋은 인연으로 이어지길
                  바랍니다. 감사합니다!
                </p>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={closeModal}
                  className="bg-red-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
