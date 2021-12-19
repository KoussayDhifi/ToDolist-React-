from flask import Flask,jsonify,request

api = Flask(__name__)


@api.route('/add',methods=["POST","GET"])
def add():
    data = request.get_json(force=True)
    print(data)
    return {"msg":data}


if (__name__ == "__main__"):
    api.run(debug=True)