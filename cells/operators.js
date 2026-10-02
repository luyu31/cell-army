// cells/operators.js - 专门管理所有免疫细胞干员
const ImmuneOperators = [
    { id: 'neutrophil', name: "中性粒细胞", cost: 4, maxCount: 6, atk: 14, desc: "前方2格急性穿透" },
    { id: 'rbc', name: "红细胞", cost: 3, maxCount: 8, atk: 8, desc: "前方1格，长寿稳固" },
    { id: 'macrophage', name: "巨噬细胞", cost: 8, maxCount: 4, atk: 32, desc: "十字广域大范围吞噬" },
    { id: 'tcell', name: "T淋巴细胞", cost: 10, maxCount: 3, atk: 28, desc: "周围3x3范围群攻" }
];
