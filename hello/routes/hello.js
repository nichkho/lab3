
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nicholas = req.params.userName;
  console.log("name is " + nicholas);
  res.render('index', {
  	'name': nicholas,
  });
};
