const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const eventname = req.body.eventname;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newEvent = new Event({
    username,
    email,
    eventname,
    description,
    date,
  });

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;