import { faker } from '@faker-js/faker';
import Category from '../models/Category.js';

export const seedCategories = async () => {
  try {
    const count = await Category.countDocuments();
    if (count > 0) {
      console.log('Categories already exist, skipping seed');
      return;
    }

    const categories = [];
    const categoryNames = new Set();

    // Add some predefined categories to match the design
    const predefinedCategories = [
      'Shoes',
      'Men T-shirts',
      'Makeup',
      'Jewellery',
      'Women T-shirts',
      'Furniture',
      'Electronics',
      'Books',
      'Sports',
      'Home & Garden',
      'Clothing',
      'Accessories',
      'Beauty',
      'Health',
      'Toys',
      'Automotive',
      'Pet Supplies',
      'Kitchen',
      'Office Supplies',
      'Travel'
    ];

    predefinedCategories.forEach(name => {
      categories.push({
        name,
        description: faker.commerce.productDescription(),
      });
      categoryNames.add(name);
    });

    // Generate remaining categories to reach 100
    while (categories.length < 100) {
      const name = faker.commerce.department();
      if (!categoryNames.has(name)) {
        categories.push({
          name,
          description: faker.commerce.productDescription(),
        });
        categoryNames.add(name);
      }
    }

    await Category.insertMany(categories);
    console.log('Successfully seeded 100 categories');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};