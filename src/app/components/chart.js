import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Component } from 'react';

var CanvasJ = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component{
  constructor(){
    super();
    this.addSymbols = this.addSymbols.bind(this);
  }
  addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJ.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}

  render(){
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Total Revenue",
      },
      axisY: {
        title: "Units Sold",
        labelFormatter: this.addSymbols,
        scaleBreaks: {
          autoCalculate: true,
        },
      },
      axisX: {
        title: "Days",
        labelAngle: 0,
      },
      data: [
        {
          type: "column",
          
          dataPoints: [
            { label: "Monday", y: 68206498, color:"blue"},
            { label: "Tuesday", y: 55897709, color: "blue" },
            { label: "Wednesday", y: 7570438,color: "blue" },
            { label: "Thursday", y: 17453224,color: "blue" },
            { label: "Friday", y: 6389443,color: "blue" },
          ],
        },
      ],
    };
  
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  };
  

  }

  
export default App;
