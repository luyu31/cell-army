// data.js - 专门管理人体生命周期关卡与差异化病原体（敌人）配置

// 1. 病原体（敌人）差异化类型与强度配置
const EnemyTypes = {
    influenza: {
        id: 'influenza',
        name: "流感病毒",
        hpMultiplier: 1.0,
        speed: 0.8, // 标准速度
        color: '#e74c3c',
        desc: "标准流感病毒，成群出现，无特殊能力。"
    },
    rhinovirus: {
        id: 'rhinovirus',
        name: "急性鼻病毒",
        hpMultiplier: 0.7,
        speed: 1.3, // 速度极快，容易冲乱前排
        color: '#f1c40f',
        desc: "移动速度极快，生命较低，需用前排快速拦截。"
    },
    streptococcus: {
        id: 'streptococcus',
        name: "耐药链球菌",
        hpMultiplier: 2.2,
        speed: 0.5, // 移动缓慢但极难击杀
        color: '#9b59b6',
        desc: "厚重细胞壁，血量极高，普通细胞较难刮动。"
    },
    mycoplasma: {
        id: 'mycoplasma',
        name: "肺炎支原体",
        hpMultiplier: 1.5,
        speed: 0.7,
        color: '#e67e22',
        desc: "生命力顽强，持续侵蚀防线。"
    },
    hepatitisBoss: {
        id: 'hepatitisBoss',
        name: "核心变异Boss",
        hpMultiplier: 4.5,
        speed: 0.4, // 极其缓慢但压迫感拉满
        color: '#c0392b',
        desc: "终极入侵者，巨额生命值与高抗性，关卡巨大考验。"
    }
};

// 2. 包含生命周期分类的完整 10 个关卡配置（增加敌人数与难度，确保游玩挑战性）
const GameLevelsExtended = [
    { 
        id: 1, ageGroup: '幼儿期', name: "第 1 关: 脐带残端防线", 
        enemyCount: 10, enemyHp: 28, rewardNut: 20, baseHp: 12,
        allowedEnemies: ['influenza'] 
    },
    { 
        id: 2, ageGroup: '幼儿期', name: "第 2 关: 乳牙期微循环", 
        enemyCount: 14, enemyHp: 38, rewardNut: 25, baseHp: 12,
        allowedEnemies: ['influenza', 'rhinovirus'] 
    },
    { 
        id: 3, ageGroup: '儿童期', name: "第 3 关: 扁桃体之战", 
        enemyCount: 18, enemyHp: 50, rewardNut: 30, baseHp: 10,
        allowedEnemies: ['influenza', 'streptococcus'] 
    },
    { 
        id: 4, ageGroup: '儿童期', name: "第 4 关: 肠道菌群失衡", 
        enemyCount: 22, enemyHp: 62, rewardNut: 35, baseHp: 10,
        allowedEnemies: ['rhinovirus', 'mycoplasma'] 
    },
    { 
        id: 5, ageGroup: '青少年', name: "第 5 关: 呼吸道防线大暴发", 
        enemyCount: 26, enemyHp: 75, rewardNut: 40, baseHp: 10,
        allowedEnemies: ['influenza', 'rhinovirus', 'streptococcus'] 
    },
    { 
        id: 6, ageGroup: '青少年', name: "第 6 关: 淋巴结总动员", 
        enemyCount: 30, enemyHp: 90, rewardNut: 45, baseHp: 8,
        allowedEnemies: ['streptococcus', 'mycoplasma', 'hepatitisBoss'] 
    },
    { 
        id: 7, ageGroup: '成年期', name: "第 7 关: 代谢微环境压力", 
        enemyCount: 35, enemyHp: 110, rewardNut: 50, baseHp: 8,
        allowedEnemies: ['rhinovirus', 'streptococcus', 'mycoplasma'] 
    },
    { 
        id: 8, ageGroup: '成年期', name: "第 8 关: 肝脏免疫突围", 
        enemyCount: 40, enemyHp: 130, rewardNut: 60, baseHp: 8,
        allowedEnemies: ['influenza', 'streptococcus', 'hepatitisBoss'] 
    },
    { 
        id: 9, ageGroup: '老年期', name: "第 9 关: 胸腺退化期防线", 
        enemyCount: 46, enemyHp: 155, rewardNut: 70, baseHp: 6,
        allowedEnemies: ['rhinovirus', 'streptococcus', 'mycoplasma'] 
    },
    { 
        id: 10, ageGroup: '老年期', name: "第 10 关: 终极全身免疫决战", 
        enemyCount: 52, enemyHp: 190, rewardNut: 100, baseHp: 5,
        allowedEnemies: ['influenza', 'rhinovirus', 'streptococcus', 'mycoplasma', 'hepatitisBoss'] 
    }
];
