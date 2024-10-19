import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/user";
import { comparePassword } from "../utils/passwordUtils";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);

    if (!findUser) done("Incorrect password or username", null);
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not found");

      if (
        typeof findUser.password == "string" &&
        !comparePassword(password, findUser.password)
      ) {
        throw new Error("Incorrect password or username");
      }
      done(null, findUser);
    } catch (err) {
      done(err);
    }
  })
);
