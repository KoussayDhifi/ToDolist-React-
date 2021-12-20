from enum import unique
from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
db = SQLAlchemy(api)

api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.mysql'

class To_Do (db.Model):
    _id = db.Column(db.Integer,primary_key=True)
    content = db.Column(db.String(50),nullable=False,unique=True)




@api.route('/add',methods=["POST","GET"])
def add():
    data = request.get_json(force=True)
    task = data['task']
    found_task = To_Do.query.filter_by(content=task).first()
    if (len(task)>50) or (len(task) == 0):
        return {"msg":"This task is too long or empty try not to pass 50 cars long"}
    elif (found_task):
        return {"msg":"This task already exists my friend :)"}
    
    new_task = To_Do(content=task)
    db.session.add(new_task)
    db.session.commit()

    return {"msg":"Task added successfully !"},200


if (__name__ == "__main__"):
    api.run(debug=True)