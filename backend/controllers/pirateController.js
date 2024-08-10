import Pirate from "../models/pirateModel.js";

const createPirate = async (req, res) => {
    try {
        var data = req.body;
        var newPirate = await Pirate.create(data);
        res.status(200).json(newPirate);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAllPirates = async (req, res) => {
    var listPirates = await Pirate.find();
    res.status(200).json(listPirates);
}

const deletePirate = async (req, res) => {
    var id = req.params.pirateId;
    await Pirate.findByIdAndDelete(id);
    res.status(200).json();
}

const getPirateById = async (req, res) => {
    var id = req.params.id;
    var pirateFound = await Pirate.findById(id);
    res.status(200).json(pirateFound);
}

const updatePirate = async (req, res) => {
    try {
        var id = req.params.pirateId;
        var data = req.body;
        await Pirate.findByIdAndUpdate(id, data, {runValidators: true});
        res.status(200).json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export {createPirate, getAllPirates, deletePirate, getPirateById, updatePirate};