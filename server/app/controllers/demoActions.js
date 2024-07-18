// Import access to database tables
const Joi = require("joi");
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const demos = await tables.Demonstration.readAll();

    // Respond with the items in JSON format
    res.json(demos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  try {
    await tables.Demonstration.update(user);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Define a Joi schema for demo data validation
const demoSchema = Joi.object({
  titre: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
});

const add = async (req, res, next) => {
  const demo = req.body;

  // Validate the incoming data against the schema
  const { error } = demoSchema.validate(demo);
  if (error) {
    // If validation fails, respond with a 400 Bad Request and the validation error message
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Insert the validated item into the database using the tables.Demonstration.create function
    const insertId = await tables.Demonstration.create(demo);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    return res.status(201).json({ insertId });
  } catch (err) {
    // If an error occurs during insertion, pass it to the error-handling middleware
    return next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res) => {
  try {
    await tables.Demonstration.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  edit,
  add,
  destroy,
};
