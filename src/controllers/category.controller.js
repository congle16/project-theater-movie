const {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategoryById
    } = require('../services/category.service');

class CategoryController {

    async getAllCategories(req, res) {
        const categories = await getAllCategories();

        if (!categories) {
            return res.status(404).json({
                message: 'No categories found'
            });
        }

        return res.status(200).json(categories);
    }

    async createCategory(req, res) {
        const {
            tenTheLoai
        } = req.body;

        if (!tenTheLoai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const category = await createCategory({
            tenTheLoai,
            trangThai : 'active',
        });

        if (!category) {
            return res.status(500).json({
                message: 'Can not create category'
            })
        }

        return res.status(200).json({
            message: 'Create category successfully'
        });
    }

    async getCategoryById(req, res) {
        const {
            id
        } = req.params;

        if (!id) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const category = await getCategoryById(id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        return res.status(200).json(category);
    }

    async updateCategoryById(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getCategoryById(id);
        if (!checkExists) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        const {
            tenTheLoai,
            trangThai
        } = req.body;
        console.log(tenTheLoai, trangThai);

        if (!tenTheLoai || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const category = await updateCategory(id, {
            tenTheLoai,
            trangThai
        });

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            message: 'Update category successfully'
        });
    }

    async deleteCategoryById(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getCategoryById(id);
        if (!checkExists) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        const category = await deleteCategoryById(id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            message: 'Delete category successfully'
        });
    }
}

module.exports = new CategoryController;