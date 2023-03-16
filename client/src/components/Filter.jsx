const filterlist = [
  { title: "ข้าว" },
  { title: "บะหมี่" },
  { title: "สุกี้ชาม" },
  { title: "เกี๊ยว" },
];

export default function FilterBar() {
  const Filter = filterlist.map((filter) => (
    <div className="mx-5">
      <input type="checkbox" className="" />
      <label>{filter.title}</label>
    </div>
  ));
  return (
    <div className="flex w-full bg-gray justify-center py-5">{Filter}</div>
  );
}
