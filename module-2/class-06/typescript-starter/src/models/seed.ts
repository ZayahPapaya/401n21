import { dbInit } from './data_source';
import { ClothesRepository, FoodRepository, RecipeRepository } from '../models';

const FOODS = [
  {
    name: 'carrots',
    calories: 25,
    type: 'vegetable',
  },
  {
    name: 'broccoli',
    calories: 30,
    type: 'vegetable',
  },
  {
    name: 'chicken',
    calories: 150,
    type: 'poulty',
  },
  {
    name: 'eggs',
    calories: 80,
    type: 'poultry',
  },
  {
    name: 'sausage',
    calories: 120,
    type: 'meat',
  },
];

const RECIPES = [
  {
    name: 'dinner',
    prepTime: 10,
    cookTime: 20,
  },
  {
    name: 'snack',
    prepTime: 5,
    cookTime: 0,
  },
  {
    name: 'breakfast',
    prepTime: 10,
    cookTime: 10,
  },
];

// const FOOD_RECIPES = [
//   { FoodId: 1, RecipeId: 2 },
//   { FoodId: 2, RecipeId: 1 },
//   { FoodId: 3, RecipeId: 1 },
//   { FoodId: 4, RecipeId: 3 },
//   { FoodId: 5, RecipeId: 3 },
//   { FoodId: 5, RecipeId: 1 },
// ];

const CLOTHES = [
  {
    name: 'jacket',
    color: 'white',
    size: 42,
  },
  {
    name: 'jeans',
    color: 'navy',
    size: 32,
  },
];

export async function seed() {
  await dbInit;
  await Promise.all([
    ...CLOTHES.map((c) => ClothesRepository.create(c)),
    ...RECIPES.map((c) => RecipeRepository.create(c)),
    ...FOODS.map((c) => FoodRepository.create(c)),
  ]);
  //   await collections.FoodRecipe.bulkCreate(FOOD_RECIPES);
}
