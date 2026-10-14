# -*- coding: utf-8 -*-
# 用 Pillow 生成启动图标：深色圆角底 + 红细胞卡通形象（呼应游戏主题）
from PIL import Image, ImageDraw
import os

S = 512
img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
d.rounded_rectangle([16, 16, S - 16, S - 16], radius=96,
                    fill=(26, 26, 36, 255), outline=(80, 80, 110, 255), width=8)
cx, cy, R = S // 2, S // 2 + 16, 150
d.ellipse([cx - R, cy - R, cx + R, cy + R], fill=(229, 57, 53, 255))
d.ellipse([cx - 72, cy - 60, cx + 72, cy + 60], fill=(255, 138, 128, 255))
for ex in (-48, 48):
    d.ellipse([cx + ex - 17, cy - 22 - 17, cx + ex + 17, cy - 22 + 17], fill=(26, 26, 36, 255))
    d.ellipse([cx + ex - 11, cy - 33, cx + ex - 1, cy - 23], fill=(255, 255, 255, 255))
d.arc([cx - 48, cy - 20, cx + 48, cy + 60], 20, 160, fill=(26, 26, 36, 255), width=11)
d.ellipse([cx - 100, cy + 18, cx - 58, cy + 48], fill=(255, 158, 181, 170))
d.ellipse([cx + 58, cy + 18, cx + 100, cy + 48], fill=(255, 158, 181, 170))

res = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'res')
for dpi, size in [('mdpi', 48), ('hdpi', 72), ('xhdpi', 96), ('xxhdpi', 144), ('xxxhdpi', 192)]:
    folder = os.path.join(res, 'mipmap-' + dpi)
    os.makedirs(folder, exist_ok=True)
    img.resize((size, size), Image.LANCZOS).save(os.path.join(folder, 'ic_launcher.png'))
    print('icon', dpi, size)
print('ICON DONE')
