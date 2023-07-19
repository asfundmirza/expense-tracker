import "./Chart.css";
import ChartBar from "./ChartBar";
//import ExpensesChart from "../FormComponents/ExpensesChart";
const chart = function (props) {
  const valueMax = props.dataPoints.map((dataValues) => dataValues.value);
  const totalMax = Math.max(...valueMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default chart;
