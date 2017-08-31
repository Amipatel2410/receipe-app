require('isomorphic-fetch');
require('dotenv').config();


const API_KEY = process.env.API_KEY;

function getReceipeFromAPI(req, res, next) {
  let title = req.body.title.split(" ").join("%20")
  fetch(`http://food2fork.com/api/search?key={API_KEY}&q=${req.params.title}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      console.log(jsonRes.main);
      res.locals.receipeData = jsonRes.main;
      next();
    }).catch(err => {
      console.log(err);
      next();
    })


module.exports = {
  getReceipeFromAPI,
}

}
