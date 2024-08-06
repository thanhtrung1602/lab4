const usersRouter = require("./users");
const productRouter = require("./product");
const categoriesRouter = require("./categories");
const propertiesRouter = require("./properties");
function route(app) {
  app.use("/properties", propertiesRouter);
  app.use("/categories", categoriesRouter);
  app.use("/products", productRouter);
  app.use("/users", usersRouter);
}

module.exports = route;
