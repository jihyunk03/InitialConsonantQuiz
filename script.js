// script.js

let selectedTerms = [];
let currentIndex = 0;
let scoreTeamA = 0;
let scoreTeamB = 0;
let timer;
const limitedTime = 15;
let timeLeft = limitedTime;
let isPaused = false;

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
const pauseButton = document.getElementById('pause-button');

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
	let jsonFileName =
		selectedType === 'movies' ? './data/movies.json' : './data/devTerms.json';

	fetch(jsonFileName)
		.then((response) => response.json())
		.then((data) => {
			let terms = data;
			if (movieCount > 0 && movieCount <= terms.length) {
				currentIndex = 0;
				shuffleArray(terms);
				selectedTerms = terms.slice(0, movieCount);
				settingsContainer.classList.add('hidden');
				scoreBoard.classList.remove('hidden');
				gameContainer.classList.remove('hidden');
				initScore();
				startGame();
			} else {
				alert(`문제 개수는 1에서 ${terms.length} 사이로 설정해주세요.`);
			}
		})
		.catch((error) => {
			console.error('JSON 데이터 로드 중 오류 발생:', error);
			alert('데이터를 불러오는 중 오류가 발생했습니다.');
		});
});

function startGame() {
	isPaused = false;
	pauseButton.textContent = '일시 정지';
	pauseButton.classList.remove('hidden');

	showTerm(selectedTerms[currentIndex]);
	startTimer();
	updateProgress();
	hideHint();
	// showAnswerButton.classList.remove('hidden');
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

			if (timeLeft === 5) {
				showHint();
			}

			if (timeLeft <= 0) {
				clearInterval(timer);
				timeLeft = 0;
				updateTimerBar();
				updateTimerSec();
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
		hintTextElem.classList.add('visible');
		hintContainer.classList.add('visible');
	} else {
		hintTextElem.textContent = '';
		hintTextElem.classList.remove('visible');
		hintContainer.classList.remove('visible');
	}
}

// 힌트 초기화 함수
function hideHint() {
	hintTextElem.textContent = '';
	hintTextElem.classList.remove('visible');
	hintContainer.classList.remove('visible');
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
	hideHint();
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
		pauseButton.textContent = '일시 정지';
	}
});
