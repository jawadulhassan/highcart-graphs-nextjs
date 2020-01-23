import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";

import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const chartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie"
  },
  title: {
    text: "Browser market shares in January, 2018",
    text: null
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",

      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        style: {
          textShadow: false,
          color: "#212833",
          textOutline: false
        }
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      innerSize: "50%",
      data: [
        {
          color: "#3358F4",
          name: "USDT1",
          y: 60
        },
        {
          color: "#49D6C6",
          name: "ETH/BTC",
          y: 10
        },
        {
          color: "#E14ECA",
          name: "PAIRS",
          y: 5
        },
        {
          color: "#FF8C72",
          name: "USDT",
          y: 15
        },
        {
          color: "#FD5D93",
          name: "BTC",
          y: 5
        },
        {
          color: "#0098F0",
          name: "BTC1",
          y: 5
        }
      ]
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
