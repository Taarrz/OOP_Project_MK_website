export default function ProductCard(product) {
  return (
    <div className="flex flex-col items-center bg-white m-3">
      <img src={product.product.imageUrl} alt={product.product.id} />
      <div className="flex justify-between w-full my-2">
        <h1 className="pt-4">{product.product.name}</h1>
        <button className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-between w-2/5">
          +
          <img src="./icon/cart-icon.png" className="w-5" alt="cart-icon" />
          <div className="border-l h-5"></div>
          {product.product.price} .-
        </button>
      </div>
    </div>
  );
}
