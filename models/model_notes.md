# Mongoose models and schemas

- A model is a representation of an 'object' (a group of related information), like a book or an author
- Models often have relationships between them
  - These relationships can be many-to-one, many-to-many, etc.
  - For example, an author can have many books associated with it, and a book can (in some cases) have multiple authors
- Mongoose models are created using `mongoose.model('SomeModel', SomeModelSchema)` where `'SomeModel'` is the model name, and `SomeModelSchema` is the model schema.
- Models have schemas which give shape to their data. Mongoose has some built-in ways to validate data as well, which can be declared in the schema.
- It's also possible to created virtual properties on models. These are properties that won't be stored in the database, but that may provide helpful shortcuts in combining data (like combining `first_name` and `last_name` into a  `full_name` property).
- Models’ instances represent individual documents you can save and retrieve
- Creating a model: `const MyModel = mongoose.model(‘name-of-model’, SchemaForModel);`
- Creating a model instance: 
```
MyModel.create({ modelField: ‘value’ }, function(err, name_of_instance) 
  if (err) return handleError(err);
  // model is now created and saved
}
```
- Every model has an associated connection. To create documents in a different DB, create a new connection and call .model() on it (?)
- Can also save a model instance by calling .save() on it (pass in an error handling callback to .save() )
- To change the model, modify the fields and call .save(), i.e. MyModel.modelField = ‘new-value’;
- To search records: 
```
MyModel.find({‘modelField’: ’value’}, ‘myField myOtherField’, function(err, result) {
  if (err) handleError(err);
  return result;
  }
  ```
  - Here, we’re saying ‘give me the fields `myField` and `myOtherField` for all instances of `MyModel` where `modelField = value`’
  - If you supply a callback (like above), the query will execute immediately
  - If you don’t supply a callback, the API will return a variable of type `Query` - this can be used to build up a query and then execute it later with the `.exec()` method
  - You can build up a query by adding things like `.select`, `.limit`, `.sort`, etc
  - Also there’s a `.count()` method that gives you the number of items that match conditions
  
