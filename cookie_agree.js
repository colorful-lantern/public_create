// Acceptricsの設定オブジェクトを作成
window.acceptrics = {};

// 設定をローカルストレージに保存
localStorage.setItem("__acceptrics_conf", JSON.stringify({
  bannerText: "当社のウェブサイトでは、お客様の体験を向上させ、コンテンツや広告をパーソナライズするために、Cookie や類似のテクノロジーを使用しています。当社のウェブサイト/アプリを引き続きご利用いただくことで、お客様はこれらのテクノロジーの使用と、パーソナライズされた広告およびパーソナライズされていない広告のための個人データの処理に同意することになります。[同意する] をクリックすると、上記のように Cookie の使用とデータの処理に同意したことになります。",
  gcmAdvanced: "false",
  backgroundColor: "#000000",
  fontColor: "#ffffff",
  geoArea: "worldwide"
}));

// Acceptricsのスクリプトが読み込まれた後に実行されるイベントリスナーを設定
document.addEventListener("__acceptrics_loaded", () => {
  window.acceptrics.initializeSettings();
});

// Acceptricsのスクリプトを動的に読み込む
const script = document.createElement('script');
script.src = "https://cdn.acceptrics.com";
document.head.appendChild(script);
