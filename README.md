# Choccy IDE Website

Choccy IDE 的官方网站，用于 GitHub Pages 部署。

## 部署步骤

1. 创建新的 GitHub 仓库（如 `choccy-ide-website`）

2. 将此文件夹内容推送到仓库：
   ```bash
   cd choccy-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/choccy-ide-website.git
   git push -u origin main
   ```

3. 在 GitHub 仓库设置中启用 Pages：
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

4. 等待几分钟后访问：`https://YOUR_USERNAME.github.io/choccy-ide-website/`

## 文件结构

```
choccy-website/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript
├── assets/
│   └── icon.png        # 应用图标
├── .nojekyll           # 禁用 Jekyll 处理
└── README.md           # 本文件
```

## 自定义

- 修改 `index.html` 中的下载链接指向实际的 APK 文件
- 替换 `assets/` 中的截图占位符为实际截图
- 更新联系方式和社交链接

## 添加截图

将应用截图放入 `assets/screenshots/` 文件夹，然后修改 `index.html` 中的截图部分：

```html
<div class="screenshot-item">
    <img src="assets/screenshots/editor.png" alt="代码编辑器">
</div>
```
