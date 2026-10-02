// data.js - 补充病原体（敌人）强度与特性配置
const EnemyTypes = {
    // 1. 普通型（如：流感病毒）- 标准属性，适合作为基础试炼
    influenza: {
        id: 'influenza',
        name: "流感病毒",
        hpMultiplier: 1.0,
        speed: 1.0,
        color: '#e74c3c',
        desc: "标准流感病毒，无特殊能力，成群出现。"
    },

    // 2. 高速突进型（如：急性鼻病毒）- 移动速度极快，血量较薄
    rhinovirus: {
        id: 'rhinovirus',
        name: "急性鼻病毒",
        hpMultiplier: 0.7,
        speed: 1.5,
        color: '#f1c40f',
        desc: "移动速度极快，能迅速突破防线，需用前排快速消耗。"
    },

    // 3. 重甲肉盾型（如：耐药性链球菌）- 对应你提到的第2关难点，血量极厚
    streptococcus: {
        id: 'streptococcus',
        name: "耐药链球菌",
        hpMultiplier: 2.2,
        speed: 0.6,
        color: '#9b59b6',
        desc: "厚重细胞壁，血量极高，普通中性粒细胞极难击杀，需依赖特供溶菌酶克制！"
    },

    // 4. 分裂再生型（如：支原体）- 受到一定伤害后可能会分裂或极难缠
    mycoplasma: {
        id: 'mycoplasma',
        name: "肺炎支原体",
        hpMultiplier: 1.5,
        speed: 0.8,
        color: '#e67e22',
        desc: "生命力顽强，具备持续侵蚀细胞寿命的能力。"
    },

    // 5. 精英/首领型（如：乙肝病毒/全身感染Boss）- 关卡大Boss
    hepatitisBoss: {
        id: 'hepatitisBoss',
        name: "乙肝核心Boss",
        hpMultiplier: 4.5,
        speed: 0.45,
        color: '#c0392b',
        desc: "强力的肝脏入侵者，拥有巨额生命值与高抗性，是关卡终极考验。"
    }
};

// 关卡与病原体的联动配置
// 你可以在关卡中指定当前波次会刷出什么类型的敌人
const GameLevelsExtended = [
    { id: 1, name: "第 1 关: 末梢微循环", enemies: ['influenza', 'rhinovirus'], rewardNut: 25 },
    { id: 2, name: "第 2 关: 扁桃体防线", enemies: ['streptococcus', 'influenza'], rewardNut: 30 }, // 专配链球菌
    { id: 3, name: "第 3 关: 气道黏膜", enemies: ['mycoplasma', 'rhinovirus'], rewardNut: 35 },
    // 后面你可以随心所欲地混搭敌人组合！
];
