import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  },
  displayName: mongoose.Schema.Types.String,
  password: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    validate: {
      validator: function (mail: string) {
        return /.+@.+\..+/.test(mail);
      },
      message: (props: any) => `${props.value} is not a valid email!`,
    },
  },
  role: {
    type: mongoose.Schema.Types.String,
    enum: ["user", "admin"],
    require: true,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
