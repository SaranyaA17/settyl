import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import * as d3 from 'd3';


const Chart = ({employees}) => {

    const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Create scales
    const x = d3.scaleBand()
      .domain(employees.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(employees, d => d.age)])
      .range([height - margin.bottom, margin.top]);

    const z = d3.scaleOrdinal()
      .range(d3.schemeCategory10);

    // Create SVG container
    svg.attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw bars
    svg.selectAll('.bar-group')
      .data(employees)
      .enter()
      .append('rect')
      .attr('class', 'bar-group')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.age))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.age) - margin.bottom)
      .attr('fill', d => z(d.name));

    // Add shadow effect to give a 3D appearance
    svg.selectAll('.bar-shadow')
      .data(employees)
      .enter()
      .append('rect')
      .attr('class', 'bar-shadow')
      .attr('x', d => x(d.name) + 5)
      .attr('y', d => y(d.age) + 5)
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.age) - margin.bottom)
      .attr('fill', 'rgba(0, 0, 0, 0.1)');

    // Draw axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);
  }, [employees]);

  return <svg ref={chartRef}></svg>;
};
 

export default Chart
