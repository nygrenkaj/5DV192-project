#
# By Kaj Nygren, Alexander Ekström, Erik Dahlberg
# December 2019
#

from flask import Flask, request, json
from flask_cors import CORS
from app_google.urls import app_google
from app_main.urls import app_main

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'upload'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# blueprints
app.register_blueprint(app_main)
app.register_blueprint(app_google)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
