# my-react-app

使用 React及Vite 建立的學習demo畫面。

## 技術棧

- React
- Vite
- Javascript
- React Router
- Tailwind CSS

## 本機啟動

```bash
# 安裝套件
npm install

# 啟動伺服器
npm run dev
```

## 線上網址

https://my-react-app-murex-seven.vercel.app/

## 頁面路由

| 路徑        | 說明     |
| ----------- | -------- |
| /           | 首頁     |
| /about      | 關於我   |
| /posts      | 文章列表 |
| /posts/[id] | 文章詳情 |

## 環境變數.env

| 變數名稱     | 說明                                                      |
| ------------ | --------------------------------------------------------- |
| VITE_API_URL | API 的 domain(練習中使用了jsonplaceholder的假資料測試API) |
