import express from 'express';
import Category from '../models/Category.js';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get categories with pagination
router.get('/', authenticateToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const skip = (page - 1) * limit;

    const categories = await Category.find()
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 });

    const total = await Category.countDocuments();
    const totalPages = Math.ceil(total / limit);

    // Get user's interests
    const user = await User.findById(req.userId).populate('interests');
    const userInterests = user.interests.map(interest => interest._id.toString());

    res.json({
      categories,
      currentPage: page,
      totalPages,
      total,
      userInterests,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user interests
router.post('/interests', authenticateToken, async (req, res) => {
  try {
    const { categoryIds } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.interests = categoryIds;
    await user.save();

    res.json({ message: 'Interests updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;