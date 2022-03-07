import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value="dataPoint.value"
          maxValue={null}
          lable={dataPoint.value}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
