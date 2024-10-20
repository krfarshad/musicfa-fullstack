const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String, // e.g., 'message', 'comment', 'like'
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String, // URL to the notification's related content
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
