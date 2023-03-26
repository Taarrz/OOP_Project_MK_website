import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import CategoryBar from "../components/CategoryBar";

const SingleProduct = () => {
  const { id } = useParams();
  const singleproduct = productData.filter((product) => `${product.id}` === id);
  return (
    <div className="font-kanit">
      <CategoryBar />
      <div className="flex w-full justify-center my-16">
        <div className="mx-5">
          <img
            className="rounded-xl"
            width={540}
            src={singleproduct[0].imageUrl}
            alt={singleproduct[0].id}
          />
          <div className="flex my-2 items-center justify-end">
            <div className="bg-red w-4 h-4 rounded-full mr-2"></div>
            <p>{singleproduct[0].calories} kcal.</p>
          </div>
        </div>
        <div className="mx-5 w-[30%]">
          <h1 className="font-extrabold text-3xl mb-2">
            {singleproduct[0].name}
          </h1>
          <p>{singleproduct[0].description}</p>
          <div className="flex items-center justify-between mt-9">
            <div className="flex items-center">
              <h1>จำนวน</h1>
              <button className="border px-2 mx-3 rounded-full" onClick={minus}>
                -
              </button>
              <p id="quantity">1</p>
              <button className="border px-2 mx-3 rounded-full" onClick={plus}>
                +
              </button>
            </div>
            <button className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-between w-[130px]">
              +
              <img
                src="../icon/cart-icon.png"
                className="w-5"
                alt="cart-icon"
              />
              <div className="border-l h-5"></div>
              {singleproduct[0].price} .-
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

//plus button function
function plus() {
  var quantity = parseInt(document.getElementById("quantity").innerHTML);
  quantity += 1;
  document.getElementById("quantity").innerHTML = quantity;
}

function minus() {
  var quantity = parseInt(document.getElementById("quantity").innerHTML);
  quantity -= 1;
  document.getElementById("quantity").innerHTML = quantity <= 1 ? 1 : quantity;
}
