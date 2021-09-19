from flask import Flask, json, jsonify

app = Flask(__name__)

from vdv import funcion_vdv


#print(funcion_vdv(30686957,4))

#VDV final
@app.route('/vdv/<string:nume>')
def getVdv(nume):
    txt = nume.split("-")
    resultado=funcion_vdv(int(txt[0]),txt[1])
    return jsonify({"resultado": resultado})

if __name__ == '__main__':
    app.run(debug=True, port=4400)