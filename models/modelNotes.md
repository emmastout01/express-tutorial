# Mongoose models and schemas

- A model is a representation of an 'object' (a group of related information), like a book or an author
- Models often have relationships between them
  - These relationships can be many-to-one, many-to-many, etc.
  - For example, an author can have many books associated with it, and a book can (in some cases) have multiple authors
- Mongoose models are created using `mongoose.model('SomeModel', SomeModelSchema)` where `'SomeModel'` is the model name, and `'SomeModelSchema'` is the model schema.
- Models have schemas which give shape to their data. Mongoose has some built-in ways to validate data as well, which can be declared in the schema.
- It's also possible to created virtual properties on models. These are properties that won't be stored in the database, but that may provide helpful shortcuts in combining data (like combining `first_name` and `last_name` into a  `full_name` property).