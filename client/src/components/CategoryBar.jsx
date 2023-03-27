const categorylist = [
  { image: "./logo192.png", title: "โปรโมชั่น" },
  { image: "./logo192.png", title: "จานเดี่ยว" },
  { image: "./logo192.png", title: "ชุดสุดคุ้ม" },
  { image: "./logo192.png", title: "สุกี้สด" },
  { image: "./logo192.png", title: "เป็ดย่างและอื่นๆ" },
  { image: "./logo192.png", title: "ของทานเล่น" },
];
function CategoryBar() {
  const Category = categorylist.map((category) => (
    <div className="grid place-items-center mx-14 my-2">
      <img src={category.image} width={50} />
      <h1>{category.title}</h1>
    </div>
  ));

  return <div className="flex w-full justify-center">{Category}</div>;
}

export default CategoryBar;
