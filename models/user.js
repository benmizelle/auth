const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model defined===================================================
// ================================================================
const userSchema = new Schema({
   email: { type: String, unique: true, lowercase: true },
   password: String
});

// Create model class=============================================
// ===============================================================
const ModelClass = mongoose.model('user', userSchema);

// Export model===================================================
// ===============================================================
module.exports = ModelClass;