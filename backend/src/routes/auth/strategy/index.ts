import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { mockUsers } from "..";

passport.use(
  new LocalStrategy((username: string, password: string, done: any) => {
    try {
      const findUser = mockUsers.find(
        (mockUser) => mockUser.username === username
      );
      if (!findUser) return done(null, false, { message: "User not found" });
      if (findUser.password !== password)
        return done(null, false, { message: "Invalid credentials!" });
      return done(null, findUser);
    } catch (err) {
      return done(err);
    }
  })
);

export default passport;
