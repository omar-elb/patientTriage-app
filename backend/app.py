from consultation import insert_into_database, process_and_predict, get_consultations
from flask import Flask, jsonify, request
from flask_cors import CORS
from patients import add_patient, delete_patient, search_patient, update_patient
from personnel import add_personnel, check_personnel, search_profile, update_personnel

app = Flask(__name__)
app.secret_key = "my_secret_key"
CORS(app)


@app.route("/")
def ok():
    return "hello world"


# route to add patient
@app.route("/add_patient", methods=["POST"])
def add_pat():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)
    success2 = add_patient(data)
    if success2:
        return jsonify({"message": "Patient added successfully"}), 201
    else:
        return jsonify({"message": "Failed to add patient"}), 200


# route to search patient
@app.route("/search_patient", methods=["GET"])
def search_pat():
    cin = request.args.get(
        "cin"
    )  # This retrieves the 'cin' parameter from the URL query string
    if cin is None:
        return jsonify({"message": "CIN parameter is required"}), 400

    success = search_patient(cin)
    if success is not None:
        return jsonify(success), 201
    else:
        return (jsonify({"message": "There is no patient you are looking for"}), 200)


# route to delete patient
@app.route("/delete_patient", methods=["DELETE"])
def delete_pat():
    cin = request.args.get(
        "cin"
    )  # This retrieves the 'cin' parameter from the URL query string
    if cin is None:
        return jsonify({"message": "CIN parameter is required"}), 400
    success1 = delete_patient(cin)
    print(success1)
    if not success1:
        return jsonify({"message": "Failed to delete patient"}), 200
    else:
        return jsonify({"message": "Patient deleted successfully"}), 201


# route to update patient
@app.route("/update_patient", methods=["POST"])
def update_pat():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)
    success3 = update_patient(data)
    if success3:
        return jsonify({"message": "Patient updeted successfully"}), 201
    else:
        return jsonify({"message": "Failed to updete patient"}), 200


# route to add personnel
@app.route("/add_personnel", methods=["POST"])
def add_per():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)
    perso = add_personnel(data)
    if perso:
        return jsonify({"message": "Persoonel added successfully"}), 201
    else:
        return jsonify({"message": "Failed to add personnel"}), 200


# route to check personnel
@app.route("/check_personnel", methods=["POST"])
def check_per():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)

    personnel = check_personnel(data)
    print(personnel)
    if personnel is not None:
        return jsonify(personnel), 201
    else:
        return (jsonify({"message": "CIN or password is incorrect"}), 200)


# route to logout
@app.route("/logout", methods=["POST"])
def logout():
    return (jsonify({"message": "logout"}), 201)


# route to submit consultation
@app.route("/submit_consultation", methods=["POST"])
def submit_consultation():
    # Get consultation data from the request
    data = request.json
    print(data)

    # Process data and make predictions
    predicted_diagnostic = process_and_predict(data)

    # Insert consultation data into the database
    if insert_into_database(data, predicted_diagnostic):
        print(predicted_diagnostic)
        return jsonify({"predict": str(predicted_diagnostic)}), 201
    else:
        return jsonify({"error": "Failed to submit consultation"}), 200


# route of profile
@app.route("/profile", methods=["GET"])
def profile():
    cin = request.args.get(
        "cin"
    )  # This retrieves the 'cin' parameter from the URL query string
    if cin is None:
        return jsonify({"message": "CIN parameter is required"}), 400

    profile = search_profile(cin)
    if profile is not None:
        print(profile)
        print(type(profile))
        return jsonify(profile), 201
    else:
        return (jsonify({"message": "There is no patient you are looking for"}), 200)


# route to update personnel
@app.route("/update_personnel", methods=["POST"])
def update_per():
    data = request.json
    print("Data type:", type(data))
    print("Data content:", data)
    success3 = update_personnel(data)
    if success3:
        return jsonify({"message": "Personnel updeted successfully"}), 201
    else:
        return jsonify({"message": "Failed to updete personnel"}), 200
    

# route to get consultations
@app.route("/get_consultations", methods=["GET"])
def get_consult():
    consultations = get_consultations()
    if consultations is not None:
        print(consultations)
        print(type(consultations))
        return jsonify(consultations), 201
    else:
        return (jsonify({"message": "There is no consultation"}), 200)


if __name__ == "__main__":
    app.run(debug=True)
