const express = require("express");
const app = express();
const config = require("./global.config");
const routes = require("./routes");
app.use("/api", routes);
const PORT = config.port || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
