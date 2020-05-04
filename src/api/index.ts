import intersection from "lodash.intersection";

type Book = {
  id: number;
  series?: string;
  title: string;
  author: string;
  image: string;
  tags: string[];
};

const books: Book[] = [
  {
    id: 1,
    series: "Harry Potter",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    image: `${process.env.PUBLIC_URL}/books/harrypotter.jpg`,
    tags: ["fantasy", "magic", "puberty"],
  },
  {
    id: 2,
    series: "Lord of the Rings",
    title: "The fellowship of the Ring",
    author: "J. R. R. Tolkien",
    image: `${process.env.PUBLIC_URL}/books/lotr.jpg`,
    tags: ["fantasy", "magic", "jewelry"],
  },
  {
    id: 3,
    series: "Game of Thrones",
    title: "A Song of Ice and Fire",
    author: "George R. R. Martin",
    image: `${process.env.PUBLIC_URL}/books/gameofthrones.jpg`,
    tags: ["fantasy", "killing everyone you will care about"],
  },
  {
    id: 4,
    series: "Sherlock Holmes",
    title: "The adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    image: `${process.env.PUBLIC_URL}/books/sherlockholmes.jpg`,
    tags: ["detective", "crime", "drug abuse"],
  },
  {
    id: 5,
    title: "Murder on the Orient Express",
    author: "Agatha Cristie",
    image: `${process.env.PUBLIC_URL}/books/murderorient.jpg`,
    tags: ["detective", "crime", "tourism"],
  },
  {
    id: 6,
    title: "Neuromancer",
    author: "William Gibson",
    image: `${process.env.PUBLIC_URL}/books/neuromancer.jpg`,
    tags: ["science fiction", "matrix", "cowboys"],
  },
  {
    id: 7,
    title: "Ready Player One",
    author: "Ernest Cline",
    image: `${process.env.PUBLIC_URL}/books/readyp1.jpg`,
    tags: ["science fiction", "matrix", "insert coin"],
  },
];

export function fetchBooks() {
  return fakeRequest(books);
}

export function fetchBook(id: number) {
  const book = books.find((book) => book.id === id);
  return fakeRequest(book);
}

export function fetchBooksByTags(tags: string[]) {
  const similar = books.filter((p) => intersection(p.tags, tags).length > 0);
  return fakeRequest(similar);
}

export function getUser() {
  return fakeRequest({
    id: 1,
    name: "cassiozen",
    token: "k536kh36kh456h4536",
    picture: `${process.env.PUBLIC_URL}/profile-pic.png`,
  });
}

// Returns a promise for data that resolves after a random timeout (0 to 500 ms).
function fakeRequest<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 100);
  });
}
