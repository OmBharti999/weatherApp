import { useEffect, useState } from "react";
import Card from "./Card";
// import "./styles.css";

export default function Input() {
  const [inp, setInp] = useState("");
  const [cityName, setCityName] = useState("deoghar");
  const [data, setData] = useState();

  const onChangeRn = (e) => {
    setInp(e.target.value);
  };
  const fetching = async () => {
    const url = `http://api.weatherstack.com/current?access_key=d937876ef2f6c2fbc9458d1b1128660b&query=${cityName}`;
    console.log(url);
    const res = await fetch(url);
    const d = await res.json();
    console.log(d);
    setData(d);
  };
  useEffect(() => {
    // fetching();
  }, [cityName]);
  // useEffect(
  //   fetch(`http://api.weatherstack.com/current?access_key=d937876ef2f6c2fbc9458d1b1128660b&query=${cityName}`).then(res=>res.json()).then(d=>{setData(d)});
  //   , [cityName]);
  const settingUpCityName = () => {
    setCityName(inp);
    setInp("");
  };
  return (
    <div className="App">
      <input value={inp} placeholder="Enter city here" onChange={onChangeRn} />
      <button onClick={settingUpCityName}>search</button>
      {true ? <Card data={data} /> : null}
    </div>
  );
}
