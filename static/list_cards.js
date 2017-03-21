function listCards() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem("card_title") == null) {
            document.getElementById("cards").innerHTML = "You don't have any boards yet";
        } else {
            printCards();
        }
    } else {
        document.getElementById("cards").innerHTML = "Sorry, your browser does not support web storage...";
    }
    };

$(document).ready(function(){
    listCards();
});

function printCards() {
    var html = "";
    var title_array = JSON.parse(localStorage.getItem("card_title"));
    for(var i = 0; i < title_array.length; i++) {
        html = html + "<p>" + title_array[i] + "</p>";
    }
    document.getElementById("cards").innerHTML = html;
};


function addNewCard() {
    var title = document.getElementById("card_title");
    if (localStorage.getItem("card_title") === null) {
        localStorage.setItem("card_title", JSON.stringify([title.value]));
    }
    else {
        var title_list = JSON.parse(localStorage.getItem("card_title"));
        var index = title_list.length;
        title_list[index] = title.value;
        localStorage.setItem("card_title", JSON.stringify(title_list));
        }
};