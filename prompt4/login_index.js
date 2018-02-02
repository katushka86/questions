var login = prompt('Введите логин', " ");
    if(login=="Админ") {
        var password = prompt("Пароль!", " ");
            if(password=="Чёрный Властелин") {
                alert("Добро пожаловать!");
            }
            else if(password==null) {
                alert("Вход отменён!");
            }
            else {
                alert("Пароль не верен!");
            }
    }
    else if(login==null) {
        alert("Вход отменён!");
    }
    else {
        alert("Я вас не знаю!");
    }