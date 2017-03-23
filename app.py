from flask import Flask,  \
    render_template

app = Flask(__name__, template_folder="templates", static_url_path="/static",
            static_folder="static")

app.config.from_object(__name__)


@app.route('/')
def root():
    return render_template('boards.html')


@app.route('/cards')
def cards():
    return render_template('cards.html')


if __name__ == '__main__':
    app.run(debug=True)
