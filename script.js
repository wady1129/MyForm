const questions = [
    {
        question: "如果您想左轉，並且看到顯示的交通信號，您會...",
        options: ["前進", "讓行，等待間隙", "停下，等待間隙", "停下"],
        answer: 1,
        image: "image1.jpg"
    },
    {
        question: "如果您想左轉，並且看到顯示的交通信號，您會...",
        options: ["前進", "讓行，等待間隙", "停下，等待間隙", "停下"],
        answer: 2,
        image: "image2.png"
    },
];

let currentQuestionIndex = 0;
let answers = [];
let startTime;
let videoEndTime;
let userInfo = {}; // 保存用户基本资料

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
        const gender = document.getElementById("gender").value;
        const experience = document.getElementById("experience").value;

        if (gender && experience) {
            userInfo.gender = gender;
            userInfo.experience = experience;
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
    
        // 更新图片
        const imageElement = document.getElementById("image");
        imageElement.src = currentQuestion.image;
    
        // 立即显示选项
        currentQuestion.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => selectOption(i);
            optionsContainer.appendChild(button);
        });
        optionsContainer.classList.remove("hidden");
    
        // 记录开始时间
        startTime = new Date();
    }
    
    function selectOption(selectedIndex) {
        const endTime = new Date();
        const responseTime = (endTime - startTime) / 1000;
    
        const correct = selectedIndex === questions[currentQuestionIndex].answer;
        answers.push({
            question: questions[currentQuestionIndex].question,
            selectedOption: questions[currentQuestionIndex].options[selectedIndex],
            correct: correct,
            timeTaken: responseTime.toFixed(2)
        });
    
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
            saveResultsToJSON();
        }
    }
    
    function showResults() {
        questionElement.textContent = "測驗結束！";
        optionsContainer.innerHTML = "";
        const imageElement = document.getElementById("image");
        imageElement.classList.add("hidden");
    
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
    }

    function saveResultsToJSON() {
        let allResults = [];
        allResults.push({
            date: new Date().toLocaleString(),
            userInfo: userInfo,
            answers: answers
        });

        localStorage.setItem("quizResults", JSON.stringify(allResults));

        const blob = new Blob([JSON.stringify(allResults, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "quiz_results.json";
        a.click();
        URL.revokeObjectURL(url);
    }
});