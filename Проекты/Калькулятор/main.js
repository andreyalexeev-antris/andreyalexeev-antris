let input = document.getElementById('input'); // Нахождение инпута
var storedNumber = 0; // Запомненное число по умолчанию
type = 0

function addValue(button) { // Введение через кнопки
    var input = document.getElementById('input');
    input.value += button.value;
    var inputElement = document.getElementById('input');
    var inputString = inputElement.value; // Получаем строковое значение из элемента ввода
    var matches = inputString.match(/\d/g); // Теперь используем метод match
    count = matches.length
}

function inverse() {
    input.value *= -1
}

function percent() { // Сделать процент от числа
    var number = parseFloat(document.getElementById('input').value);
    document.getElementById('input').value = number / 100
}

function storeNumberSum() { // Запомнить первое число(сумма)
    var number = parseFloat(document.getElementById('input').value);
    storedNumber = number;
    document.getElementById('input').value = '';
    type = 1
}

function storeNumberPro() { // Запомнить первое число(произведение)
    var number = parseFloat(input.value);
    storedNumber = number;
    document.getElementById('input').value = '';
    type = 2
}

function storeNumberDif() { // Запомнить первое число(разность)
    var number = parseFloat(document.getElementById('input').value)
    storedNumber = number;
    document.getElementById('input').value = '';
    type = 3
}

function storeNumberDiv() { // Запомнить первое число(деление)
    var number = parseFloat(document.getElementById('input').value)
    storedNumber = number;
    document.getElementById('input').value = '';
    type = 4
}


function sumNumbers() { // Вывести результат
    if (type < 3) { // Сумма и произведение
        if (type == 1) { // Сумма
            var number = parseFloat(input.value);
            document.getElementById('input').value = storedNumber + number;
            console.log("Запомненное число: " + storedNumber)
            console.log("Число: " + number)
        }
        else { // Произведение
            var number = parseFloat(input.value);
            document.getElementById('input').value = storedNumber * number;
            console.log("Запомненное число: " + storedNumber)
            console.log("Число: " + number)
        }
    }
    else { // Разность и деление
        if (type == 3) { // Разность 
            var number = parseFloat(input.value);
            input.value = storedNumber - number;
            console.log("Запомненное число: " + storedNumber)
            console.log("Число: " + number)
        }
        else { // Деление
            var number = parseFloat(input.value);
            input.value = storedNumber / number;
            console.log("Запомненное число: " + storedNumber)
            console.log("Число: " + number)
        }
    }
}

document.addEventListener('keydown', function(event) { // Введение через клавиатуру
    if (!isNaN(event.key) && document.activeElement.tagName !== 'INPUT')
        if (event.key >= '0' && event.key <= '9') {
            input.value += event.key}
            else remove
})

document.addEventListener('keydown', function(event) { // Вывести результат через клавиатуру
            if (event.key === 'Enter') {
                function sumNumbers() { // Вывести результат
                    if (type < 3) { // Сумма и произведение
                        if (type == 1) { // Сумма
                            var number = parseFloat(input.value);
                            document.getElementById('input').value = storedNumber + number;
                            console.log("Запомненное число: " + storedNumber)
                            console.log("Число: " + number)
                        }
                        else { // Произведение
                            var number = parseFloat(input.value);
                            document.getElementById('input').value = storedNumber * number;
                            console.log("Запомненное число: " + storedNumber)
                            console.log("Число: " + number)
                        }
                    }
                    else { // Разность и деление
                        if (type == 3) { // Разность 
                            var number = parseFloat(input.value);
                            input.value = storedNumber - number;
                            console.log("Запомненное число: " + storedNumber)
                            console.log("Число: " + number)
                        }
                        else { // Деление
                            var number = parseFloat(input.value);
                            input.value = storedNumber / number;
                            console.log("Запомненное число: " + storedNumber)
                            console.log("Число: " + number)
                        }
                    }
                }
            }
})
        
document.getElementById('delete').addEventListener('click', function() { // Удалить цифру
    var input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
})
