# -*- coding: utf-8 -*-
# 生成10个免疫细胞卡通SVG头像（离线内置，供APK离线使用）
# 风格：kawaii 卡通、扁平矢量、深色底圆，与游戏 UI 一致
import math, os

OUT = '/workspace/assets/avatars'
os.makedirs(OUT, exist_ok=True)

def svg(inner):
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">'
            '<circle cx="50" cy="50" r="49" fill="#22222e"/>'
            '<circle cx="50" cy="50" r="46" fill="#2a2a38"/>'
            + inner + '</svg>')

def face(cx, cy, mood='happy', s=1.0):
    p = []
    ex = 8 * s
    if mood == 'calm':
        # 弯月闭眼（慈祥/智慧）
        p.append('<path d="M%.1f %.1f q%.1f %.1f %.1f 0" stroke="#1a1a24" stroke-width="%.1f" fill="none" stroke-linecap="round"/>'
                 % (cx - ex, cy + 1, ex / 2, -3.5 * s, ex, 2.2 * s))
        p.append('<path d="M%.1f %.1f q%.1f %.1f %.1f 0" stroke="#1a1a24" stroke-width="%.1f" fill="none" stroke-linecap="round"/>'
                 % (cx + ex - ex, cy + 1, ex / 2, -3.5 * s, ex, 2.2 * s))
    else:
        for sx in (-1, 1):
            p.append('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="#1a1a24"/>'
                     % (cx + sx * ex, cy, 3.1 * s))
            p.append('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="#fff"/>'
                     % (cx + sx * ex - 1.1 * s, cy - 1.1 * s, 1.1 * s))
    # 微笑
    p.append('<path d="M%.1f %.1f q%.1f %.1f %.1f 0" stroke="#1a1a24" stroke-width="%.1f" fill="none" stroke-linecap="round"/>'
             % (cx - 5 * s, cy + 5 * s, 5 * s, 4.5 * s, 10 * s, 2.2 * s))
    # 腮红
    for sx in (-1, 1):
        p.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="#ff9eb5" opacity="0.55"/>'
                 % (cx + sx * 13 * s, cy + 4 * s, 2.8 * s, 1.6 * s))
    if mood == 'determined':
        p.append('<path d="M%.1f %.1f l%.1f %.1f M%.1f %.1f l%.1f %.1f" stroke="#1a1a24" stroke-width="1.8" stroke-linecap="round"/>'
                 % (cx - 11 * s, cy - 7 * s, 6 * s, 2.5 * s,
                    cx + 11 * s, cy - 7 * s, -6 * s, 2.5 * s))
    if mood == 'cool':
        p.append('<path d="M%.1f %.1f l%.1f %.1f M%.1f %.1f l%.1f %.1f" stroke="#1a1a24" stroke-width="1.8" stroke-linecap="round"/>'
                 % (cx - 11 * s, cy - 6 * s, 6 * s, -2 * s,
                    cx + 11 * s, cy - 6 * s, -6 * s, -2 * s))
    return ''.join(p)

def edge_receptors(cx, cy, r, color, angles):
    # 细胞边缘的Y形受体（T细胞/B细胞/NK细胞特征）
    out = []
    for a in angles:
        x = cx + r * math.cos(a)
        y = cy + r * math.sin(a)
        rot = math.degrees(a) + 90
        out.append('<g transform="translate(%.1f %.1f) rotate(%.0f)">'
                   '<path d="M0 0 v-5 M-3 -10 l3 5 l3 -5" stroke="%s" stroke-width="2" fill="none" stroke-linecap="round"/></g>'
                   % (x, y, rot, color))
    return ''.join(out)

def spikes(cx, cy, r_body, r_tip, color, n=8, off=math.pi / 8):
    # NK细胞表面尖刺
    out = []
    for i in range(n):
        a = i * (2 * math.pi / n) + off
        x1, y1 = cx + r_body * math.cos(a - 0.13), cy + r_body * math.sin(a - 0.13)
        x2, y2 = cx + r_tip * math.cos(a), cy + r_tip * math.sin(a)
        x3, y3 = cx + r_body * math.cos(a + 0.13), cy + r_body * math.sin(a + 0.13)
        out.append('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="%s"/>'
                   % (x1, y1, x2, y2, x3, y3, color))
    return ''.join(out)

def star5(cx, cy, r1, r2, color, rot=-90):
    pts = []
    for i in range(10):
        r = r1 if i % 2 == 0 else r2
        a = math.radians(rot + i * 36)
        pts.append('%.1f,%.1f' % (cx + r * math.cos(a), cy + r * math.sin(a)))
    return '<polygon points="%s" fill="%s"/>' % (' '.join(pts), color)

A = {}

# 1) 红细胞：亮红双凹圆盘（甜甜圈状中央淡染），无细胞核
A['rbc'] = svg(
    '<defs><radialGradient id="g" cx="50%" cy="50%" r="55%">'
    '<stop offset="0%" stop-color="#ffb3ab"/>'
    '<stop offset="45%" stop-color="#ef5350"/>'
    '<stop offset="100%" stop-color="#c62828"/></radialGradient></defs>'
    '<circle cx="50" cy="52" r="31" fill="url(#g)"/>'
    '<ellipse cx="50" cy="53" rx="15" ry="12" fill="#ff8a80" opacity="0.6"/>'
    + face(50, 50, 'happy', 0.95))

# 2) 中性粒细胞：淡紫色细胞+紫色三叶核+粉色颗粒，抛出绿色捕捉网
A['neutrophil'] = svg(
    '<circle cx="50" cy="52" r="29" fill="#ece4f9"/>'
    '<g fill="#d8a6e8" opacity="0.85">'
    '<circle cx="35" cy="44" r="2.1"/><circle cx="62" cy="39" r="2.1"/><circle cx="66" cy="53" r="2.1"/>'
    '<circle cx="31" cy="56" r="2.1"/><circle cx="58" cy="67" r="2.1"/><circle cx="41" cy="69" r="2.1"/></g>'
    '<g fill="#7e57c2">'
    '<circle cx="40" cy="63" r="7"/><circle cx="52" cy="67" r="7.5"/><circle cx="61" cy="59" r="6.5"/>'
    '<path d="M40 63 Q46 71 52 67 Q58 65 61 59" fill="none" stroke="#7e57c2" stroke-width="5"/></g>'
    '<g stroke="#66bb6a" stroke-width="1.5" fill="none" opacity="0.95">'
    '<path d="M71 27 h15 M71 33 h15 M71 39 h15 M75 23 v20 M81 23 v20 M87 23 v20"/></g>'
    + face(50, 44, 'determined', 0.9))

# 3) 巨噬细胞：大的青蓝色细胞+波浪皱褶边缘，正在吞噬紫色细菌
A['macrophage'] = svg(
    '<g fill="#4db6ac">'
    '<circle cx="50" cy="52" r="27"/>'
    '<circle cx="50" cy="26" r="7"/><circle cx="67" cy="31" r="7"/><circle cx="77" cy="47" r="6.5"/>'
    '<circle cx="75" cy="65" r="7"/><circle cx="61" cy="77" r="7"/><circle cx="42" cy="79" r="6.5"/>'
    '<circle cx="27" cy="71" r="7"/><circle cx="22" cy="53" r="6.5"/><circle cx="28" cy="35" r="7"/></g>'
    '<ellipse cx="50" cy="72" rx="8" ry="4.5" fill="#8e24aa"/>'
    '<path d="M42 70 h16 M45 66 l-2 3 M55 66 l2 3" stroke="#6a1b9a" stroke-width="1.5" fill="none"/>'
    + face(50, 48, 'happy', 1.1))

# 4) 溶菌酶分泌细胞：金黄色细胞，喷洒酶液滴溶解绿色细菌（水解肽聚糖）
A['lysozyme'] = svg(
    '<circle cx="50" cy="52" r="27" fill="#fdd835"/>'
    '<circle cx="41" cy="45" r="9" fill="#ffe680" opacity="0.7"/>'
    '<g fill="#ffe082"><circle cx="80" cy="40" r="2.5"/><circle cx="87" cy="48" r="2"/>'
    '<circle cx="82" cy="56" r="2.5"/><circle cx="88" cy="63" r="1.8"/></g>'
    '<g transform="rotate(20 80 70)"><rect x="74" y="68" width="12" height="5" rx="2.5" fill="#66bb6a"/>'
    '<path d="M76 70 l3 1.5 M80 72 l3 -1.5" stroke="#2e7d32" stroke-width="1.1" fill="none"/></g>'
    + face(50, 49, 'happy', 0.95))

# 5) T淋巴细胞：天蓝色小圆细胞+表面Y形T细胞受体，坚毅表情
A['tcell'] = svg(
    '<circle cx="50" cy="52" r="25" fill="#4fc3f7"/>'
    + edge_receptors(50, 52, 25, '#0277bd', [i * math.pi / 3 for i in range(6)])
    + face(50, 51, 'determined', 0.9))

# 6) NK自然杀伤细胞：大型深红色颗粒淋巴细胞+深紫杀伤颗粒+表面尖刺
A['nkcell'] = svg(
    spikes(50, 52, 27, 33, '#b71c1c', 8)
    + '<circle cx="50" cy="52" r="27" fill="#e53935"/>'
    '<g fill="#4a148c"><circle cx="40" cy="44" r="3"/><circle cx="60" cy="42" r="2.7"/>'
    '<circle cx="63" cy="60" r="3"/><circle cx="43" cy="64" r="2.6"/><circle cx="52" cy="68" r="2.4"/></g>'
    + face(50, 51, 'cool', 0.95))

# 7) B淋巴细胞：薄荷绿细胞+表面Y形抗体受体，举起发光Y形抗体
A['bcell'] = svg(
    '<circle cx="50" cy="52" r="26" fill="#8fdfb8"/>'
    + edge_receptors(50, 52, 26, '#2e7d32', [i * math.pi / 3 + math.pi / 6 for i in range(6)])
    + '<g transform="translate(77 32)">'
    '<circle r="10" fill="#fff59d" opacity="0.4"/>'
    '<path d="M0 8 v-6 M-5 -8 l5 5 l5 -5" stroke="#f9a825" stroke-width="3" fill="none" stroke-linecap="round"/></g>'
    + face(48, 51, 'happy', 0.9))

# 8) 树突状细胞：金黄色星状细胞+树枝状突起，智慧安详
_arms = []
for i in range(8):
    a = i * math.pi / 4 + math.pi / 8
    x1, y1 = 50 + 17 * math.cos(a), 52 + 17 * math.sin(a)
    x2, y2 = 50 + 34 * math.cos(a), 52 + 34 * math.sin(a)
    bx, by = 50 + 25 * math.cos(a), 52 + 25 * math.sin(a)
    ba = a + 0.7 if i % 2 == 0 else a - 0.7
    _arms.append('<path d="M%.1f %.1f L%.1f %.1f M%.1f %.1f l%.1f %.1f"/>'
                 % (x1, y1, x2, y2, bx, by, 8 * math.cos(ba), 8 * math.sin(ba)))
A['dendritic'] = svg(
    '<g stroke="#fbc02d" stroke-width="4" stroke-linecap="round" fill="none">'
    + ''.join(_arms) + '</g>'
    + '<circle cx="50" cy="52" r="19" fill="#fdd835"/>'
    + face(50, 51, 'calm', 0.85))

# 9) 嗜酸性粒细胞：珊瑚粉细胞+红橙颗粒+两叶核，瞄准蠕虫寄生虫（脱颗粒杀伤）
A['eosinophil'] = svg(
    '<circle cx="50" cy="52" r="27" fill="#ff8a80"/>'
    '<g fill="#ff5722"><circle cx="36" cy="42" r="2.3"/><circle cx="64" cy="40" r="2.3"/>'
    '<circle cx="33" cy="57" r="2.1"/><circle cx="67" cy="56" r="2.1"/><circle cx="45" cy="40" r="2"/></g>'
    '<g fill="#8e24aa"><circle cx="42" cy="65" r="6"/><circle cx="56" cy="67" r="6.5"/>'
    '<path d="M42 65 Q49 71 56 67" fill="none" stroke="#8e24aa" stroke-width="4.5"/></g>'
    '<path d="M72 22 q6 4 2 9 q-4 5 2 9" stroke="#f48fb1" stroke-width="4" fill="none" stroke-linecap="round"/>'
    '<circle cx="76" cy="21" r="1.8" fill="#4a148c"/>'
    + face(50, 48, 'determined', 0.9))

# 10) 记忆T细胞：青色淋巴细胞+Y形受体+胸前金色星章，沉着老兵
A['memoryT'] = svg(
    '<circle cx="50" cy="52" r="25" fill="#26a69a"/>'
    + edge_receptors(50, 52, 25, '#00695c', [i * math.pi / 3 for i in range(6)])
    + '<circle cx="37" cy="65" r="9" fill="#fff59d" opacity="0.35"/>'
    + star5(37, 65, 7.5, 3.2, '#fdd835')
    + face(52, 49, 'calm', 0.9))

for k, v in A.items():
    path = os.path.join(OUT, k + '.svg')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(v)
    print('OK', path, len(v.encode('utf-8')), 'bytes')
print('DONE', len(A), 'avatars')
