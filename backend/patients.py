from database import engine
from sqlalchemy import text


def add_patient(data):

    with engine.connect() as conn:
        trans = conn.begin()
        insert_query = text(
            """
            INSERT INTO patient (cin_patient, full_name, date_of_birth, sex, phone_number, email, adress)
            VALUES (:cin, :name, :date, :sex, :tel, :email, :address)
        """
        )

        conn.execute(
            insert_query,
            {
                "cin": data["cin"],
                "name": data["name"],
                "date": data["date"],
                "sex": data["sex"],
                "tel": data["tel"],
                "email": data["email"],
                "address": data["address"],
            },
        )
        # Commit the transaction
        trans.commit()
        return True


def search_patient(cin):

    with engine.connect() as conn:
        trans = conn.begin()
        query = text(
            """
            select * from patient where cin_patient = :cin
        """
        )

        result = conn.execute(
            query,
            {
                "cin": cin,
            },
        )
        all_results = result.all()
        trans.commit()
        if all_results:
            patient = all_results[0]._asdict()  # Convert the first result to a dictionary
            return patient
        else:
            return None
