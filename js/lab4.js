// Розробити сторінку зі скриптом, в якому створюється об'єкт Комп'ютер
// з 3-ма властивостями: модель, виробник, ціна. Створити масив з декількома
// об‘єктами даного класу. Вивести після натискання кнопки всі значення
// властивостей на екран у вигляді таблиці.
fact = ['cotton', 'made in chine', 'soft', 'made in Frince'];

class Computer{
    //конструктор
    constructor(model1, manufacturer1, price1){
        this.model = model1;
        this.manufacturer = manufacturer1;
        this.price = price1;
    }
    //формує таблицю
    show(){
        let html = "";
        html +="<tr>";
        html +="<td>" + this.model + "</td>";
        html +="<td>" + this.manufacturer + "</td>";
        html +="<td>" + this.price + "</td>";
        html +="</tr>";
        return html;
    }
}
//функція генерації випадкових чисел у діапазоні
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomWord(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      let randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65; // Випадкова велика літера (A-Z)
      result += String.fromCharCode(randomCharCode);
    }
    result += randomInt(1, 10);
    return result;
}
function make_table(){
    var n = document.getElementById("x").value;
    var html = "<table id = 'b-table'>";
    html += "<tr style = 'background: red';><td>Модель</td><td>Виробник</td><td>Ціна($)</td></tr>";
    for (i = 0; i < n; i++){
        let tr = new Computer(generateRandomWord(2), fact[randomInt(0, 4)], randomInt(300, 2000));
        html += tr.show();
    }
    html += "</table>";
    document.getElementById("result_table").innerHTML = html;
}