import { Component, OnInit } from '@angular/core';
import { Visitor } from '../../models/Visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import * as d3 from 'd3-selection';
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {
  visitors: Visitor[];
  graph;

  constructor(private visitorService: VisitorService) { 
  }

  ngOnInit() {
    this.visitorService.getVisitorsData().subscribe(visitors =>{
      this.visitors = visitors["logs"];
      let uniqueVisitors = this.getDailyUniqueUsers();
      //console.log(uniqueVisitors)
      this.graph = d3.select(".chart")
      .selectAll("div")
      .data(uniqueVisitors)
      .enter()
      .append("div")
      .attr("class","dd")
      .style("width", function(d) { return d.count * 40 + "px"; })
      .append("label").text(function(d) { return ' ' + d.date + '  ' + d.count; })
      .select('this.parentNode').append("label").text(function(d) { return '$ ' + d.date; });


      });
  }

  getDailyUniqueUsers() {
    let lookup = {};
    let items = this.visitors;
    let result = [];

    for (let item, i = 0; item = items[i++];) {
      let date = item["date"].substring(0,10);
      
      //console.log(date)
      if (!(date in lookup)) {
        lookup[date] = 1;
        let count = 0;
        let unique={};
        for(let usr,j=0; usr = items[j++];) {
          if(date == usr["date"].substring(0,10)) {
            if(!(usr["user_id"] in unique )) {
              unique[usr["user_id"]] = 1;
              count++;
              //console.log(usr["user_id"]);
            }
          }
        }
        result.push({"date":date, "count":count});
      }
    }
    //console.log(result);
    //console.log(lookup);
    return result;
  }
  
}
