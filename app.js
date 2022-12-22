const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/foodDB");
mongoose.set('strictQuery', true);

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    amount: String
});

const Food = mongoose.model("Food", foodSchema);

// Insert 1 data
const food = new Food ({
        name: "letuce",
        amount: "yes"
})

// Insert many data
// Food.insertMany([
//     {
//         name: "butter lettuce",
//         amount: "yes"
//     },
//     {
//         name: "dandelion",
//         amount: "a little"
//     },
//     {
//         name: "basil",
//         amount: "yes"
//     }
// ], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all food to foodDB");
//     }
// })

Food.find(function(err, food){
    if (err) {
        console.log(err);
    } else {
        food.forEach(function(i){
            console.log(i.name);
        })
    }
})

Food.deleteOne({_id: "6390e214a4003245208a32be"}, function(err){
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        console.log("Succesfully deleted");
    }
})

// food.save();