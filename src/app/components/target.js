'use client'
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Component } from 'react';

var CanvasJ = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Target extends Component{
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
        text: "Target vs Reality",
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
          name: "Target",
          showInLegend: true,
          
          dataPoints: [
            { label: "January", y: 68206498, color: "blue" },
            { label: "February", y: 55897709, color: "blue" },
            { label: "March", y: 7570438, color: "blue" },
            { label: "April", y: 17453224, color: "blue" },
            { label: "May", y: 6389443, color: "blue" },
            { label: "June", y: 68206498, color: "blue" },
            { label: "July", y: 55897709, color: "blue" },
            { label: "August", y: 7570438, color: "blue" },
            { label: "September", y: 17453224, color: "blue" },
            { label: "October", y: 6389443, color: "blue" },
          ],
        },
        {
          type: "column",
          name: "Reality",
          showInLegend: true,
          dataPoints: [
            { label: "January", y: 68206498, color:"red"},
            { label: "February", y: 55897709, color: "red" },
            { label: "March", y: 7570438,color: "red" },
            { label: "April", y: 17453224,color: "red" },
            { label: "May", y: 6389443,color: "red" },
            { label: "June", y: 68206498, color:"red"},
            { label: "July", y: 55897709, color: "red" },
            { label: "August", y: 7570438,color: "red" },
            { label: "September", y: 17453224,color: "red" },
            { label: "October", y: 6389443,color: "red" },
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

  
export default Target;
