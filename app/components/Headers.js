"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router 사용시
// import { useRouter } from "next/router"; // Pages Router 사용시
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  // 로그인 상태 체크
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

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");

    // 이벤트 페이지에 있다면 새로고침하여 특별 이벤트 숨기기
    if (window.location.pathname === "/events") {
      window.location.reload();
    }
  };

  // 로그인 버튼 클릭
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <>
      {/* 상단 헤더 */}
      <header className="relative z-50 mx-auto w-full sm:relative">
        <div className="bg-white">
          <div className="mx-auto flex w-full max-w-[1190px] items-center justify-between bg-white px-4 h-16">
            <div>
              <a href="/">
                <img
                  alt="이스타항공 로고"
                  width="143"
                  height="32"
                  src="https://zeimage.eastarjet.com/newstar/images/road3.png"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* PC 메뉴 */}
            <div className="hidden sm:flex gap-x-3 text-sm items-center">
              {/* 로그인한 사용자에게만 표시되는 환영 메시지 */}
              {isLoggedIn && (
                <div className="flex items-center mr-4">
                  <span className="text-sm text-yellow-600 font-medium">
                    안녕하세요, {userName}님! ✨
                  </span>
                </div>
              )}

              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                온라인체크인
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                마이페이지
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                고객센터
              </a>
              <button className="flex items-center gap-x-0.5 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                한국어
              </button>
            </div>

            {/* 모바일 햄버거 버튼 */}
            <div className="sm:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-40 relative hidden sm:block">
        {/* 배경 오버레이 */}
        <div className="pointer-events-none fixed inset-0 z-10 bg-black/30 opacity-0 transition-opacity backdrop-blur-sm [&.show]:opacity-100 [&.show]:pointer-events-auto"></div>

        <div className="relative z-10 bg-white">
          <div className="mx-auto max-w-[1190px] px-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-x-5 [&_a:hover]:text-primary">
                {/* 항공권 예매 드롭다운 */}
                <div className="group relative">
                  <div className="cursor-pointer py-3.5 text-lg font-medium text-gray-800 hover:font-bold hover:text-primary">
                    항공권 예매
                  </div>

                  {/* 드롭다운 메뉴 */}
                  <div
                    className="absolute left-0 right-0 z-20 hidden group-hover:block border-t bg-white shadow-lg"
                    style={{
                      left: "0",
                      right: "0",
                      width: "100vw",
                      marginLeft: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="mx-auto flex max-w-[1190px] gap-x-9 py-8 px-4">
                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          항공권
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">항공권 예매</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">최저가 항공권</a>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          운항 정보
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">노선별 운항 시간표</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">실시간 출도착</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">운항 노선도</a>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          부가서비스 구매
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">지정좌석 구매</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">위탁수하물 사전구매</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 나의 예매 */}
                <div className="py-3.5 text-lg font-medium text-gray-800 hover:font-bold hover:text-primary">
                  <a href="#">나의 예매</a>
                </div>

                {/* 서비스 안내 드롭다운 */}
                <div className="group relative">
                  <div className="cursor-pointer py-3.5 text-lg font-medium text-gray-800 hover:font-bold hover:text-primary">
                    서비스 안내
                  </div>

                  {/* 드롭다운 메뉴 */}
                  <div
                    className="absolute left-0 right-0 z-20 hidden group-hover:block border-t bg-white shadow-lg"
                    style={{
                      left: "0",
                      right: "0",
                      width: "100vw",
                      marginLeft: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="mx-auto flex max-w-[1190px] gap-x-9 py-8 px-4">
                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          항공권 서비스
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">국내선 운임</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">국제선 운임</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">항공권 예매</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">항공권 변경/취소</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">온라인체크인</a>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          공항 서비스
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">탑승수속 서비스</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">셀프체크인</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">수하물 서비스</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">분실수하물 찾기</a>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          기내 서비스
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">기내 면세품 예약 주문</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">기내 유료상품</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">기내 서비스</a>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          부가서비스
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">지정좌석 안내</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">위탁수하물 안내</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">취소/환불</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">사전주문 기내식</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3.5 text-lg font-medium text-gray-800 hover:font-bold hover:text-primary">
                  <a href="/events">이벤트</a>
                </div>

                {/* 제휴상품 드롭다운 */}
                <div className="group relative">
                  <div className="cursor-pointer py-3.5 text-lg font-medium text-gray-800 hover:font-bold hover:text-primary">
                    제휴상품
                  </div>

                  {/* 드롭다운 메뉴 */}
                  <div
                    className="absolute left-0 right-0 z-20 hidden group-hover:block border-t bg-white shadow-lg"
                    style={{
                      left: "0",
                      right: "0",
                      width: "100vw",
                      marginLeft: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="mx-auto flex max-w-[1190px] gap-x-9 py-8 px-4">
                      <div className="min-w-36">
                        <div className="pb-4 text-lg font-medium text-gray-400">
                          제휴상품
                        </div>
                        <div className="space-y-2">
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">여행자보험</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">호텔</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">렌터카</a>
                          </div>
                          <div className="flex h-8 items-center font-medium text-gray-800 hover:text-primary">
                            <a href="#">어트랙션</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 우측 링크들 */}
              <div className="flex items-center gap-x-4">
                <a
                  className="flex items-center gap-x-1 text-sm font-medium"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="none"
                    viewBox="0 0 17 17"
                  >
                    <rect
                      width="16"
                      height="16"
                      x="0.5"
                      y="0.5"
                      fill="#D6001C"
                      rx="4"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M13.292 7.873l-.376-.029c-3.188-.3-4.003-.517-4.228-4.156 0 0-.016-.188-.188-.188-.173 0-.19.188-.19.188-.224 3.639-1.039 3.857-4.227 4.156l-.376.03c-.099.006-.207.043-.207.109 0 .071.101.107.207.12 3.519.389 4.305.658 4.612 5.195.003.1.056.202.181.202.126 0 .177-.102.182-.202.305-4.537 1.092-4.806 4.61-5.195.105-.013.208-.049.208-.12 0-.066-.109-.103-.208-.11"
                    ></path>
                  </svg>
                  별별스토어
                </a>

                <span className="text-gray-250">|</span>

                <a
                  className="flex items-center gap-x-1 text-sm font-medium"
                  href="#"
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
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  </svg>
                  기내면세 온라인몰
                </a>

                {/* 로그인 상태에 따른 버튼 변경 */}
                {isLoggedIn ? (
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2 px-3 py-1 bg-yellow-50 rounded-lg border border-yellow-200">
                      <svg
                        className="w-4 h-4 text-yellow-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-yellow-800 font-medium">
                        {userName}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="h-[30px] rounded-lg border border-red-200 bg-red-50 px-3 text-sm text-red-600 hover:bg-red-100 hover:border-red-300 transition-colors"
                    >
                      로그아웃
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={handleLoginClick}
                      className="h-[30px] rounded-lg border border-gray-250 px-3 text-sm hover:border-primary"
                    >
                      로그인
                    </button>
                    <button
                      onClick={() => router.push("/signup")}
                      className="h-[30px] rounded-lg border border-gray-250 px-3 text-sm hover:border-primary"
                    >
                      회원가입
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-16 inset-x-0 bg-white z-50 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-3 text-gray-800 text-sm">
            {/* 모바일 로그인 상태 표시 */}
            {isLoggedIn && (
              <div className="pb-3 border-b border-gray-200">
                <div className="flex items-center gap-x-2 p-3 bg-yellow-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-yellow-800 font-medium">
                    안녕하세요, {userName}님! ✨
                  </span>
                </div>
              </div>
            )}

            <a href="#" className="hover:text-primary">
              항공권 예매
            </a>
            <a href="#" className="hover:text-primary">
              온라인체크인
            </a>
            <a href="#" className="hover:text-primary">
              마이페이지
            </a>
            <a href="#" className="hover:text-primary">
              고객센터
            </a>
            <a href="/events" className="hover:text-primary">
              이벤트
            </a>
            <a href="#" className="hover:text-primary">
              별별스토어
            </a>
            <a href="#" className="hover:text-primary">
              기내면세 온라인몰
            </a>

            {/* 모바일 로그인/로그아웃 버튼 */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="border border-red-200 bg-red-50 text-red-600 px-3 py-2 rounded text-sm hover:bg-red-100"
              >
                로그아웃
              </button>
            ) : (
              <>
                <button
                  onClick={handleLoginClick}
                  className="border border-gray-300 px-3 py-2 rounded text-sm hover:border-primary"
                >
                  로그인
                </button>
                <button className="border border-gray-300 px-3 py-2 rounded text-sm hover:border-primary">
                  회원가입
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
