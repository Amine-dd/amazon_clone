import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Amine',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'Bosslimi',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      brand: 'Nike',
      description: 'high quality shirt',
    },

    {
      //_id: '2',
      name: 'Adidas Slim shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      brand: 'Adidas',
      description: 'high quality shirt',
    },

    {
      //_id: '3',
      name: 'Reebok Slim pants',
      slug: 'Reebok-slim-pants',
      category: 'Pants',
      image: 'images/p4.jpg',
      price: 180,
      countInStock: 20,
      rating: 4,
      numReviews: 50,
      brand: 'Reebok',
      description: 'high quality Pants Reebok',
    },

    {
      //_id: '4',
      name: 'Adidas Slim pants',
      slug: 'Adidas slim pants',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 60,
      countInStock: 110,
      rating: 4,
      numReviews: 60,
      brand: 'Adidas',
      description: 'very good quality pants',
    },
  ],
};

export default data;
