/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    var all_titles = data_loader.get_all_boards()
    if (typeof(Storage) !== "undefined") {
        if (all_titles == null) {
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
    var title_array = data_loader.get_all_boards();
    for (var i = 0; i < title_array.length; i++) {
        html = html + "<li><a>" +
            "<h2 class='sticky-title'>" + title_array[i] +
            "<br></button><button class='update' onclick='updateBoardTitle(" + i + ")'>Update</button>" +
            "<br><button class='remove' onclick='deleteBoard(" + i + ")'>Remove " +
            "<br><button class='cards' onclick='showCards(" + i + ")'>Cards</h2></a></li>";
    }
    document.getElementById("add_board").innerHTML = "<div id='title' onclick='addBoardTitle()'>" +
            "<h2><div id='new_title'>Click here to add new board</div></h2></div>";
    document.getElementById("list_all_boards").innerHTML = html;
};


function addNewBoard() {
    var all_titles = data_loader.get_all_boards();
    var title = document.getElementById("title");
    if (title.value !== "") {
        if (all_titles === null) {
            localStorage.setItem("title", JSON.stringify([title.value]));
        }
        else {
            var title_list = data_loader.get_all_boards();
            var index = title_list.length;
            title_list[index] = title.value;
            localStorage.setItem("title", JSON.stringify(title_list));
        }
    }
    else {
        alert("Board title is required to add new board!");
    }
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
    var all_titles = data_loader.get_all_boards();
    var new_titles = [];
    for (var i = 0; i < all_titles.length; i++) {
        if (i !== board_index) {
            new_titles.push(all_titles[i]);
        }
        else {
            continue;
        }
    }
    localStorage.removeItem("title");
    localStorage.setItem("title", JSON.stringify(new_titles));

    var all_cards = JSON.parse(localStorage.getItem("cards"));
    var new_cards = [];
    for(var i = 0; i < all_cards.length; i++) {
        if (i !== board_index) {
            new_cards.push(all_cards[i]);
        }
        else {
            continue;
        }
    }
    localStorage.removeItem("cards");
    localStorage.setItem("cards", JSON.stringify(new_cards));
    listBoards();
};

function updateBoardTitle(board_index) {
    var all_titles = data_loader.get_all_boards()
    var new_titles = [];
    for (var i = 0; i < all_titles.length; i++) {
        if (i !== board_index) {
            new_titles.push(all_titles[i]);
        }
        else {
            var updated_title = prompt("New title:");
            if (updated_title) {
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

function addNewCard(board_index) {
    var title = document.getElementById("title");
    if(title.value !== "") {
        if (localStorage.getItem("cards") === null) {
            localStorage.setItem("cards", JSON.stringify([[title.value]]));
        }
        else {
            var card_list = JSON.parse(localStorage.getItem("cards"));
            if(typeof card_list[board_index] !== "undefined") {
                for (var index = 0; index < card_list.length; index++) {
                    if (index === board_index) {
                        card_list[board_index][card_list[board_index].length] = title.value;
                    }
                }
            }
            else {
                if (card_list.length < board_index) {
                    var diff = board_index - card_list.length + 1;
                    for (var e = 0; e < diff; e++) {
                        card_list.push([]);
                    }
                    card_list[board_index] = [title.value];
                }
                else {
                    card_list[board_index] = [title.value];
                }
            }
            localStorage.removeItem("cards");
            localStorage.setItem("cards", JSON.stringify(card_list));
        }
    }
    else{
        alert("Card title is required to add new card!");
        showCards(board_index);
        document.getElementById("new_title").innerHTML = "Click here to add new card";
    }


};



function addCard(board_index) {
    var addCardForm = "<div class='title'><form>" +
        "<input type='text' id='title' placeholder='Add new card'> " +
        "<input type='submit' value='Save' onclick='addNewCard(" + board_index + ")'>" +
        "</div>";
    document.getElementById("add_board").innerHTML = addCardForm;
};


function showCards(board_index) {
    document.getElementById("add_board").innerHTML = "<div id='title' onclick='addCard(" + board_index + ")'>" +
            "<h2><div id='new_title'>Click here to add new card</div></h2></div>";

    var card_html = "";
    var all_cards = JSON.parse(localStorage.getItem("cards"));
    if(all_cards != null) {
        for (var i = 0; i < all_cards.length; i++) {
            if (i === board_index) {
                for (var card = 0; card < all_cards[i].length; card++) {
                    card_html = card_html + "<li><a><h2>" + all_cards[i][card] + "</h2></a></li>";
                }
            }
        }
    }
    card_html = card_html + "<button class='back' onclick='printBoards()'>Back to boards</button>";
    document.getElementById("list_all_boards").innerHTML = card_html;
    };