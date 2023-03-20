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

export default function FilterBar(props) {
  const title_name = filterlist.filter((name) => name.title === props.title);

  const Filter = title_name[0].content.map((filter, index) => (
    <div key={index} className="flex mx-3">
      <input type="checkbox" onChange={props.onFilterChange} />
      <h1 className="mx-1">{filter.name}</h1>
    </div>
  ));

  return (
    <div className="flex w-full bg-gray justify-center items-center py-5">
      <div className="border-l-2 h-6 mx-2"></div>
      <h1 className="text-xl w-1/5">{title_name[0].title}</h1>
      {Filter}
    </div>
  );
}
