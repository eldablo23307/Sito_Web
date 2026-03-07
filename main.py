from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("index.html.jinja")

@app.route("/StayFocus")
def StayFocus():
    return render_template("StayFocus.html.jinja")

@app.route("/NewsPopup")
def NewsPopup():
    return render_template("News_PopUp.html.jinja")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)