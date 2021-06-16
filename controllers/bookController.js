var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

const async = require('async');
// Get count of all of the documents, then pass those results to res.render
exports.index = function (req, res) {
    async.parallel({
        book_count: (callback) => {
            // Here we're using Mongoose: taking our Book model and using the `countDocuments` query on it, 
            // which (I think) searches our MongoDB collection. So this request is one from the server to the DB, 
            // as opposed to from the client to the server.
            Book.countDocuments({}, callback); // Pass an empty object as the match condition to count all books
        },
        book_instance_count: function (callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function (callback) {
            BookInstance.countDocuments({ status: 'Available' }, callback);
        },
        author_count: function (callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function (callback) {
            Genre.countDocuments({}, callback);
        }
    }, function (err, results) {
        // This specifies to pass to the /index views file
        // The data object will be used by pug to populate the view
        res.render('index', { title: 'Local Library Home', error: err, data: results })
    })
};

// Display list of all books.
exports.book_list = function (req, res, next) {
    // First, query the DB
    Book.find({}, 'title author') // return the title and author fields for all books in the collection
        .populate('author') // fill in the author's data from the author id
        .exec(function (err, list_books) {
            if (err) return next(err); // if there's an error pass it along
            // Render the contents of the 'book_list' view file with the DB search results
            console.log('books: ', list_books);
            res.render('book_list', { title: 'Book list', book_list: list_books });
        })
};

// Display detail page for a specific book.
exports.book_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};