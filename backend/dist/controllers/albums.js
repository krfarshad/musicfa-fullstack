"use strict";
const Album = require("@/models/albums");
exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
