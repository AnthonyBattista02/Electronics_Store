const db = require('../db/index')
const { Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const products = [
    {
        name: "Smart-phone",
        description: "6.5-inch OLED display, 128GB storage, dual-camera system.",
        price: 699.99,
        category: "Mobile Devices",
        imageURL: "/images/smartphone.jpg"
    },
    {
        name: "Laptop",
        description: "15-inch display, 8GB RAM, 256GB SSD, Intel i5 processor.",
        price: 999.99,
        category: "Computers",
        imageURL: "/images/laptop.jpg"
    },
    {
        name: "Bluetooth Headphones",
        description: "Over-ear, noise-cancelling, up to 20 hours of playback.",
        price: 199.99,
        category: "Audio",
        imageURL: "/images/headphones.jpg"
    },
    {
        name: "Smartwatch",
        description: "Heart rate monitor, GPS, waterproof, notifications.",
        price: 249.99,
        category: "Wearables",
        imageURL: "/images/smartwatch.jpg"
    },
    {
        name: "Digital Camera",
        description: "24MP, 4K video recording, 3-inch LCD display.",
        price: 549.99,
        category: "Photography",
        imageURL: "/images/camera.jpg"
    },
    {
        name: "Gaming Console",
        description: "1TB storage, includes one controller, 4K gaming.",
        price: 399.99,
        category: "Gaming",
        imageURL: "/images/console.jpg"
    },
    {
        name: "Tablet",
        description: "10-inch display, 64GB storage, stylus included.",
        price: 329.99,
        category: "Mobile Devices",
        imageURL: "/images/tablet.jpg"
    },
    {
        name: "Smart Speaker",
        description: "Voice-controlled, integrates with smart home devices.",
        price: 89.99,
        category: "Audio",
        imageURL: "/images/speaker.jpg"
    },
    {
        name: "Wireless Charger",
        description: "Fast-charging, compatible with most smartphones.",
        price: 29.99,
        category: "Accessories",
        imageURL: "/images/charger.jpg"
    },
    {
        name: "Fitness Tracker",
        description: "Step counter, sleep tracking, heart rate monitor.",
        price: 49.99,
        category: "Wearables",
        imageURL: "/images/tracker.jpg"
    },

    {
        name: "Ultra-Slim Smartphone",
        description: "5.5-inch OLED display, 64GB storage, single-camera system.",
        price: 599.99,
        category: "Mobile Devices",
        imageURL: "/images/ultra-slim-smartphone.jpg"
    },
    {
        name: "Gaming Laptop",
        description: "17-inch display, 16GB RAM, 512GB SSD, Intel i7 processor, RTX 3060 GPU.",
        price: 1499.99,
        category: "Computers",
        imageURL: "/images/gaming-laptop.jpg"
    },
    {
        name: "Wireless Earbuds",
        description: "In-ear, noise-cancelling, up to 15 hours of playback with charging case.",
        price: 129.99,
        category: "Audio",
        imageURL: "/images/earbuds.jpg"
    },
    {
        name: "Fitness Smartwatch",
        description: "Heart rate monitor, GPS, waterproof, sleep tracking, notifications.",
        price: 279.99,
        category: "Wearables",
        imageURL: "/images/fitness-smartwatch.jpg"
    },
    {
        name: "Mirrorless Camera",
        description: "20MP, 4K video recording, interchangeable lenses.",
        price: 749.99,
        category: "Photography",
        imageURL: "/images/mirrorless-camera.jpg"
    },
    {
        name: "Portable Gaming Console",
        description: "Handheld, includes built-in games, 720p display.",
        price: 199.99,
        category: "Gaming",
        imageURL: "/images/portable-console.jpg"
    },
    {
        name: "Pro Tablet",
        description: "12-inch display, 128GB storage, stylus included, keyboard support.",
        price: 799.99,
        category: "Mobile Devices",
        imageURL: "/images/pro-tablet.jpg"
    },
    {
        name: "Smart Soundbar",
        description: "Voice-controlled, integrates with smart home devices, superior audio quality.",
        price: 199.99,
        category: "Audio",
        imageURL: "/images/soundbar.jpg"
    },
    {
        name: "Magnetic Phone Mount",
        description: "Attach to car's vent, magnetic grip, rotates 360 degrees.",
        price: 19.99,
        category: "Accessories",
        imageURL: "/images/magnetic-mount.jpg"
    },
    {
        name: "Advanced Fitness Tracker",
        description: "Step counter, sleep tracking, heart rate monitor, GPS, waterproof.",
        price: 99.99,
        category: "Wearables",
        imageURL: "/images/advanced-tracker.jpg"
    }
];

module.exports = products;

await Product.insertMany(products)
console.log("Prodcuts created!")
}
const run = async () => {
await main()
db.close()
}

run()