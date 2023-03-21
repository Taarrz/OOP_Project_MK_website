export default function CategoryBar() {
  const categorylist = [
    { image: "./logo192.png", title: "โปรโมชั่น" },
    { image: "./logo192.png", title: "จานเดี่ยว" },
    { image: "./logo192.png", title: "ชุดสุดคุ้ม" },
    { image: "./logo192.png", title: "สุกี้สด" },
    { image: "./logo192.png", title: "เป็ดย่างและอื่นๆ" },
    { image: "./logo192.png", title: "ของทานเล่น" },
  ];

  const Category = categorylist.map((category, index) => (
    <div key={index} className="grid place-items-center mx-14 my-2">
      <img src={category.image} width={50} alt="logo-category" />
      <h1>{category.title}</h1>
    </div>
  ));

  return <div className="flex w-full justify-center">{Category}</div>;
}
