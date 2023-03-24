const filterlist = [
  {
    title: "โปรโมชั่น",
    content: [
      { id: 1, name: "จานเดี่ยว" },
      { id: 2, name: "ชุดสุดคุ้ม" },
      { id: 3, name: "สุกี้สด" },
      { id: 4, name: "เป็ดย่างและอื่นๆ" },
      { id: 5, name: "ของทานเล่น" },
      { id: 6, name: "น้ำและขนม" },
      { id: 7, name: "สแน็คบ็อกซ์และจัดเลี้ยง" },
    ],
  },
  {
    title: "จานเดี่ยว",
    content: [
      { id: 1, name: "ข้าว" },
      { id: 2, name: "บะหมี่" },
      { id: 3, name: "สุกี้ชาม" },
      { id: 4, name: "เกี๊ยว" },
    ],
  },
  {
    title: "ชุดสุดคุ้ม",
    content: [
      { id: 1, name: "เซ็ตสำหรับ 1 ท่าน" },
      { id: 2, name: "เซ็ตสำหรับ 2 ท่านขึ้นไป" },
      { id: 3, name: "เซ็ตสุกี้" },
      { id: 4, name: "เซ็ตข้าว" },
      { id: 5, name: "เซ็ตบะหมี่" },
    ],
  },
  {
    title: "สุกี้สด",
    content: [
      { id: 1, name: "เซ็ตสุกี้" },
      { id: 2, name: "คอนโด" },
      { id: 3, name: "เนื้อสัตว์" },
      { id: 4, name: "ลูกชิ้น" },
      { id: 5, name: "ผักและอื่นๆ" },
    ],
  },
  {
    title: "เป็ดย่างและอื่นๆ",
    content: [
      { id: 1, name: "เป็ด" },
      { id: 2, name: "หมู" },
      { id: 3, name: "เนื้อ" },
      { id: 4, name: "ผัก" },
      { id: 5, name: "อื่นๆ" },
    ],
  },
  {
    title: "ของทานเล่น",
    content: [
      { id: 1, name: "นึ่ง" },
      { id: 2, name: "ทอด" },
      { id: 3, name: "อื่นๆ" },
    ],
  },
  {
    title: "น้ำและขนม",
    content: [
      { id: 1, name: "น้ำ" },
      { id: 2, name: "ขนม" },
    ],
  },
  {
    title: "สแน็คบ็อกซ์และจัดเลี้ยง",
    content: [],
  },
];

export default function FilterBar(props) {
  const title_name = filterlist.filter((name) => name.title === props.title);

  const Filter = title_name[0].content.map((filter, index) => (
    <div key={index} className="flex mx-3">
      <input type="checkbox" onChange={props.onFilterChange} />
      <h1 className="mx-1 text-sm">{filter.name}</h1>
    </div>
  ));

  return (
    <div className="flex w-full bg-gray justify-center items-center py-6">
      <div className="w-8/12 flex items-center">
        <div className="border-l-2 h-9 mx-2"></div>
        <h1 className="text-2xl w-1/5 font-bold">{title_name[0].title}</h1>
        <div className="flex">{Filter}</div>
      </div>
    </div>
  );
}
