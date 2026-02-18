
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // 개방성 (Openness)
        { text: "나는 풍부한 어휘력을 가지고 있다.", trait: "Openness", score: 1 },
        { text: "나는 추상적인 개념을 이해하는 데 어려움을 느낀다.", trait: "Openness", score: -1 },
        { text: "나는 생생한 상상력을 가지고 있다.", trait: "Openness", score: 1 },
        { text: "나는 추상적인 아이디어에 관심이 없다.", trait: "Openness", score: -1 },

        // 성실성 (Conscientiousness)
        { text: "나는 항상 준비가 되어 있다.", trait: "Conscientiousness", score: 1 },
        { text: "나는 물건을 아무데나 둔다.", trait: "Conscientiousness", score: -1 },
        { text: "나는 세부적인 사항에 주의를 기울인다.", trait: "Conscientiousness", score: 1 },
        { text: "나는 일을 엉망으로 만든다.", trait: "Conscientiousness", score: -1 },

        // 외향성 (Extraversion)
        { text: "나는 파티의 중심 인물이다.", trait: "Extraversion", score: 1 },
        { text: "나는 말을 많이 하지 않는다.", trait: "Extraversion", score: -1 },
        { text: "나는 사람들 주변에서 편안함을 느낀다.", trait: "Extraversion", score: 1 },
        { text: "나는 뒷전으로 물러나 있는다.", trait: "Extraversion", score: -1 },

        // 우호성 (Agreeableness)
        { text: "나는 사람들에게 관심이 많다.", trait: "Agreeableness", score: 1 },
        { text: "나는 사람들을 모욕한다.", trait: "Agreeableness", score: -1 },
        { text: "나는 다른 사람의 감정에 공감한다.", trait: "Agreeableness", score: 1 },
        { text: "나는 다른 사람의 문제에 관심이 없다.", trait: "Agreeableness", score: -1 },

        // 신경성 (Neuroticism)
        { text: "나는 대부분의 시간을 편안하게 보낸다.", trait: "Neuroticism", score: -1 },
        { text: "나는 스트레스를 쉽게 받는다.", trait: "Neuroticism", score: 1 },
        { text: "나는 좀처럼 우울함을 느끼지 않는다.", trait: "Neuroticism", score: -1 },
        { text: "나는 여러 가지 일에 대해 걱정한다.", trait: "Neuroticism", score: 1 },
    ];

    const interpretations = {
        Openness: {
            high: "(높음) 당신은 상상력이 풍부하고 창의적이며 새로운 경험에 개방적입니다. 세상에 대한 호기심이 많고 권위나 전통적인 가치에 도전하는 것을 꺼리지 않습니다.",
            low: "(낮음) 당신은 현실적이고 관습적이며 관심 분야가 좁은 경향이 있습니다. 새로운 것보다는 익숙한 것을 선호하며 보수적인 성향을 보입니다.",
        },
        Conscientiousness: {
            high: "(높음) 당신은 체계적이고 책임감이 강하며 신뢰할 수 있는 사람입니다. 자기 훈련이 잘 되어 있고 의무를 중요하게 생각하며 성취 지향적입니다.",
            low: "(낮음) 당신은 즉흥적이고 규칙이나 순서에 덜 얽매이는 편입니다. 부주의하고 충동적이며 무질서한 경향이 있을 수 있습니다.",
        },
        Extraversion: {
            high: "(높음) 당신은 외향적이고 활기차며 사교적입니다. 사람들과 함께 있는 것을 즐기고 자기주장이 강하며 사회적 상호작용에서 에너지를 얻습니다.",
            low: "(낮음) 당신은 내성적이고 혼자 있는 것을 선호합니다. 혼자 있거나 소수의 친한 친구들과 함께 있는 것을 더 편안하게 느끼며, 사교적인 행사 후에는 기운이 빠질 수 있습니다.",
        },
        Agreeableness: {
            high: "(높음) 당신은 동정심이 많고 협조적이며 친절합니다. 다른 사람을 돕는 것을 좋아하고 신뢰하며 사회적 조화를 중요하게 생각합니다.",
            low: "(낮음) 당신은 분석적이고 냉철하며 경쟁적인 성향이 있습니다. 회의적이고 비판적일 수 있으며 다른 사람의 감정에 덜 신경 쓰는 경향이 있습니다.",
        },
        Neuroticism: {
            high: "(높음) 당신은 정서적으로 불안정한 경향이 있습니다. 분노, 불안, 우울과 같은 부정적인 감정을 자주 경험하며 스트레스에 더 민감하게 반응합니다.",
            low: "(낮음) 당신은 정서적으로 안정되어 있고 침착하며 회복력이 좋습니다. 쉽게 화를 내지 않으며 부정적인 감정을 덜 느끼는 편입니다.",
        },
    };

    const traitTranslations = {
        Openness: "개방성",
        Conscientiousness: "성실성",
        Extraversion: "외향성",
        Agreeableness: "우호성",
        Neuroticism: "신경성",
    };

    const startBtn = document.getElementById('start-btn');
    const testIntro = document.getElementById('test-intro');
    const personalityTest = document.getElementById('personality-test');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results-container');
    const resultsDiv = document.getElementById('results');
    const restartBtn = document.getElementById('restart-btn');

    startBtn.addEventListener('click', () => {
        testIntro.classList.add('hidden');
        personalityTest.classList.remove('hidden');
        renderQuestions();
    });

    personalityTest.addEventListener('submit', (e) => {
        e.preventDefault();
        const scores = calculateScores();
        displayResults(scores);
    });

    restartBtn.addEventListener('click', () => {
        resultsContainer.classList.add('hidden');
        testIntro.classList.remove('hidden');
        personalityTest.reset();
        questionsContainer.innerHTML = ''; 
    });

    function renderQuestions() {
        questions.forEach((q, i) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${i + 1}. ${q.text}</p>
                <div class="options">
                    <label><input type="radio" name="q${i}" value="1" required><span>전혀 그렇지 않다</span></label>
                    <label><input type="radio" name="q${i}" value="2"><span>그렇지 않다</span></label>
                    <label><input type="radio" name="q${i}" value="3"><span>보통이다</span></label>
                    <label><input type="radio" name="q${i}" value="4"><span>그렇다</span></label>
                    <label><input type="radio" name="q${i}" value="5"><span>매우 그렇다</span></label>
                </div>
            `;
            questionsContainer.appendChild(questionDiv);
        });
    }

    function calculateScores() {
        const scores = {
            Openness: 0,
            Conscientiousness: 0,
            Extraversion: 0,
            Agreeableness: 0,
            Neuroticism: 0,
        };
        const formData = new FormData(personalityTest);
        for (let i = 0; i < questions.length; i++) {
            const answer = parseInt(formData.get(`q${i}`), 10);
            const question = questions[i];
            let score = answer;
            if (question.score === -1) {
                score = 6 - answer; // 부정 문항 점수 역산
            }
            scores[question.trait] += score;
        }
        return scores;
    }

    function displayResults(scores) {
        personalityTest.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsDiv.innerHTML = '';

        // 최대 점수 (질문 수 * 5)
        const maxScore = (questions.length / 5) * 5;

        for (const trait in scores) {
            const score = scores[trait];
            // 각 특성별 질문은 4개이므로, 최대 점수는 20점입니다.
            const maxTraitScore = 4 * 5; 
            const percentage = (score / maxTraitScore) * 100;
            const interpretation = score >= 12 ? interpretations[trait].high : interpretations[trait].low;

            const resultCard = document.createElement('div');
            resultCard.classList.add('result-card');
            resultCard.innerHTML = `
                <h3>${traitTranslations[trait]}</h3>
                <div class="score-bar">
                    <div class="score-fill" style="width: 0%;"></div>
                </div>
                <p><strong>점수:</strong> ${score} / ${maxTraitScore}</p>
                <p>${interpretation}</p>
            `;
            resultsDiv.appendChild(resultCard);
            
            // Animate score bar
            setTimeout(() => {
                resultCard.querySelector('.score-fill').style.width = `${percentage}%`;
            }, 100); 
        }
    }
});
