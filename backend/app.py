from flask import Flask, jsonify, request
from flask_cors import CORS
from patients import add_patient, search_patient

app = Flask(__name__)
CORS(app)


@app.route("/")
def ok():
    return "hello world"


@app.route("/add_patient", methods=["POST"])
def add_pat():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)
    success = add_patient(data)
    if success:
        return jsonify({"message": "Person added successfully"}), 201
    else:
        return jsonify({"message": "Failed to add person"}), 500


@app.route("/search_patient", methods=["GET"])
def search_pat():
    cin = request.args.get(
        "cin"
    )  # This retrieves the 'cin' parameter from the URL query string
    if cin is None:
        return jsonify({"message": "CIN parameter is required"}), 400

    success = search_patient(cin)
    print("Success type:", type(success))
    print("Success content:", success)
    if success is not None:
        return jsonify(success), 201
    else:
        return (jsonify({"message": "There is no patient you are looking for"}), 200)  # 404 Not Found if no patient is found


if __name__ == "__main__":
    app.run(debug=True)
