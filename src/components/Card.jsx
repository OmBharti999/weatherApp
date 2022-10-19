import "./card.css";
import { BiLocationPlus } from "react-icons/bi";
import { TbWind } from "react-icons/tb";

const data = {
  request: {
    type: "City",
    query: "Deoghar, Bangladesh",
    language: "en",
    unit: "m"
  },
  location: {
    name: "Deoghar",
    country: "Bangladesh",
    region: "",
    lat: "24.267",
    lon: "91.083",
    timezone_id: "Asia/Dhaka",
    localtime: "2022-10-19 19:25",
    localtime_epoch: 1666207500,
    utc_offset: "6.0"
  },
  current: {
    observation_time: "01:25 PM",
    temperature: 27,
    weather_code: 113,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
    ],
    weather_descriptions: ["Clear"],
    wind_speed: 13,
    wind_degree: 313,
    wind_dir: "NW",
    pressure: 1008,
    precip: 0,
    humidity: 69,
    cloudcover: 6,
    feelslike: 30,
    uv_index: 1,
    visibility: 10,
    is_day: "no"
  }
};

export default function Card({ data }) {
  return data ? (
    <div
      className="card-container"
      style={{
        background:
          data.current.is_day == "no"
            ? "rgb(29, 33, 56)"
            : "rgb(221, 224, 148)",
        color: data.current.is_day == "no" ? "white" : "black"
      }}
    >
      <div className="top">
        <div className="img-container">
          <img src={data.current.weather_icons} />
        </div>
        <div className="top-inside">
          <h1>{data.current.temperature + "°"}</h1>
          <h3>{data.current.weather_descriptions}</h3>
        </div>
      </div>
      <div className="more-detail">
        {/* <BiLocationPlus /> */}
        <div className="place">
          {" "}
          <div>
            <BiLocationPlus />
            {data.request.query}
          </div>
          <div>
            <TbWind />: {data.current.wind_speed} kmps
          </div>
          <div>uv: {data.current.uv_index}</div>
        </div>
      </div>{" "}
      <div className="time">{data.current.observation_time}</div>
    </div>
  ) : null;
}
