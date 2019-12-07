import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "./variables/charts.jsx";

class Chart1 extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Bar
                data={chartExample2.data}
                options={chartExample2.options}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Chart1;
