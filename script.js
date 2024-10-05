const questions = [
    {
        question: "1.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video14.mp4"
    },
    {
        question: "2.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video6.mp4"
    },
    {
        question: "3.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video1.mp4"
    },
    {
        question: "4.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video13.mp4"
    },
    {
        question: "5.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video5.mp4"
    },
    {
        question: "6.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video9.mp4"
    },
    {
        question: "7.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video21.mp4"
    },
    {
        question: "8.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video18.mp4"
    },
    {
        question: "9.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video17.mp4"
    },
    {
        question: "10.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video8.mp4"
    },
    {
        question: "11.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video7.mp4"
    },
    {
        question: "12.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video19.mp4"
    },
    {
        question: "13.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video11.mp4"
    },
    {
        question: "14.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video12.mp4"
    },
    {
        question: "15.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 0,
        video: "video22.mp4"
    },
    {
        question: "16.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video4.mp4"
    },
    {
        question: "17.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video10.mp4"
    },
    {
        question: "18.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video3.mp4"
    },
    {
        question: "19.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video2.mp4"
    },
    {
        question: "20.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 2,
        video: "video20.mp4"
    },
    {
        question: "21.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video15.mp4"
    },
    {
        question: "22.如果您想左轉，並且看到顯示的交通號誌，您會...",
        options: ["直接左轉", "讓行，等待間隙", "停下"],
        answer: 1,
        video: "video16.mp4"
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
        const age = document.getElementById("age").value;
        const frequency = document.getElementById("frequency").value;
        const experience = document.getElementById("experience").value;
        const commute = document.getElementById("commute").value;
    
        if (email && gender && age && frequency && experience && commute) {
            userInfo.email = email;
            userInfo.gender = gender;
            userInfo.age = age;
            userInfo.frequency = frequency;
            userInfo.experience = experience;
            userInfo.commute = commute;
    
            // 亂數產生 0 或 1
            const randomNum = Math.floor(Math.random() * 9);
    
            // 根據亂數結果決定 API URL
            // if (randomNum == 0) {
            //     apiEndpoint = "https://formspree.io/f/mblrbdal";
            // }
            // else if (randomNum == 1) {
            //     apiEndpoint = "https://formspree.io/f/mjkbzwwa";
            // }
            // else if (randomNum == 2) {
            //     apiEndpoint = "https://formspree.io/f/xovabdwa";
            // }
            // else if (randomNum == 3) {
            //     apiEndpoint = "https://formspree.io/f/mgvwqkye";
            // }
            // else if (randomNum == 4) {
            //     apiEndpoint = "https://formspree.io/f/mpwandrw";
            // }
            // else if (randomNum == 5) {
            //     apiEndpoint = "https://formspree.io/f/mkgwerbo";
            // }
            // else if (randomNum == 6) {
            //     apiEndpoint = "https://formspree.io/f/mwpezobo";
            // }
            // else if (randomNum == 7) {
            //     apiEndpoint = "https://formspree.io/f/mrbzdqkk";
            // } else {
            //     apiEndpoint = "https://formspree.io/f/xldrvbjv";
            // }
            
            apiEndpoint = "https://formspree.io/f/mblrbdal";

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
    let hasOptionsShown = false;  // 追蹤選項是否已顯示
    let firstplay = false;
    let optionsTimeout;  // 計時器變數

    // 設定題目和選項容器
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";  // 清空選項
    optionsContainer.classList.add("hidden");  // 隱藏選項按鈕

    // 設定影片屬性
    videoElement.src = currentQuestion.video; // 動態設定影片來源
    videoElement.setAttribute("autoplay", "true");
    videoElement.setAttribute("muted", "true"); // 確保靜音以支持自動播放
    videoElement.setAttribute("playsinline", "true"); // 防止 iPhone Safari 全螢幕播放
    videoElement.setAttribute("webkit-playsinline", "true"); // 防止 iPhone Safari 全螢幕播放

    // 當影片開始播放時
    videoElement.onplay = () => {
        if (!firstplay) {
            startTime = new Date();
            firstplay = true;
        }

        // 設定 3 秒後顯示選項按鈕的計時器
        optionsTimeout = setTimeout(() => {
            if (!hasOptionsShown) {
                currentQuestion.options.forEach((option, i) => {
                    const button = document.createElement("button");
                    button.textContent = option;
                    button.onclick = () => selectOption(i);
                    optionsContainer.appendChild(button);
                });
                optionsContainer.classList.remove("hidden");  // 顯示選項按鈕
                hasOptionsShown = true;  // 標記選項已經顯示
            }
        }, 3000);  // 延遲3秒 (3000毫秒)
    };

    // 當影片播放結束時
    videoElement.onended = () => {
        videoEndTime = new Date();

        // 清除計時器，防止選項按鈕在影片結束後才出現
        clearTimeout(optionsTimeout);

        // 確保選項按鈕已經出現
        if (!hasOptionsShown) {
            currentQuestion.options.forEach((option, i) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.onclick = () => selectOption(i);
                optionsContainer.appendChild(button);
            });
            optionsContainer.classList.remove("hidden");  // 顯示選項按鈕
            hasOptionsShown = true;
        }
    };

    // 手動觸發播放，以確保自動播放在一些情況下正常工作
    videoElement.play().catch((error) => {
        console.error("影片無法自動播放: ", error);
    });
}

    

    function selectOption(selectedIndex) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000 - 3.0;
    
        const correct = selectedIndex === questions[currentQuestionIndex].answer;
        answers.push({
            question: `第 ${currentQuestionIndex + 1} 題`,
            selectedOption: questions[currentQuestionIndex].options[selectedIndex],
            correct: correct,
            timeTaken: timeTaken.toFixed(2)
        });
    
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showOpenEndedQuestions();  // 顯示開放性問題而不是直接顯示結果
        }
    }

    function showOpenEndedQuestions() {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("open-ended-questions").classList.remove("hidden");
    
        const submitOpenEndedButton = document.getElementById("submit-open-ended-button");
        submitOpenEndedButton.onclick = () => {
            const u1 = document.getElementById("understand1").value;
            const u2 = document.getElementById("understand2").value;
            const u3 = document.getElementById("understand3").value;
            const u4 = document.getElementById("understand4").value;
            const u5 = document.getElementById("understand5").value;
            const u6 = document.getElementById("understand6").value;
            const u7 = document.getElementById("understand7").value;
            const u8 = document.getElementById("understand8").value;
            if (u1 && u2 && u3 && u4 && u5 && u6 && u7 && u8) {
                userInfo.openEndedAnswers = {
                    u1: document.getElementById("understand1").value,
                    u2: document.getElementById("understand2").value,
                    u3: document.getElementById("understand3").value,
                    u4: document.getElementById("understand4").value,
                    u5: document.getElementById("understand5").value,
                    u6: document.getElementById("understand6").value,
                    u7: document.getElementById("understand7").value,
                    u8: document.getElementById("understand8").value,
                    q1: document.getElementById("open-ended-q1").value,
                    q2: document.getElementById("open-ended-q2").value,
                    q3: document.getElementById("open-ended-q3").value,
                    q4: document.getElementById("open-ended-q4").value,
                    q5: document.getElementById("open-ended-q5").value,
                    q6: document.getElementById("open-ended-q6").value,
                    q7: document.getElementById("open-ended-q7").value,
                    q8: document.getElementById("open-ended-q8").value,
                };
                document.getElementById("open-ended-questions").classList.add("hidden");
                showResults();  // 在填寫完開放性問題後顯示結果

            } else {
                alert("請點選完成所有下拉式選單！");
            }
        };
    }

    function showResults() {
        questionElement.textContent = "測驗結束！";
        optionsContainer.innerHTML = "";  // 清空選項容器
        videoElement.classList.add("hidden");  // 隱藏影片
        document.getElementById("result-container").classList.remove("hidden");  // 顯示結果容器
    
        const resultTableBody = document.querySelector("#result-table tbody");
        resultTableBody.innerHTML = "";  // 清空舊的結果
    
        let correctCount = 0;
    
        answers.forEach((answer, index) => {
            const row = document.createElement("tr");
    
            // 題號
            const questionNumberCell = document.createElement("td");
            questionNumberCell.textContent = `第 ${index + 1} 題`;
            row.appendChild(questionNumberCell);
    
            // 您的選擇
            const selectedOptionCell = document.createElement("td");
            selectedOptionCell.textContent = answer.selectedOption;
            row.appendChild(selectedOptionCell);
    
            // 正確答案
            const correctOptionCell = document.createElement("td");
            correctOptionCell.textContent = questions[index].options[questions[index].answer];
            row.appendChild(correctOptionCell);
    
            // 用時
            const timeTakenCell = document.createElement("td");
            timeTakenCell.textContent = answer.timeTaken + " 秒";
            row.appendChild(timeTakenCell);
    
            resultTableBody.appendChild(row);
    
            if (answer.correct) {
                correctCount++;
            }
        });
    
        // 顯示總答對題數
        const correctCountText = `你答對了 ${correctCount} 題`;
        const score = (correctCount / questions.length) * 100;
        const scoreText = `答對率為: ${score.toFixed(2)}%`;
    
        // 將總結訊息顯示在表格下方
        document.getElementById("summary").innerHTML = `
            <p>${correctCountText}</p>
            <p>${scoreText}</p>
        `;
    
        saveResultsToFormspree();
    }
    
    
    
    
    function saveResultsToFormspree() {
        let allResults = {
            date: new Date().toLocaleString(),
            userInfo: userInfo,
            answers: answers,
            openEndedAnswers: userInfo.openEndedAnswers  // 加入開放性問題的答案
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
