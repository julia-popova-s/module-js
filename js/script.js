//практика использования запроса на сервер, обработка запросов, и обработка данных по заданиям
fetch("https://reqres.in/api/users?per_page=12")
  .then((res) => {
    return res.json();
  })

  .then((body) => {
    // Получить данные 12 пользователей
    console.log("Пункт №1:");
    console.log(`Данные ${body.data.length} пользователей:`);
    console.log(body.data);

    // Вывести в консоль фамилии всех пользователей в цикле
    console.log("_______________________________");
    console.log("Пункт №2:");
    console.log("Фамилии пользователей:");
    body.data.forEach((item) => {
      console.log(item.last_name);
    });

    // Вывести все данные всех пользователей, фамилия которых начинается на F
    console.log("_______________________________");
    console.log("Пункт №3:");
    console.log("Данные пользователей, фамилия которых начинается c 'F':");
    body.data.forEach((item) => {
      if (item.last_name[0] === "F") console.log(item.last_name);
    });

    /* Вывести следующее предложение: Наша база содержит данные следующих пользователей: 
    и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce*/
    console.log("_______________________________");
    console.log("Пункт №4:");
    let result =
      "Наша база содержит данные следующих пользователей: " +
      body.data.reduce((sum, item) => `${item.last_name} ${item.first_name}, ` + sum, "");
    console.log(result.slice(0, result.length - 2) + ".");

    // Вывести названия всех ключей в объекте пользователя.
    console.log("_______________________________");
    console.log("Пункт №5:");
    console.log("Ключи пользователя: " + Object.keys(body.data[0]).join(", ") + ".");
    /*body.data.forEach((item) => {
      console.log(`${item.last_name} ${item.first_name}: ` + Object.keys(item));
    });*/
  });
