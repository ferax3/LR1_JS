//task1
function do_text() {
    var innerDivs = document.getElementById('task3_1').querySelectorAll('div');
    //замикання
    innerDivs.forEach(function(div) {
        var text = div.textContent.trim();

        if (text.length > 10) {
            var truncatedText = text.slice(0, 10) + '...';
            div.textContent = truncatedText;
        }
    });
}
//task2
var numRows = 0;
var numCols = 0;
var a = [];//matrix
var sum_cols = [];//result

function generate_arr(){
    let table = document.getElementById("b-table");
    numRows = table.rows.length;
    numCols = table.rows[0].cells.length;
    let arr = [];
    for (i = 0; i < numRows; i++){
        arr[i] = []
        for (j = 0; j < numCols; j++){
            arr[i][j] = parseInt(table.rows[i].cells[j].innerHTML); // Перетворення в число
        }
    }
    return arr;
}
function sumCols(){
    var sum_arr = [];
    for(j = 0; j < numCols; j++){
        sum_arr[j] = 0;
        for(i = 0; i < numRows; i++){
            sum_arr[j] = sum_arr[j] + a[i][j];
        }
    }
    return sum_arr;
}

function color(){
    let table = document.getElementById("b-table");
    for (i = 0; i < numCols; i++){
        table.rows[numRows-1].cells[i].style.backgroundColor = 'orange';
    }
}
function do_table(){
    a = generate_arr();
    sum_cols = sumCols();

    var table = document.getElementById("b-table");
    // Створюємо новий рядок    
    var newRow = table.insertRow();
    var cell;
    numRows = numRows + 1;
    for (i = 0; i < numCols; i++){
        cell = newRow.insertCell(i);
        cell.innerHTML = sum_cols[i];
    }
    color();
}