const works = {
  youtube: {
    number: "01",
    title: "YouTube企画制作",
    text: "チャンネルの魅力を引き出し<br>企画から撮影・編集・運用までを<br>一貫してプロデュースします"
  },
  corporate: {
    number: "02",
    title: "企業PR映像",
    text: "企業の価値を整理し<br>伝わる映像として<br>静かに強く届けます"
  },
  tourism: {
    number: "03",
    title: "自治体・観光PR映像",
    text: "地域の魅力を見つめ<br>人が訪れたくなる物語へ<br>映像で整えます"
  },
  presentation: {
    number: "04",
    title: "プレゼンテーション支援",
    text: "講演やシンポジウムの意図を汲み取り<br>伝わる映像と構成で<br>発信を支えます"
  },
  television: {
    number: "05",
    title: "テレビ番組企画制作",
    text: "報道　情報　ドラマ　ドキュメンタリー<br>30年以上の経験を生かし<br>企画から制作まで伴走します"
  }
};

const detail = document.getElementById("workDetail");
const number = document.getElementById("workNumber");
const title = document.getElementById("workTitle");
const text = document.getElementById("workText");

document.querySelectorAll("[data-work]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = works[button.dataset.work];
    if (!item || !detail || !number || !title || !text) return;

    detail.classList.add("is-changing");

    window.setTimeout(() => {
      number.textContent = item.number;
      title.textContent = item.title;
      text.innerHTML = item.text;
      detail.classList.remove("is-changing");
    }, 400);
  });
});
