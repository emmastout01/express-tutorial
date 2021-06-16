const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

// Virtual for author's full name
// NOTE: For some reason this isn't working with the book controller .populate('author') method, not sure why
// However, the book url virtual IS working with the book controller. Hmm. Something about combining 'populate' with a virtual?
// FOLLOW-UP NOTE: Solved! The issue is that here, I used an arrow function. Arrow functions do not bind 'this' in the same way that 
// function expressions (I think that's the right phrase) do. So, 'this' was undefined, and thus 'this.family_name' was undefined.
// So it's not an issue with virtuals or .populate.
// AuthorSchema
//     .virtual('name')
//     .get(() => {
//         console.log('getting name: ', this.family_name)
//         return `${this.family_name},  ${this.first_name}`
//     });

    // Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
    });

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

//  This creates a model wherever we import it
module.exports = mongoose.model('Author', AuthorSchema);