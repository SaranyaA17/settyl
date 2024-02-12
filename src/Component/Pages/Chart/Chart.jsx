import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';
import axios from 'axios';
import './chart.css'

const Chart = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
      setData(response.data.data.slice(0, 10));
    } catch (error) {
      
        console.error('Error fetching data:', error);
      
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData);
    return () => clearInterval(intervalId);
  }, [setData]);


    useEffect(() => {
      if (data.length === 0) return;
  
      const svg = d3.select(svgRef.current);
  
      const width = 600;
      const height = 300;
  
      svg.selectAll('*').remove();
  
      const x = d3.scaleBand()
        .domain(data.map(d => d.employee_name))
        .range([0, width])
        .padding(0.2);
  
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.employee_age)])
        .range([height, 0]);
  
      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.employee_name))
        .attr('y', d => y(d.employee_age))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.employee_age));
  
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);
  
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);
  
      svg.append('g')
        .attr('class', 'y-axis')
        .call(yAxis);
    }, [data]);

  return (
    <div className='chart'>
      <div>
        <h1>Employee Ages Bar Chart</h1>
        <svg className='svg-color' ref={svgRef} width={600} height={300} ></svg>
      </div>

    </div>
  )
}

export default Chart

