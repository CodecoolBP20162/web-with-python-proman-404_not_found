function LocalStorage() {
    this.get_all_boards = function () {
        var all_boards = JSON.parse(localStorage.getItem("title"));
        return all_boards;
    };

    this.set_board = function (title) {
        localStorage.setItem("title", JSON.stringify(title));

    };
    this.get_cards = function () {
        var all_cards = JSON.parse(localStorage.getItem("cards"));
        return all_cards;

    };
    this.set_cards = function (card) {
        localStorage.setItem("cards", JSON.stringify((card)));

    };
    this.remove_item = function (param) {
        localStorage.removeItem(param)
    };

}


function StatePsql() {
    this.get_all_board = function () {
        return "NOT IMPLEMENTED ERROR";
    };
    this.get_a_board = function () {
        return "NOT IMPLEMENTED ERROR";
    };
}

function LoadData(state) {
    this.type_of_state = function () {
        if (this.state == "localstorage") {
            this.state = new LocalStorage();
        } else if (this.state == "psql") {
            this.state = new PsqlState();
        }
        return true;
    };
    this.get_all_boards = function () {
        return this.state.get_all_boards();
    };
    this.set_board = function (title) {
        return this.state.set_board(title);
    };
    this.get_cards = function () {
        return this.state.get_cards();
    };
    this.set_cards = function (card) {
        return this.state.set_cards(card);
    };
    this.remove_item = function (param) {
        return this.state.remove_item(param);
    };

    this.state = state;
    this.type_of_state()

}
var data_loader = new LoadData("localstorage");