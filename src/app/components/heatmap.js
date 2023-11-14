// Heatmap.js
'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ data }) => {
  const heatmapRef = useRef();

  useEffect(() => {
    const data = [{ region: 'London', lat: 51.509865, lon: -0.118092, sales: 100 }]
    drawHeatmap(data);
  }, [data]);

  const drawHeatmap = (data) => {
    console.log(data); // print debugging

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select(heatmapRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const maxSales = d3.max(data, (d) => d.sales);

    const colorScale = d3.scaleSequential(d3.interpolateOrRd).domain([0, maxSales]);
    const svgWidth = 500;
    const svgHeight = 500;

    const getProjection = (latitude, longitude) => {
      const x = (longitude + 180) * (svgWidth / 360);
      const y = ((-1 * latitude) + 90) * (svgHeight / 180);

      return { x, y };
    };

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => getProjection(d.lat, d.lon).x)
      .attr('y', (d) => getProjection(d.lat, d.lon).y)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', (d) => colorScale(d.sales));
  };

  return <div ref={heatmapRef}></div>;
};

export default Heatmap;
