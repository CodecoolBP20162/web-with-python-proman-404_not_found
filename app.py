from get_db import *
from flask import Flask, render_template


app = Flask(__name__, template_folder="templates", static_url_path="/static",
            static_folder="static")

app.config.from_object(__name__)

psql_db.connect()
psql_db.drop_tables([Boards, Cards])
psql_db.create_tables([Boards, Cards])


@app.route('/')
def root():
    return render_template('boards.html')


if __name__ == '__main__':
    app.run(debug=True)
