import mongoose from "mongoose";

const PirateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    treasures: {type: Number, required: true},
    phrase: {type: String, required: true},
    position: {type: String, required: true},
    peg: {type: Boolean, required: true},
    eye: {type: Boolean, required: true},
    hook: {type: Boolean, required: true}
});

const Pirate = mongoose.model("pirates", PirateSchema);
export default Pirate;