import Category from '../models/Category.js';

export const seedCategories = async () => {
  try {
    const count = await Category.countDocuments();
    if (count > 0) {
      console.log(`Categories already exist (${count} found), skipping seed`);
      return;
    }

    console.log('🌱 Creating 100 predefined categories...');
    
    // Manually defined categories for consistency across all users
    const predefinedCategories = [
      // Page 1 (1-6)
      { name: 'Shoes', description: 'Footwear for all occasions and styles' },
      { name: 'Men T-shirts', description: 'Comfortable and stylish t-shirts for men' },
      { name: 'Makeup', description: 'Beauty products and cosmetics' },
      { name: 'Jewellery', description: 'Elegant jewelry and accessories' },
      { name: 'Women T-shirts', description: 'Trendy t-shirts for women' },
      { name: 'Furniture', description: 'Home and office furniture' },
      
      // Page 2 (7-12)
      { name: 'Electronics', description: 'Latest gadgets and electronic devices' },
      { name: 'Books', description: 'Educational and entertainment books' },
      { name: 'Sports Equipment', description: 'Sports gear and fitness equipment' },
      { name: 'Home & Garden', description: 'Home improvement and gardening supplies' },
      { name: 'Beauty Products', description: 'Skincare and beauty essentials' },
      { name: 'Kitchen Appliances', description: 'Modern kitchen tools and appliances' },
      
      // Page 3 (13-18)
      { name: 'Automotive', description: 'Car parts and automotive accessories' },
      { name: 'Pet Supplies', description: 'Products for your beloved pets' },
      { name: 'Toys & Games', description: 'Fun toys and games for all ages' },
      { name: 'Office Supplies', description: 'Professional office equipment' },
      { name: 'Travel Gear', description: 'Travel accessories and luggage' },
      { name: 'Health & Wellness', description: 'Health and wellness products' },
      
      // Page 4 (19-24)
      { name: 'Baby Products', description: 'Essential items for babies and toddlers' },
      { name: 'Musical Instruments', description: 'Instruments for music enthusiasts' },
      { name: 'Art Supplies', description: 'Creative materials for artists' },
      { name: 'Outdoor Gear', description: 'Equipment for outdoor adventures' },
      { name: 'Photography', description: 'Cameras and photography equipment' },
      { name: 'Fitness Equipment', description: 'Home gym and fitness gear' },
      
      // Page 5 (25-30)
      { name: 'Watches', description: 'Luxury and casual timepieces' },
      { name: 'Bags & Luggage', description: 'Stylish bags and travel luggage' },
      { name: 'Sunglasses', description: 'Designer and protective eyewear' },
      { name: 'Perfumes', description: 'Fragrances for men and women' },
      { name: 'Phone Accessories', description: 'Cases, chargers, and phone gear' },
      { name: 'Gaming', description: 'Video games and gaming accessories' },
      
      // Page 6 (31-36)
      { name: 'Laptops', description: 'High-performance laptops and notebooks' },
      { name: 'Headphones', description: 'Audio equipment and headphones' },
      { name: 'Smart Home', description: 'IoT devices and smart home solutions' },
      { name: 'Bicycles', description: 'Bikes and cycling accessories' },
      { name: 'Camping Gear', description: 'Equipment for camping and hiking' },
      { name: 'Winter Wear', description: 'Warm clothing for cold weather' },
      
      // Page 7 (37-42)
      { name: 'Summer Collection', description: 'Light and breezy summer clothing' },
      { name: 'Formal Wear', description: 'Professional and formal attire' },
      { name: 'Casual Wear', description: 'Comfortable everyday clothing' },
      { name: 'Swimwear', description: 'Swimsuits and beach accessories' },
      { name: 'Lingerie', description: 'Intimate apparel and undergarments' },
      { name: 'Socks & Hosiery', description: 'Comfortable socks and stockings' },
      
      // Page 8 (43-48)
      { name: 'Handbags', description: 'Designer and casual handbags' },
      { name: 'Wallets', description: 'Leather wallets and card holders' },
      { name: 'Belts', description: 'Stylish belts for all occasions' },
      { name: 'Scarves', description: 'Fashion scarves and wraps' },
      { name: 'Hats & Caps', description: 'Headwear for style and protection' },
      { name: 'Gloves', description: 'Protective and fashion gloves' },
      
      // Page 9 (49-54)
      { name: 'Skincare', description: 'Premium skincare products' },
      { name: 'Hair Care', description: 'Shampoos, conditioners, and styling' },
      { name: 'Nail Care', description: 'Nail polish and manicure tools' },
      { name: 'Men\'s Grooming', description: 'Grooming essentials for men' },
      { name: 'Dental Care', description: 'Oral hygiene products' },
      { name: 'Personal Care', description: 'Daily personal care essentials' },
      
      // Page 10 (55-60)
      { name: 'Vitamins', description: 'Health supplements and vitamins' },
      { name: 'Protein Supplements', description: 'Fitness and protein powders' },
      { name: 'Organic Foods', description: 'Natural and organic food products' },
      { name: 'Snacks', description: 'Healthy and tasty snacks' },
      { name: 'Beverages', description: 'Drinks and beverage products' },
      { name: 'Coffee & Tea', description: 'Premium coffee and tea blends' },
      
      // Page 11 (61-66)
      { name: 'Cookware', description: 'Professional cooking utensils' },
      { name: 'Dinnerware', description: 'Plates, bowls, and dining sets' },
      { name: 'Storage Solutions', description: 'Home organization and storage' },
      { name: 'Cleaning Supplies', description: 'Household cleaning products' },
      { name: 'Laundry Care', description: 'Detergents and laundry essentials' },
      { name: 'Air Fresheners', description: 'Home fragrance and air care' },
      
      // Page 12 (67-72)
      { name: 'Bedding', description: 'Comfortable sheets and pillows' },
      { name: 'Curtains & Blinds', description: 'Window treatments and decor' },
      { name: 'Lighting', description: 'Indoor and outdoor lighting solutions' },
      { name: 'Wall Art', description: 'Paintings and decorative wall pieces' },
      { name: 'Plants & Planters', description: 'Indoor plants and gardening' },
      { name: 'Candles', description: 'Scented and decorative candles' },
      
      // Page 13 (73-78)
      { name: 'Tools & Hardware', description: 'DIY tools and hardware supplies' },
      { name: 'Garden Tools', description: 'Gardening equipment and tools' },
      { name: 'Power Tools', description: 'Electric and battery-powered tools' },
      { name: 'Safety Equipment', description: 'Protective gear and safety items' },
      { name: 'Electrical Supplies', description: 'Wires, switches, and electrical parts' },
      { name: 'Plumbing Supplies', description: 'Pipes, fittings, and plumbing tools' },
      
      // Page 14 (79-84)
      { name: 'Car Care', description: 'Car cleaning and maintenance products' },
      { name: 'Car Electronics', description: 'GPS, dashcams, and car tech' },
      { name: 'Motorcycle Gear', description: 'Motorcycle parts and accessories' },
      { name: 'Boat Accessories', description: 'Marine equipment and boat gear' },
      { name: 'RV Supplies', description: 'Recreational vehicle accessories' },
      { name: 'Tire Care', description: 'Tire maintenance and accessories' },
      
      // Page 15 (85-90)
      { name: 'Board Games', description: 'Family board games and puzzles' },
      { name: 'Educational Toys', description: 'Learning toys for children' },
      { name: 'Action Figures', description: 'Collectible action figures' },
      { name: 'Dolls & Accessories', description: 'Dolls and doll accessories' },
      { name: 'Building Blocks', description: 'Construction and building toys' },
      { name: 'Remote Control', description: 'RC cars, drones, and helicopters' },
      
      // Page 16 (91-96)
      { name: 'Party Supplies', description: 'Decorations and party essentials' },
      { name: 'Gift Cards', description: 'Digital and physical gift cards' },
      { name: 'Stationery', description: 'Pens, notebooks, and office supplies' },
      { name: 'Craft Supplies', description: 'DIY and crafting materials' },
      { name: 'Collectibles', description: 'Rare and collectible items' },
      { name: 'Vintage Items', description: 'Retro and vintage products' },
      
      // Page 17 (97-100)
      { name: 'Digital Products', description: 'Software and digital downloads' },
      { name: 'Subscription Boxes', description: 'Monthly subscription services' },
      { name: 'Gift Wrapping', description: 'Wrapping paper and gift accessories' },
      { name: 'Seasonal Items', description: 'Holiday and seasonal products' }
    ];

    // Insert all categories into database
    console.log('💾 Saving categories to MongoDB...');
    await Category.insertMany(predefinedCategories);
    console.log('🎉 Successfully created 100 predefined categories!');
    
    // Log some examples
    console.log('\n📋 Sample categories created:');
    predefinedCategories.slice(0, 6).forEach((cat, index) => {
      console.log(`${index + 1}. ${cat.name} - ${cat.description}`);
    });
    
  } catch (error) {
    console.error('❌ Error creating categories:', error);
  }
};