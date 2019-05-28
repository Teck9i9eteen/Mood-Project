var angry = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xZu2shYhXayZ4fz206WRAOEUbJuiegtPZI6-WYN8HOhGUiqFUg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoABat24liKNCRksgCpeipx40ZRUMbA_8qBZumsGXb9JLoIF9QGQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIRyLZEejHb9M4W6eIfAyXIWPRvU30Bjbay5DI1KtA6EmKKSR6A"];

var sad = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv1f2Z0jXr8NtppYWf7Z8NLBDOUq4eWoM3osxHqIQKCSTKprC", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1s2BSv9ZQB5RfKLahGDBBZMByGSc130eePLbr3D3aEqkNI3fepQ", "https://wallpaperplay.com/walls/full/7/2/b/30746.jpg"];

var mello = ["https://pa1.narvii.com/6889/7b3514950e582eba8dd213bd674b0ab75e481df3r1-500-281_hq.gif", "https://data.whicdn.com/images/121998134/original.gif", "https://static.zerochan.net/Kcaw8891.full.1363416.jpg"];

var happy = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSeG_NIi_vNvZGkGCLHGTgpmPhELf6dZDRs_iDBBiiUtWGUDO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfaai9CuXLhaKjwjHUjKmZLRJgW6hVos_QDfUIQ4UOuS7-yxQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8Y-3U1eHnaNgk155vmQWdcvCBmlRYYsAz8jOiA6vEpBHpSws"];


$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "Happy") {
        Imhappy();
    } else if (input === "Mello") {
        Immello();
    } else if (input === "Angry") {
        Imangry();
    } else if (input === "Sad") {
        Imsad();
    } else {
        alert("Please enter one of the following: Happy, Angry, Mello, Sad");
    }
});

function Imhappy() {
    changeBackgroundcolor("yellow");
    changeTextColor("#02b0f4");
    happy.forEach(function(url) {
       displayImage(url);
    });
    
}

function Immello() {
    changeBackgroundcolor("grey");
    changeTextColor("#df02f4");
    mello.forEach(function(url) {
       displayImage(url);
    });
    
}

function Imsad() {
    changeBackgroundcolor("grey");
    changeTextColor("#740eaf");
    sad.forEach(function(url) {
       displayImage(url);
    });
    var url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv1f2Z0jXr8NtppYWf7Z8NLBDOUq4eWoM3osxHqIQKCSTKprC";
}

function Imangry() {
    changeBackgroundcolor("black");
    changeTextColor("red");
    angry.forEach(function(url) {
       displayImage(url);
    });
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(image) {
    $('.images').append('<img src =' + image + '>');
}

function changeBackgroundcolor(backgroundcolor) {
    $('body').css('background-color', backgroundcolor);
}