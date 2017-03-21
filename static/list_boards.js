/**
 * Created by codeorgo-vd on 2017.03.20..
 */

function listBoards() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("boards") == null) {
            document.getElementById("boards").innerHTML = "You don't have any boards yet";
        } else {
            document.getElementById("boards").innerHTML = "You have some boards";
        }
    } else {
        document.getElementById("boards").innerHTML = "Sorry, your browser does not support web storage...";
    }
}