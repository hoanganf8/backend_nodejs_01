var express = require("express");
var router = express.Router();
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;
const Post = model.Post;
const Author = model.Author;
const Book = model.Book;
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/lay-user", async (req, res) => {
  // const user = await User.findOne({
  //   where: {
  //     id: 1,
  //   },
  // });

  // // console.log(user);
  // const phone = await user.getDienthoai();
  // console.log(phone.phone_number);

  // const phone = await Phone.findOne({
  //   where: {
  //     phone_number: "0123456789",
  //   },
  // });

  // const user = await phone.getUser();
  // console.log(user);

  // const users = await User.findAll();
  // users.forEach(async (user) => {
  //   const phone = await user.getPhone();
  //   console.log(`Name = ${user.name} - Phone = ${phone.phone_number}`);
  // });

  //=> Query N + 1

  //Eager Loading

  // const users = await User.findAll({
  //   include: {
  //     model: Phone,
  //     required: true,
  //   },
  // });
  // users.forEach((user) => {
  //   console.log(`Name = ${user.name} - Phone = ${user?.Phone?.phone_number}`);
  // });

  // const user = await User.findOne({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     model: Post,
  //     where: {
  //       title: {
  //         [Op.like]: "%viết 1%",
  //       },
  //     },
  //   },
  // });

  // // const posts = await user.getBaiviet();
  // const { Posts: posts } = user;
  // console.log(posts);

  // const author = await Author.findByPk(1);
  // const books = await author.getBooks();
  // console.log(books);
  // const book = await Book.findByPk(1);
  // const authors = await book.getAuthors();
  // console.log(authors);
  // const author = await Author.findOne({
  //   where: {
  //     id: 1,
  //   },
  //   include: Book,
  // });
  // console.log(author.Books);

  const author = await Author.create({
    name: "Hoàng An",
  });
  const book = await Book.create({
    code: "03",
    name: "Làm sao để hack Nasa",
  });
  await author.addBook(book);

  res.send("<h1>Lấy user</h1>");
});

module.exports = router;
