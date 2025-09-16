// controller/food.controller.js
const foodModel = require("../models/fooditems.model.js");
const uploadfile = require("../services/storage.js");
const { v4: uuid } = require("uuid");
const FoodPartner = require("../models/partner.model.js");

async function createfood(req, res) {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const fileuploadResult = await uploadfile(req.file.buffer, uuid()+ ".mp4");
    const fooditems = await foodModel.create({
        name: req.body.name,
        discription: req.body.discription,
        price:req.body.price,
        videos: [fileuploadResult.url], // ✅ always array
        foodpartner: req.foodpartner._id,
    });

    res.status(202).json({ message: "Created food item", food: fooditems });
}

async function getfooditeams(req, res) {
    const fooditems = await foodModel.find({});
    res.status(200).json({ message: "Fetched food items", fooditems });
}

const getfoodpartnerById = async (req, res) => {
    try {
        const partnerId = req.params.id;
        const [partner, foods] = await Promise.all([
            FoodPartner.findById(partnerId).lean(),
            foodModel.find({ foodpartner: partnerId }).lean(),
        ]);

        if (!partner) return res.status(404).json({ message: "Food partner not found" });

        const responseData = {
            ...partner,
            name: partner.Restaurantname,
            totalMeals: foods
        .map(f => f.videos)
        .flat()
        .filter(v => v).length,
            videos: foods.map(f => f.videos).flat().filter(v => v), // ✅ flatten + filter nulls
            customersServed: partner.customersServed || 0,
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { createfood, getfooditeams, getfoodpartnerById };
