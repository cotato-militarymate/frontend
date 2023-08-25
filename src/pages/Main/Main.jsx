import armys from "./army.json";
import MainItem from "./MainItem";

const Main = () => {
  return (
    <div>
      <h1>당신의 예비 군메이트</h1>
      <MainItem armys={armys.army} />
      <h1></h1>
    </div>
  );
};

export default Main;
