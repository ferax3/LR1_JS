var arrExams = [];

arrExams[0] = {
    Subject: "Штучний інтелект",
    Data: "8.11.2023",
    Audience: 232
};
arrExams[1] = {
    Subject: "Проектування",
    Data: "9.11.2023",
    Audience: 212
};
arrExams[2] = {
    Subject: "Філософія",
    Data: "1.11.2023",
    Audience: ""
};
arrExams[3] = {
    Subject: "Екологія",
    Data: "20.11.2023",
    Audience: 202
};
arrExams[4] = {
    Subject: "Хімія",
    Data: "12.10.2023",
    Audience: ""
};
var html = "";

var currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

//функція розрахунку терміну
function ras_diff_Days(text){
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    date1.setHours(0, 0, 0, 0);
    var timeDiff = Math.abs(currentDate.getTime()-date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

//функція виведення окремого запису масиву
function vivod(item, i, array){
    var text = item['Data'];
    var text1 = item['Audience']
    var diffDays = ras_diff_Days(text);
    var room;
    switch(diffDays){
        case 1: 
            html = html + "<tr style='background: yellow;'>";
            diffDays = "Консультація";
            break;
        case 0:
            html = html + "<tr style='background: red;'>";
            diffDays = "Іспит";
            break;
        default:
            html = html + "<tr>";
            diffDays = "Вільний день";
    }
    if(text1==""){
        room = "Невідоме місце проведення консультації/іспиту";
    }else{
        room = text1;
    }
    //у циклі виводимо окремий запис у таблицю
    for (var key in item) {
        if (key !== "Audience") {
            html = html + "<td>" + item[key] + "</td>";
        }
    }    
    html = html + "<td>" + room + "</td>";
    html = html + "<td>" + diffDays +"</td>";
    html = html + "</tr>"
}

//функція розрахунку для всього масиву
function ras(){
    html = "<table>";
    html = html + "<tr><td>Назва предмету</td>"+
    "<td>Дата іспиту</td><td>Аудиторія</td><td>Повідомлення</td></tr>"
    arrExams.forEach(vivod);
    html=html+"</table>";
    document.getElementById('result').innerHTML=html;
}
