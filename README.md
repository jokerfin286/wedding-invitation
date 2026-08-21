# Wedding Invitation — React + Vite

Современный универсальный шаблон свадебного приглашения. Все данные вынесены в `src/config/wedding.js`, поэтому для новой свадьбы не требуется менять React-компоненты.

## Быстрый запуск

Требуется Node.js 18+.

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

Готовая сборка появится в `dist/`.

## Где менять данные

Откройте `src/config/wedding.js`.

- Имена — `couple.groom`, `couple.bride`
- Дата — `weddingDate` и `dateText`
- Первый экран — `hero`
- Текст приглашения — `intro`
- Место и адрес — `venue`
- Музыка — `music.src`
- Тайминг — массив `timeline`
- Пожелания — массив `details`
- Фотографии — `gallery` и пути внутри `hero` / `venue`
- Анкета — `rsvp`
- Цвета и шрифты — `theme`

## Фотографии

Заменяйте файлы в `public/images/`, сохраняя имена, либо укажите новые пути в конфигурации. SVG в репозитории — нейтральные демо-заглушки без использования фотографий референса.

## Музыка

Положите MP3 в `public/music/wedding.mp3` или измените `music.src`. Автозапуска нет: звук включается только после действия пользователя.

## RSVP / backend

Форма вызывает `submitRSVP(data)` из `src/utils/storage.js`. Сейчас ответы сохраняются в `localStorage`. Позже эту функцию можно заменить на запрос к собственному API, Telegram-боту, Google Sheets, Firebase, Supabase или другому backend без изменения UI формы.

## Адаптивность и доступность

Сайт проектируется mobile-first, имеет touch-friendly элементы, focus states, `alt` для изображений, reduced-motion режим и плавный scroll.

## GitHub Pages / хостинг

Проект можно собрать командой `npm run build` и разместить содержимое `dist/` на статическом хостинге. Для GitHub Pages при использовании SPA без серверных роутов отдельная настройка маршрутизации не требуется.

## Структура

```text
src/
  components/
  config/wedding.js
  styles/
  utils/
  App.jsx
  main.jsx
public/
  images/
  music/
README.md
```
