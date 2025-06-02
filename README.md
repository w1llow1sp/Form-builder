# 🚀 Настройка проекта с Vercel Postgres

## 📋 Пошаговая инструкция

### 1. Создание базы данных в Vercel

1. Зайдите на [vercel.com/dashboard](https://vercel.com/dashboard)
2. Перейдите в **Storage** → **Create Database** → **Postgres**
3. Дайте имя базе данных (например, `form-builder-db`)
4. Выберите регион (ближайший к вам)
5. Нажмите **Create**

### 2. Подключение проекта к Vercel

```bash
# Подключить локальный проект к Vercel
vercel link

# Скачать переменные окружения из Vercel
npm run vercel:env
# или
vercel env pull .env.development.local
```

### 3. Настройка базы данных

```bash
# Сгенерировать Prisma клиент (с оптимизацией для Vercel)
npm run db:generate

# Применить схему к базе данных
npm run db:push

# Заполнить базу тестовыми данными
npm run db:seed
```

### 4. Локальная разработка

```bash
# Запустить сервер разработки
npm run dev

# Открыть Prisma Studio для просмотра данных
npm run db:studio

# Проверить подключение к БД
# Откройте http://localhost:3000/api/test-db
```

### 5. Деплой на Vercel

```bash
# Деплой проекта
npm run vercel:deploy
# или
vercel deploy
```

## 🛠 Полезные команды

### Работа с базой данных:
- `npm run db:generate` - Генерация Prisma клиента
- `npm run db:push` - Применение изменений схемы
- `npm run db:studio` - Веб-интерфейс для БД
- `npm run db:seed` - Заполнение тестовыми данными
- `npm run db:reset` - Полный сброс БД

### Работа с Vercel:
- `npm run vercel:env` - Скачать переменные окружения
- `npm run vercel:deploy` - Деплой проекта

### Миграции (для продакшена):
- `npm run db:migrate` - Создать и применить миграцию
- `npm run db:migrate:deploy` - Применить миграции в продакшене

## 🔧 Структура проекта

```
├── app/
│   ├── generated-prisma-client/    # Сгенерированный Prisma клиент
│   └── api/
│       └── test-db/               # Тестовый API для проверки БД
├── prisma/
│   ├── schema.prisma              # Схема базы данных
│   └── seed.ts                    # Скрипт для заполнения БД
├── lib/
│   └── prisma.ts                  # Конфигурация Prisma клиента
└── .env.development.local         # Локальные переменные окружения
```

## 🌟 Особенности настройки

- **Prisma Accelerate**: Используется для оптимизации производительности
- **Кастомный output**: Клиент генерируется в `app/generated-prisma-client`
- **No-engine**: Флаг `--no-engine` для совместимости с Vercel
- **Автоматическая генерация**: Клиент генерируется после `npm install`

## 🔍 Проверка работы

1. Откройте http://localhost:3000/api/test-db
2. Должен вернуться JSON с `success: true`
3. Откройте Prisma Studio: `npm run db:studio`
4. Проверьте данные в браузере

## 🚨 Troubleshooting

### Ошибка подключения к БД:
- Проверьте `DATABASE_URL` в `.env.development.local`
- Убедитесь, что база данных создана в Vercel
- Выполните `npm run vercel:env` для обновления переменных

### Ошибки TypeScript:
- Выполните `npm run db:generate` для регенерации клиента
- Перезапустите TypeScript сервер в IDE

### Проблемы с зависимостями:
- Используйте флаг `--legacy-peer-deps` при установке пакетов
- Пример: `npm install package-name --legacy-peer-deps` 
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
