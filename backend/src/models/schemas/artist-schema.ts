export const artistSchemaValidator = {
  username: {
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        "Username must be at least 5 characters with a max of 32 characters",
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be a string!",
    },
  },
  name: {
    notEmpty: {
      errorMessage: "Artist name cannot be empty",
    },
    isString: {
      errorMessage: "Artist name must be a string!",
    },
  },
  bio: {
    optional: true,
    isString: {
      errorMessage: "Bio must be a string!",
    },
  },
  avatarUrl: {
    notEmpty: {
      errorMessage: "Avatar URL cannot be empty",
    },
    isString: {
      errorMessage: "Avatar URL must be a string!",
    },
    isURL: {
      errorMessage: "Avatar URL must be a valid URL",
    },
  },
};
