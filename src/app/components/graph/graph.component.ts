import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  data:any;
  graph:any;
  
  constructor() { }

  ngOnInit() {
    this.data = [30, 86, 168, 281, 303, 365];

this.graph = d3.select(".chart")
  .selectAll("div")
  .data(this.data)
    .enter()
    .append("div")
    .attr("class","dd")
    .style("width", function(d) { return d * 2 + "px"; })
    .text(function(d) { return '$ ' + d; });
  }

   

}
