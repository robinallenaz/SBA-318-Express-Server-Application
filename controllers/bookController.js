//Handles the creation of a new book, taking in the book's details from the request body and saving it to the database
exports.createBook = async (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);
    await book.save();
    res.json(book);
  };

//Get all books - retrieves books from the database and returns them as a JSON response

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
  };

//Get a single book by ID
exports.getBookById = async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    res.json(book);
  };

//Update a book
exports.updateBook = async (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;
    const book = await Book.findByIdAndUpdate(bookId, bookData, { new: true });
    res.json(book);
  };