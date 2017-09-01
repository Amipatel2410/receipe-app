require('isomorphic-fetch');
require('dotenv').config();


const API_KEY = process.env.API_KEY;

function getReceipeFromAPI(req, res, next) {
  console.log('--getReceipeFromAPI--')
  let title = req.body.title.split(" ").join("%20")
  fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    .then(fetchRes => {
      console.log('got data back -->', fetchRes);
      return fetchRes.json();
      }).then(data => {

      console.log(data);
      res.locals.recipeData = data;
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getReceipeFromAPI,
}


