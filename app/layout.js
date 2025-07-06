import "./globals.css";

export const metadata = {
  title: "EastarJet - 이스타항공",
  description:
    "이스타항공에서 편리한 항공권 예매와 풍성한 프로모션 혜택으로 더욱 즐거운 여행을 시작하세요",
  keywords:
    "이스타항공, Eastar Jet, 저비용항공사, LCC, 항공권 예매, 특가 항공권, 여행",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="break-keep bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
