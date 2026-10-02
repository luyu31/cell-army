// data.js - 20个完整生命周期关卡与差异化病原体配置

// 1. 病原体（敌人）差异化类型与强度配置
const EnemyTypes = {
    influenza: {
        id: 'influenza',
        name: "流感病毒",
        hpMultiplier: 1.0,
        speed: 0.8,
        color: '#e74c3c',
        desc: "标准流感病毒，成群出现，无特殊能力。"
    },
    rhinovirus: {
        id: 'rhinovirus',
        name: "急性鼻病毒",
        hpMultiplier: 0.7,
        speed: 1.3,
        color: '#f1c40f',
        desc: "移动速度极快，容易冲乱前排防线。"
    },
    streptococcus: {
        id: 'streptococcus',
        name: "耐药链球菌",
        hpMultiplier: 2.2,
        speed: 0.5,
        color: '#9b59b6',
        desc: "厚重细胞壁，血量极高，普通细胞难以击杀。"
    },
    mycoplasma: {
        id: 'mycoplasma',
        name: "肺炎支原体",
        hpMultiplier: 1.5,
        speed: 0.7,
        color: '#e67e22',
        desc: "生命力顽强，具备持续侵蚀力。"
    },
    rotavirus: {
        id: 'rotavirus',
        name: "轮状病毒",
        hpMultiplier: 1.2,
        speed: 0.9,
        color: '#1abc9c',
        desc: "肠道突袭者，成群结队快速推进。"
    },
    tubercle: {
        id: 'tubercle',
        name: "结核杆菌",
        hpMultiplier: 3.0,
        speed: 0.4,
        color: '#34495e',
        desc: "极强耐受力的慢性病原体，防线噩梦。"
    },
    hepatitisBoss: {
        id: 'hepatitisBoss',
        name: "核心变异Boss",
        hpMultiplier: 4.5,
        speed: 0.4,
        color: '#c0392b',
        desc: "终极入侵者，巨额生命值与高抗性。"
    }
};

// 2. 扩充至 20 个完整生命周期关卡配置
const GameLevelsExtended = [
    // --- 幼儿期 (1-4关) ---
    { 
        id: 1, ageGroup: '幼儿期', name: "第 1 关: 脐带残端初阶防线", 
        enemyCount: 8, enemyHp: 25, rewardNut: 20, baseHp: 12,
        allowedEnemies: ['influenza'] 
    },
    { 
        id: 2, ageGroup: '幼儿期', name: "第 2 关: 乳牙期微循环突袭", 
        enemyCount: 12, enemyHp: 35, rewardNut: 25, baseHp: 12,
        allowedEnemies: ['influenza', 'rhinovirus'] 
    },
    { 
        id: 3, ageGroup: '幼儿期', name: "第 3 关: 幼儿肠道菌群建立", 
        enemyCount: 15, enemyHp: 42, rewardNut: 28, baseHp: 12,
        allowedEnemies: ['rotavirus'] 
    },
    { 
        id: 4, ageGroup: '幼儿期', name: "第 4 关: 幼儿期扁桃体初战", 
        enemyCount: 18, enemyHp: 50, rewardNut: 30, baseHp: 10,
        allowedEnemies: ['influenza', 'streptococcus'] 
    },

    // --- 儿童期 (5-8关) ---
    { 
        id: 5, ageGroup: '儿童期', name: "第 5 关: 校园流感大暴发", 
        enemyCount: 22, enemyHp: 60, rewardNut: 35, baseHp: 10,
        allowedEnemies: ['influenza', 'rhinovirus'] 
    },
    { 
        id: 6, ageGroup: '儿童期', name: "第 6 关: 换牙期牙龈微环境", 
        enemyCount: 25, enemyHp: 70, rewardNut: 38, baseHp: 10,
        allowedEnemies: ['streptococcus', 'rotavirus'] 
    },
    { 
        id: 7, ageGroup: '儿童期', name: "第 7 关: 呼吸道黏膜防御战", 
        enemyCount: 28, enemyHp: 80, rewardNut: 42, baseHp: 8,
        allowedEnemies: ['rhinovirus', 'mycoplasma'] 
    },
    { 
        id: 8, ageGroup: '儿童期', name: "第 8 关: 儿童期淋巴结总动员", 
        enemyCount: 30, enemyHp: 92, rewardNut: 45, baseHp: 8,
        allowedEnemies: ['influenza', 'streptococcus', 'mycoplasma'] 
    },

    // --- 青少年期 (9-12关) ---
    { 
        id: 9, ageGroup: '青少年', name: "第 9 关: 青春期皮脂腺突围", 
        enemyCount: 33, enemyHp: 105, rewardNut: 48, baseHp: 8,
        allowedEnemies: ['rhinovirus', 'rotavirus'] 
    },
    { 
        id: 10, ageGroup: '青少年', name: "第 10 关: 剧烈运动代谢抗压", 
        enemyCount: 36, enemyHp: 120, rewardNut: 52, baseHp: 8,
        allowedEnemies: ['influenza', 'streptococcus'] 
    },
    { 
        id: 11, ageGroup: '青少年', name: "第 11 关: 免疫系统适应性特训", 
        enemyCount: 40, enemyHp: 135, rewardNut: 55, baseHp: 8,
        allowedEnemies: ['mycoplasma', 'tubercle'] 
    },
    { 
        id: 12, ageGroup: '青少年', name: "第 12 关: 青少年期核心防线考验", 
        enemyCount: 44, enemyHp: 150, rewardNut: 60, baseHp: 6,
        allowedEnemies: ['streptococcus', 'hepatitisBoss'] 
    },

    // --- 成年期 (13-16关) ---
    { 
        id: 13, ageGroup: '成年期', name: "第 13 关: 职场高压微环境", 
        enemyCount: 48, enemyHp: 170, rewardNut: 65, baseHp: 6,
        allowedEnemies: ['rhinovirus', 'mycoplasma', 'tubercle'] 
    },
    { 
        id: 14, ageGroup: '成年期', name: "第 14 关: 熬夜免疫力低谷突袭", 
        enemyCount: 52, enemyHp: 190, rewardNut: 70, baseHp: 6,
        allowedEnemies: ['influenza', 'rotavirus', 'streptococcus'] 
    },
    { 
        id: 15, ageGroup: '成年期', name: "第 15 关: 肝脏解毒与代谢重压", 
        enemyCount: 56, enemyHp: 210, rewardNut: 75, baseHp: 6,
        allowedEnemies: ['tubercle', 'hepatitisBoss'] 
    },
    { 
        id: 16, ageGroup: '成年期', name: "第 16 关: 成年期全身免疫大交锋", 
        enemyCount: 60, enemyHp: 235, rewardNut: 80, baseHp: 5,
        allowedEnemies: ['influenza', 'rhinovirus', 'streptococcus', 'mycoplasma'] 
    },

    // --- 老年期 (17-20关) ---
    { 
        id: 17, ageGroup: '老年期', name: "第 17 关: 胸腺自然退化期防线", 
        enemyCount: 65, enemyHp: 260, rewardNut: 85, baseHp: 5,
        allowedEnemies: ['streptococcus', 'tubercle'] 
    },
    { 
        id: 18, ageGroup: '老年期', name: "第 18 关: 微循环减缓与慢性侵蚀", 
        enemyCount: 70, enemyHp: 290, rewardNut: 90, baseHp: 5,
        allowedEnemies: ['rhinovirus', 'mycoplasma', 'tubercle'] 
    },
    { 
        id: 19, ageGroup: '老年期', name: "第 19 关: 晚年机体全面告急", 
        enemyCount: 75, enemyHp: 320, rewardNut: 95, baseHp: 5,
        allowedEnemies: ['influenza', 'streptococcus', 'hepatitisBoss'] 
    },
    { 
        id: 20, ageGroup: '老年期', name: "第 20 关: 百岁长寿终极免疫决战", 
        enemyCount: 85, enemyHp: 360, rewardNut: 150, baseHp: 4,
        allowedEnemies: ['influenza', 'rhinovirus', 'streptococcus', 'mycoplasma', 'tubercle', 'hepatitisBoss'] 
    }
];
