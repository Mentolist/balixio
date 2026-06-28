# BaliXiO — международная цифровая экосистема

Статический сайт, подготовленный для публикации на GitHub Pages.

## Структура

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── .gitkeep
├── .gitignore
└── README.md
```

## Как загрузить на GitHub

1. Создайте новый репозиторий на GitHub.
2. Загрузите содержимое этой папки в репозиторий.
3. Для публикации через GitHub Pages откройте **Settings → Pages**.
4. В разделе **Build and deployment** выберите:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/** root
5. Сохраните настройки и дождитесь появления ссылки на сайт.

## Локальный запуск

Откройте `index.html` в браузере или запустите локальный сервер:

```bash
python3 -m http.server 8000
```

После этого откройте `http://localhost:8000`.
