import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ricardovasquezpe:H3L04ayfmmLQl6yf@instancia1.gwtskzq.mongodb.net/piratas?retryWrites=true&w=majority&appName=instancia1")
.then(() => console.log("Conexcion exitosa!"))
.catch((e) => console.log(e));