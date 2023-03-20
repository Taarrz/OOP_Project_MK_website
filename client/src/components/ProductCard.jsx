export default function ProductCard() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-[296px] h-[183px] bg-[url('https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg')] bg-cover"></div>
      <div className="flex justify-between w-full p-4 px-6">
        <h1 className="pt-4">Good Suki</h1>
        <button className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-between w-2/5">
          +
          <img src="./icon/cart-icon.png" className="w-5" alt="cart-icon" />
          <div className="border-l h-5"></div>
          160 .-
        </button>
      </div>
    </div>
  );
}
