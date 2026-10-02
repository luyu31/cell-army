// cells/operators.js - 免疫细胞干员配置（平衡微调版）
const ImmuneOperators = [
    {
        id: 'neutrophil',
        name: "中性粒细胞",
        unlockLevel: 1,
        cost: 5,         // 稍微调高造价
        maxCount: 5,     // 限制最大部署数
        rangeType: 'front1', // 仅攻击正前方紧邻的1格
        atk: 9,          // 下调攻击力，避免过度秒怪
        maxLifeSec: 10,  // 寿命缩短，需要频繁补防
        desc: "正前方1格近战点射，消耗较快"
    },
    {
        id: 'rbc',
        name: "红细胞",
        unlockLevel: 1,
        cost: 3,
        maxCount: 7,
        rangeType: 'front1',
        atk: 4,          // 偏向坚固但输出较低
        maxLifeSec: 22,  // 较长寿命，用于卡位抗伤
        desc: "正前方1格，低攻击但较耐用"
    },
    {
        id: 'macrophage',
        name: "巨噬细胞",
        unlockLevel: 1,
        cost: 10,        // 高昂费用
        maxCount: 3,
        rangeType: 'cross1', // 从十字大范围缩小为紧邻的上下左右十字1格
        atk: 18,
        maxLifeSec: 14,
        desc: "十字相邻1格吞噬，攻坚主力"
    },
    {
        id: 'lysozyme',
        name: "溶菌酶分泌细胞",
        unlockLevel: 2,
        cost: 15,
        maxCount: 2,
        rangeType: 'front2', // 彻底取消整行秒杀，改为前方紧邻的2格范围
        atk: 25,
        maxLifeSec: 8,
        desc: "前方2格精准高伤，范围已大幅收窄"
    },
    {
        id: 'tcell',
        name: "T淋巴细胞",
        unlockLevel: 2,
        cost: 12,
        maxCount: 3,
        rangeType: 'circle1', // 周围 3x3 范围（以自身为中心的邻近一圈）
        atk: 12,
        maxLifeSec: 12,
        desc: "周围一圈小范围协同作战"
    }
];
