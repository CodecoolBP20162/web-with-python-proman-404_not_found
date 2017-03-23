/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem("title") == null) {
            document.getElementById("list_all_boards").innerHTML = "You don't have any boards yet";
        } else {
            printBoards();
        }
    } else {
        document.getElementById("list_all_boards").innerHTML = "Sorry, your browser does not support web storage...";
    }
    };

$(document).ready(function(){
    listBoards();
});

function printBoards() {
    var html = "";
    var title_array = JSON.parse(localStorage.getItem("title"));
    for(var i = 0; i < title_array.length; i++) {
        html = html + "<li><a><h2>" + title_array[i] +
            "<br></button><button class='update' onclick='updateBoardTitle(" + i + ")'>Update</button>" +
            "<br><button class='remove' onclick='deleteBoard(" + i + ")'>Remove</h2></a></li>";
    }
    document.getElementById("list_all_boards").innerHTML = html;
};


function addNewBoard() {
    var title = document.getElementById("title");
    if(title.value !== "") {
        if (localStorage.getItem("title") === null) {
            localStorage.setItem("title", JSON.stringify([title.value]));
        }
        else {
            var title_list = JSON.parse(localStorage.getItem("title"));
            var index = title_list.length;
            title_list[index] = title.value;
            localStorage.setItem("title", JSON.stringify(title_list));
        }
    }
    else{
        alert("Board title is required to add new board!");
    }
    document.getElementById("new_title").innerHTML = "Click here to add new board";
    listBoards()
};

function addBoardTitle() {
    var addTitleForm = "<div class='title'><form>" +
        "<input type='text' id='title' placeholder='Add new board title'> " +
        "<input type='submit' value='Save' onclick='addNewBoard()'>" +
        "</div>";
    document.getElementById("add_board").innerHTML = addTitleForm;
};

function deleteBoard(board_index) {
    var all_titles = JSON.parse(localStorage.getItem("title"));
    var new_titles = [];
    for(var i = 0; i < all_titles.length; i++){
        if(i !== board_index) {
            new_titles.push(all_titles[i]);
        }
        else {
            continue;
        }
    }
    localStorage.removeItem("title");
    localStorage.setItem("title", JSON.stringify(new_titles));
    listBoards();
};

function updateBoardTitle(board_index) {
    var all_titles = JSON.parse(localStorage.getItem("title"));
    var new_titles = [];
    for(var i = 0; i < all_titles.length; i++){
        if(i !== board_index) {
            new_titles.push(all_titles[i]);
        }
        else {
            var updated_title = prompt("New title:");
            if(updated_title) {
                new_titles[i] = updated_title;
            }
            else {
                new_titles[i] = all_titles[i];
                alert("Title didn't change");
            }
        }
    }
    localStorage.removeItem("title");
    localStorage.setItem("title", JSON.stringify(new_titles));
    listBoards();
};