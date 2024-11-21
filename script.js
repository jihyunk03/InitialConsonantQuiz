// script.js

// 영화 제목과 초성 목록
const movies = [
	{ title: '기생충', consonants: 'ㄱㅅㅊ', hint: '힌트 없다 요놈아' },
	{ title: '인터스텔라', consonants: 'ㅇㅌㅅㅌㄹ', hint: '힌트 없다 요놈아' },
	{ title: '어벤져스', consonants: 'ㅇㅂㅈㅅ', hint: '힌트 없다 요놈아' },
	{ title: '타이타닉', consonants: 'ㅌㅇㅌㄴ', hint: '힌트 없다 요놈아' },
	{ title: '매드맥스', consonants: 'ㅁㄷㅁㅅ', hint: '힌트 없다 요놈아' },
	{ title: '왕의 남자', consonants: 'ㅇㅇ ㄴㅈ', hint: '힌트 없다 요놈아' },
	{ title: '신과 함께', consonants: 'ㅅㄱ ㅎㄲ', hint: '힌트 없다 요놈아' },
	{ title: '괴물', consonants: 'ㄱㅁ', hint: '힌트 없다 요놈아' },
	{ title: '암살', consonants: 'ㅇㅅ', hint: '힌트 없다 요놈아' },
	{ title: '명량', consonants: 'ㅁㄹ', hint: '힌트 없다 요놈아' },
	{ title: '라라랜드', consonants: 'ㄹㄹㄹㄷ', hint: '힌트 없다 요놈아' },
	{ title: '다크나이트', consonants: 'ㄷㅋㄴㅇㅌ', hint: '힌트 없다 요놈아' },
	{
		title: '가디언즈 오브 갤럭시',
		consonants: 'ㄱㄷㅇㅈ ㅇㅂ ㄱㄹㅅ',
		hint: '힌트 없다 요놈아',
	},
	{
		title: '포레스트 검프',
		consonants: 'ㅍㄹㅅㅌ ㄱㅍ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '라이언 킹', consonants: 'ㄹㅇㅇ ㅋ', hint: '힌트 없다 요놈아' },
	{ title: '반지의 제왕', consonants: 'ㅂㅈㅇ ㅈㅇ', hint: '힌트 없다 요놈아' },
	{ title: '셜록 홈즈', consonants: 'ㅅㄹ ㅎㅈ', hint: '힌트 없다 요놈아' },
	{ title: '인셉션', consonants: 'ㅇㅅㅅ', hint: '힌트 없다 요놈아' },
	{ title: '스타워즈', consonants: 'ㅅㅌㅇㅈ', hint: '힌트 없다 요놈아' },
	{ title: '터미네이터', consonants: 'ㅌㅁㄴㅇㅌ', hint: '힌트 없다 요놈아' },
	{ title: '아이언맨', consonants: 'ㅇㅇㅇㅁ', hint: '힌트 없다 요놈아' },
	{ title: '겨울왕국', consonants: 'ㄱㅇㅇㄱ', hint: '힌트 없다 요놈아' },
	{ title: '트랜스포머', consonants: 'ㅌㄹㅅㅍㅁ', hint: '힌트 없다 요놈아' },
	{ title: '알라딘', consonants: 'ㅇㄹㄷ', hint: '힌트 없다 요놈아' },
	{ title: '조커', consonants: 'ㅈㅋ', hint: '힌트 없다 요놈아' },
	{ title: '킹스맨', consonants: 'ㅋㅅㅁ', hint: '힌트 없다 요놈아' },
	{ title: '라푼젤', consonants: 'ㄹㅍㅈ', hint: '힌트 없다 요놈아' },
	{
		title: '캡틴 아메리카',
		consonants: 'ㅋㅌ ㅇㅁㄹㅋ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '아바타', consonants: 'ㅇㅂㅌ', hint: '힌트 없다 요놈아' },
	{ title: '토이 스토리', consonants: 'ㅌㅇ ㅅㅌㄹ', hint: '힌트 없다 요놈아' },
];

// 개발 관련 용어와 초성 목록
const devTerms = [
	{
		title: '자바스크립트',
		consonants: 'ㅈㅂㅅㅋㄹㅌ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '파이썬', consonants: 'ㅍㅇㅆ', hint: '뱀 두마리' },
	{ title: '깃허브', consonants: 'ㄱㅎㅂ', hint: '잔디' },
	{ title: '리액트', consonants: 'ㄹㅇㅌ', hint: '프론트의 꽃' },
	{ title: '노드제이에스', consonants: 'ㄴㄷㅈㅇㅇㅅ', hint: '백엔드의 꽃' },
	{ title: '도커', consonants: 'ㄷㅋ', hint: '고래' },
	{ title: '쿠버네티스', consonants: 'ㅋㅂㄴㅌㅅ', hint: '힌트 없다 요놈아' },
	{ title: '리눅스', consonants: 'ㄹㄴㅅ', hint: '힌트 없다 요놈아' },
	{ title: '안드로이드', consonants: 'ㅇㄷㄹㅇㄷ', hint: '힌트 없다 요놈아' },
	{
		title: '마이크로서비스',
		consonants: 'ㅁㅇㅋㄹㅅㅂㅅ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '스프링부트', consonants: 'ㅅㅍㄹㅂㅌ', hint: '힌트 없다 요놈아' },
	{ title: '엑스코드', consonants: 'ㅇㅅㅋㄷ', hint: '힌트 없다 요놈아' },
	{
		title: '타입스크립트',
		consonants: 'ㅌㅇㅅㅋㄹㅍㅌ',
		hint: '힌트 없다 요놈아',
	},
	{
		title: '비주얼 스튜디오 코드',
		consonants: 'ㅂㅈㅇ ㅅㅌㄷㅇ ㅋㄷ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '자바', consonants: 'ㅈㅂ', hint: '힌트 없다 요놈아' },
	{ title: '고랭', consonants: 'ㄱㄹ', hint: '힌트 없다 요놈아' },
	{ title: '씨샵', consonants: 'ㅆㅅ', hint: '힌트 없다 요놈아' },
	{ title: '제이쿼리', consonants: 'ㅈㅇㅋㄹ', hint: '힌트 없다 요놈아' },
	{ title: '데브옵스', consonants: 'ㄷㅂㅇㅅ', hint: '힌트 없다 요놈아' },
	{ title: '컨테이너', consonants: 'ㅋㅌㅇㄴ', hint: '힌트 없다 요놈아' },
	{ title: '스위프트', consonants: 'ㅅㅇㅍㅌ', hint: '힌트 없다 요놈아' },
	{ title: '스칼라', consonants: 'ㅅㅋㄹ', hint: '힌트 없다 요놈아' },
	{ title: '플러터', consonants: 'ㅍㄹㅌ', hint: '힌트 없다 요놈아' },
	{ title: '머신러닝', consonants: 'ㅁㅅㄹㄴ', hint: '힌트 없다 요놈아' },
	{
		title: '데이터베이스',
		consonants: 'ㄷㅇㅌㅂㅇㅅ',
		hint: '힌트 없다 요놈아',
	},
	{
		title: '엘라스틱서치',
		consonants: 'ㅇㄹㅅㅌㅅㅊ',
		hint: '힌트 없다 요놈아',
	},
	{ title: '몽고디비', consonants: 'ㅁㄱㄷㅂ', hint: '힌트 없다 요놈아' },
	{ title: '그래프큐엘', consonants: 'ㄱㄹㅍㅋㅇ', hint: '힌트 없다 요놈아' },
	{ title: '앵귤러', consonants: 'ㅇㄱㄹ', hint: '힌트 없다 요놈아' },
	{ title: '뷰제이에스', consonants: 'ㅂㅈㅇㅇㅅ', hint: '힌트 없다 요놈아' },
];

let selectedTerms = [];
let currentIndex = 0;
let scoreTeamA = 0;
let scoreTeamB = 0;
let timer;
const limitedTime = 15;
let timeLeft = limitedTime;
let isPaused = false; // 일시정지 상태를 나타내는 변수

// HTML 요소
const consonantsElem = document.getElementById('consonants');
const showAnswerButton = document.getElementById('show-answer');
const initScoreButton = document.getElementById('init-score-btn');
const scoreTeamAElem = document.getElementById('score-team-a');
const scoreTeamBElem = document.getElementById('score-team-b');
const addScoreTeamAButton = document.getElementById('add-score-team-a');
const subtractScoreTeamAButton = document.getElementById(
	'subtract-score-team-a'
);
const addScoreTeamBButton = document.getElementById('add-score-team-b');
const subtractScoreTeamBButton = document.getElementById(
	'subtract-score-team-b'
);
const progressElem = document.getElementById('progress');
const timerBar = document.getElementById('timer-bar');
const timeBoard = document.getElementById('time-board');
const nextButton = document.getElementById('next-button');
const startGameButton = document.getElementById('start-game');
const movieCountInput = document.getElementById('movie-count');
const settingsContainer = document.getElementById('settings-container');
const scoreBoard = document.getElementById('score-board');
const gameContainer = document.getElementById('game-container');
const resultModal = document.getElementById('result-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const closeModalButton = document.getElementById('close-modal');
const pauseButton = document.getElementById('pause-button'); // 일시정지 버튼

// 힌트 문장을 표시할 요소
const hintContainer = document.getElementById('hint-container');
const hintTextElem = document.getElementById('hint-text');

// Fisher-Yates 알고리즘으로 배열을 랜덤하게 섞는 함수
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// 게임 설정 후 시작
startGameButton.addEventListener('click', () => {
	const movieCount = parseInt(movieCountInput.value);
	const selectedType = document.querySelector(
		'input[name="questionType"]:checked'
	).value;
	let terms = selectedType === 'movies' ? movies : devTerms;

	if (movieCount > 0 && movieCount <= terms.length) {
		currentIndex = 0;
		shuffleArray(terms);
		selectedTerms = terms.slice(0, movieCount);
		settingsContainer.classList.add('hidden');
		scoreBoard.classList.remove('hidden');
		gameContainer.classList.remove('hidden');
		showAnswerButton.classList.remove('hidden');
		initScore(); // 점수 초기화
		startGame();
	} else {
		alert(`문제 개수는 1에서 ${terms.length} 사이로 설정해주세요.`);
	}
});

function startGame() {
	isPaused = false; // 일시정지 상태 초기화
	pauseButton.textContent = '일시정지'; // 버튼 텍스트 초기화
	pauseButton.classList.remove('hidden'); // 일시정지 버튼 표시

	showTerm(selectedTerms[currentIndex]);
	startTimer();
	updateProgress();
	hintContainer.classList.add('hidden'); // 힌트 숨김
	showAnswerButton.classList.remove('hidden');
}

function showTerm(term) {
	consonantsElem.textContent = term.consonants;
	nextButton.classList.add('hidden');
	showAnswerButton.classList.remove('hidden');
	pauseButton.classList.remove('hidden');

	addScoreTeamAButton.classList.add('hidden');
	subtractScoreTeamAButton.classList.add('hidden');
	addScoreTeamBButton.classList.add('hidden');
	subtractScoreTeamBButton.classList.add('hidden');
}

function startTimer() {
	timeLeft = limitedTime;
	updateTimerBar();
	updateTimerSec();

	if (timer) {
		clearInterval(timer);
	}

	timer = setInterval(() => {
		if (!isPaused) {
			timeLeft--;
			updateTimerBar();
			updateTimerSec();

			if (timeLeft === 7) {
				showHint(); // 힌트 문장 표시
			}

			if (timeLeft <= 0) {
				clearInterval(timer);
				timeLeft = 0;
				updateTimerBar();
				updateTimerSec();
				// if (showAnswerButton.classList.contains('hidden')) {
				// 	showAnswerButton.classList.remove('hidden');
				// }
				pauseButton.classList.add('hidden');
			}
		}
	}, 1000);
}

// 힌트 표시 함수
function showHint() {
	const currentTerm = selectedTerms[currentIndex];
	if (currentTerm.hint && currentTerm.hint.trim() != '') {
		hintTextElem.textContent = currentTerm.hint;
		hintContainer.classList.remove('hidden');
	} else {
		hintContainer.classList.add('hidden');
	}
}

// Progress Bar 업데이트
function updateTimerBar() {
	const percentage = (timeLeft / limitedTime) * 100;
	timerBar.style.width = `${percentage}%`;

	// 시간에 따라 색상 변경
	if (percentage > 50) {
		timerBar.style.backgroundColor = '#28a745'; // 녹색
	} else if (percentage > 20) {
		timerBar.style.backgroundColor = '#ffc107'; // 노란색
	} else {
		timerBar.style.backgroundColor = '#dc3545'; // 빨간색
	}
}

function updateTimerSec() {
	timeBoard.innerText = `${timeLeft}초`;
}

// 문제 진행 상태 업데이트
function updateProgress() {
	progressElem.textContent = `${currentIndex + 1}/${selectedTerms.length}`;
}

function initScore() {
	scoreTeamA = 0;
	scoreTeamAElem.textContent = scoreTeamA;
	scoreTeamB = 0;
	scoreTeamBElem.textContent = scoreTeamB;
}

initScoreButton.addEventListener('click', () => {
	initScore();
});

// 정답 보기 버튼 클릭 시 정답 표시
showAnswerButton.addEventListener('click', () => {
	showAnswer();
});

// 정답 공개 함수
function showAnswer() {
	consonantsElem.textContent = selectedTerms[currentIndex].title;
	nextButton.classList.remove('hidden');
	showAnswerButton.classList.add('hidden');
	pauseButton.classList.add('hidden');
	clearInterval(timer);
	addScoreTeamAButton.classList.remove('hidden');
	subtractScoreTeamAButton.classList.remove('hidden');
	addScoreTeamBButton.classList.remove('hidden');
	subtractScoreTeamBButton.classList.remove('hidden');
	hintContainer.classList.add('hidden'); // 힌트 숨김
}

// A팀 점수 추가
addScoreTeamAButton.addEventListener('click', () => {
	scoreTeamA += 10;
	scoreTeamAElem.textContent = scoreTeamA;
});

// A팀 점수 감소
subtractScoreTeamAButton.addEventListener('click', () => {
	scoreTeamA = Math.max(0, scoreTeamA - 10);
	scoreTeamAElem.textContent = scoreTeamA;
});

// B팀 점수 추가
addScoreTeamBButton.addEventListener('click', () => {
	scoreTeamB += 10;
	scoreTeamBElem.textContent = scoreTeamB;
});

// B팀 점수 감소
subtractScoreTeamBButton.addEventListener('click', () => {
	scoreTeamB = Math.max(0, scoreTeamB - 10);
	scoreTeamBElem.textContent = scoreTeamB;
});

// 다음 문제 버튼 클릭 시 다음 문제로 이동
nextButton.addEventListener('click', () => {
	currentIndex++;
	if (currentIndex < selectedTerms.length) {
		startGame();
	} else {
		showGameResult();
	}
});

// 게임 종료 시 승리 팀 또는 무승부 표시
function showGameResult() {
	clearInterval(timer);
	let title = '';
	let message = '';
	if (scoreTeamA > scoreTeamB) {
		title = 'A팀 승리!';
		message = `A팀이 ${scoreTeamA}점으로 B팀(${scoreTeamB}점)을 이겼습니다!`;
	} else if (scoreTeamB > scoreTeamA) {
		title = 'B팀 승리!';
		message = `B팀이 ${scoreTeamB}점으로 A팀(${scoreTeamA}점)을 이겼습니다!`;
	} else {
		title = '무승부!';
		message = `두 팀 모두 ${scoreTeamA}점으로 무승부입니다!`;
	}
	modalTitle.textContent = title;
	modalMessage.textContent = message;
	resultModal.classList.remove('hidden');
}

// 모달 닫기 버튼 클릭 시 모달 숨김
closeModalButton.addEventListener('click', () => {
	resultModal.classList.add('hidden');
	gameContainer.classList.add('hidden');
	settingsContainer.classList.remove('hidden');
});

// 일시정지 버튼 클릭 시 타이머 일시정지/재개
pauseButton.addEventListener('click', () => {
	isPaused = !isPaused;
	if (isPaused) {
		pauseButton.textContent = '재개';
	} else {
		pauseButton.textContent = '일시정지';
	}
});

/*	*/
