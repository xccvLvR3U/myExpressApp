//controllers are a collection of route handellers

exports.index = function (req, res, next) {
//// referring to a template 
    res.render('index', {title: 'Express'});
};