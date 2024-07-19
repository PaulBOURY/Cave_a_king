const Joi = require('joi');

const tables = require('../../database/tables');

const demoSchema = Joi.object({
  titre: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
});

const browse = async (req, res, next) => {
  try {
    const demos = await tables.Demonstration.readAll();
    res.json(demos);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const demo = await tables.Demonstration.read();
    res.json(demo);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the demo object from the request body
  const demo = req.body;

  // Validate the demo object using the schema
  const { error } = demoSchema.validate(demo);
  if (error) {
    // If validation fails, return a 400 Bad Request with the error message
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    // Attempt to create a new demonstration record in the database
    const insertId = await tables.Demonstration.create(demo);
    // Return a 201 Created status with the ID of the inserted record
    return res.status(201).json({ insertId });
  } catch (err) {
    // If any error occurs during database operation, pass it to the next middleware
    return next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const demo = { ...req.body, id };
  try {
    await tables.Demonstration.update(demo);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res) => {
  try {
    await tables.Demonstration.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { browse, read, add, edit, destroy };
