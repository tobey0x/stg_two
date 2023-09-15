module.exports = app => {
  const persons = require("../controllers/controller");

  const router = require("express").Router();
  
  // router.get("/", persons.getUsers);
  router.post("/", persons.addPerson);
  router.get("/:user_id", persons.getPersonById);
  router.put("/:user_id", persons.updatePerson);
  router.delete("/:user_id", persons.deletePerson);

  app.use('/api', router);
};

