// お知らせの内容を定義
const notice = "当サイトでは、サービス向上のためにCookieを使用しています。サイトの利用を継続することで、Cookieの使用に同意したものとみなします。";

// ページが読み込まれたときに実行
window.addEventListener("DOMContentLoaded", () => {
  // お知らせ要素を作成
  const noticeElement = document.createElement("div");
  noticeElement.textContent = notice;

  // スタイルを設定
  noticeElement.style.position = "fixed";
  noticeElement.style.bottom = "0";
  noticeElement.style.left = "0";
  noticeElement.style.width = "100%";
  noticeElement.style.backgroundColor = "#333"; // 黒よりの灰色
  noticeElement.style.color = "#fff"; // 白い文字色
  noticeElement.style.textAlign = "center";
  noticeElement.style.padding = "10px";
  noticeElement.style.boxShadow = "0 -2px 5px rgba(0, 0, 0, 0.5)";
  noticeElement.style.zIndex = "1000";

  // ページに追加
  document.body.appendChild(noticeElement);
});
