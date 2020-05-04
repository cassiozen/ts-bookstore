# React & Typescript bookstore

Sample implementation: https://tsbookstore.netlify.app/

## Exercise:

1. Start simple, create the auth component.
   - It should show a "login" button with a click handler to call the `getUser` api method. (Remember that all API methods return promises).
   - When logged, it should display the user's name and profile picture
1. Book Select: List all book titles in a select type of component.
   - Use the `fetchBooks` api method.
   - When a book title is selected, show the book details bellow the select.
1. Book details
   - Book details should be a separate component.
   - Display the book's title, author, image and tags
1. Similar books (You might also like)
   - To display similar books, use the `fetchBooksByTags` api method.
   - The `fetchBooksByTags` will return an array of all books with matching tags, so make sure to filter the results to exclude the currently selected book.
