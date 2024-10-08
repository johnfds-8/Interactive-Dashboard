import BarChartBox from "../../components/barchartbox/BarChartBox";
import BigChartBox from "../../components/bigchartbox/BigChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import PieChartBox from "../../components/piechartbox/PieChartBox";
import TopBox from "../../components/topbox/TopBox";

import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">
        <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">
        <ChartBox />
      </div>
      <div className="box box7">
        <BigChartBox/>
      </div>
      <div className="box box8">
        <BarChartBox/>
      </div>
      <div className="box box9">
        <BarChartBox/>
      </div>
    </div>
  );
}

export default Home;
