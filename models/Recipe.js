const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String, 
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Che', 'UltraPro Chef'] 
  },
  engredients: [String],
  Cuisine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String, 
    enum:['Breakfast', 'Dish', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    timestamps: true, 
    versionKey: false
  }

});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
