import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";

import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const chartOptions = {
    title: {
      text: null
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        //text: ' Resource Allocation'
      }
    },
    legend: {
      //layout: 'horizental',
      align: 'center',
      verticalAlign: 'bottom'
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },

    series: [{
			name: "BINANCE",
			color: '#0098F0',
			data: [
				0.8436, 0.8435, 0.8434, 0.8431, 0.8438, 0.8234, 0.8238, 0.8232,
				0.8233, 0.8238, 0.8233, 0.8238, 0.8236, 0.8232, 0.8239, 0.8239,
			]
		}, {
			name: "PLONEX",
			color: '#FF7F0E',
			data: [
				0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
				0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
			]
		}, {
			name: "ITBIT",
			color: '#49D6C6',
			data: [
				0.8416, 0.8415, 0.8414, 0.8411, 0.8418, 0.8214, 0.8218, 0.8212,
				0.8213, 0.8218, 0.8213, 0.8218, 0.8216, 0.8212, 0.8219, 0.8219,
			]
		},  {
			name: "KRAKEN",
			color: '#FD5D5D',
			data: [
				0.8446, 0.8445, 0.8444, 0.8441, 0.8448, 0.8244, 0.8248, 0.8242,
				0.8243, 0.8248, 0.8243, 0.8248, 0.8246, 0.8242, 0.8249, 0.8249,
			]
		}],
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
