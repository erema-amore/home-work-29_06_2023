// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.


// function getDayOfWeek(number) {
//     switch (number) {
//       case 1:
//         return "Понедельник";
//       case 2:
//         return "Вторник";
//       case 3:
//         return "Среда";
//       case 4:
//         return "Четверг";
//       case 5:
//         return "Пятница";
//       case 6:
//         return "Суббота";
//       case 7:
//         return "Воскресенье";
//       default:
//         return "Неверный номер дня недели";
//     }
//   }
  
  
//   console.log(getDayOfWeek(1)); 
  
  




// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя id того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным


// let todoList = [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
//   ];
  
  
//   function changeTodoStatus(id) {
//     for (let i = 0; i < todoList.length; i++) {
//       if (todoList[i].id === id) {
//         todoList[i].done = true;
//         break;
//       }
//     }
//   }
  

//   function addTodoItem(todo) {
//     let maxId = 0;
//     for (let i = 0; i < todoList.length; i++) {
//       if (todoList[i].id > maxId) {
//         maxId = todoList[i].id;
//       }
//     }
//     const newTodo = {
//       id: maxId + 1,
//       todo: todo,
//       done: false
//     };
//     todoList.push(newTodo);
//   }
  
 
//   console.log(todoList);
  
//   changeTodoStatus(3); 
//   console.log(todoList);
  
//   addTodoItem('Приготовить обед'); 
//   console.log(todoList);
  









// 3. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе

// let productList = [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
//   ];
  
 
//   function getUserInput(message) {
//     return prompt(message);
//   }
  
  
//   function findProductByTitle(title) {
//     for (let i = 0; i < productList.length; i++) {
//       if (productList[i].title.toLowerCase() === title.toLowerCase()) {
//         return productList[i];
//       }
//     }
//     return null; 
//   }
  
  
//   function offerColors(colors) {
//     let message = "Доступные цвета: " + colors.join(', ');
//     let selectedColor = getUserInput(message);
//     return selectedColor;
//   }
  
  
//   function speakPrice(price) {
//     console.log("Цена товара: $" + price);
//   }
  
 
//   function updateProductCount(product) {
//     if (product.count > 0) {
//       product.count--;
//     } else {
//       console.log("Извините, в данный момент товара нет на складе.");
//     }
//   }
  
  
//   function purchaseProduct() {
//     let userInput = getUserInput("Какой телефон Вы бы хотели приобрести?");
//     let selectedProduct = findProductByTitle(userInput);
  
//     if (selectedProduct) {
//       let selectedColor = offerColors(selectedProduct.color);
  
//       if (selectedColor) {
//         speakPrice(selectedProduct.price);
//         let purchaseConfirmation = getUserInput("Желаете ли вы совершить покупку? (Да/Нет)");
  
//         if (purchaseConfirmation.toLowerCase() === 'да') {
//           updateProductCount(selectedProduct);
//           console.log("Покупка успешно совершена!");
//         } else {
//           console.log("Спасибо за ваш выбор!");
//         }
//       } else {
//         console.log("Неверный выбор цвета.");
//       }
//     } else {
//       console.log("Извините, товар не найден.");
//     }
//   }
  
 
//   purchaseProduct();
  







// 4. Сортировка по цене. Дан массив: 
// [
//   {title: 'Samsung S20', price: 1000}, 
//   {title: 'Samsung A31', price: 200}, 
//   {title: 'Samsung S10', price: 600}, 
//   {title: 'Xiaomi Mi 10', price: 400}, 
//   {title: 'Xiaomi Redmi 8', price: 300}, 
//   {title: 'iPhone 13', price: 1100}, 
//   {title: 'iPhone 11', price: 800}
// ],
// задача: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос) затем найти подходящие товары и вывести пользователю в формате: Название товара - цена

// let products = [
//     {title: 'Samsung S20', price: 1000},
//     {title: 'Samsung A31', price: 200},
//     {title: 'Samsung S10', price: 600},
//     {title: 'Xiaomi Mi 10', price: 400},
//     {title: 'Xiaomi Redmi 8', price: 300},
//     {title: 'iPhone 13', price: 1100},
//     {title: 'iPhone 11', price: 800}
//   ];
  
 
//   function getPriceRange() {
//     let input = prompt("Введите диапазон цен в формате 'от-до' (например, 200-600):");
//     let range = input.split('-');
//     let from = parseInt(range[0]);
//     let to = parseInt(range[1]);
//     return { from, to };
//   }
  
  
//   function findProductsInRange(products, from, to) {
//     let matchingProducts = [];
  
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].price >= from && products[i].price <= to) {
//         matchingProducts.push(products[i]);
//       }
//     }
  
//     return matchingProducts;
//   }
  
  
//   function displayProducts(products) {
//     if (products.length === 0) {
//       console.log("Нет товаров в указанном диапазоне цен.");
//     } else {
//       console.log("Результаты:");
//       for (let i = 0; i < products.length; i++) {
//         console.log(products[i].title + " - " + products[i].price);
//       }
//     }
//   }
  
 
//   function filterProductsByPrice() {
//     let priceRange = getPriceRange();
//     let matchingProducts = findProductsInRange(products, priceRange.from, priceRange.to);
//     displayProducts(matchingProducts);
//   }
  

//   filterProductsByPrice();
  








// 5. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет


// let heroesDB = [];


// function Hero(name, power, agility, element) {
//   this.name = name;
//   this.power = power;
//   this.agility = agility;
//   this.element = element;
// }


// function getHeroData(heroNumber) {
//   let name = prompt(`Введите имя для героя ${heroNumber}:`);
//   let power = parseInt(prompt(`Введите силу (максимум 100) для героя ${heroNumber}:`));
//   let agility = parseInt(prompt(`Введите ловкость (максимум 100) для героя ${heroNumber}:`));
//   let element = prompt(`Введите стихию (огонь, воздух, вода, земля) для героя ${heroNumber}:`);
  
//   return new Hero(name || `Герой ${heroNumber}`, power || 0, agility || 0, element);
// }


// function addHeroToDB(hero) {
//   heroesDB.push(hero);
// }


// function fight() {
//   let hero1 = getHeroData(1);
//   let hero2 = getHeroData(2);

//   addHeroToDB(hero1);
//   addHeroToDB(hero2);

//   let winner = determineWinner(hero1, hero2);
//   if (winner) {
//     console.log(`Победитель: ${winner.name}`);
//   } else {
//     console.log("Ничья");
//   }
// }


// function determineWinner(hero1, hero2) {
  
//   increasePowerByElement(hero1);
//   increasePowerByElement(hero2);

//   if (hero1.power > hero2.power) {
//     return hero1;
//   } else if (hero1.power < hero2.power) {
//     return hero2;
//   } else if (hero1.agility > hero2.agility) {
//     return hero1;
//   } else if (hero1.agility < hero2.agility) {
//     return hero2;
//   } else {
//     return null;
//   }
// }


// function increasePowerByElement(hero) {
//   switch (hero.element) {
//     case "огонь":
//       hero.power += 20;
//       break;
//     case "воздух":
//       hero.power += 15;
//       break;
//     case "вода":
//       hero.power += 10;
//       break;
//     case "земля":
//       hero.power += 5;
//       break;
//   }
// }


// fight();









// Решение всех задач должно быть в одном файле, файл залить в гитхаб, ссылку прикрепить в классрум