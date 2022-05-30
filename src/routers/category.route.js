'use strict';
const express = require('express');
const categoryRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const CategoryController = require('../controllers/category.controller');

categoryRouter.get('/', CategoryController.getAllCategories);

categoryRouter.post('/', CategoryController.createCategory);

categoryRouter.get('/:id', CategoryController.getCategoryById);

categoryRouter.put('/:id', CategoryController.updateCategoryById);

categoryRouter.delete('/:id', CategoryController.deleteCategoryById);

module.exports = categoryRouter;