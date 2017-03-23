from flask import Flask, request, session, g, redirect, url_for, abort, \
    render_template, flash, session

app = Flask(__name__, template_folder="templates", static_url_path="/static",
            static_folder="static")

app.config.from_object(__name__)


@app.route('/')
def root():
    return render_template('boards.html')


@app.route('/dragable')
def dragable():
    return render_template('dragable.html')


@app.route('/cards')
def cards():
    return render_template('cards.html')


if __name__ == '__main__':
    app.run(debug=True)
