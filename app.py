from get_db import *
from flask import Flask, render_template, jsonify



app = Flask(__name__, template_folder="templates", static_url_path="/static",
            static_folder="static")

app.config.from_object(__name__)

psql_db.connect()
psql_db.drop_tables([Boards, Cards])
psql_db.create_tables([Boards, Cards])


@app.route('/')
def root():
    return render_template('boards.html')


@app.route('/boards')
def create_board():
    all_boards = Boards.select()
    boards_dict = {}
    for board in all_boards:
        boards_dict[str(board.id)] = {
            "title": board.title,
            "id": board.id
        }
    return jsonify(boards_dict)


@app.route('/cards/<boardid>')
def create_card():
    all_cards = Cards.select().where(Cards.board_id == boardid)
    cards_dict = {}
    for card in all_cards:
        cards_dict[str(card.id)] = {
            "title": card.title,
            "id": card.id
        }
    return jsonify(cards_dict)


@app.route('/deffered')
def deffered():
    return render_template('deffered.html')

if __name__ == '__main__':
    app.run(debug=True)
