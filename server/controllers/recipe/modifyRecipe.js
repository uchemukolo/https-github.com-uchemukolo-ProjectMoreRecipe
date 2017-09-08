// 


import { Recipe } from '../../models/recipe';

const modifyRecipe = (req, res) => {
  const {recipeName, description, mealType, dishType, ingredients, preparations  } = req.body
  console.log(recipeName, description, mealType, dishType, ingredients, preparations); 
  console.log(req);
  // console.log(req.body);
  console.log("change effected");
   return Recipe
        .update({
        where: {recipeName: req.body.recipeName, 
        description: req.body.description,
        mealType: req.body.mealType,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients,
        preparations: req.body.preparations,
      }
    });
      // .then(user => res.status(201).send(user))
      // .catch(error => res.status(400).send(error));
  }

module.exports = modifyRecipe;



// task.update({
//   title: 'a very different title now'
// }).then(() => {})