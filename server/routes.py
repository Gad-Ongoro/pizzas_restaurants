# home(/)
from app import app

@app.route('/')
def home():
    return("""
           <div style="display: flex; justify-content: center; align-items: center;">
                <h1 style="color:green;">PIZZAS & RESTAURANTS</h1>
           </div>
           """         
        )
    
