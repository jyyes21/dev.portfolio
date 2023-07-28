from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

import os

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URL')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

admin = Admin(app, name='myadmin', template_mode='bootstrap3')

from app.models import models   # move this line below the db initialization

from app import routes  # import routes after app and db have been initialized