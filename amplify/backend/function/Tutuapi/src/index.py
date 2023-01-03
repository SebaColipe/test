import awsgi
import boto3
import os

from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
import json


# Constant variable with path prefix
BASE_ROUTE = "/song"

app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE, methods=['GET'])
def list_songs():
    return jsonify(message="hello world")

def handler(event, context):
    return awsgi.response(app, event, context)

