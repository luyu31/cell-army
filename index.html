<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>细胞防线 - 明日方舟风塔防</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; -webkit-tap-highlight-color: transparent; }
        body { background-color: #1a1a1a; display: flex; justify-content: center; align-items: center; height: 100vh; color: #d4d4d4; overflow: hidden; }
        
        /* 游戏模拟手机外壳 */
        .phone-case {
            width: 100%; max-width: 410px; height: 100%; max-height: 840px;
            background: #1e1e24; display: flex; flex-direction: column; overflow: hidden; position: relative;
        }
        @media(min-width: 450px) {
            .phone-case { border-radius: 40px; border: 10px solid #33333d; box-shadow: 0 25px 50px rgba(0,0,0,0.6); height: 800px; }
        }

        /* 顶部状态与资源栏 */
        .top-bar { background: #252530; padding: 12px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #383848; font-size: 13px; }
        .res-badge { background: #2d2d3b; padding: 4px 10px; border-radius: 12px; color: #4facfe; font-weight: bold; border: 1px solid #3d3d52; }
        .hp-badge { color: #ff5252; font-weight: bold; }

        /* 屏幕内容区 */
        .screen-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; position: relative; background: #16161a; }
        .page { display: none; flex: 1; flex-direction: column; overflow-y: auto; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #16161a; }
        .page.active { display: flex; }

        /* 1. 战场主界面 */
        .battle-screen { display: flex; flex-direction: column; height: 100%; }
        .canvas-container { flex: 1; background: #121216; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden; }
        canvas { background: #1a1a22; border-bottom: 2px solid #2d2d3b; }

        /* 下方干员选择与操作栏 */
        .operator-dock { background: #22222c; padding: 12px; display: flex; flex-direction: column; gap: 10px; border-top: 1px solid #333342; }
        .operator-list { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 4px; }
        .operator-card {
            min-width: 75px; background: #2b2b38; border: 2px solid #3d3d52; border-radius: 12px;
            padding: 8px; text-align: center; cursor: pointer; transition: all 0.2s; position: relative;
        }
        .operator-card.selected { border-color: #4facfe; background: #283447; }
        .operator-card .cost { font-size: 11px; color: #ffb142; margin-top: 2px; }
        .operator-card .name { font-size: 12px; color: #fff; font-weight: bold; }

        .battle-controls { display: flex; justify-content: space-between; align-items: center; }
        .btn-primary { background: #4facfe; color: #fff; border: none; border-radius: 16px; padding: 8px 16px; font-size: 13px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(79, 172, 254, 0.3); }
        .btn-secondary { background: #333342; color: #ccc; border: none; border-radius: 16px; padding: 8px 14px; font-size: 12px; cursor: pointer; }

        /* 底部导航栏 */
        .nav-bar { display: flex; background: #1c1c24; border-top: 1px solid #2c2c38; height: 56px; }
        .nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #888; font-size: 11px; cursor: pointer; }
        .nav-item.active { color: #4facfe; }
        .nav-icon { font-size: 18px; margin-bottom: 2px; }

        /* 档案/设置页通用样式 */
        .sub-page { padding: 15px; display: flex; flex-direction: column; gap: 15px; }
        .card-box { background: #22222c; border: 1px solid #333342; border-radius: 16px; padding: 15px; }
        .card-title { font-size: 14px; font-weight: bold; color: #4facfe; margin-bottom: 10px; }
        input, textarea { width: 100%; background: #181820; border: 1px solid #333342; border-radius: 10px; padding: 10px; color: #fff; font-size: 12px; outline: none; margin-bottom: 8px; }
    </style>
</head>
<body>
<div class="phone-case">
    <!-- 顶部状态栏 -->
    <div class="top-bar">
        <div><span class="hp-badge">❤️ 基地生命: <span id="baseHp">10</span></span></div>
        <div>波次: <span id="waveNum">1</span>/5</div>
        <div class="res-badge">⚡ ATP: <span id="atpVal">12</span></div>
    </div>

    <div class="screen-content">
        <!-- 战场页 -->
        <div id="page-battle" class="page active battle-screen">
            <div class="canvas-container" id="canvasBox">
                <canvas id="gameCanvas" width="380" height="340"></canvas>
            </div>
            
            <div class="operator-dock">
                <div style="font-size: 11px; color: #88; display:flex; justify-content:space-between;">
                    <span>请选择干员并在上方网格点击部署：</span>
                    <span id="tipMsg" style="color:#ffb142;">点击卡片以选择</span>
                </div>
                <div class="operator-list" id="operatorList">
                    <!-- 动态生成干员 -->
                </div>
                <div class="battle-controls">
                    <button class="btn-secondary" onclick="resetGame()">重置关卡</button>
                    <button class="btn-primary" id="startWaveBtn" onclick="startWave()">🚀 开始本波进攻</button>
                </div>
            </div>
        </div>

        <!-- 干员/编队页 -->
        <div id="page-roster" class="page sub-page">
            <div class="card-box">
                <div class="card-title">🛡️ 细胞卫士名册</div>
                <div id="rosterList" style="display:flex; flex-direction:column; gap:8px;"></div>
            </div>
            <div class="card-box">
                <div class="card-title">➕ 添加新干员/细胞字卡</div>
                <input type="text" id="newOpName" placeholder="干员名称（如：巨噬细胞）">
                <input type="number" id="newOpCost" placeholder="部署ATP消耗（如：6）">
                <input type="text" id="newOpDesc" placeholder="干员职业/特性描述">
                <button class="btn-primary" onclick="addNewOperator()" style="width:100%;">保存并加入编队</button>
            </div>
        </div>

        <!-- 关卡/剧情页 -->
        <div id="page-story" class="page sub-page">
            <div class="card-box">
                <div class="card-title">📖 作战记录与关卡</div>
                <div style="font-size: 13px; color: #ccc; line-height: 1.5;">
                    当前作战：<b>0-1 微观防线突围</b><br>
                    敌人目标：清除所有变异病原体，保护细胞核核心不被侵蚀。<br><br>
                    “在看不见的微观战场里，每一次ATP的跳动，都是生命的交响。”
                </div>
            </div>
        </div>

        <!-- 设置页 -->
        <div id="page-settings" class="page sub-page">
            <div class="card-box">
                <div class="card-title">⚙️️ 游戏设置</div>
                <div style="font-size: 12px; color: #aaa; margin-bottom: 10px;">你可以随时调整游戏平衡或清除自定义数据：</div>
                <button class="btn-secondary" onclick="localStorage.clear(); location.reload();" style="width:100%; color:#ff5252;">恢复默认数据</button>
            </div>
        </div>
    </div>

    <!-- 底部导航栏 -->
    <div class="nav-bar">
        <div class="nav-item active" onclick="switchTab('battle', this)">
            <div class="nav-icon">⚔️</div><span>作战</span>
        </div>
        <div class="nav-item" onclick="switchTab('roster', this)">
            <div class="nav-icon">🛡️</div><span>干员</span>
        </div>
        <div class="nav-item" onclick="switchTab('story', this)">
            <div class="nav-icon">📖</div><span>档案</span>
        </div>
        <div class="nav-item" onclick="switchTab('settings', this)">
            <div class="nav-icon">⚙️</div><span>设置</span>
        </div>
    </div>
</div>

<script>
    // 基础数据与本地缓存
    let operators = JSON.parse(localStorage.getItem('td_operators')) || [
        { id: 1, name: "T细胞", cost: 5, atk: 12, range: 80, desc: "单体物理输出" },
        { id: 2, name: "巨噬细胞", cost: 8, atk: 8, range: 60, desc: "高阻挡/范围清理" },
        { id: 3, name: "抗体狙击", cost: 6, atk: 15, range: 120, desc: "远程高伤狙击" }
    ];

    let atp = 12;
    let baseHp = 10;
    let wave = 1;
    let selectedOp = null;

    // Canvas 战场初始化
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // 简单网格地图定义 (5行 8列)
    const cols = 8;
    const rows = 5;
    const tileSize = 45;
    let grid = Array(rows).fill().map(() => Array(cols).fill(null)); // 存储放置的干员
    let enemies = [];
    let bullets = [];
    let gameInterval = null;
    let waveInProgress = false;

    // 初始化干员选择栏
    function renderOperators() {
        const list = document.getElementById('operatorList');
        list.innerHTML = operators.map((op, idx) => `
            <div class="operator-card ${selectedOp === op ? 'selected' : ''}" onclick="selectOperator(${idx})">
                <div class="name">${op.name}</div>
                <div class="cost">⚡ ${op.cost}</div>
            </div>
        `).join('');

        // 同时渲染编队页
        const rosterList = document.getElementById('rosterList');
        if(rosterList) {
            rosterList.innerHTML = operators.map(op => `
                <div style="background:#181820; padding:8px 12px; border-radius:10px; display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <div><b>${op.name}</b> <span style="color:#888;">(${op.desc})</span></div>
                    <div style="color:#ffb142;">消耗: ${op.cost}</div>
                </div>
            `).join('');
        }
    }

    function selectOperator(idx) {
        selectedOp = operators[idx];
        document.getElementById('tipMsg').innerText = `已选: ${selectedOp.name}`;
        renderOperators();
    }

    // 切换底部Tab
    function switchTab(tabName, el) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('page-' + tabName).classList.add('active');
        el.classList.add('active');
    }

    // Canvas 点击放置干员
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const c = Math.floor(x / tileSize);
        const r = Math.floor(y / tileSize);

        if(r >= 0 && r < rows && c >= 0 && c < cols) {
            if(!selectedOp) {
                alert("请先在下方选择一个干员！");
                return;
            }
            if(atp < selectedOp.cost) {
                alert("ATP不足，无法部署！");
                return;
            }
            if(grid[r][c] !== null) {
                alert("该网格已经有干员了！");
                return;
            }

            // 扣费并放置
            atp -= selectedOp.cost;
            grid[r][c] = { ...selectedOp, x: c * tileSize + tileSize/2, y: r * tileSize + tileSize/2 };
            updateUI();
        }
    });

    // 开始本波敌人进攻
    function startWave() {
        if(waveInProgress) return;
        waveInProgress = true;
        document.getElementById('startWaveBtn').innerText = "战斗中...";
        
        let spawned = 0;
        let totalEnemies = 3 + wave * 2;

        let spawnTimer = setInterval(() => {
            if(spawned < totalEnemies) {
                // 生成病原体敌人：从右向左走
                enemies.push({
                    x: cols * tileSize,
                    y: Math.floor(Math.random() * rows) * tileSize + tileSize/2,
                    hp: 30 + wave * 10,
                    maxHp: 30 + wave * 10,
                    speed: 0.8 + wave * 0.1,
                    atk: 1
                });
                spawned++;
            } else {
                clearInterval(spawnTimer);
            }
        }, 1500);
    }

    // 游戏主循环
    function updateGame() {
        // 1. 自动回复ATP
        if(Math.random() < 0.02) {
            atp = Math.min(30, atp + 1);
            updateUI();
        }

        // 2. 敌人移动与逻辑
        for(let i = enemies.length - 1; i >= 0; i--) {
            let en = enemies[i];
            en.x -= en.speed;

            // 到达左侧基底
            if(en.x <= 0) {
                baseHp -= en.atk;
                enemies.splice(i, 1);
                updateUI();
                if(baseHp <= 0) {
                    alert("防线被攻破！游戏结束。");
                    resetGame();
                }
                continue;
            }

            // 干员攻击判定
            for(let r = 0; r < rows; r++) {
                for(let c = 0; c < cols; c++) {
                    let op = grid[r][c];
                    if(op) {
                        let opX = c * tileSize + tileSize/2;
                        let opY = r * tileSize + tileSize/2;
                        let dist = Math.hypot(en.x - opX, en.y - opY);
                        if(dist <= op.range) {
                            en.hp -= 0.5; // 攻击伤害
                        }
                    }
                }
            }

            if(en.hp <= 0) {
                enemies.splice(i, 1);
                atp += 2; // 击杀奖励ATP
                updateUI();
            }
        }

        // 检查波次胜利
        if(waveInProgress && enemies.length === 0) {
            // 简单判断：如果生成完了且全灭
            // 这里为了简化，过一波自动加波次
        }

        drawGame();
    }

    // 渲染画板
    function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制网格线
        ctx.strokeStyle = '#252533';
        ctx.lineWidth = 1;
        for(let r = 0; r <= rows; r++) {
            ctx.beginPath(); ctx.moveTo(0, r * tileSize); ctx.lineTo(cols * tileSize, r * tileSize); ctx.stroke();
        }
        for(let c = 0; c <= cols; c++) {
            ctx.beginPath(); ctx.moveTo(c * tileSize, 0); ctx.lineTo(c * tileSize, rows * tileSize); ctx.stroke();
        }

        // 绘制已部署干员
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                let op = grid[r][c];
                if(op) {
                    ctx.fillStyle = '#4facfe';
                    ctx.beginPath();
                    ctx.arc(c * tileSize + tileSize/2, r * tileSize + tileSize/2, 14, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#fff';
                    ctx.font = '10px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(op.name.substring(0, 2), c * tileSize + tileSize/2, r * tileSize + tileSize/2 + 4);
                }
            }
        }

        // 绘制敌人（病原体）
        for(let en of enemies) {
            ctx.fillStyle = '#ff5252';
            ctx.beginPath();
            ctx.arc(en.x, en.y, 10, 0, Math.PI * 2);
            ctx.fill();

            // 血条
            ctx.fillStyle = '#333';
            ctx.fillRect(en.x - 12, en.y - 18, 24, 4);
            ctx.fillStyle = '#4cd137';
            ctx.fillRect(en.x - 12, en.y - 18, 24 * (en.hp / en.maxHp), 4);
        }
    }

    function updateUI() {
        document.getElementById('atpVal').innerText = atp;
        document.getElementById('baseHp').innerText = baseHp;
        document.getElementById('waveNum').innerText = wave;
    }

    function resetGame() {
        grid = Array(rows).fill().map(() => Array(cols).fill(null));
        enemies = [];
        atp = 12;
        baseHp = 10;
        wave = 1;
        waveInProgress = false;
        document.getElementById('startWaveBtn').innerText = "🚀 开始本波进攻";
        updateUI();
    }

    function addNewOperator() {
        const name = document.getElementById('newOpName').value.trim();
        const cost = parseInt(document.getElementById('newOpCost').value);
        const desc = document.getElementById('newOpDesc').value.trim();
        if(!name || isNaN(cost)) {
            alert("请完整填写干员名称和ATP消耗！");
            return;
        }
        operators.push({ id: operators.length + 1, name, cost, atk: 10, range: 80, desc: desc || "自定义干员" });
        localStorage.setItem('td_operators', JSON.stringify(operators));
        document.getElementById('newOpName').value = '';
        document.getElementById('newOpCost').value = '';
        document.getElementById('newOpDesc').value = '';
        renderOperators();
        alert("干员创建成功已加入编队！");
    }

    renderOperators();
    updateUI();
    setInterval(updateGame, 50); // 20 FPS 游戏循环
</script>
</body>
</html>
