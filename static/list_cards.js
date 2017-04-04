function addNewCard(board_index) {
    var title = document.getElementById("title");
    if(title.value !== "") {
        if (data_loader.get_cards() === null) {
            data_loader.set_cards([[title.value]]);
        }
        else {
            var card_list = data_loader.get_cards();
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
            data_loader.remove_item("cards");
            data_loader.set_cards(card_list);
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
    var all_cards = data_loader.get_cards();
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