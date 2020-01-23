import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";

import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const chartOptions = {
  title: {
    text: null,
    x: -20 //center
  },
  subtitle: {
    text: null,
    x: -20
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  yAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    valueSuffix: "°C"
  },
  legend: {
    //layout: 'vertical',
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0
  },
  plotOptions: {
    series: {
      point: {
        events: {
          mouseOver: function() {
            var chart = this.series.chart;

            var x = this.x,
              y = this.y;
            if (chart.xAxis[0].plotLinesAndBands.length > 0) {
              chart.xAxis[0].update({
                plotLines: [
                  {
                    id: "xPlotLine",
                    value: x,
                    width: 1,
                    color: "#C0C0C0"
                  }
                ]
              });

              chart.yAxis[0].update({
                plotLines: [
                  {
                    id: "yPlotLine",
                    value: y,
                    width: 1,
                    color: "#C0C0C0"
                  }
                ]
              });
            } else {
              chart.xAxis[0].addPlotLine({
                id: "xPlotLine",
                value: x,
                width: 1,
                color: "#C0C0C0"
              });

              chart.yAxis[0].addPlotLine({
                id: "yPlotLine",
                value: y,
                width: 1,
                color: "#C0C0C0"
              });
            }
          }
        }
      },
      marker: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Tokyo",
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    },
    {
      name: "New York",
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    },
    {
      name: "Berlin",
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    },
    {
      name: "London",
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }
  ]
};

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}

export default App;
// render(<App />, document.getElementById("root"));
