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
      devicePixelRatio: 1.5,
      title: {
        text: "Total Revenue",
      },
      dataPointWidth: 20,
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
          name: "offline sales",
          showInLegend: true,
          dataPoints: [
            { label: "Monday", y: 34206498, color:"blue"},
            { label: "Tuesday", y: 55897709, color: "blue" },
            { label: "Wednesday", y: 7570438,color: "blue" },
            { label: "Thursday", y: 17453224,color: "blue" },
            { label: "Friday", y: 6389443,color: "blue" },
          ],
        },
        {
          type: "column",
          name: "Online Sales",
          showInLegend: true,
          dataPoints: [
            { label: "Monday", y: 34206497, color:"green"},
            { label: "Tuesday", y: 55897709, color: "green" },
            { label: "Wednesday", y: 7570438,color: "green" },
            { label: "Thursday", y: 17453224,color: "green" },
            { label: "Friday", y: 6389443,color: "green" },
          ]
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
