# news-explorer-api
Репозиторий для API приложения проекта `News Explorer`.
  
## Публичный ip сервера на Яндекс.Облаке:  
84.201.147.125

## Обратиться к API можно по адресам:  
https://api.oly-news.students.nomoredomains.icu  
https://www.api.oly-news.students.nomoredomains.icu  

## Методы API:  
* Регистрация и авторизация пользователя:  
  * POST `/signup` - создаёт пользователя с переданными email, password, name  
  * POST `/signin` - проверяет переданные email и password, возвращает JWT  
  
* Для следующих методов необходима авторизация:   
_Нужно передать заголовок Authorization со значением `Bearer <your JWT>`_  
  * GET `/users/me` - возвращает данные текущего пользователя  
  * GET `/articles` - возвращает все сохранённые текущим пользователем статьи  
  * POST `/articles`- добавляет статью с переданными параметрами в сохранённые  
  * DELETE `'/articles/id` - удаляет статью из сохранённых по её id  
