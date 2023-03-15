const Header = () => {
    return(
        <div className="font-kanit text-white">
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
                <div id="btnn"></div>
                <button className="toggle-button btn">เดลิเวอรี่</button>
                <button className="toggle-button btn">รับสินค้าที่ร้าน</button>
              </div>
            </div>
            <div className="search-box flex w-full justify-between">
              <input
                className="p-3 h-4 text-xs font-light w-full rounded-l-md"
                type="text"
                placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง"
                autoComplete="off"
                onChange={(e) => {
                  setData(
                    data.filter((item) => {
                      return item.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase());
                    })
                  );
                }}
              />
              <div className="search-icon grid bg-grey rounded-r-md place-items-center w-8">
                <a href="/">
                  <img src="/crosshair.png" alt="crosshair logo" width="13"/>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <a href="/login">
              <div className="">
                <i>เข้าสู่ระบบ/ลงทะเบียน</i>
              </div>
            </a>
            <div>
              <div className="lang-select"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;