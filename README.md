***Task1. StarWars***

**Deploy**: Сайт находится по ссылке https://sugiralieva.github.io/star-wars/
(не работает главная страница, т.к теряется эндпоинт /star-wars/. особенности GitHub Pages(регистрация на vercel не проходит). локально все работает)

**Стэк проекта:** React.js (к сожалению, node.js еще не освоила на хорошем уровне. Так как это для меня совершенно другой стэк, за предоставленный период изучала JavaScript с нуля и React.)

**Инструкция по установке:**
1. Создайте папку для проекта
2. Установите node и npm
3. Клонируйте проект из удаленного репозитория по команде: git clone https://github.com/sugiralieva/star-wars
4. Перейдите в корневой каталог проекта и набрите npm install затем npm start
5. Готово!

**Возникшие проблемы:** не смогла распарсить содержимое массивов значений(где находятся urls). Например по url https://swapi.dev/api/films/1 есть ключи characters, planets, starsips, vehicles, species где значениями являются массивы с  urls.
Чтобы отобразить данные, нужно перебрать массив и делать запросы. Но таких ключей с массивами много и получается, для загрузки одной страницы нужно сделать множество запросов, что бьет по производительности. Есть ли другой способ? (кроме записи в бд и доставать оттуда)

**Дополнительно**: на SWAPI у starships и vehicles порядок элементов не соответствует с id.



