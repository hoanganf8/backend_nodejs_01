// var categories = [
//   {
//     id: 1,
//     name: "Chuyên mục 1",
//   },
//   {
//     id: 2,
//     name: "Chuyên mục 2",
//     children: [
//       {
//         id: 4,
//         name: "Chuyên mục 2.1",
//       },
//       {
//         id: 5,
//         name: "Chuyên mục 2.2",
//         children: [
//           {
//             id: 10,
//             name: "Chuyên mục 2.2.1",
//           },
//           {
//             id: 11,
//             name: "Chuyên mục 2.2.2",
//           },
//           {
//             id: 12,
//             name: "Chuyên mục 2.2.3",
//           },
//         ],
//       },
//       {
//         id: 6,
//         name: "Chuyên mục 2.3",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Chuyên mục 3",
//     children: [
//       {
//         id: 7,
//         name: "Chuyên mục 3.1",
//       },
//       {
//         id: 8,
//         name: "Chuyên mục 3.2",
//       },
//       {
//         id: 9,
//         name: "Chuyên mục 3.3",
//       },
//     ],
//   },
// ];

// var getCategories = function (categories, char = "") {
//   if (categories.length) {
//     return categories.map(function (category) {
//       if (category.children) {
//         return (
//           `<option>${char}${category.name}</option>` +
//           getCategories(category.children, char + "--|")
//         );
//       }

//       return `<option>${char}${category.name}</option>`;
//     });
//   }
// };

var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// console.log(categories);

var getCategories = function (categories, parentId = 0, char = "") {
  if (categories.length) {
    return categories.map(function (category) {
      if (category.parent === parentId) {
        return (
          `<option>${char}${category.name}</option>` +
          getCategories(categories, category.id, char + "--|")
        );
      }
    });
  }
};

var html = `<select>
<option>Chọn chuyên mục</option>
 ${getCategories(categories)}
</select>`;

document.write(html);
