/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem("title") == null) {
            document.getElementById("boards").innerHTML = "You don't have any boards yet";
        } else {
            printBoards();
        }
    } else {
        document.getElementById("boards").innerHTML = "Sorry, your browser does not support web storage...";
    }
    };

$(document).ready(function(){
    listBoards();
});

function printBoards() {
    var title_array = localStorage.getItem("title");
    for(var i = 0; i < title_array.length; i++) {
        document.getElementById("boards").innerHTML = title_array[i];
    }
};

function addNewBoard() {
    var title = document.getElementById("title");
    var title_list = JSON.parse(localStorage.getItem("title"));
    var index = title_list.length;
    title_list[index] = title.value;
    localStorage.setItem("title", JSON.stringify(title_list));
    var test = JSON.parse(localStorage.getItem("title"));
};
