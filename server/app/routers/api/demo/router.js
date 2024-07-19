const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, add, edit, destroy } = require("../../../controllers/demoActions");

router.get('/', browse); // Route to get all items
router.post('/', add); // Route to add a new item
router.put('/:id', edit); // Route to edit an existing item
router.delete('/:id', destroy); // Route to delete an item

/* ************************************************************************* */

module.exports = router;
