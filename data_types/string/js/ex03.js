// var html = `<h1>Học lập trình tại F8</h1>`;

//Render html lên UI => DOM

// document.write(html);

var content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, aut quas et quae magnam dolor commodi ex architecto. Nemo ipsum, distinctio modi deserunt aperiam, doloribus illo sit dolores deleniti unde error officiis repudiandae ut esse veniam aut similique ipsam quibusdam, quod minus corrupti ex animi? Magni reprehenderit, ex possimus odit repudiandae exercitationem sequi veritatis tempora numquam obcaecati perspiciatis quod eos architecto doloremque, ab quia facere ducimus. Sapiente odit eveniet enim quidem. Aut molestias assumenda veritatis aperiam architecto at dignissimos corporis sint nihil perferendis praesentium, quas eum est repudiandae tenetur? Blanditiis ut deleniti vel quos odio voluptatem repellat animi aliquid tempore.s`;

var keyword = `QUOD`;

// var firstContent = content.slice(0, position);

// content = content.slice(position);

// content =
//   firstContent +
//   "<span>" +
//   content.slice(0, keyword.length) +
//   "</span>" +
//   content.slice(keyword.length);

// console.log(content);

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var contentFind = "";
while (position !== -1) {
  var firstContent = content.slice(0, position);
  content = content.slice(position); //Cắt từ đầu cho đến keyword
  contentFind =
    contentFind +
    firstContent +
    "<span>" +
    content.slice(0, keyword.length) +
    "</span>";

  content = content.slice(keyword.length); //Tìm thấy xong thì cắt

  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

content = contentFind + content; //Nối tất cả chuỗi tìm được với content còn lại

document.write(content);

/*
Học lập trình tại F8 Academy

- Học lập trình tại 
- <span>F8</span>
-  Academy
*/
