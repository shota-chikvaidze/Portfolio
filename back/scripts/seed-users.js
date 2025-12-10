require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function main() {
  try {
    const mongoUri = process.env.MONGO_DB;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not set in .env');
    }

    await mongoose.connect(mongoUri);

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD missing in .env');
    }

    let admin = await User.findOne({ email });

    if (admin) {
      if (admin.role !== 'admin') {
        admin.role = 'admin';
        admin.isActive = true;
        await admin.save();
      } else {
      }
    } else {
      admin = new User({
        email,
        password,
        role: 'admin',
      });

      await admin.save();
    }
  } catch (err) {
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

main();
