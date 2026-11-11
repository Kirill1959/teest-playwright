# Тесты CRUD-запросов для jsonplaceholder

Автотесты на Playwright для API https://jsonplaceholder.typicode.com

## Что проверяется

Ресурс `/posts`:

- **GET** `/posts`: список постов (200, 100 штук)
- **GET** `/posts/1`: один пост (200)
- **GET** `/posts/9999`: несуществующий пост (404)
- **POST** `/posts`: создание поста (201)
- **PUT** `/posts/1`: полное обновление (200)
- **PATCH** `/posts/1`: частичное обновление (200)
- **DELETE** `/posts/1`: удаление (200)

## Запуск

bash
npm ci
npx playwright test

Отчёт после запуска:

bash
npx playwright show-report

## Примечание

jsonplaceholder только имитирует изменения: данные реально не сохраняются, поэтому созданный пост нельзя потом получить через GET.
