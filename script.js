const questions = [
  {
    icon: '🏬',
    title: '第一關：這間店可靠嗎？',
    scenario: '張婆婆想買一個電飯煲，看到兩間店：\n\nA 店寫著「品牌官方旗艦店」，有官方認證、很多真實評價，客服也在平台內回覆。\n\nB 店價錢便宜一半，但沒有官方認證，評價也很少。',
    options: [
      '選 A 店，因為是官方旗艦店，有平台保障。',
      '選 B 店，因為便宜很多。',
      '不用看資料，直接買最便宜的。'
    ],
    answer: 0,
    good: '做得好！網購時要優先選擇官方旗艦店、授權店、有平台保障的店鋪。',
    bad: '便宜不一定安全。沒有授權的店可能賣假貨、翻新貨，甚至收錢後不出貨。'
  },
  {
    icon: '💸',
    title: '第二關：價格太低要不要買？',
    scenario: '一個原價 $1,000 的名牌保溫杯，有店鋪只賣 $99，還寫著：\n\n「最後 10 分鐘！錯過不再有！」',
    options: [
      '立即付款，因為很便宜。',
      '先查看是否官方店、評價、商品相片和退貨政策。',
      '問對方可不可以私下轉帳再便宜一點。'
    ],
    answer: 1,
    good: '非常好！看到「超低價」、「限時搶購」時，要停一停、想一想、查一查。',
    bad: '詐騙常用「很便宜」、「快點買」、「最後機會」令人衝動付款。'
  },
  {
    icon: '📦',
    title: '第三關：貨不對板陷阱',
    scenario: '張婆婆看到一張很漂亮的按摩椅圖片，價錢很便宜。\n\n但評價中有人說：「收到的貨和圖片完全不同」、「尺寸很小」、「店鋪不肯退貨」。',
    options: [
      '照買，因為圖片很好看。',
      '不買，因為有很多貨不對板的評價。',
      '買兩張，反正便宜。'
    ],
    answer: 1,
    good: '答對了！購物前要看清楚買家評價、實物圖片、尺寸和退貨政策。',
    bad: '漂亮圖片不一定是真貨。有些店會用假圖片吸引人購買，收到的貨可能完全不同。'
  },
  {
    icon: '📱',
    title: '第四關：平台外交易',
    scenario: '店主私訊張婆婆：\n\n「婆婆，妳不要在平台付款，加我 WhatsApp / WeChat，直接轉帳給我，可以再便宜 $100。」',
    options: [
      '加對方，因為可以便宜。',
      '繼續在平台內付款，不離開平台交易。',
      '直接銀行轉帳給對方。'
    ],
    answer: 1,
    good: '很好！一定要留在購物平台內交易，這樣才有付款記錄和售後保障。',
    bad: '離開平台交易後，如果對方不發貨、賣假貨或失聯，通常很難追討。'
  },
  {
    icon: '🔗',
    title: '第五關：假客服連結',
    scenario: '張婆婆收到一個訊息：\n\n「您的訂單付款失敗，請立即點擊以下連結重新付款。」\n\n連結看起來怪怪的，不像官方網址。',
    options: [
      '立即點擊連結。',
      '不點擊，自己打開官方 App 查看訂單狀態。',
      '把銀行卡資料輸入連結內。'
    ],
    answer: 1,
    good: '答得好！不要亂點陌生連結，要自己打開官方 App 或官方網站查看。',
    bad: '假連結可能會偷取帳號、密碼、銀行卡資料。'
  },
  {
    icon: '🔐',
    title: '第六關：驗證碼可以給別人嗎？',
    scenario: '有人自稱客服，打電話給張婆婆：\n\n「我們要幫你退款，請把手機收到的 6 位數驗證碼告訴我。」',
    options: [
      '告訴對方，因為他說是客服。',
      '不告訴對方，立即掛線。',
      '傳給對方，但叫他不要騙人。'
    ],
    answer: 1,
    good: '非常正確！驗證碼等於帳戶鑰匙，任何人都不可以給。',
    bad: '騙徒拿到驗證碼後，可能登入你的帳戶、偷錢或改密碼。'
  },
  {
    icon: '⭐',
    title: '第七關：真假評價',
    scenario: '一間店有很多評價，但內容都是：\n\n「很好很好很好」\n「完美」\n「值得買」\n\n沒有實物相片，也沒有詳細描述。',
    options: [
      '一定可信，因為評價很多。',
      '要小心，可能是假評價。',
      '不用看評價，只看價錢。'
    ],
    answer: 1,
    good: '答對！真實評價通常會有實物相片、使用感受、優點和缺點。',
    bad: '有些店會製造假評價。評價太短、太重複、沒有圖片時要小心。'
  },
  {
    icon: '🧴',
    title: '第八關：分辨正品與假貨',
    scenario: '張婆婆想買名牌護膚品。\n\n一間店沒有品牌授權，價錢很低，商品包裝相片也很模糊。',
    options: [
      '選官方旗艦店或授權店購買。',
      '買最便宜的，反正都一樣。',
      '問店主一句「是不是正品」，他說是就相信。'
    ],
    answer: 0,
    good: '很好！買品牌商品時，最好選擇官方旗艦店或授權店。',
    bad: '騙徒通常都會說自己賣的是正品，但口講無憑，要看官方認證和平台保障。'
  },
  {
    icon: '🧾',
    title: '第九關：收到貨不對板怎樣辦？',
    scenario: '張婆婆收到貨後，發現商品和圖片完全不同，而且店主不理會她。',
    options: [
      '立即在平台內申請退款或投訴，保留相片和聊天記錄。',
      '私下罵店主就算。',
      '把商品丟掉，當自己倒楣。'
    ],
    answer: 0,
    good: '正確！要保留證據，例如訂單截圖、聊天記錄、商品相片，並在平台內申訴。',
    bad: '遇到貨不對板不要沉默，要用平台提供的退款、退貨、投訴功能。'
  },
  {
    icon: '🛡️',
    title: '第十關：最後選擇',
    scenario: '防騙貓咪問張婆婆：\n\n「網購前最重要的是什麼？」',
    options: [
      '價錢越平越好。',
      '不看店鋪資料，直接付款。',
      '看清店鋪是否官方、評價是否真實、付款是否在平台內完成。'
    ],
    answer: 2,
    good: '太好了！網購前要記住：看店鋪、查評價、不貪平、不私下付款、不給驗證碼。',
    bad: '安全網購不是只看價錢，而是要看清楚店鋪是否可靠。'
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;
let baseFontSize = 20;

const screens = {
  home: document.getElementById('homeScreen'),
  how: document.getElementById('howScreen'),
  game: document.getElementById('gameScreen'),
  result: document.getElementById('resultScreen')
};

const startBtn = document.getElementById('startBtn');
const howBtn = document.getElementById('howBtn');
const startFromHowBtn = document.getElementById('startFromHowBtn');
const nextBtn = document.getElementById('nextBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const restartMiniBtn = document.getElementById('restartMiniBtn');
const printBtn = document.getElementById('printBtn');
const smallFontBtn = document.getElementById('smallFontBtn');
const largeFontBtn = document.getElementById('largeFontBtn');

const levelText = document.getElementById('levelText');
const scoreText = document.getElementById('scoreText');
const progressBar = document.getElementById('progressBar');
const sceneIcon = document.getElementById('sceneIcon');
const questionTitle = document.getElementById('questionTitle');
const scenarioText = document.getElementById('scenarioText');
const optionsArea = document.getElementById('optionsArea');
const feedbackBox = document.getElementById('feedbackBox');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const finalScore = document.getElementById('finalScore');
const finalComment = document.getElementById('finalComment');

function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startGame() {
  currentIndex = 0;
  score = 0;
  answered = false;
  scoreText.textContent = score;
  showScreen('game');
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentIndex];
  answered = false;

  levelText.textContent = `第 ${currentIndex + 1} / ${questions.length} 關`;
  sceneIcon.textContent = question.icon;
  questionTitle.textContent = question.title;
  scenarioText.textContent = question.scenario;
  progressBar.style.width = `${(currentIndex / questions.length) * 100}%`;

  feedbackBox.className = 'feedback-box hidden';
  feedbackText.textContent = '';
  nextBtn.classList.add('hidden');
  optionsArea.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.type = 'button';
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener('click', () => selectAnswer(index));
    optionsArea.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = questions[currentIndex];
  const optionButtons = [...document.querySelectorAll('.option-btn')];
  const isCorrect = selectedIndex === question.answer;

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add('correct');
    if (index === selectedIndex && !isCorrect) button.classList.add('wrong');
  });

  if (isCorrect) {
    score += 10;
    scoreText.textContent = score;
    feedbackIcon.textContent = '🐱✅';
    feedbackTitle.textContent = '答對了！';
    feedbackText.textContent = question.good;
    feedbackBox.className = 'feedback-box good';
  } else {
    feedbackIcon.textContent = '🐱⚠️';
    feedbackTitle.textContent = '小心呀！';
    feedbackText.textContent = question.bad;
    feedbackBox.className = 'feedback-box bad';
  }

  nextBtn.textContent = currentIndex === questions.length - 1 ? '查看總分' : '下一關';
  nextBtn.classList.remove('hidden');
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  finalScore.textContent = score;

  if (score >= 80) {
    finalComment.textContent = '防騙高手！你已經懂得多看、多查、多想，網購時更懂得保護自己。';
  } else if (score >= 50) {
    finalComment.textContent = '你已經有基本防騙意識，但看到便宜優惠和陌生訊息時，仍然要再小心一點。';
  } else {
    finalComment.textContent = '還需要再練習一次。記住：不要貪便宜、不要私下交易、不要點陌生連結、不要給驗證碼。';
  }

  showScreen('result');
}

function changeFontSize(delta) {
  baseFontSize = Math.min(26, Math.max(17, baseFontSize + delta));
  document.documentElement.style.setProperty('--font-size', `${baseFontSize}px`);
}

startBtn.addEventListener('click', startGame);
howBtn.addEventListener('click', () => showScreen('how'));
startFromHowBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
playAgainBtn.addEventListener('click', startGame);
restartMiniBtn.addEventListener('click', startGame);
printBtn.addEventListener('click', () => window.print());
smallFontBtn.addEventListener('click', () => changeFontSize(-1));
largeFontBtn.addEventListener('click', () => changeFontSize(1));

document.querySelectorAll('.back-btn').forEach(button => {
  button.addEventListener('click', () => showScreen('home'));
});
