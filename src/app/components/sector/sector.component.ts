import { Component, OnInit } from '@angular/core';
import { Visitor } from '../../models/Visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import * as d3 from 'd3-selection';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  visitors: Visitor[];
  
  constructor(private visitorService: VisitorService) { }

  ngOnInit() {
    this.visitorService.getVisitorsData().subscribe(visitors =>{
      //console.log(visitors["success"]);
      //console.log(visitors);
      //console.log(visitors["logs"]);
      //this.data = [30, 86, 168, 281, 303, 365];
      this.visitors = visitors["logs"];
      let userActivity = this.getUserActivity();
      let graph = d3.select(".chart")
      .selectAll("div")
      .data(userActivity)
      .enter()
      .append("div")
      .attr("class","dd")
      .style("width", function(d) { return d.count/2 + "px"; })
      .append("label").text(function(d) { return ' ' + d.activity + '  ' + d.count; })
      .select('this.parentNode').append("label").text(function(d) { return '$ ' + d.date; });

    });
  }
  getUserActivity() {
    let lookup = {};
    let items = this.visitors;
    let result = [];
    let index=0;
    for (let item, i = 0; item = items[i++];) {
      let action = item["action"].substring(0,10);
      if (!(action in lookup)) {
        lookup[action] = index++;
        result.push({"activity":action, "count":1});
      } else {
        result[lookup[action]].count++;
      }
    }
    return result;
  }
}
