function error(value){
    var x = parseInt(value);
    var html = "";
    if(x < 0 || x > 108){
        html = html + "<h2 style='color: red;'>ПОМИЛКА ВВОДУ № КВАРТИРИ!!!</h2>";
    }
    input = document.getElementById('num_pid');
    x = input.value;
    if(x < 0 || x > 4){
        html = html + "<h2 style = 'color: red;'>ПОМИЛКА ВВОДУ № ПІД'ЇЗДУ!!!</h2>";
    }
    input = document.getElementById('num_pov');
    x = input.value;
    if(x < 0 || x > 9){
        html = html + "<h2 style = 'color: red;'>ПОМИЛКА ВВОДУ № ПОВЕРХУ!!!</h2>";
    }
    document.getElementById('error').innerHTML = html;
}

function over_label(){
    //створення додаткової форми
    var html = "<h2>Результат наведення</h2>";
    html = html + "<fieldset><legend>Додаткова інформація</legend>";
    html = html + "<label>№Квартири<input id='num_kvar' type='number' oninput='error(this.value)'/></label>";
    html = html + "<label>Під'їзд<input id='num_pid' type='number' oninput='error(this.value)'/></label>";
    html = html + "<label>Поверхня<input id='num_pov' type='number' oninput='error(this.value)'/></label>";
    html = html + "</fieldset>";

    document.getElementById('result').innerHTML = html;
}