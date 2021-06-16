const Author = require('../models/author');

exports.author_list = (req, res, next) => {
    // first query the DB
    Author.find()
    .sort([['family_name', 'ascending']])
    .exec((err, authors) => {
        if(err) next(err)
        res.render('author_list', {title: 'Author list', author_list: authors } )
    })
}

exports.author_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: author detail  ${req.params.id}`);
}

exports.author_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: author create GET`);
}

exports.author_create_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: author create POST`);
}

exports.author_delete_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: author delete GET`);
}

exports.author_delete_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: author delete POST`);
}

exports.author_update_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: author update GET`);
}

exports.author_update_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: author update POST`);
}
