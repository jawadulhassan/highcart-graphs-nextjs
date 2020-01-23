import React from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
// Import Highcharts
import Highcharts from "highcharts/highcharts.src.js";
import LabelComponent from "./label";

import HighchartsExporting from 'highcharts/modules/exporting'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ],
        xAxis: {
          labels: {
            useHTML: true,
            formatter: function() {
              return "";
            }
          }
        }
      }
    };
  }

  afterChartCreated(chart) {
    this.internalChart = chart;
    this.forceUpdate();
  }

  componentDidUpdate() {
    //this.internalChart.getMargins(); // redraw
    this.internalChart.reflow();
  }

  render() {
    const chart = this.internalChart,
      customLabels = [];

    if (chart && chart.xAxis[0]) {
      Highcharts.objectEach(chart.xAxis[0].ticks, function(tick) {
        customLabels.push(<LabelComponent tick={tick} />);
      });
    }

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.chartOptions}
          callback={this.afterChartCreated}
        />
        {customLabels}
      </div>
    );
  }
}

export default App;
// render(<App />, document.getElementById("root"));
