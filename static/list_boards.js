/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem("title") == null) {
            document.getElementById("boards").innerHTML = "You don't have any boards yet";
            addBoardTitle();
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
    var html = "";
    var title_array = JSON.parse(localStorage.getItem("title"));
    for(var i = 0; i < title_array.length; i++) {
        html = html + "<p>" + title_array[i] + "</p>";
    }
    document.getElementById("boards").innerHTML = html;
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
    alert("New board added");
};

function addBoardTitle() {
    var addTitleForm = "<div class='board'><form>" +
        "<input type='text' id='title' placeholder='Add title'> " +
        "<input type='submit' value='Save' onclick='addNewBoard()'>" +
        "</div>";
    document.getElementById("boards").innerHTML = addTitleForm;
};











