/**
 * Created by gombaspeteer on 3/23/17.
 */

function LocalStorage(){
    this.get_all_boards = function (){
        var all_boards = JSON.parse(localStorage.getItem("title"));
        return all_boards;
    };

    this.change_board = function (title_to_change){
        var board =localStorage.setItem("title", JSON.stringify(title_to_change));
        return board
    };

    this.remove_board = function (){
        var title_to_remove = localStorage.removeItem("title");
        return title_to_remove;
    };
};

function StatePsql(){
    this.get_all_board = function (){
        return "NOT IMPLEMENTED ERROR";
    };
    this.get_a_board = function(){
        return "NOT IMPLEMENTED ERROR";
    };
};

function LoadData(state) {
    this.type_of_state = function() {
        if (this.state == "localstorage") {
            this.state = new LocalStorage();
        } else if (this.state == "psql") {
            this.state = new PsqlState();
        }
        return true;
    };
    this.get_all_boards = function() {
        return this.state.get_all_boards();
    };
    this.get_board = function(id) {
        return this.state.get_board(id);
    };

    this.state = state;
    this.type_of_state()

};
var data_loader = new LoadData("localstorage");