## Описание проекта:

Реализовала функционал [формы авторизации/регистрации](https://julia-popova-s.github.io/module-js/).
Технологии: JS, HTML, CSS/SCSS.
Использовала localStorage для сохранения данных формы.

## Клонирование репозитория

1. Склонируйте репозиторий проекта на свой компьютер с помощью следующей команды:

```bash
git clone https://github.com/julia-popova-s/module-js.git
```

Для более подробной информации по работе с Git через консоль, обратитесь к статье [Работа с git через консоль](https://htmlacademy.ru/blog/git/git-console).

2. Перейдите в папку проекта

```bash
cd module-js
```

## Visual Studio Code (VSCode):

### Установите расширения Live Sass Compiler, Live Server

1. В файле настроек VSCode (File > Preferences > Settings) добавьте следующую строку:

```json
"liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css"
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../css"
    }
  ],
```

2. Нажмите кнопки **Watch Sass** (компилирует CSS) и **Go Live** (запускает сервер) на строке состояния VSCode.