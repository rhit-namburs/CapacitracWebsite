import React, { Component, useEffect } from "react";
import Chart from "react-google-charts";
let scatterData = [["Feed Moved(LB)", "Run Time(s)"]];
const scatterOptions = {
  title: "Feed Moved (LB) vs. RunTime",
  hAxis: { title: "Feed Moved(LB)", minValue: 0, maxValue: 300 },
  vAxis: { title: "Run Time(s)", minValue: 0, maxValue: 600 },
  legend: "none",
};
function ScatterChart(props) {
  useEffect(() => {
    let data = props.data;
    data?.map((datum) => {
      scatterData.push([datum.feedMoved, datum.runTimeSec]);
    });
    console.log("Scatter Data", scatterData);
  }, []);
  return (
    <div>
      <Chart
        width={"1400px"}
        height={"840px"}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={scatterData}
        options={scatterOptions}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
export default ScatterChart;
