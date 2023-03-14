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
    <div>
      <div></div>
      <div className="bg-red">
        <div className="items-center flex">
          <div className="">
            <a href="/">
              <img src=""></img>
            </a>
            <p>
              สามารถสั่งอาหารได้ <strong>10:00 - 19:45 น.</strong>
            </p>
          </div>
          <div className="">
            <h1>Welcome to<strong>MK Online Delivery</strong></h1>
            <div>
              <input type="text" placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง" autoComplete="off"></input>
            </div>
          </div>
          <div className="">
            <a href="/login">
              <div className="">
                <i>
                  เข้าสู่ระบบ/ลงทะเบียน
                </i>
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
