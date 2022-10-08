import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import Main from "./components/Main";

const App = () => {
  const [hotels, setHotels] = useState([
    {
      serial_num: "0",
      fig: "https://www.amba-hotels.com/tc/ximending/images/sliders/home--laiba_half.jpg",
      title: "台北西門町意舍酒店",
      score: "4.5",
      price: "1733",
      location: "台北市",
      description:
        "台北西門町意舍酒店距離捷運西門站步行 7分鐘，設有餐廳、洗衣服務和全館免費 WiFi，提供現代化的環保住宿。台北西門町意舍酒店位於西門町商圈的中心地帶，交通便利，距離西門紅樓步行 7 分鐘；距離華西街觀光夜市 7分鐘車程；距離桃園國際機場約 45 分鐘車程。",
      Wifi: true,
      noSmoke: true,
      kitchen: false,
      laundry: true,
      parking_area: true,
      pet_friendly: true,
    },
    {
      serial_num: "1",
      fig: "https://www.mrhost.com.tw/uploads/1/3/2/6/132694223/s522922251240482309_p524_i12_w800.jpeg",
      title: "德立莊昆明館",
      score: "4.1",
      price: "1040",
      location: "台北市",
      description:
        "HOTEL PAPA WHALE，其命名靈感來自海中霸王最大哺乳類動物-鯨魚，象徵如鯨魚自在暢游於藍海中一般，酒店外觀以白色鍍鋅浪板營造出簡約風格，由名設計師操刀將老建築改造，重新堆砌成輕工業風及SOHO都會風的空間，建構出獨樹一格的現代設計風格酒店。",
      Wifi: true,
      noSmoke: true,
      kitchen: false,
      laundry: false,
      parking_area: false,
      pet_friendly: true,
    },
    {
      serial_num: "2",
      fig: "https://www.kmileshow.com/wp-content/uploads/2021/02/IMG_2320-1024x768.jpg",
      title: "鳳凰閣溫泉旅店",
      score: "4.0",
      price: "2682",
      location: "台北市",
      description:
        "鳳凰閣温泉飯店坐落在北投，著名的溫泉區之一，並提供溫泉設施和住宿。此外，也提供免費停車場和免費的 WiFi。鳳凰閣溫泉大酒店從台北火車站有 30 分鐘的車程，或 1 小時的捷運車程。從捷運新北投站抵達飯店需要步行 15 分鐘。附近的其他地標如北投溫泉區、北投圖書館和北投溫泉博物館均不到 10 分鐘的步行路程即可到達。",
      Wifi: true,
      noSmoke: true,
      kitchen: false,
      laundry: true,
      parking_area: true,
      pet_friendly: false,
    },
    {
      serial_num: "3",
      fig: "https://1.bp.blogspot.com/-6XQW4GAON-k/UDtxetkFFeI/AAAAAAAAHIQ/XCmS5fq_VZg/s1600/1.jpg",
      title: "城市商旅-南東館",
      score: "4.2",
      price: "1283",
      location: "台北市",
      description:
        "城市商旅－南東館位於台北市，附設餐廳。步行至饒河街觀光夜市約需 7 分鐘。館內提供免費 WiFi。每間客房均配備電視和空調，並設有休息區。房內還提供冰箱。私人衛浴設有淋浴設施，並備有吹風機。城市商旅－南東館設有 24 小時接待櫃台。館內其他設施包括行李寄存服務。",
      Wifi: true,
      noSmoke: true,
      kitchen: false,
      laundry: false,
      parking_area: false,
      pet_friendly: false,
    },
    {
      serial_num: "4",
      fig: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/136603207.jpg?k=ceb55b3f4e4af8454661b912e47b7984da1a914ad100b05b6a052aa8c01df335&o=&hp=1",
      title: "台北凱達大飯店",
      score: "4.3",
      price: "2090",
      location: "台北市",
      description:
        "台北凱達大飯店位於與萬華火車站共構的萬華雙子星大樓，可飽覽台北美景，距離捷運龍山寺站（2 號出口）僅 3 分鐘步行路程，提供免費停車場。台北凱達大飯店距離西門町僅 1 站捷運，距離台北車站 2 站捷運。",
      Wifi: true,
      noSmoke: true,
      kitchen: true,
      laundry: false,
      parking_area: true,
      pet_friendly: true,
    },
  ]);
  const [filterOptions, setFilterOptions] = useState({
    Wifi: false,
    noSmoke: false,
    kitchen: false,
    laundry: false,
    parking_area: false,
    pet_friendly: false,
  });

  const onOptionClick = (option) => {
    let newOptions = { ...filterOptions };
    newOptions[`${option}`] = !newOptions[`${option}`];
    setFilterOptions(newOptions);
  };

  const sortByOption = (list, option, order) => {
    if (order === "ascend") {
      return list.sort((a, b) => {
        return +a[`${option}`] - +b[`${option}`];
      });
    } else {
      return list.sort((a, b) => {
        return +b[`${option}`] - +a[`${option}`];
      });
    }
  };

  const changeOrder = (option) => {
    let newList = [...hotels];

    switch (option) {
      case "為您精選":
        newList = sortByOption(newList, "serial_num", "ascend");
        break;
      case "評分由高至低":
        newList = sortByOption(newList, "score", "descend");
        break;
      case "評分由低至高":
        newList = sortByOption(newList, "score", "ascend");
        break;
      case "價格由高至低":
        sortByOption(newList, "price", "descend");
        break;
      case "價格由低至高":
        sortByOption(newList, "price", "ascend");
        break;
      default:
        return;
    }

    setHotels(newList);
  };

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
          <FilterBar onOptionClick={onOptionClick} />
        </div>
        <div className="col-md-8 col-lg-9">
          <Main
            hotels={hotels.filter((hotel) => {
              return (
                (!filterOptions.Wifi || hotel.Wifi) &&
                (!filterOptions.noSmoke || hotel.noSmoke) &&
                (!filterOptions.kitchen || hotel.kitchen) &&
                (!filterOptions.laundry || hotel.laundry) &&
                (!filterOptions.parking_area || hotel.parking_area) &&
                (!filterOptions.pet_friendly || hotel.pet_friendly)
              );
            })}
            changeOrder={changeOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
