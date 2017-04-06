function listBoards() {
    var all_titles = data_loader.get_all_boards();
    if (typeof(Storage) !== "undefined") {
        if (all_titles == null) {
            document.getElementById("list_all_boards").innerHTML = "You don't have any boards yet";
        } else {
            printBoards();
        }
    } else {
        document.getElementById("list_all_boards").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

$(document).ready(function () {
    listBoards();
});

function printBoards() {
    var html = "";
    var title_array = data_loader.get_all_boards();
    for (var i = 0; i < title_array.length; i++) {
        html = html + "<li><div><a class='cards'>" +
            "<h2 class='sticky-title'  onclick='showCards(" + i + ")'>" + title_array[i] + "</h2>" +
            "<button id='update-board' class='update' onclick='updateBoardTitle(" + i + ")'>Update</button>" +
            "<br><button class='remove' onclick='deleteBoard(" + i + ")'>Remove " + "</button>" +
            "<br></div></a></li>";
    }
    document.getElementById("add_board").innerHTML = "<div id='title' onclick='addBoardTitle()'>" +
        "<h2><div id='new_title'>Click here to add new board</div></h2></div>";
    boards = document.getElementById("list_all_boards")
    document.getElementById("back-button").innerHTML = "";
    document.getElementById("list_all_boards").innerHTML = html;
}


function addNewBoard() {
    var all_titles = data_loader.get_all_boards();
    var title = document.getElementById("title");
    if (title.value !== "") {
        if (all_titles === null) {
            data_loader.set_board([title.value])
        }
        else {
            var title_list = data_loader.get_all_boards();
            var index = title_list.length;
            title_list[index] = title.value;
            data_loader.set_board(title_list)
        }
    }
    else {
        alert("Board title is required to add new board!");
    }
    listBoards()
}

function addBoardTitle() {
    var addTitleForm = "<div class='title'><form>" +
        "<input type='text' id='title' placeholder='Add new board title' maxlength='30'> " +
        "<input type='submit' value='Save' onclick='addNewBoard()'>" +
        "</div>";
    document.getElementById("add_board").innerHTML = addTitleForm;
}

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
    data_loader.remove_item("title");
    data_loader.set_board(new_titles);

    var all_cards = data_loader.get_cards();
    var new_cards = [];
    for (var i = 0; i < all_cards.length; i++) {
        if (i !== board_index) {
            new_cards.push(all_cards[i]);
        }
        else {
            continue;
        }
    }
    data_loader.remove_item("cards");
    data_loader.set_cards(new_cards);
    listBoards();
}

function updateBoardTitle(board_index) {
    var all_titles = data_loader.get_all_boards();
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
    data_loader.remove_item("title");
    data_loader.set_board(new_titles);
    listBoards();
}