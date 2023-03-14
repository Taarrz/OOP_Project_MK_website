import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="font-kanit text-white">
      <div className="bg-red flex justify-center">
        <div className="items-center flex w-11/12 justify-between my-3">
          <div className="">
            <img src="/assets/pics/logo.png" alt="logo" />
            <p className="">
              สามารถสั่งอาหารได้ <strong>10:00 - 19:45 น.</strong>
            </p>
          </div>
          <div className="grid font-semibold place-items-center py-4 space-y-3">
            <h1 className="text-3xl">
              Welcome to <strong>MK Online Delivery</strong>
            </h1>
            <div class="" className="flex">
              {/* create 2 toggle button */}
              <div class="button-box"className="flex">
                <button className="btn">Create New Order</button>
                <button className="btn">Create New Order</button>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง"
                autoComplete="off"
              ></input>
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
}

export default App;
