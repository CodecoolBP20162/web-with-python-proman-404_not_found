/**
 * Created by gombaspeteer on 3/23/17.
 */

function LocalStorage(){
    this.get_all_boards = function (){
        return
    };

    this.get_a_board = function (){
        return
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
    }
    ;
    this.state = state;
    this.type_of_state();

    };
var data_loader = new DataLoader("localstorage");

