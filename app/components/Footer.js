"use client";
import { useState } from "react";

export default function Footer() {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1190px] px-4">
        {/* 상단 링크 */}
        <div className="flex items-center justify-between pb-1.5 pt-2 text-[13px]">
          <div className="flex items-center gap-x-5 font-medium text-gray-800">
            <a href="#" className="hover:text-primary">
              여행사 전용 E-AGENCY
            </a>
            <a href="#" className="hover:text-primary">
              별별스토어
            </a>
          </div>
          <div className="flex items-center gap-x-5">
            <a
              href="https://www.facebook.com/eastarjet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
              >
                <path
                  fill="#A1A1AA"
                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.129 20 14.991 20 10"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/eastarjet_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#A1A1AA"
                  d="M12 8.834c-1.712 0-3.167 1.455-3.167 3.166 0 1.712 1.455 3.167 3.167 3.167s3.166-1.455 3.166-3.167S13.711 8.834 12 8.834"
                ></path>
                <path
                  fill="#A1A1AA"
                  d="M16.06 2.5H8.026C4.918 2.5 2.5 4.918 2.5 7.94v8.033c0 3.109 2.418 5.527 5.527 5.527h8.032c3.023 0 5.441-2.418 5.441-5.527V7.94A5.42 5.42 0 0 0 16.06 2.5"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@EastarJet_ZE/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#A1A1AA"
                  fillRule="evenodd"
                  d="M20.598 4.716a2.75 2.75 0 0 1 1.944 1.956C23 8.399 22.996 12 22.996 12s0 3.601-.458 5.328c-.252.95-.997 1.7-1.944 1.956-1.715.462-8.596.462-8.596.462s-6.88 0-8.596-.462a2.75 2.75 0 0 1-1.944-1.956C1 15.601 1 12 1 12s0-3.601.462-5.332c.252-.951.997-1.7 1.944-1.956 1.715-.462 8.596-.462 8.596-.462s6.877 0 8.596.466M9.75 8.728v6.543L15.502 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="rounded border px-3 py-2 font-medium hover:border-primary transition-colors"
              href="#"
            >
              사이트맵
            </a>
          </div>
        </div>

        <hr className="bg-gray-200 h-[1px] w-full border-0" />

        <div className="flex">
          {/* 좌측 영역 */}
          <div className="flex flex-col justify-between pt-8">
            <div>
              {/* 로고 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="52"
                fill="none"
                className="mb-6"
              >
                <g fill="#71717A">
                  <path d="m17.174 18.867 2.054-4.32H1.476l1.05 2.21c.416.959.6 1.571.351 3.066-.007.043-2.635 14.964-2.84 16.098-.21 1.182.502 1.739 1.433 1.739h14.94l-.972-4.33H5.86l.928-5.273h8.836l.763-4.353h-8.83l.85-4.84h8.767z"></path>
                  <path d="M158.524 18.867l2.057-4.32h-16.91s.419.886 1.051 2.21c.415.959.6 1.571.352 3.066-.007.043-2.639 14.964-2.842 16.098-.212 1.182.505 1.739 1.433 1.739h14.1l-.975-4.33h-8.735l.925-5.273h7.995l.765-4.353h-7.99l.851-4.84h7.923z"></path>
                  {/* 더 많은 EASTAR 로고 패스들... */}
                </g>
              </svg>

              {/* 기업정보 토글 */}
              <div className="mb-15 text-[13px] text-gray-800">
                <div>
                  <button
                    className="flex items-center w-96 hover:underline"
                    onClick={() => setIsCompanyInfoOpen(!isCompanyInfoOpen)}
                  >
                    기업정보 자세히 보기
                    <svg
                      className={`ml-2 shrink-0 transition-transform duration-200 ${
                        isCompanyInfoOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  {isCompanyInfoOpen && (
                    <div className="mt-4 text-[13px] text-gray-600 space-y-2">
                      <p>회사명: 이스타항공 주식회사</p>
                      <p>대표자: 조중석</p>
                      <p>사업자등록번호: 214-81-96101</p>
                      <p>주소: 서울특별시 강서구 양천로 34, 양서빌딩 5층</p>
                      <p>통신판매업신고: 제2009-서울강서-0036호</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8 font-bold text-gray-600">
                도움이 필요하세요?
              </div>
              <div className="flex gap-x-6">
                <div>
                  <div className="mb-2 text-[13px] font-semibold text-gray-500">
                    예약문의
                  </div>
                  <div className="mb-1 text-xl font-semibold text-gray-800">
                    1544.0080
                  </div>
                  <div className="text-[13px] text-gray-800">
                    매일 연중무휴 09시 ~18시
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-[13px] font-semibold text-gray-500">
                    별별배송
                  </div>
                  <div className="mb-1 text-xl font-semibold text-gray-800">
                    1533.3458
                  </div>
                  <div className="text-[13px] text-gray-800">
                    평일 9시 ~ 18시
                  </div>
                </div>
              </div>
            </div>

            {/* ISMS 인증 */}
            <div className="pb-10 text-[13px] text-gray-500">
              <div className="mb-0.5">
                <img
                  alt="ISMS"
                  width="120"
                  height="120"
                  src="https://zeimage.eastarjet.com/newstar/images/ISMS_ICO1.png"
                />
              </div>
              <div>인증 범위 인터넷 항공권 예약 발권 및 고객 서비스 운영</div>
              <div className="mb-3">유효기간 2024.06.05 ~ 2027.06.04</div>
              <div>Copyright Eastarjet. All Rights Reserved.</div>
            </div>
          </div>

          <div className="w-[1px] h-auto bg-gray-200 mx-8"></div>

          {/* 우측 링크 영역 */}
          <div className="flex-1 py-10">
            <div className="flex justify-between">
              {/* 이스타항공 */}
              <div className="flex-1 text-gray-600">
                <div className="mb-7 font-bold">이스타항공</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      회사소개
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      이용약관
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary font-bold">
                      개인정보처리방침
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      국내선 여객운송 약관
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      국제선 여객운송 약관
                    </a>
                  </div>
                </div>

                <hr className="bg-gray-200 h-[1px] w-full border-0 my-8" />

                <div className="mb-7 font-bold">고객센터</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      자주 묻는 질문
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      공지사항
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      고객의 말씀
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      제휴 문의
                    </a>
                  </div>
                </div>
              </div>

              {/* 운항정보 */}
              <div className="flex-1 text-gray-600">
                <div className="mb-7 font-bold">운항 정보</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      노선별 운항 시간표
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      실시간 출도착
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      운항 노선도
                    </a>
                  </div>
                </div>

                <hr className="bg-gray-200 h-[1px] w-full border-0 my-8" />

                <div className="mb-7 font-bold">이벤트 존</div>
                <div className="text-xs">
                  <a href="#" className="hover:text-primary">
                    이벤트
                  </a>
                </div>
              </div>

              {/* 항공권 예매 */}
              <div className="flex-1 text-gray-600">
                <div className="mb-7 font-bold">항공권 예매</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      항공권 예매
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      최저가 항공권
                    </a>
                  </div>
                </div>

                <hr className="bg-gray-200 h-[1px] w-full border-0 my-8" />

                <div className="mb-7 font-bold">제휴상품</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      여행자보험
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      호텔
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      렌터카
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      어트랙션
                    </a>
                  </div>
                </div>
              </div>

              {/* 서비스 안내 */}
              <div className="flex-1 text-gray-600">
                <div className="mb-7 font-bold">서비스 안내</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      국내선 운임
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      국제선 운임
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      항공권 예매 방법
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      항공권 변경/취소
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      온라인체크인
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      탑승수속 서비스
                    </a>
                  </div>
                </div>

                <hr className="bg-gray-200 h-[1px] w-full border-0 my-8" />

                <div className="mb-7 font-bold">기내 및 부가서비스</div>
                <div className="space-y-4 text-xs">
                  <div>
                    <a href="#" className="hover:text-primary">
                      지정좌석 안내
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      위탁수하물 안내
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      사전주문 기내식
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-primary">
                      기내 면세품 예약 주문
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 플로팅 버튼들 */}
      <div className="fixed bottom-44 right-[62px] z-[1000] flex max-w-24 translate-x-1/2 flex-col rounded-2xl border border-gray-250 bg-white px-3 py-1.5 text-gray-600 text-[12px] font-medium leading-[1.3]">
        <a className="py-4 text-center hover:text-primary" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="mx-auto mb-0.5"
          >
            <path
              fill="#5C6A86"
              d="M4.667 5h14.666C20.253 5 21 5.746 21 6.667V9c0 .552-.474.98-.959 1.244a2 2 0 0 0 0 3.511c.485.266.959.692.959 1.245v2.333c0 .92-.746 1.667-1.667 1.667H4.667C3.747 19 3 18.254 3 17.333V15c0-.552.474-.98.959-1.244a2 2 0 0 0 0-3.512C3.474 9.98 3 9.552 3 9V6.667C3 5.747 3.746 5 4.667 5"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M10 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>예약조회</span>
        </a>

        <div className="mx-2 border-t border-gray-250"></div>

        <a className="py-4 text-center hover:text-primary" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="mx-auto mb-0.5"
          >
            <path
              fill="#5C6A86"
              fillRule="evenodd"
              d="M5 4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>체크인</span>
        </a>

        <div className="mx-2 border-t border-gray-250"></div>

        <a className="py-4 text-center hover:text-primary" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="mx-auto mb-0.5"
          >
            <path
              fill="#5C6A86"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
            ></path>
          </svg>
          <span>공항이용팁</span>
        </a>

        <div className="mx-2 border-t border-gray-250"></div>

        <a className="py-4 text-center hover:text-primary" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="mx-auto mb-0.5"
          >
            <path
              fill="#5C6A86"
              d="M.219 2.924C.219 1.585 1.379.5 2.81.5h10.37c1.433 0 2.593 1.085 2.593 2.424v13.334c0 1.338-1.16 2.424-2.592 2.424H2.812c-1.433 0-2.593-1.086-2.593-2.424z"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M5.406 4.313a1 1 0 0 1 1 1v8.556a1 1 0 1 1-2 0V5.313a1 1 0 0 1 1-1m5.185 0a1 1 0 0 1 1 1v8.556a1 1 0 1 1-2 0V5.313a1 1 0 0 1 1-1"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>부가서비스</span>
        </a>
      </div>

      {/* 맨 위로 이동 버튼 */}
      <div className="fixed bottom-7 right-9 z-[1000]">
        <button
          className="h-12 w-12 rounded-full border border-gray-250 text-gray-700 drop-shadow-md bg-white hover:border-primary transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mx-auto"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}
