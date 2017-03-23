/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("title") == null) {
            document.getElementById("list_all_boards").innerHTML = "You don't have any boards yet";
        } else {
            printBoards();
        }
    } else {
        document.getElementById("list_all_boards").innerHTML = "Sorry, your browser does not support web storage...";
    }
};

$(document).ready(function () {
    listBoards();
});

function printBoards() {
    var html = "";
    var title_array = JSON.parse(localStorage.getItem("title"));

    for (var i = 0; i < title_array.length; i++) {
        html = html + "<li><a><h2>" + title_array[i] + "</h2></a></li>";

    }
    document.getElementById("list_all_boards").innerHTML = html;
};


function addNewBoard() {
    var title = document.getElementById("title");
    if (localStorage.getItem("title") === null) {
        localStorage.setItem("title", JSON.stringify([title.value]));
    }
    else {
        var title_list = JSON.parse(localStorage.getItem("title"));
        var index = title_list.length;
        title_list[index] = title.value;
        localStorage.setItem("title", JSON.stringify(title_list));
    }
    listBoards()
};

function addBoardTitle() {

    var addTitleForm = "<div class='title'><form>" +
        "<input type='text' id='title' placeholder='Add new board'> " +
        "<input type='submit' value='Save' onclick='addNewBoard()'>" +
        "</div>";
    document.getElementById("add_board").innerHTML = addTitleForm;

};