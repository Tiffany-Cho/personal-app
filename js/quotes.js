const quotes = [
  {
    quotes: "당신이 할 수 있다고 믿으면, 당신은 이미 반을 이룬 것이다.",
    author: "시어도어 루스벨트",
  },
  { quotes: "성공은 최선을 다한 후에 찾아온다.", author: "윈스턴 처칠" },
  {
    quotes:
      "우리는 우리가 반복적으로 하는 것이다. 그러므로 탁월함은 행동이 아니라 습관이다.",
    author: "아리스토텔레스",
  },
  { quotes: "행동 없이는 꿈은 없다.", author: "조지 S. 패튼" },
  {
    quotes:
      "당신이 원하는 것을 얻기 위해서는, 먼저 그 목표를 명확히 해야 한다.",
    author: "조지 카르버",
  },
  { quotes: "실패는 성공의 어머니이다.", author: "토마스 에디슨" },
  {
    quotes: "가장 어두운 밤도 끝이 있고, 태양은 항상 다시 떠오른다.",
    author: "빅토르 위고",
  },
  {
    quotes: "변화는 당신이 만들 수 있는 가장 큰 힘이다.",
    author: "마하트마 간디",
  },
  { quotes: "배움은 끝이 없는 여정이다.", author: "에드워드 기번" },
  {
    quotes: "미래는 우리가 오늘 하는 일에 달려 있다.",
    author: "엘리너 루스벨트",
  },
  {
    quotes: "가장 큰 위험은 위험을 감수하지 않는 것이다.",
    author: "마크 저커버그",
  },
  { quotes: "성공은 준비가 기회를 만났을 때 발생한다.", author: "세네카" },
  {
    quotes: "가장 어려운 일은 시작하는 것이다.",
    author: "마르쿠스 아우렐리우스",
  },
  {
    quotes: "당신이 할 수 있다고 믿는 순간, 당신은 이미 절반을 이룬 것이다.",
    author: "시어도어 루스벨트",
  },
  { quotes: "행복은 목표가 아니라 결과이다.", author: "달라이 라마" },
  {
    quotes: "리더십은 타인을 이끄는 것이 아니라 그들을 돕는 것이다.",
    author: "존 맥스웰",
  },
  {
    quotes: "진실한 친구는 당신의 모든 결점을 사랑하는 사람이다.",
    author: "엘리너 루스벨트",
  },
  {
    quotes: "진정한 성공은 다른 사람의 삶에 긍정적인 변화를 주는 것이다.",
    author: "마야 안젤루",
  },
  {
    quotes: "당신의 꿈을 이루기 위해서는 먼저 그 꿈을 믿어야 한다.",
    author: "월트 디즈니",
  },
  { quotes: "문제를 해결할 수 있는 힘은 우리 안에 있다.", author: "헬렌 켈러" },
  {
    quotes: "당신이 원하는 것을 위해 싸우는 것은 결코 헛되지 않다.",
    author: "마틴 루터 킹 주니어",
  },
  {
    quotes:
      "과거는 당신의 오늘을 형성하지만, 당신의 미래는 당신의 선택에 달려 있다.",
    author: "스티븐 코비",
  },
  {
    quotes: "성공은 당신이 얼마나 많은 장애물을 극복했는가에 따라 결정된다.",
    author: "제임스 캐머런",
  },
  {
    quotes:
      "사람들은 당신이 한 일을 잊어버릴 수 있지만, 당신이 그들에게 준 감정은 결코 잊지 않는다.",
    author: "마야 안젤루",
  },
  {
    quotes: "당신이 두려워하는 것을 정면으로 바라보아야 한다.",
    author: "에리히 프롬",
  },
  {
    quotes: "꿈이 없다면, 삶은 단지 존재하는 것에 불과하다.",
    author: "파울로 코엘료",
  },
  { quotes: "성공은 끈기와 노력의 결실이다.", author: "넬슨 만델라" },
  { quotes: "긍정적인 생각은 긍정적인 삶을 만든다.", author: "조엘 오스틴" },
  { quotes: "자신을 믿고, 자신의 길을 가라.", author: "스티브 잡스" },
  { quotes: "행복은 우리가 선택하는 것이다.", author: "달라이 라마" },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
