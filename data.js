// data.js - 15关生命周期关卡与10种差异化病原体配置

// 1. 病原体（敌人）差异化类型与强度配置
const EnemyTypes = {
    influenza: {
        id: 'influenza',
        name: "流感病毒",
        color: '#e74c3c',
        shape: 'circle',
        hpMult: 1.0,
        speedMult: 1.0,
        size: 14,
        damageReduction: 0,
        evasion: 0,
        ability: 'none',
        isBacteria: false,
        desc: "标准流感，成群出现无特殊能力"
    },
    rhinovirus: {
        id: 'rhinovirus',
        name: "鼻病毒",
        color: '#f1c40f',
        shape: 'diamond',
        hpMult: 0.7,
        speedMult: 1.7,
        size: 12,
        damageReduction: 0,
        evasion: 0.2,
        ability: 'none',
        isBacteria: false,
        desc: "速度极快，20%概率闪避攻击"
    },
    streptococcus: {
        id: 'streptococcus',
        name: "链球菌",
        color: '#9b59b6',
        shape: 'chain',
        hpMult: 2.0,
        speedMult: 0.5,
        size: 16,
        damageReduction: 0.3,
        evasion: 0,
        ability: 'corrode',
        isBacteria: true,
        desc: "30%减伤，腐蚀免疫细胞(3倍损耗)"
    },
    mycoplasma: {
        id: 'mycoplasma',
        name: "肺炎支原体",
        color: '#e67e22',
        shape: 'blob',
        hpMult: 1.5,
        speedMult: 0.7,
        size: 15,
        damageReduction: 0.1,
        evasion: 0,
        ability: 'toxin',
        isBacteria: true,
        desc: "释放毒素持续损伤周围细胞"
    },
    rotavirus: {
        id: 'rotavirus',
        name: "轮状病毒",
        color: '#1abc9c',
        shape: 'gear',
        hpMult: 1.0,
        speedMult: 1.1,
        size: 13,
        damageReduction: 0,
        evasion: 0,
        ability: 'split',
        isBacteria: false,
        desc: "死亡时分裂为2个小型子体"
    },
    tubercle: {
        id: 'tubercle',
        name: "结核杆菌",
        color: '#34495e',
        shape: 'rod',
        hpMult: 3.0,
        speedMult: 0.4,
        size: 18,
        damageReduction: 0.5,
        evasion: 0,
        ability: 'regen',
        isBacteria: true,
        desc: "50%减伤，持续自愈+6HP/秒"
    },
    coronavirus: {
        id: 'coronavirus',
        name: "冠状病毒",
        color: '#e84393',
        shape: 'spike',
        hpMult: 1.8,
        speedMult: 0.8,
        size: 16,
        damageReduction: 0.15,
        evasion: 0,
        ability: 'infect',
        isBacteria: false,
        desc: "感染免疫细胞使其3秒内瘫痪"
    },
    ecoli: {
        id: 'ecoli',
        name: "大肠杆菌",
        color: '#2ecc71',
        shape: 'rod',
        hpMult: 1.3,
        speedMult: 0.9,
        size: 14,
        damageReduction: 0.1,
        evasion: 0,
        ability: 'toxin',
        isBacteria: true,
        desc: "分泌肠毒素腐蚀周围免疫细胞"
    },
    staph: {
        id: 'staph',
        name: "金黄色葡萄球菌",
        color: '#f39c12',
        shape: 'cluster',
        hpMult: 1.6,
        speedMult: 0.6,
        size: 15,
        damageReduction: 0.2,
        evasion: 0,
        ability: 'death_toxin',
        isBacteria: true,
        desc: "20%减伤，死亡时释放毒素爆发"
    },
    hepatitisBoss: {
        id: 'hepatitisBoss',
        name: "核心变异Boss",
        color: '#c0392b',
        shape: 'boss',
        hpMult: 5.0,
        speedMult: 0.35,
        size: 22,
        damageReduction: 0.3,
        evasion: 0,
        ability: 'spawn',
        isBacteria: false,
        desc: "Boss级，定期召唤流感子体(最多3次)"
    }
};

// 2. 15个完整生命周期关卡配置
const GameLevels = [
    // --- 幼儿期 (1-3关) ---
    {
        id: 1, ageGroup: '幼儿期', name: "第1关: 脐带残端初阶防线",
        enemyCount: 8, enemyHp: 25, rewardNut: 20, baseHp: 12,
        allowedEnemies: ['influenza']
    },
    {
        id: 2, ageGroup: '幼儿期', name: "第2关: 乳牙期微循环突袭",
        enemyCount: 10, enemyHp: 35, rewardNut: 25, baseHp: 12,
        allowedEnemies: ['influenza', 'rhinovirus']
    },
    {
        id: 3, ageGroup: '幼儿期', name: "第3关: 幼儿肠道菌群建立",
        enemyCount: 12, enemyHp: 42, rewardNut: 28, baseHp: 12,
        allowedEnemies: ['rotavirus', 'ecoli']
    },

    // --- 儿童期 (4-6关) ---
    {
        id: 4, ageGroup: '儿童期', name: "第4关: 扁桃体初战链球菌",
        enemyCount: 14, enemyHp: 50, rewardNut: 30, baseHp: 10,
        allowedEnemies: ['influenza', 'streptococcus']
    },
    {
        id: 5, ageGroup: '儿童期', name: "第5关: 校园流感大暴发",
        enemyCount: 16, enemyHp: 60, rewardNut: 35, baseHp: 10,
        allowedEnemies: ['influenza', 'rhinovirus', 'rotavirus']
    },
    {
        id: 6, ageGroup: '儿童期', name: "第6关: 呼吸道黏膜防御战",
        enemyCount: 18, enemyHp: 72, rewardNut: 38, baseHp: 10,
        allowedEnemies: ['rhinovirus', 'mycoplasma']
    },

    // --- 青少年期 (7-9关) ---
    {
        id: 7, ageGroup: '青少年', name: "第7关: 青春期皮脂腺突围",
        enemyCount: 20, enemyHp: 85, rewardNut: 42, baseHp: 8,
        allowedEnemies: ['staph', 'streptococcus']
    },
    {
        id: 8, ageGroup: '青少年', name: "第8关: 淋巴结总动员",
        enemyCount: 22, enemyHp: 100, rewardNut: 45, baseHp: 8,
        allowedEnemies: ['influenza', 'streptococcus', 'mycoplasma', 'ecoli']
    },
    {
        id: 9, ageGroup: '青少年', name: "第9关: 免疫特训场",
        enemyCount: 24, enemyHp: 115, rewardNut: 50, baseHp: 8,
        allowedEnemies: ['rotavirus', 'tubercle', 'coronavirus']
    },

    // --- 成年期 (10-12关) ---
    {
        id: 10, ageGroup: '成年期', name: "第10关: 职场高压微环境",
        enemyCount: 26, enemyHp: 135, rewardNut: 55, baseHp: 6,
        allowedEnemies: ['rhinovirus', 'mycoplasma', 'tubercle']
    },
    {
        id: 11, ageGroup: '成年期', name: "第11关: 熬夜免疫低谷突袭",
        enemyCount: 28, enemyHp: 155, rewardNut: 60, baseHp: 6,
        allowedEnemies: ['influenza', 'coronavirus', 'staph']
    },
    {
        id: 12, ageGroup: '成年期', name: "第12关: 肝脏解毒重压区",
        enemyCount: 30, enemyHp: 180, rewardNut: 65, baseHp: 6,
        allowedEnemies: ['tubercle', 'hepatitisBoss']
    },

    // --- 老年期 (13-15关) ---
    {
        id: 13, ageGroup: '老年期', name: "第13关: 胸腺退化期防线",
        enemyCount: 32, enemyHp: 210, rewardNut: 75, baseHp: 5,
        allowedEnemies: ['streptococcus', 'tubercle', 'coronavirus']
    },
    {
        id: 14, ageGroup: '老年期', name: "第14关: 慢性侵蚀全面告急",
        enemyCount: 35, enemyHp: 240, rewardNut: 85, baseHp: 5,
        allowedEnemies: ['mycoplasma', 'tubercle', 'staph', 'ecoli']
    },
    {
        id: 15, ageGroup: '老年期', name: "第15关: 终极免疫决战",
        enemyCount: 40, enemyHp: 280, rewardNut: 120, baseHp: 4,
        allowedEnemies: ['influenza', 'streptococcus', 'coronavirus', 'tubercle', 'hepatitisBoss']
    }
];
