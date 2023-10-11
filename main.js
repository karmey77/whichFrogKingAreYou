let result = []
let currentQuestion = 0
const dataPanel = document.querySelector('#data-panel')
const outcomes = {
    "a": {
        "name": "凱瑞王",
        "image": "./configs/A.JPG",
        "content": "像你這樣的國王，在選擇時傾向於優先保護隊友，展現了你是一位有責任感且關心團隊的好國王玩家。你可能在遊戲中扮演著承擔主要負擔的角色，努力讓隊伍獲勝。"
    },
    "b": {
        "name": "愛情王",
        "image": "./configs/B.GIF",
        "content": "像你這樣的國王，對於子民的要求給予了關心，表現出你是一位善解人意且充滿愛心的國王玩家。你可能喜歡幫助新手玩家，並經常展現友善的態度。"
    },
    "c": {
        "name": "扁掉王",
        "image": "./configs/C.JPG",
        "content": "像你這樣的國王，你在選擇時可能傾向於冒險，不怕失敗，可能有些樂於承擔風險的性格。你可能喜歡嘗試新策略，儘管有時會有不成功的經驗。"
    },
    "d": {
        "name": "失智王",
        "image": "./configs/D.jpg",
        "content": "像你這樣的國王，有時候可能在遊戲中感到困惑或迷失，會需要更多的時間來思考和做決策。你可能在遊戲中犯一些不太理智的錯誤，但這是學習和成長的過程。"
    },
    "e": {
        "name": "算術王",
        "image": "./configs/E.JPG",
        "content": "像你這樣的國王，似乎在選擇時傾向於理性和邏輯思考，努力找出最佳的解決方案，在遊戲中盡可能地注重策略和數據分析，以提高勝率。"
    }
}

const questions = {
    "1": {
        "content": "請問今天已經二倒的隊友跟龍蛋都殘血了，身為奈威玩家，你會選擇去保？",
        "image": "./configs/q1.gif",
        "option": {
            "A": "隊友",
            "B": "龍蛋",
            "C": "你自己",
            "D": "什麼？",
            "E": "他幾倒了？"
        }
    },
    "2": {
        "content": "王后在旁邊的時候，如果有個可愛子民來找你，你會說？",
        "image": "./configs/q2.png",
        "option": {
            "A": "國王在陪王后，子民要等一下",
            "B": "金幾勒啦！",
            "C": "走！國王帶子民爬分",
            "D": "你是哪一個子民？",
            "E": "子民有沒有愛國王一萬年呀？"
        }
    },
    "3": {
        "content": "你今天找子民一起玩 9 8 7 降調雙龍蛋時，手上有 9 蝦、9 狗、7 龍蛋與 6 閃電，你會選擇？",
        "image": "./configs/q3.png",
        "option": {
            "A": "走一步，先下狗",
            "B": "不管，先下龍蛋",
            "C": "丟了閃電再走一步",
            "D": "丟閃電，先下蝦",
            "E": "走兩步，沒有酒"
        }
    },
    "4": {
        "content": "對面露娜使用了水水噴攻擊你的凱文，下圖是你的奈威迴響卡組，你會選擇？",
        "image": "./configs/q4.jpg",
        "option": {
            "A": "隨行現影帶走凱文或是用全全破心護擋住",
            "B": "用肉身擋住",
            "C": "下個龍蛋擋住",
            "D": "發呆",
            "E": "隨行現影後下個全全"
        }
    },
    "5": {
        "content": "對面露娜使用了水水噴攻擊你的凱文，下圖是你的石內迴響卡組，你會選擇？",
        "image": "./configs/q5.jpg",
        "option": {
            "A": "速速前斷招",
            "B": "下棋子士兵或時光器擋住",
            "C": "速速空",
            "D": "凱文送他啦",
            "E": "用「好了！」"
        }
    },
    "6": {
        "content": "殿堂賽時，對方可能玩貝拉或榮恩，自己被放出了石內跟奈威迴響，你會？",
        "image": "./configs/q6.gif",
        "option": {
            "A": "求穩選石內",
            "B": "用愛選奈威下蛋",
            "C": "賭一波選奈威下蛋",
            "D": "忘記選擇",
            "E": "回想兩迴響勝率，用勝率高的出戰"
        }
    },
    "7": {
        "content": "知道對面準備要下無頭騎士或遁形豬，下圖是你的奈威迴響與卡組，你會？",
        "image": "./configs/q7.jpg",
        "option": {
            "A": "隨行現影帶走關鍵生物",
            "B": "為了保護蛋蛋，準備好全全",
            "C": "用肉身阻擋，讓其他生物吃較少傷害",
            "D": "發呆",
            "E": "要怎麼算對方要下了？"
        }
    },
    "8": {
        "content": "你的心是誰的？",
        "image": "./configs/q8.JPG",
        "option": {
            "A": "王后的",
            "B": "有很多片，每個子民可以分到一片",
            "C": "決鬥獲勝對手的",
            "D": "忘記誰有過了",
            "E": "兩千三百萬片"
        }
    },
    "9": {
        "content": "你唱歌如何？",
        "image": "./configs/q9.jpg",
        "option": {
            "A": "音準跟拍子大致上都對",
            "B": "充滿愛情",
            "C": "很煎熬",
            "D": "唱得像大悲咒",
            "E": "年齡透露警告"
        }
    },
    "10": {
        "content": "你都怎麼大叫？",
        "image": "./configs/q10.jpg",
        "option": {
            "A": "啊啦啦啦啦啦",
            "B": "波波下蛋！嘔嘔嘔嘔嘔",
            "C": "啊啊啊我的蛋！我的蛋！買蛋！",
            "D": "嗨呀！",
            "E": "啊啊啊啊啊啊啊"
        }
    }
}
// Fisher-Yates洗牌算法
function shuffleArray() {
    let array = ['A', 'B', 'C', 'D', 'E']
    for (var i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function findMostFrequentLetter(str) {
    // 将字符串转换为小写以忽略大小写
    str = str.toLowerCase();

    const letterCount = {}; // 用于存储每个字母的计数

    // 遍历字符串并计算每个字母的出现频率
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/^[a-z]$/.test(char)) {
            // 只考虑字母字符
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }

    let mostFrequentLetter = '';
    let maxCount = 0;

    // 找到最高的频率字母
    for (const letter in letterCount) {
        if (letterCount[letter] > maxCount) {
            mostFrequentLetter = letter;
            maxCount = letterCount[letter];
        } else if (letterCount[letter] === maxCount) {
            // 如果有多个字母具有相同的最高频率，随机选择一个
            if (Math.random() < 0.5) {
                mostFrequentLetter = letter;
            }
        }
    }

    return mostFrequentLetter;
}


dataPanel.addEventListener("click", function (event) {
    const target = event.target

    if (target.id === "start-button") {
        currentQuestion = 1
        const order = shuffleArray()
        const firstHTML = `
                <form>
                    <h2>第 ${currentQuestion} 題</h2>
                    <div class="warning"></div>
                    <p style="padding-left: 2rem; padding-right: 2rem; padding-top: 1rem; text-align:left;">${questions[currentQuestion]['content']}</p>
                    <img src=${questions[currentQuestion]['image']} style="padding: 1rem; max-width: 85%; height: auto;" alt="">
                    <div style="padding-left: 2rem;">
                        <label style="float:left;"><input  type="radio" name="answer" value=${order[0]} required>   ${questions[currentQuestion]['option'][order[0]]}</label>
                        <br>
                        <br>
                        <label style="float:left;"><input  type="radio" name="answer" value=${order[1]}>   ${questions[currentQuestion]['option'][order[1]]}</label>
                        <br>
                        <br>
                        <label style="float:left;"><input  type="radio" name="answer" value=${order[2]}>   ${questions[currentQuestion]['option'][order[2]]}</label>
                        <br>
                        <br>
                        <label style="float:left;"><input  type="radio" name="answer" value=${order[3]}>   ${questions[currentQuestion]['option'][order[3]]}</label>
                        <br>
                        <br>
                        <label style="float:left;"><input  type="radio" name="answer" value=${order[4]}>   ${questions[currentQuestion]['option'][order[4]]}</label>
                        <br>
                    </div>
                    <a id="next-button" class="btn btn-info btn-block" style="margin: 2rem;">下一題</a>
                </form>
        `
        dataPanel.innerHTML = firstHTML
    } else if (target.id === "next-button") {
        const checkedRadio = document.querySelector('input[type="radio"]:checked')
        if (checkedRadio) {
            if (currentQuestion === 10) {
                const mostFrequent = findMostFrequentLetter(result)
                console.log(mostFrequent)
                const firstHTML = `
                        <div>
                            <h2>您的測驗結果是：</h2>
                            <h1>${outcomes[mostFrequent]["name"]}</h1>
                            <img src=${outcomes[mostFrequent]["image"]} style="padding: 1rem; max-width: 85%; height: auto;" alt="">
                            <p style="padding-left: 2rem; padding-right: 2rem; padding-top: 1rem; text-align:left;">${outcomes[mostFrequent]["content"]}</p>
                            <div style="margin: 2rem; text-align:left;" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>金幾勒！</strong> 
                                <p>歡迎截圖分享給你的好友！</p>
                                <p>（離開網站會遺失測驗結果）</p>
                            </div>
                            <br>
                            <br>
                            <h5>別忘了加入我們下方的社群軟體喔！</h5>
                            <div class="social-media" style="padding: 2rem;">
                                <a href="https://www.youtube.com/@Frogking_Odessa/" target="_blank" class="social-media-link">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://twitch.tv/odessa_thefrogking" target="_blank" class="social-media-link">
                                    <i class="fa-brands fa-twitch"></i>
                                </a>
                                <a href="https://instagram.com/odessa_thefrogking" target="_blank" class="social-media-link">
                                    <i class="fa-brands fa-instagram fa-lg"></i>
                                </a>
                                <a href="https://discord.gg/Fzbj9KfpXR" target="_blank" class="social-media-link">
                                    <i class="fa-brands fa-discord"></i>
                                </a>
                            </div>
                        </div>
                        `
                dataPanel.innerHTML = firstHTML
            } else {
                console.log("下一題囉")
                result += checkedRadio.value
                currentQuestion++
                const order = shuffleArray()
                if (currentQuestion === 10) {
                    const firstHTML = `
                    <form>
                        <h2>第 ${currentQuestion} 題</h2>
                        <div class="warning"></div>
                        <p style="padding-left: 2rem; padding-right: 2rem; padding-top: 1rem; text-align:left;">${questions[currentQuestion]['content']}</p>
                        <img src=${questions[currentQuestion]['image']} style="padding: 1rem; max-width: 85%; height: auto;" alt="">
                        <div style="padding-left: 2rem;">
                            <label style="float:left;"><input  type="radio" name="answer" value=${order[0]} required>   ${questions[currentQuestion]['option'][order[0]]}</label>
                            <br>
                            <br>
                            <label style="float:left;"><input  type="radio" name="answer" value=${order[1]}>   ${questions[currentQuestion]['option'][order[1]]}</label>
                            <br>
                            <br>
                            <label style="float:left;"><input  type="radio" name="answer" value=${order[2]}>   ${questions[currentQuestion]['option'][order[2]]}</label>
                            <br>
                            <br>
                            <label style="float:left;"><input  type="radio" name="answer" value=${order[3]}>   ${questions[currentQuestion]['option'][order[3]]}</label>
                            <br>
                            <br>
                            <label style="float:left;"><input  type="radio" name="answer" value=${order[4]}>   ${questions[currentQuestion]['option'][order[4]]}</label>
                            <br>
                        </div>
                        <a id="next-button" class="btn btn-info btn-block" style="margin: 2rem;">查看結果</a>
                    </form>
                    `
                    dataPanel.innerHTML = firstHTML
                } else {
                    const firstHTML = `
                            <form>
                                <h2>第 ${currentQuestion} 題</h2>
                                <div class="warning"></div>
                                <p style="padding-left: 2rem; padding-right: 2rem; padding-top: 1rem; text-align:left;">${questions[currentQuestion]['content']}</p>
                                <img src=${questions[currentQuestion]['image']} style="padding: 1rem; max-width: 85%; height: auto;" alt="">
                                <div style="padding-left: 2rem;">
                                    <label style="float:left;"><input  type="radio" name="answer" value=${order[0]} required>   ${questions[currentQuestion]['option'][order[0]]}</label>
                                    <br>
                                    <br>
                                    <label style="float:left;"><input  type="radio" name="answer" value=${order[1]}>   ${questions[currentQuestion]['option'][order[1]]}</label>
                                    <br>
                                    <br>
                                    <label style="float:left;"><input  type="radio" name="answer" value=${order[2]}>   ${questions[currentQuestion]['option'][order[2]]}</label>
                                    <br>
                                    <br>
                                    <label style="float:left;"><input  type="radio" name="answer" value=${order[3]}>   ${questions[currentQuestion]['option'][order[3]]}</label>
                                    <br>
                                    <br>
                                    <label style="float:left;"><input  type="radio" name="answer" value=${order[4]}>   ${questions[currentQuestion]['option'][order[4]]}</label>
                                    <br>
                                </div>
                                <a id="next-button" class="btn btn-info btn-block" style="margin: 2rem;">下一題</a>
                            </form>
                        `
                    dataPanel.innerHTML = firstHTML
                }
            }
        } else {
            console.log("請選擇一個答案！")
            const warningBox = document.querySelector('.warning')
            warningBox.innerHTML = `
            <div style="margin: 2rem; text-align:left;" class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>必填</strong> 請選擇一個答案！
            </div>
            `
        }
    }
})
