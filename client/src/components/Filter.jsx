const filterlist = [
  {
    title: "จานเดี่ยว",
    content: [
      { id: 1, name: "ข้าว" },
      { id: 2, name: "บะหมี่" },
      { id: 3, name: "สุกี้ชาม" },
      { id: 4, name: "เกี๊ยว" },
    ],
  },
];

export default function FilterBar() {
  const Filter = filterlist.map((filter) => (
    <div>
      <h1>{filter.title}</h1>
      {/* <div className="border-l-2 h-8"></div> */}
    </div>
  ));
  return (
    <div className="flex w-full bg-gray justify-center items-center py-5">
      {Filter}
    </div>
  );
}
