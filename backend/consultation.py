import joblib
import pandas as pd
from database import engine
from flask import Flask, jsonify, request, session
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sqlalchemy import text

# Load the trained RandomForestClassifier model
rf_model = joblib.load("rf_model.joblib")


# Function to preprocess data and make predictions
def process_and_predict(data):
    # Perform data preprocessing
    data["age"] = int(data["age"])
    data["sex"] = int(data["sex"])
    data["arrivalMode"] = int(data["arrivalMode"])
    data["injury"] = int(data["injury"])
    data["mentalStatus"] = int(data["mentalStatus"])
    data["pain"] = int(data["pain"])
    data["nrsPain"] = int(data["nrsPain"])
    data["systolicBP"] = int(data["systolicBP"])
    data["diastolicBP"] = int(data["diastolicBP"])
    data["heartRate"] = int(data["heartRate"])
    data["respirationRate"] = int(data["respirationRate"])
    data["bodyTemperature"] = float(data["bodyTemperature"])
    data["oxygenSaturation"] = int(data["oxygenSaturation"])

    # Prepare the data for model prediction
    X = [
        [
            data["age"],
            data["sex"],
            data["arrivalMode"],
            data["injury"],
            data["mentalStatus"],
            data["pain"],
            data["nrsPain"],
            data["systolicBP"],
            data["diastolicBP"],
            data["heartRate"],
            data["respirationRate"],
            data["bodyTemperature"],
            data["oxygenSaturation"],
        ]
    ]

    # Make predictions using the trained model
    predicted_diagnostic = rf_model.predict(X)[0]

    return predicted_diagnostic


# Function to insert consultation data into the database
def insert_into_database(data, predicted_diagnostic):

    with engine.connect() as conn:
        trans = conn.begin()

        sql_query = text(
            "INSERT INTO consultation (cin_patient, cin_personnel, age, sex, arrival_mode, injury, "
            "mental_status, pain, nrs_pain, systolic_blood_pressure, diastolic_blood_pressure, "
            "heart_rate, respiration_rate, body_temperature, oxygen_saturation, date_consultation, diagnostic) "
            "VALUES (:cinPa, :cinPer, :age, :sex, :arrivalMode, :injury, :mentalStatus, :pain, :nrsPain, :systolicBP, :diastolicBP, :heartRate, :respirationRate, :bodyTemperature, :oxygenSaturation, CURDATE(), :predicted)"
        )

        conn.execute(
            sql_query,
            {
                "cinPa": data["cin"],
                "cinPer": data['cinPer'],
                "age": data["age"],
                "sex": data["sex"],
                "arrivalMode": data["arrivalMode"],
                "injury": data["injury"],
                "mentalStatus": data["mentalStatus"],
                "pain": data["pain"],
                "nrsPain": data["nrsPain"],
                "systolicBP": data["systolicBP"],
                "diastolicBP": data["diastolicBP"],
                "heartRate": data["heartRate"],
                "respirationRate": data["respirationRate"],
                "bodyTemperature": data["bodyTemperature"],
                "oxygenSaturation": data["oxygenSaturation"],
                "predicted": predicted_diagnostic,
            },
        )
        # Commit the transaction
        trans.commit()
        return True