from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource
from models import db, Restaurants, Pizzas, RestaurantPizza

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
api = Api(app)

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return("""
           <div style="display: flex; justify-content: center; align-items: center;">
                <h1 style="color:green;">PIZZAS & RESTAURANTS</h1>
           </div>
           """         
        )


class Rests(Resource):
    def get(self):
        rests = [restaurant.to_dict() for restaurant in Restaurants.query.all()]
        response = make_response(jsonify(rests))        
        return response

api.add_resource(Rests, '/restaurants', endpoint='restaurants')

class Rest_by_id(Resource):
    def get(self, id):
        rest = Restaurants.query.filter_by(rest_id = id).first()
        
        response = make_response(jsonify(rest.to_dict()))
        
        return response
    
    def delete(self, id):
        rest = Restaurants.query.filter_by(rest_id = id).first()
        rest_piz = RestaurantPizza.query.filter_by(rest_by_id = id).all()
        
        if rest:
            for restpiz in rest_piz:
                db.session.delete(restpiz)
                db.session.commit()
            db.session.delete(rest)
            db.session.commit()

api.add_resource(Rest_by_id, '/restaurants/<int:id>')

# @app.route('/restaurants/<int:id>')
# def del_restaurant(id):
#     pass

# @app.route("/pizzas")
# def get_pizzas():
#     pass

# @app.route('/restaurant_pizzas')
# def post_rest_pizzas():
#     pass

if __name__ == "__main__":
    app.run(port = 5500, debug = True)