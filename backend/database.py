from sqlalchemy import create_engine, text

engine = create_engine(
    "mysql+pymysql://root:12344321@localhost:3306/mydb?charset=utf8mb4"
)



