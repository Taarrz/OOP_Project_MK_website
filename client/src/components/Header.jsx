function Header() {
  return (
    <div className="text-white">
      <div className="bg-red flex justify-center">
        <div className="items-center flex w-full justify-between my-2 mx-6">
          <div className="">
            <a href="/">
              <img src="/logo.png" alt="logo" className="h-14" />
            </a>
            <p className="text-sm">
              สามารถสั่งอาหารได้ <strong>10:00 - 19:45 น.</strong>
            </p>
          </div>
          <div className="grid font-semibold w-2/5 place-items-center py-4 space-y-3">
            <h1 className="text-2xl">
              Welcome to <strong>MK Online Delivery</strong>
            </h1>
            <div className="flex">
              <div className="button-box flex">
                <div id="btnn" className="left-0"></div>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={leftClick}
                >
                  <img
                    src="./icon/delivery.png"
                    width={20}
                    className="mr-3"
                    alt="delivery-icon"
                  />
                  เดลิเวอรี่
                </button>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={rightClick}
                >
                  <img
                    src="./icon/shop.png"
                    width={20}
                    className="mr-3"
                    alt="shop-icon"
                  />
                  รับสินค้าที่ร้าน
                </button>
              </div>
            </div>
            <div className="search-box flex w-full justify-between">
              <input
                className="p-3 h-4 text-xs font-light w-full rounded-l-md"
                type="text"
                placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง"
                autoComplete="off"
              />
              <div className="search-icon grid bg-gray rounded-r-md place-items-center w-8">
                <a href="/">
                  <img src="/crosshair.png" alt="crosshair logo" width="13" />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <a href="/login">เข้าสู่ระบบ/ลงทะเบียน</a>
            <div>
              <div className="lang-select"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function leftClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "0";
  }

  function rightClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "50%";
  }
}

export default Header;
