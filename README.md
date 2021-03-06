# Schedule

Наше расписание помогает студентам увидеть расписание выдачи тасков, дедлайнов, увидеть на карте где проходит мероприятие и многое другое. 

Ссылка на готовую работу : https://schedule-team7.netlify.app

Ссылка на PR : https://github.com/kate-latushkina/schedule/pull/47

Макет приложения : https://drive.google.com/file/d/1PebafOm972rFsRbXK60-giZFJcIK_JW6/view?usp=sharing

Определение потребностей пользователя : https://docs.google.com/spreadsheets/d/1tSiE_Wuzon0XFcV8L18sH2O14Qbl3L8zQzXhahO0-xI/edit?usp=sharing


## Краткое содержание
  - [Приступая к работе](#приступая-к-работе)
  - [Требования](#требования)
  - [Установка](#установка)
  - [Deployment](#deployment)
  - [Коллабораторы](#коллабораторы)
  - [Задействованные библиотеки и технологии](#задействованные-библиотеки-и-технологии)

## Приступая к работе
Эти инструкции помогут вам получить копию проекта и запустить его на локальном компьютере для целей разработки и тестирования. Читайте ниже для получения подробной информации.
### Требования
1. Система контроля версий GIT. Установить ее можно здесь.
2. Для тестирования и запуска проекта вам понадобится Node package manager(NPM). Для его использования нужно установить Node.js.
### Установка
1. Если вы уже установили GIT, то откройте консоль с помощью IDE либо стандартной консоли на вашем устройстве и склонируйте проект с помощью простой команды git clone https://github.com/kate-latushkina/schedule.git . Все файлы проекта склонируются в папку под названием schedule.
2. Затем нужно перейти в склонированную папку schedule. 
3. Когда вы перешли в папку schedule, то для того, чтобы запустить проект и начать пользоваться им вам нужно установить все npm-пакеты, которые используются в проекте. Для этого напишите в консоли команду `npm install` и дождитесь конца загрузки. Если загрузка не начинается, убедитесь, что вы установили Node.js.
4. После того, как загрузка npm-пакетов завершилась, можно запускать проект. Для этого нужно ввести команду `npm start`, которая запустит локальный сервер. Список других команд можно найти в файле package.json.

## Deployment
Для того, чтобы собрать проект, нужно ввести команду `npm run build`, которая заранее прописана в package.json файле.

## Коллабораторы
+	[Екатерина Латушкина](https://github.com/kate-latushkina)
+	[Максим Антонов](https://github.com/BoL4oNoK)
+	[Кирилл Жданов](https://github.com/KirillZhdanov)
+	[Анастасия Савич](https://github.com/SavichAnastasia)
+	[Евгений Шныркевич](https://github.com/Shnyrkevich)
+	[Андрей Коновалов](https://github.com/Garza0)
+	[Иван Голуб](https://github.com/HolubIvan)

## Задействованные библиотеки и технологии

__1. React__

React — это декларативная, эффективная и гибкая JavaScript библиотека для создания пользовательских интерфейсов. Она позволяет собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами». Из плюсов:
+	Чрезвычайная гибкость приложения.
+	Использование DOM.
+	Имеет открытую библиотеку данных.
+	Хорошая документация

__2. Eslint Airbnb's base config__

ESLint - это линтер для языка программирования JavaScript, написанный на Node.js. В проекте он был использован для поддержки чистоты кода и обнаружения ошибок. Инструмент Eslint предоставляет множество преимуществ для разработчиков. Из его плюсов можно выделить
+	Гибкость: любое правило может быть переключено, и во многих правилах есть дополнительные настройки, которые можно настроить. Очень расширяемый и доступно много плагинов.
+	Легко понять результат
+	Включает множество правил, недоступных для других линтеров, что делает ESLint более полезным при выявлении проблем
+	Лучшая из возможных поддержка ES6, а также единственный инструмент для поддержки JSX
+	Поддержка пользовательских репортеров
Недостатки Eslint:
+	Требуется некоторая конфигурация

__3. Ant Design of React__

Ant Design содержит в себе набор компонентов для создания интерактивных пользовательских интерфейсов. Из плюсов:

+	Очень много разных готовых компонентов для создания хорошего и удобного приложения начиная с выравнивания текста, инпутов, календарей заканчивая довольно сложной анимацией.

__4. Яндекс Карты API__

Яндекс Карты - это программная библиотека для работы с картами в браузерах. Отображают место на карте по координатам и адресу.  

Плюсы: 

- отображение карты, панорамы
- поиск места по координатам и адресу
- гибкая настройка карты
- можно получать адрес перетаскивая метку на карте

Минусы: 

- плохая документация
- мало информации по использованию API для React

__5. React-color__

React-color используется для отображения палитры цветов и выбора подходящего цвета.

Плюсы: 

-простая документация
-легок в использовании
