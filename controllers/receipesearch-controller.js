




const receipesearchController = {};
receipesearchController.index = (req, res) => {
  res.json({
    message: 'Here is our receipe index route',
  });
}
receipesearchController.sendApiReceipe = (req, res) => {
  res.render('receipesearch/results', {

     data: res.locals.recipeData
  })
};
module.exports = receipesearchController;
