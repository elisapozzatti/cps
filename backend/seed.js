import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./src/models/User.js";
import Product from "./src/models/Products.js";
import Cart from "./src/models/Cart.js";
import Wishlist from "./src/models/Wishlist.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connesso");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

//dati di esempio

const products = [
  {
    name: "Casco Antinfortunistico",
    category: "Sicurezza",
    price: 25.99,
    code: "CPS001",
    image: "/images/casco.jpg",
    description: "Casco di protezione per lavori edili",
  },
  {
    name: "Guanti da Lavoro",
    category: "Sicurezza",
    price: 9.99,
    code: "CPS002",
    image: "/images/guanti.jpg",
    description: "Guanti resistenti per uso industriale",
  },
  {
    name: "Scarpe Antinfortunistiche",
    category: "Calzature",
    price: 59.99,
    code: "CPS003",
    image: "/images/scarpe.jpg",
    description: "Scarpe con puntale in acciaio",
  },
  {
    name: "Occhiali Protettivi",
    category: "Sicurezza",
    price: 14.99,
    code: "CPS004",
    image: "/images/occhiali.jpg",
    description: "Protezione occhi certificata",
  },
  {
    name: "Casco Antinfortunistico",
    category: "Sicurezza",
    price: 25.99,
    code: "CPS001",
    image: "/images/casco.jpg",
    description: "Casco di protezione per lavori edili",
  },
  {
    name: "Guanti da Lavoro",
    category: "Sicurezza",
    price: 9.99,
    code: "CPS002",
    image: "/images/guanti.jpg",
    description: "Guanti resistenti per uso industriale",
  },
  {
    name: "Scarpe Antinfortunistiche",
    category: "Calzature",
    price: 59.99,
    code: "CPS003",
    image: "/images/scarpe.jpg",
    description: "Scarpe con puntale in acciaio",
  },
  {
    name: "Occhiali Protettivi",
    category: "Sicurezza",
    price: 14.99,
    code: "CPS004",
    image: "/images/occhiali.jpg",
    description: "Protezione occhi certificata",
  },
  {
    name: "Casco Antinfortunistico",
    category: "Sicurezza",
    price: 25.99,
    code: "CPS001",
    image: "/images/casco.jpg",
    description: "Casco di protezione per lavori edili",
  },
  {
    name: "Guanti da Lavoro",
    category: "Sicurezza",
    price: 9.99,
    code: "CPS002",
    image: "/images/guanti.jpg",
    description: "Guanti resistenti per uso industriale",
  },
  {
    name: "Scarpe Antinfortunistiche",
    category: "Calzature",
    price: 59.99,
    code: "CPS003",
    image: "/images/scarpe.jpg",
    description: "Scarpe con puntale in acciaio",
  },
  {
    name: "Occhiali Protettivi",
    category: "Sicurezza",
    price: 14.99,
    code: "CPS004",
    image: "/images/occhiali.jpg",
    description: "Protezione occhi certificata",
  },
  {
    name: "Casco Antinfortunistico",
    category: "Sicurezza",
    price: 25.99,
    code: "CPS001",
    image: "/images/casco.jpg",
    description: "Casco di protezione per lavori edili",
  },
  {
    name: "Guanti da Lavoro",
    category: "Sicurezza",
    price: 9.99,
    code: "CPS002",
    image: "/images/guanti.jpg",
    description: "Guanti resistenti per uso industriale",
  },
  {
    name: "Scarpe Antinfortunistiche",
    category: "Calzature",
    price: 59.99,
    code: "CPS003",
    image: "/images/scarpe.jpg",
    description: "Scarpe con puntale in acciaio",
  },
  {
    name: "Occhiali Protettivi",
    category: "Sicurezza",
    price: 14.99,
    code: "CPS004",
    image: "/images/occhiali.jpg",
    description: "Protezione occhi certificata",
  },
];

const users = [
  {
    name: "Mario Rossi",
    email: "mario@example.com",
    password: "123456",
  },
  {
    name: "Luca Bianchi",
    email: "luca@example.com",
    password: "123456",
  },
];

const seedDB = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Product.deleteMany();
    await Cart.deleteMany();
    await Wishlist.deleteMany();

    console.log("Database pulito");

    //utenti
    const createdUsers = await User.insertMany(users);

    //prodotti
    const createdProducts = await Product.insertMany(products);

    //carrello (per primo utente)
    await Cart.create({
      user: createdUsers[0]._id,
      items: [
        {
          product: createdProducts[0]._id,
          quantity: 2,
        },
        {
          product: createdProducts[1]._id,
          quantity: 1,
        },
      ],
    });

    //wishlist
    await Wishlist.create({
      user: createdUsers[0]._id,
      products: [createdProducts[2]._id],
    });

    console.log("Seed completato");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
