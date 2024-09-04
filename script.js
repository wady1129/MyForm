const questions = [
    {
        question: "如果您想左轉，並且看到顯示的交通信號，您會...",
        options: ["前進", "讓行，等待間隙", "停下，等待間隙", "停下"],
        answer: 1,
        video: "video1.mp4"
    },
    {
        question: "如果您想左轉，並且看到顯示的交通信號，您會...",
        options: ["前進", "讓行，等待間隙", "停下，等待間隙", "停下"],
        answer: 2,
        video: "video2.mp4"
    },
];

let currentQuestionIndex = 0;
let answers = [];
let startTime;
let videoEndTime;
let apiEndpoint;
let userInfo = {}; // 保存用户基本資料

document.addEventListener("DOMContentLoaded", () => {
    const basicInfoForm = document.getElementById("basic-info-form");
    const mainMenu = document.getElementById("main-menu");
    const quizContainer = document.getElementById("quiz-container");
    const submitInfoButton = document.getElementById("submit-info-button");
    const startButton = document.getElementById("start-button");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const videoElement = document.getElementById("video");

    submitInfoButton.onclick = () => {
        const email = document.getElementById("email").value;
        const gender = document.getElementById("gender").value;
        const experience = document.getElementById("experience").value;
    
        if (email && gender && experience) {
            userInfo.email = email;
            userInfo.gender = gender;
            userInfo.experience = experience;
    
            // 亂數產生 0 或 1
            const randomNum = Math.floor(Math.random() * 9);
    
            // 根據亂數結果決定 API URL
            if (randomNum == 0) {
                apiEndpoint = "https://formspree.io/f/mblrbdal";
            }
            else if (randomNum == 1) {
                apiEndpoint = "https://formspree.io/f/mjkbzwwa";
            }
            else if (randomNum == 2) {
                apiEndpoint = "https://formspree.io/f/xovabdwa";
            }
            else if (randomNum == 3) {
                apiEndpoint = "https://formspree.io/f/mgvwqkye";
            }
            else if (randomNum == 4) {
                apiEndpoint = "https://formspree.io/f/mpwandrw";
            }
            else if (randomNum == 5) {
                apiEndpoint = "https://formspree.io/f/mkgwerbo";
            }
            else if (randomNum == 6) {
                apiEndpoint = "https://formspree.io/f/mwpezobo";
            }
            else if (randomNum == 7) {
                apiEndpoint = "https://formspree.io/f/mrbzdqkk";
            } else {
                apiEndpoint = "https://formspree.io/f/xldrvbjv";
            }
    
            // 更新表單的 action 屬性
            const form = document.getElementById("basic-info-form");
            form.action = apiEndpoint;
    
            basicInfoForm.classList.add("hidden");
            mainMenu.classList.remove("hidden");
        } else {
            alert("請填寫所有資料！");
        }
    };

    startButton.onclick = () => {
        localStorage.removeItem("quizResults");
        answers = [];
        currentQuestionIndex = 0;
        mainMenu.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion(currentQuestionIndex);
    };

    function loadQuestion(index) {
        const currentQuestion = questions[index];
        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        optionsContainer.classList.add("hidden");

        videoElement.src = currentQuestion.video;
        videoElement.play();

        videoElement.onplay = () => {
            startTime = new Date();
        };

        videoElement.onended = () => {
            videoEndTime = new Date();

            currentQuestion.options.forEach((option, i) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.onclick = () => selectOption(i);
                optionsContainer.appendChild(button);
            });
            optionsContainer.classList.remove("hidden");
        };
    }

    function selectOption(selectedIndex) {
        const endTime = new Date();
        const videoPlayTime = (videoEndTime - startTime) / 1000;
        const responseTime = (endTime - startTime) / 1000;
        const timeTaken = responseTime - videoPlayTime;

        const correct = selectedIndex === questions[currentQuestionIndex].answer;
        answers.push({
            question: questions[currentQuestionIndex].question,
            selectedOption: questions[currentQuestionIndex].options[selectedIndex],
            correct: correct,
            timeTaken: timeTaken.toFixed(2)
        });

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
            saveResultsToFormspree();
        }
    }

    function showResults() {
        questionElement.textContent = "測驗結束！";
        optionsContainer.innerHTML = "";
        videoElement.classList.add("hidden");

        let correctCount = 0;

        answers.forEach((answer, index) => {
            const resultText = document.createElement("p");
            resultText.textContent = `第${index + 1}題: ${answer.question} - 你選擇了: ${answer.selectedOption} (正確: ${answer.correct ? "是" : "否"}) - 用時: ${answer.timeTaken}秒`;
            optionsContainer.appendChild(resultText);
            if (answer.correct) correctCount++;
        });

        const score = (correctCount / questions.length) * 100;
        const scoreText = document.createElement("p");
        scoreText.textContent = `你答對了${correctCount}題，答對率為: ${score.toFixed(2)}%`;
        optionsContainer.appendChild(scoreText);

        saveResultsToFormspree();
    }

    function saveResultsToFormspree() {
        let allResults = {
            date: new Date().toLocaleString(),
            userInfo: userInfo,
            answers: answers
        };
    
        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allResults)
        })
        .then(response => {
            if (response.ok) {
                alert("結果已成功提交！");
            } else {
                alert("提交失敗，請重試。");
            }
        })
        .catch(error => {
            alert("發生錯誤：" + error.message);
        });
    }
});
