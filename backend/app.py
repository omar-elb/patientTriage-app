from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, DD2 web!"


if __name__ == "__main__":
      app.run(debug=True)