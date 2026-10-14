// cells/operators.js - 免疫细胞干员配置（10种完整免疫系统配置）
const ImmuneOperators = [
    {
        id: 'neutrophil',
        name: "中性粒细胞",
        unlockLevel: 1,
        cost: 4,
        maxCount: 6,
        rangeType: 'front1',     // 正前方紧邻1格
        atk: 10,
        maxLifeSec: 10,          // 短命速攻型
        desc: "前方1格，急性首发响应"
    },
    {
        id: 'rbc',
        name: "红细胞",
        unlockLevel: 1,
        cost: 3,
        maxCount: 8,
        rangeType: 'front1',     // 正前方紧邻1格
        atk: 5,
        maxLifeSec: 25,          // 长寿肉盾型
        desc: "前方1格，长寿抗伤肉盾"
    },
    {
        id: 'macrophage',
        name: "巨噬细胞",
        unlockLevel: 1,
        cost: 8,
        maxCount: 4,
        rangeType: 'cross2',     // 十字2格广域
        atk: 25,
        maxLifeSec: 15,          // 中等寿命
        desc: "十字2格广域吞噬"
    },
    {
        id: 'lysozyme',
        name: "溶菌酶分泌细胞",
        unlockLevel: 2,
        cost: 14,
        maxCount: 2,
        rangeType: 'front2',     // 前方紧邻2格
        atk: 40,
        maxLifeSec: 8,           // 短命高伤，对细菌+50%
        desc: "前方2格，专克细菌(+50%)"
    },
    {
        id: 'tcell',
        name: "T淋巴细胞",
        unlockLevel: 3,
        cost: 10,
        maxCount: 3,
        rangeType: 'circle1',    // 周围3x3
        atk: 18,
        maxLifeSec: 12,          // 中等寿命
        desc: "周围3x3协同群攻"
    },
    {
        id: 'nkcell',
        name: "NK杀手细胞",
        unlockLevel: 4,
        cost: 12,
        maxCount: 2,
        rangeType: 'cross3',     // 超大十字3格
        atk: 35,
        maxLifeSec: 10,          // 短命高伤
        desc: "超大十字广谱猎杀"
    },
    {
        id: 'bcell',
        name: "B淋巴细胞",
        unlockLevel: 5,
        cost: 11,
        maxCount: 3,
        rangeType: 'allRow',     // 整行远程
        atk: 12,
        maxLifeSec: 20,          // 较长寿
        desc: "整行抗体远程打击"
    },
    {
        id: 'dendritic',
        name: "树突状细胞",
        unlockLevel: 6,
        cost: 9,
        maxCount: 3,
        rangeType: 'buff1',      // 周围3x3增益（不攻击）
        atk: 0,                  // 无攻击力，纯增益
        maxLifeSec: 18,          // 中等偏长寿命
        desc: "激活周围细胞+50%攻击"
    },
    {
        id: 'eosinophil',
        name: "嗜酸性粒细胞",
        unlockLevel: 7,
        cost: 8,
        maxCount: 4,
        rangeType: 'front3',     // 前方3格远程
        atk: 20,
        maxLifeSec: 14,          // 中等寿命
        desc: "前方3格远程穿刺"
    },
    {
        id: 'memoryT',
        name: "记忆T细胞",
        unlockLevel: 8,
        cost: 15,
        maxCount: 2,
        rangeType: 'circle2',    // 周围5x5
        atk: 8,
        maxLifeSec: 40,          // 超长寿命（记忆细胞特性）
        desc: "5x5超长寿命(40秒)"
    }
];

// 攻击范围类型说明：
// front1  - 正前方1格
// front2  - 正前方2格
// front3  - 正前方3格
// cross2  - 十字2格（上下左右各延伸2格）
// cross3  - 十字3格（上下左右各延伸3格）
// circle1 - 以自身为中心的3x3范围
// circle2 - 以自身为中心的5x5范围
// allRow  - 同行右侧所有格
// buff1   - 周围3x3范围（仅增益，不攻击）
