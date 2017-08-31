const ReceipesearchController = {};

ReceipesearchController.index = (req, res) => {
  res.json({
    message: 'Here is our receipe index route',
  });
}

ReceipesearchController.sendApiReceipe = (req, res) => {
  res.json({
    message: `Receipe for ${req.params.title}`,
    weather: res.locals.receipeData,
  })
}

module.exports = ReceipesearchController;
