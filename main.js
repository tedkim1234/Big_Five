
document.addEventListener('DOMContentLoaded', () => {

    // ──────────────────────────────────────────────────────────────
    // 50문항 (IPIP Big Five 기반, 5특성 × 10문항, 교차 배열)
    // keyed: 1 = 정방향, -1 = 역채점
    // ──────────────────────────────────────────────────────────────
    const questions = [
        // ── Round 1 ──
        { id:  1, text: "나는 풍부한 어휘력을 지니고 있다.",                              trait: "O", keyed:  1 },
        { id:  2, text: "나는 항상 준비가 잘 되어 있다.",                                 trait: "C", keyed:  1 },
        { id:  3, text: "나는 사람들 사이에서 중심이 되는 편이다.",                        trait: "E", keyed:  1 },
        { id:  4, text: "나는 사람들에게 진심으로 관심을 갖는다.",                         trait: "A", keyed:  1 },
        { id:  5, text: "나는 대부분의 시간을 편안하게 보낸다.",                           trait: "N", keyed: -1 },
        // ── Round 2 ──
        { id:  6, text: "나는 추상적인 아이디어에 별로 관심이 없다.",                      trait: "O", keyed: -1 },
        { id:  7, text: "나는 물건을 아무데나 놓아두는 편이다.",                           trait: "C", keyed: -1 },
        { id:  8, text: "나는 말을 많이 하지 않는 편이다.",                                trait: "E", keyed: -1 },
        { id:  9, text: "나는 때로 다른 사람에게 상처 주는 말을 한다.",                    trait: "A", keyed: -1 },
        { id: 10, text: "나는 쉽게 스트레스를 받는다.",                                    trait: "N", keyed:  1 },
        // ── Round 3 ──
        { id: 11, text: "나는 생생한 상상력을 가지고 있다.",                               trait: "O", keyed:  1 },
        { id: 12, text: "나는 세부적인 사항에 주의를 기울인다.",                           trait: "C", keyed:  1 },
        { id: 13, text: "나는 사람들 곁에 있으면 편안함을 느낀다.",                        trait: "E", keyed:  1 },
        { id: 14, text: "나는 다른 사람의 감정을 잘 공감한다.",                            trait: "A", keyed:  1 },
        { id: 15, text: "나는 좀처럼 우울함을 느끼지 않는다.",                             trait: "N", keyed: -1 },
        // ── Round 4 ──
        { id: 16, text: "나는 다양한 것들에 호기심을 느낀다.",                             trait: "O", keyed:  1 },
        { id: 17, text: "나는 일을 엉망으로 만드는 편이다.",                               trait: "C", keyed: -1 },
        { id: 18, text: "나는 뒤에서 조용히 있는 편이다.",                                 trait: "E", keyed: -1 },
        { id: 19, text: "나는 다른 사람의 문제에 관심이 별로 없다.",                       trait: "A", keyed: -1 },
        { id: 20, text: "나는 많은 것에 대해 걱정하는 편이다.",                            trait: "N", keyed:  1 },
        // ── Round 5 ──
        { id: 21, text: "나는 새로운 아이디어를 빠르게 이해한다.",                         trait: "O", keyed:  1 },
        { id: 22, text: "나는 맡은 일을 기한 내에 처리한다.",                              trait: "C", keyed:  1 },
        { id: 23, text: "나는 처음 만난 사람과도 쉽게 대화를 시작한다.",                   trait: "E", keyed:  1 },
        { id: 24, text: "나는 다른 사람이 편안함을 느낄 수 있도록 배려한다.",              trait: "A", keyed:  1 },
        { id: 25, text: "나는 기분 변화가 심한 편이다.",                                   trait: "N", keyed:  1 },
        // ── Round 6 ──
        { id: 26, text: "나는 어려운 내용을 분석하고 이해하는 것을 즐긴다.",               trait: "O", keyed:  1 },
        { id: 27, text: "나는 작업을 완성하지 못한 채로 두는 경우가 많다.",                trait: "C", keyed: -1 },
        { id: 28, text: "나는 사람들과 대화하는 것을 별로 좋아하지 않는다.",              trait: "E", keyed: -1 },
        { id: 29, text: "나는 다른 사람을 무시하는 경향이 있다.",                          trait: "A", keyed: -1 },
        { id: 30, text: "나는 감정 기복이 거의 없다.",                                     trait: "N", keyed: -1 },
        // ── Round 7 ──
        { id: 31, text: "나는 상상 속에서 생생한 세계를 만들어낸다.",                      trait: "O", keyed:  1 },
        { id: 32, text: "나는 정해진 일정과 계획을 따르는 것을 좋아한다.",                 trait: "C", keyed:  1 },
        { id: 33, text: "나는 파티나 사교적인 모임을 즐긴다.",                             trait: "E", keyed:  1 },
        { id: 34, text: "나는 어려움에 처한 사람을 기꺼이 돕는다.",                        trait: "A", keyed:  1 },
        { id: 35, text: "나는 쉽게 화가 나는 편이다.",                                     trait: "N", keyed:  1 },
        // ── Round 8 ──
        { id: 36, text: "나는 복잡한 개념을 이해하는 데 어려움을 느낀다.",                 trait: "O", keyed: -1 },
        { id: 37, text: "나는 충동적으로 행동하는 경우가 많다.",                           trait: "C", keyed: -1 },
        { id: 38, text: "나는 조용하고 내향적인 편이다.",                                  trait: "E", keyed: -1 },
        { id: 39, text: "나는 타인보다 나 자신의 이익을 지나치게 우선시하는 편이다.",      trait: "A", keyed: -1 },
        { id: 40, text: "나는 자주 불안하거나 초조함을 느낀다.",                           trait: "N", keyed:  1 },
        // ── Round 9 ──
        { id: 41, text: "나는 깊이 생각하고 성찰하는 것을 즐긴다.",                        trait: "O", keyed:  1 },
        { id: 42, text: "나는 목표를 달성하기 위해 꾸준히 노력한다.",                      trait: "C", keyed:  1 },
        { id: 43, text: "나는 사람들과 어울리는 것을 좋아한다.",                           trait: "E", keyed:  1 },
        { id: 44, text: "나는 다른 사람들의 감정과 필요에 민감하다.",                      trait: "A", keyed:  1 },
        { id: 45, text: "나는 쉽게 짜증을 내지 않는다.",                                   trait: "N", keyed: -1 },
        // ── Round 10 ──
        { id: 46, text: "나는 창의적이라고 생각하지 않는다.",                              trait: "O", keyed: -1 },
        { id: 47, text: "나는 해야 할 일을 종종 미루는 편이다.",                           trait: "C", keyed: -1 },
        { id: 48, text: "나는 주목받는 것을 별로 좋아하지 않는다.",                        trait: "E", keyed: -1 },
        { id: 49, text: "나는 상대방의 이야기를 귀담아 듣지 않는 편이다.",                 trait: "A", keyed: -1 },
        { id: 50, text: "나는 종종 우울한 기분을 느낀다.",                                 trait: "N", keyed:  1 },
    ];

    // ──────────────────────────────────────────────────────────────
    // 특성 메타 정보
    // ──────────────────────────────────────────────────────────────
    const traitMeta = {
        O: { name: "개방성",  fullName: "개방성 (Openness)",        color: "#8e44ad" },
        C: { name: "성실성",  fullName: "성실성 (Conscientiousness)", color: "#2980b9" },
        E: { name: "외향성",  fullName: "외향성 (Extraversion)",     color: "#d35400" },
        A: { name: "우호성",  fullName: "우호성 (Agreeableness)",    color: "#27ae60" },
        N: { name: "신경성",  fullName: "신경성 (Neuroticism)",      color: "#c0392b" },
    };
    const traitOrder = ['O', 'C', 'E', 'A', 'N'];

    // ──────────────────────────────────────────────────────────────
    // 5단계 해석 (점수 범위: 10 ~ 50)
    // 기준: 매우낮음 <18 / 낮음 18~24 / 보통 25~32 / 높음 33~39 / 매우높음 >=40
    // ──────────────────────────────────────────────────────────────
    const interpretations = {
        O: {
            veryHigh: {
                label: "매우 높음",
                cls: "lv-very-high",
                desc: "당신은 매우 높은 개방성을 보입니다. 새로운 아이디어와 경험을 끊임없이 탐구하며, 예술·음악·문학에 깊은 관심을 갖습니다. 창의적 사고와 상상력이 탁월하고, 관습에 얽매이지 않는 독창적 시각으로 세상을 바라봅니다. 철학적 질문과 추상적 개념에 깊이 매료되며, 다양한 문화적 경험을 적극적으로 수용합니다.",
                strengths: ["탁월한 창의력과 독창적 사고", "폭넓은 지적·예술적 관심", "변화와 낯선 상황에 대한 높은 적응력", "심미적 감수성과 예술적 안목"],
                tips: ["창의적 아이디어를 실행으로 연결하는 구체적 계획을 함께 세워 보세요.", "몽상에 빠지지 않도록 현실적 관점을 균형 있게 유지하세요."],
            },
            high: {
                label: "높음",
                cls: "lv-high",
                desc: "당신은 높은 개방성을 지니고 있습니다. 새로운 아이디어와 경험에 활발한 호기심을 보이며, 창의적이고 상상력이 풍부합니다. 다양한 주제에 관심을 갖고 지적 탐구를 즐기며, 예술적 감성과 심미적 안목도 잘 발달해 있습니다.",
                strengths: ["창의적 문제 해결 능력", "강한 지적 호기심과 학습 욕구", "다양성에 대한 개방적 태도", "상상력을 활용한 혁신적 사고"],
                tips: ["실용적 관점을 함께 고려하여 아이디어를 실현하는 연습을 해보세요.", "관심 분야를 심화시켜 전문성과 창의성을 동시에 키워 보세요."],
            },
            average: {
                label: "보통",
                cls: "lv-average",
                desc: "당신은 보통 수준의 개방성을 지니고 있습니다. 익숙한 것과 새로운 것 사이에서 균형을 잘 유지합니다. 새로운 경험을 즐기되 실용적 관점도 함께 고려하며, 창의성과 현실성을 조화롭게 발휘합니다.",
                strengths: ["균형 잡힌 사고방식", "새로움과 안정 사이의 적절한 조율", "실용적이면서도 유연한 적응력"],
                tips: ["의도적으로 새로운 경험을 시도하며 시야를 넓혀 보세요.", "창의적 활동을 통해 상상력을 더욱 발전시킬 수 있습니다."],
            },
            low: {
                label: "낮음",
                cls: "lv-low",
                desc: "당신은 낮은 개방성을 보입니다. 검증된 방식과 친숙한 환경을 선호하며, 실용적이고 현실적인 관점에서 세상을 바라봅니다. 구체적이고 명확한 사실에 집중하는 경향이 있으며, 변화보다 안정성을 더 중요하게 여깁니다.",
                strengths: ["신뢰할 수 있는 일관성과 안정성", "현실적이고 실용적인 판단력", "검증된 방법에 대한 높은 숙련도"],
                tips: ["소규모의 새로운 경험으로 조금씩 시야를 넓혀 보세요.", "다른 관점을 가진 사람들의 이야기에 호기심을 가져 보세요."],
            },
            veryLow: {
                label: "매우 낮음",
                cls: "lv-very-low",
                desc: "당신은 매우 낮은 개방성을 보입니다. 전통적 가치와 친숙한 환경을 강하게 선호하며, 추상적·이론적 사고보다 구체적·실용적 접근을 훨씬 편안하게 여깁니다. 안정적이고 예측 가능한 환경에서 가장 잘 기능합니다.",
                strengths: ["탁월한 안정성과 예측 가능성", "전통적 가치에 대한 깊은 이해", "실무적·구체적 영역에서의 강한 역량"],
                tips: ["변화를 위협이 아닌 성장의 기회로 바라보려는 노력을 해보세요.", "작은 새로운 시도부터 시작하여 점차 경험의 폭을 넓혀 보세요."],
            },
        },
        C: {
            veryHigh: {
                label: "매우 높음",
                cls: "lv-very-high",
                desc: "당신은 매우 높은 성실성을 보입니다. 탁월한 자기 통제력과 조직화 능력을 지니고 있으며, 목표를 향해 끊임없이 노력합니다. 철저한 계획을 세우고 약속을 빠짐없이 이행하며, 세부 사항에도 꼼꼼하게 주의를 기울입니다. 높은 성취 욕구와 책임감으로 맡은 임무를 완수합니다.",
                strengths: ["뛰어난 자기 통제력과 규율", "철저한 계획 수립과 실행력", "높은 신뢰성과 책임감", "강한 성취 지향적 동기"],
                tips: ["완벽주의가 지나치면 번아웃이 올 수 있으니 충분한 휴식을 취하세요.", "때로는 유연하게 계획을 조정하는 것도 중요합니다."],
            },
            high: {
                label: "높음",
                cls: "lv-high",
                desc: "당신은 높은 성실성을 지니고 있습니다. 체계적이고 책임감이 강하며 신뢰할 수 있는 사람입니다. 계획을 잘 세우고 기한을 준수하며, 맡은 일을 꼼꼼히 처리합니다. 자기 훈련이 잘 되어 있어 장기적인 목표 달성에 강점을 보입니다.",
                strengths: ["뛰어난 조직화 및 계획 능력", "강한 책임감과 신뢰성", "목표 지향적 행동 패턴", "효율적인 업무 처리"],
                tips: ["지나친 완벽주의는 스트레스를 유발할 수 있으니 균형을 유지하세요.", "타인의 다른 업무 방식도 존중하는 유연성을 키워 보세요."],
            },
            average: {
                label: "보통",
                cls: "lv-average",
                desc: "당신은 보통 수준의 성실성을 지니고 있습니다. 필요할 때는 체계적으로 일하지만, 때로는 즉흥적으로 행동하기도 합니다. 대부분의 의무를 이행하되 완벽주의적이지 않고, 상황에 따라 유연하게 적응합니다.",
                strengths: ["융통성과 체계성의 균형", "상황에 맞게 적응하는 능력", "실용적인 업무 처리"],
                tips: ["중요한 일에 우선순위를 정하고 체계적으로 접근하는 연습을 해보세요.", "작은 목표부터 꾸준히 이루어 나가는 습관을 길러 보세요."],
            },
            low: {
                label: "낮음",
                cls: "lv-low",
                desc: "당신은 낮은 성실성을 보입니다. 계획보다는 즉흥적 행동을 선호하며, 구조화된 일과나 엄격한 일정에 제약감을 느낄 수 있습니다. 유연하고 자유롭게 행동하는 것을 편안하게 여기며, 자유로운 환경에서 강점을 발휘하기도 합니다.",
                strengths: ["뛰어난 유연성과 적응력", "즉흥적이고 창의적인 문제 해결", "부담 없이 새로운 시도를 하는 능력"],
                tips: ["중요한 목표를 위한 기본적인 루틴을 만들어 보세요.", "할 일 목록 작성 습관이 생산성 향상에 크게 도움이 됩니다."],
            },
            veryLow: {
                label: "매우 낮음",
                cls: "lv-very-low",
                desc: "당신은 매우 낮은 성실성을 보입니다. 충동적인 행동과 즉각적인 즐거움을 강하게 선호하며, 계획이나 조직화에 어려움을 겪는 경우가 많습니다. 장기적 목표보다 현재의 만족을 추구하는 경향이 강합니다.",
                strengths: ["자유롭고 제약 없는 행동력", "현재 순간에 집중하는 능력", "자발적이고 즉흥적인 창의성"],
                tips: ["작은 것부터 시작해 자기 관리 능력을 조금씩 키워 나가세요.", "장기 목표를 단기 단계로 나누어 작은 성취감을 쌓아가세요."],
            },
        },
        E: {
            veryHigh: {
                label: "매우 높음",
                cls: "lv-very-high",
                desc: "당신은 매우 높은 외향성을 보입니다. 사람들과 함께하는 것에서 큰 에너지를 얻으며, 사교적 상황에서 빛을 발합니다. 대화를 이끌고 집단의 분위기를 북돋우는 것을 즐기며, 새로운 사람들을 쉽게 사귑니다. 활동적이고 자기주장이 강하며, 다양한 사회적 활동에 적극적으로 참여합니다.",
                strengths: ["뛰어난 사교 능력과 대인 매력", "자신감 있는 자기 표현", "집단을 이끄는 리더십", "활기차고 낙관적인 에너지"],
                tips: ["혼자만의 성찰 시간도 가끔 확보하여 내면의 균형을 유지하세요.", "내향적인 사람들의 방식을 이해하고 존중하는 태도를 길러 보세요."],
            },
            high: {
                label: "높음",
                cls: "lv-high",
                desc: "당신은 높은 외향성을 지니고 있습니다. 사람들과 어울리는 것을 즐기고, 사교적 모임에서 편안함을 느낍니다. 자기주장이 강하고 활기차며, 사회적 상호작용에서 에너지를 얻습니다.",
                strengths: ["원활한 사회적 적응력", "자연스러운 커뮤니케이션 능력", "사람들에게 긍정적 영향을 주는 능력"],
                tips: ["혼자 있는 시간을 통해 자기 성찰을 깊이 하면 더욱 균형 잡힌 삶을 살 수 있습니다."],
            },
            average: {
                label: "보통",
                cls: "lv-average",
                desc: "당신은 보통 수준의 외향성을 지니고 있습니다. 상황에 따라 외향적·내향적으로 행동할 수 있는 양향성(ambiversion)을 지닙니다. 사교적 활동을 즐기지만 혼자만의 시간도 필요로 하며, 균형 잡힌 사회적 적응력을 보입니다.",
                strengths: ["다양한 상황에 유연하게 적응하는 능력", "외향성과 내향성 사이의 균형", "폭넓은 인간관계 유지 능력"],
                tips: ["자신이 에너지를 얻는 환경을 파악하고 생활 패턴을 그에 맞게 조정해 보세요."],
            },
            low: {
                label: "낮음",
                cls: "lv-low",
                desc: "당신은 낮은 외향성을 보입니다. 혼자 있거나 소수의 친한 친구들과 함께하는 것을 선호합니다. 사교적 모임 후에는 혼자만의 시간으로 에너지를 회복하며, 깊이 있는 일대일 대화를 선호합니다.",
                strengths: ["깊이 있는 집중력과 사색 능력", "의미 있는 소수의 깊은 관계", "독립적이고 자기 주도적인 생활"],
                tips: ["때로는 사교적 상황에 참여하며 인맥을 넓히는 것도 도움이 됩니다.", "자신의 내향성을 강점으로 활용할 수 있는 환경을 찾아 보세요."],
            },
            veryLow: {
                label: "매우 낮음",
                cls: "lv-very-low",
                desc: "당신은 매우 낮은 외향성을 보입니다. 혼자 있는 것을 강하게 선호하며, 사교적 상황에서 상당한 에너지 소모를 경험합니다. 내면의 세계가 풍부하고 사색적이며, 소수의 깊은 관계를 폭넓은 인간관계보다 훨씬 중요하게 여깁니다.",
                strengths: ["깊은 집중력과 풍부한 사색 능력", "풍부한 내면세계와 창의적 사고", "선택적이고 의미 있는 인간관계"],
                tips: ["사회적 에너지를 전략적으로 관리하여 중요한 만남에 집중해 보세요.", "글쓰기, 예술, 연구 등 혼자 할 수 있는 의미 있는 활동을 탐색해 보세요."],
            },
        },
        A: {
            veryHigh: {
                label: "매우 높음",
                cls: "lv-very-high",
                desc: "당신은 매우 높은 우호성을 보입니다. 타인에 대한 깊은 공감 능력과 배려심을 지니고 있으며, 조화와 협력을 최우선으로 여깁니다. 다른 사람의 감정과 필요에 매우 민감하며, 갈등을 피하고 평화로운 관계를 유지하려는 강한 동기를 갖습니다. 이타적이고 친절하며, 타인을 위해 자신의 필요를 기꺼이 희생합니다.",
                strengths: ["탁월한 공감 능력과 정서적 지지", "강한 협력과 팀워크 지향", "갈등 해결과 중재 능력", "깊은 신뢰 관계 형성"],
                tips: ["지나친 배려는 자신을 소모시킬 수 있으니, 자기 자신의 필요도 돌보세요.", "건강한 경계 설정을 통해 자신을 보호하는 것도 중요합니다."],
            },
            high: {
                label: "높음",
                cls: "lv-high",
                desc: "당신은 높은 우호성을 지니고 있습니다. 동정심이 많고 협조적이며 친절합니다. 다른 사람을 돕는 것을 좋아하고 신뢰하며, 사회적 조화를 중요하게 생각합니다. 관계에서 배려와 공감을 자연스럽게 표현합니다.",
                strengths: ["따뜻한 대인관계 능력", "뛰어난 협력과 팀워크", "신뢰를 쌓는 능력", "친사회적 행동"],
                tips: ["자신의 필요와 경계를 명확히 하는 것도 건강한 관계의 일부입니다."],
            },
            average: {
                label: "보통",
                cls: "lv-average",
                desc: "당신은 보통 수준의 우호성을 지니고 있습니다. 필요할 때 협력적으로 행동하지만, 자신의 입장을 명확히 표현하기도 합니다. 타인에 대한 배려와 자기주장 사이에서 적절한 균형을 유지합니다.",
                strengths: ["협력과 독립성의 균형", "상황에 맞는 융통성", "실용적인 대인관계"],
                tips: ["상대방의 감정에 더 주의를 기울이면 관계가 더욱 풍성해질 수 있습니다."],
            },
            low: {
                label: "낮음",
                cls: "lv-low",
                desc: "당신은 낮은 우호성을 보입니다. 경쟁적이고 분석적인 성향이 강하며, 타인의 감정보다 사실과 논리를 더 중요하게 여기는 경향이 있습니다. 타인의 평가에 덜 좌우되며 직설적으로 의사소통하는 편입니다.",
                strengths: ["논리적이고 분석적인 사고", "직설적이고 효율적인 소통", "독립적이고 자기주장이 강한 성향"],
                tips: ["상대방의 감정을 인식하고 배려하는 태도가 관계 개선에 도움이 됩니다.", "협력을 통해 더 큰 성과를 얻을 수 있음을 염두에 두세요."],
            },
            veryLow: {
                label: "매우 낮음",
                cls: "lv-very-low",
                desc: "당신은 매우 낮은 우호성을 보입니다. 경쟁적이고 회의적인 성향이 강하며, 타인의 의도에 대해 비판적 시각을 갖는 경향이 있습니다. 자신의 이익을 명확히 추구하며, 감정적 호소보다 논리와 근거를 중시합니다.",
                strengths: ["강한 자기주장과 독립성", "논리적이고 냉철한 판단력", "협상과 경쟁 상황에서의 강인함"],
                tips: ["타인에 대한 신뢰와 협력을 쌓는 것이 장기적으로 더 큰 성공을 이끕니다.", "공감 능력을 의도적으로 연습하는 것이 관계의 질을 높여줍니다."],
            },
        },
        N: {
            veryHigh: {
                label: "매우 높음",
                cls: "lv-very-high",
                desc: "당신은 매우 높은 신경성을 보입니다. 불안, 우울, 분노 등 부정적 감정을 자주 강하게 경험하며, 스트레스 상황에 매우 민감하게 반응합니다. 감정 조절에 어려움을 겪을 수 있으며, 일상적인 상황도 위협적으로 느껴질 수 있습니다.",
                strengths: ["감정에 대한 예민한 인식과 섬세한 표현", "깊은 감수성과 타인에 대한 공감 능력", "위험 상황에 대한 높은 경계심"],
                tips: ["전문적인 심리 상담이나 스트레스 관리 프로그램의 도움을 고려해 보세요.", "명상, 규칙적 운동, 충분한 수면 등 정서 안정을 위한 건강한 습관을 만들어 보세요."],
            },
            high: {
                label: "높음",
                cls: "lv-high",
                desc: "당신은 높은 신경성을 지니고 있습니다. 정서적으로 민감하며 스트레스에 더 취약한 편입니다. 부정적인 감정을 자주 경험하고, 사소한 일에도 걱정하는 경향이 있습니다. 스트레스 관리 방법을 익히는 것이 크게 도움이 될 수 있습니다.",
                strengths: ["높은 감수성과 감정적 깊이", "위험 신호에 대한 예민한 감지력", "타인의 어려움에 대한 깊은 공감"],
                tips: ["마음챙김, 복식 호흡 등 스트레스 관리 기법을 배워 실천해 보세요.", "부정적 사고 패턴을 인식하고 긍정적으로 재구성하는 연습을 해보세요."],
            },
            average: {
                label: "보통",
                cls: "lv-average",
                desc: "당신은 보통 수준의 신경성을 지니고 있습니다. 스트레스를 경험하지만 대체로 잘 대처합니다. 가끔 부정적인 감정을 느끼지만, 일상 기능에는 큰 지장이 없습니다. 정서적으로 비교적 안정된 편입니다.",
                strengths: ["적절한 감정 조절 능력", "스트레스 상황에서의 현실적 대처", "감수성과 안정성의 균형"],
                tips: ["스트레스가 쌓이기 전에 해소하는 건강한 루틴을 유지해 보세요."],
            },
            low: {
                label: "낮음",
                cls: "lv-low",
                desc: "당신은 낮은 신경성을 보입니다. 정서적으로 비교적 안정되어 있으며, 스트레스 상황에서도 침착하게 대응하는 경향이 있습니다. 부정적인 감정에서 빠르게 회복하며, 대부분의 상황을 태연하게 받아들입니다.",
                strengths: ["뛰어난 정서적 안정성", "스트레스 상황에서의 침착한 대응", "빠른 감정 회복력"],
                tips: ["정서적으로 어려움을 겪는 타인에 대한 공감 능력을 의식적으로 키워 보세요."],
            },
            veryLow: {
                label: "매우 낮음",
                cls: "lv-very-low",
                desc: "당신은 매우 낮은 신경성을 보입니다. 뛰어난 정서적 안정성과 높은 회복탄력성을 지니고 있습니다. 강한 압박 상황에서도 침착함을 유지하고, 부정적 감정에 거의 흔들리지 않습니다. 정서적 안녕감이 높으며 스트레스에 매우 강한 편입니다.",
                strengths: ["탁월한 정서적 안정성과 회복탄력성", "위기 상황에서의 탁월한 침착함", "지속적인 긍정적 심리 상태 유지"],
                tips: ["감정적으로 어려움을 겪는 사람들의 상황을 이해하고 공감하는 노력을 해보세요."],
            },
        },
    };

    // ──────────────────────────────────────────────────────────────
    // DOM 참조
    // ──────────────────────────────────────────────────────────────
    const startBtn          = document.getElementById('start-btn');
    const testIntro         = document.getElementById('test-intro');
    const personalityTest   = document.getElementById('personality-test');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer  = document.getElementById('results-container');
    const resultsDiv        = document.getElementById('results');
    const restartBtn        = document.getElementById('restart-btn');
    const progressCount     = document.getElementById('progress-count');
    const progressBarFill   = document.getElementById('progress-bar-fill');

    // ──────────────────────────────────────────────────────────────
    // 이벤트
    // ──────────────────────────────────────────────────────────────
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
        updateProgress();
        if (window._radarChart) {
            window._radarChart.destroy();
            window._radarChart = null;
        }
    });

    // ──────────────────────────────────────────────────────────────
    // 문항 렌더링
    // ──────────────────────────────────────────────────────────────
    const LABELS = ['전혀 그렇지 않다', '그렇지 않다', '보통이다', '그렇다', '매우 그렇다'];

    function renderQuestions() {
        questions.forEach((q, i) => {
            const div = document.createElement('div');
            div.classList.add('question');

            div.innerHTML = `
                <p><span class="q-num">${i + 1}</span>${q.text}</p>
                <div class="options">
                    ${[1,2,3,4,5].map(v => `
                        <label class="opt-label" data-val="${v}">
                            <input type="radio" name="q${i}" value="${v}" required>
                            <span class="opt-circle">${v}</span>
                            <span class="opt-text">${LABELS[v-1]}</span>
                        </label>
                    `).join('')}
                </div>
            `;

            div.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.addEventListener('change', () => {
                    div.querySelectorAll('.opt-label').forEach(l => l.classList.remove('selected'));
                    radio.closest('.opt-label').classList.add('selected');
                    div.classList.add('answered');
                    updateProgress();
                });
            });

            questionsContainer.appendChild(div);
        });
    }

    function updateProgress() {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        progressCount.textContent = answered;
        progressBarFill.style.width = `${(answered / questions.length) * 100}%`;
    }

    // ──────────────────────────────────────────────────────────────
    // 채점
    // ──────────────────────────────────────────────────────────────
    function calculateScores() {
        const scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
        const formData = new FormData(personalityTest);
        questions.forEach((q, i) => {
            const raw = parseInt(formData.get(`q${i}`), 10);
            scores[q.trait] += q.keyed === 1 ? raw : (6 - raw);
        });
        return scores;
    }

    function getLevel(score) {
        if (score >= 40) return 'veryHigh';
        if (score >= 33) return 'high';
        if (score >= 25) return 'average';
        if (score >= 18) return 'low';
        return 'veryLow';
    }

    // ──────────────────────────────────────────────────────────────
    // 결과 렌더링
    // ──────────────────────────────────────────────────────────────
    function displayResults(scores) {
        personalityTest.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsDiv.innerHTML = '';

        drawRadarChart(scores);

        traitOrder.forEach(trait => {
            const score   = scores[trait];
            const pct     = Math.round(((score - 10) / 40) * 100);
            const level   = getLevel(score);
            const meta    = traitMeta[trait];
            const interp  = interpretations[trait][level];

            const card = document.createElement('div');
            card.classList.add('result-card', `trait-${trait}`);
            card.innerHTML = `
                <div class="rc-header">
                    <h3 class="rc-title">${meta.fullName}</h3>
                    <span class="level-badge ${interp.cls}">${interp.label}</span>
                </div>
                <div class="score-bar">
                    <div class="score-fill" style="width:0%" data-pct="${pct}"></div>
                </div>
                <p class="score-label">점수: <strong>${score}</strong> / 50 &nbsp;|&nbsp; 백분위 기준 <strong>${pct}%</strong></p>
                <p class="rc-desc">${interp.desc}</p>
                <div class="rc-detail">
                    <h4 class="rc-detail-title strength-title">주요 강점</h4>
                    <ul>${interp.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="rc-detail" style="margin-top:0.75rem">
                    <h4 class="rc-detail-title tip-title">성장 포인트</h4>
                    <ul>${interp.tips.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            `;
            resultsDiv.appendChild(card);

            setTimeout(() => {
                card.querySelector('.score-fill').style.width = `${pct}%`;
            }, 150);
        });
    }

    // ──────────────────────────────────────────────────────────────
    // 고객 문의 폼 (Formspree AJAX)
    // ──────────────────────────────────────────────────────────────
    const contactForm    = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    const contactError   = document.getElementById('contact-error');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.contact-submit-btn');
            btn.disabled = true;
            btn.textContent = '전송 중...';
            contactError.classList.add('hidden');

            try {
                const res = await fetch('https://formspree.io/f/mrealpnj', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(contactForm),
                });
                if (res.ok) {
                    contactForm.classList.add('hidden');
                    contactSuccess.classList.remove('hidden');
                } else {
                    throw new Error('server error');
                }
            } catch {
                btn.disabled = false;
                btn.textContent = '문의 보내기';
                contactError.classList.remove('hidden');
            }
        });
    }

    // ──────────────────────────────────────────────────────────────
    // 레이더 차트 (Chart.js)
    // ──────────────────────────────────────────────────────────────
    function drawRadarChart(scores) {
        const ctx = document.getElementById('radar-chart').getContext('2d');
        const data = traitOrder.map(t => scores[t]);
        const colors = traitOrder.map(t => traitMeta[t].color);

        window._radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: traitOrder.map(t => traitMeta[t].name),
                datasets: [{
                    label: '나의 성격 프로필',
                    data,
                    backgroundColor: 'rgba(74,144,226,0.15)',
                    borderColor:     'rgba(74,144,226,0.75)',
                    borderWidth: 2,
                    pointBackgroundColor: colors,
                    pointBorderColor: '#fff',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        min: 10,
                        max: 50,
                        ticks: { stepSize: 10, font: { size: 10 }, color: '#888' },
                        pointLabels: { font: { size: 13, weight: 'bold' } },
                        grid:  { color: 'rgba(0,0,0,0.08)' },
                        angleLines: { color: 'rgba(0,0,0,0.08)' },
                    },
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: ctx => ` ${ctx.label}: ${ctx.raw}점`,
                        },
                    },
                },
            },
        });
    }
});
