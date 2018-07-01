import React, { Component } from 'react';
import * as d3 from "d3";

class ProgressArc extends Component {
  componentDidMount() {
    const context = this.setContext();

      this.drawOuterCircle(context);
      console.log(this.returnLvl1Arc());
      this.drawArcLvl1(context);
      this.drawArcLvl2(context);
      this.drawArcLvl3(context);
      this.drawArcLvl4(context);
      this.drawFavorableArea(context);
    }

    setContext() {
      return d3.select(this.refs.arc).append('svg')
        .attr('height', '700px')
        .attr('width', '700px')
        .attr('id', 'd3-arc');
        // .append('g')
        // .attr('transform', `translate(150, 150)`);
    }
    drawOuterCircle(context) {
      return context.append('circle')
        .attr("cx", "210")
        .attr("cy", "210")
        .attr("r","185")
        .attr("fill", "none")
        .attr("stroke", '#e7e7e7')
        .attr("stroke-width", "1");
    }

    drawFavorableArea(context){
      return context.append('g')
        .attr('transform', 'translate(210,210)')
        .append('path')
        .datum({ endAngle: this.tau })
        .style('fill', 'rgba(235,149,189,.7)')
        .attr('d', this.returnFavorableAreaArc());
    }

    drawArcLvl1(context){
      return context.append('g')
        .attr('transform', 'translate(210,210)')
        .append('path')
        .datum({ endAngle: this.tau })
        .style('fill', '#cdecfa')
        .attr('d', this.returnLvl1Arc());
    }
    drawArcLvl2(context){
      return context.append('g')
        .attr('transform', 'translate(210,210)')
        .append('path')
        .datum({ endAngle: this.tau })
        .style('fill', '#b1def2')
        .attr('d', this.returnLvl2Arc());
    }
    drawArcLvl3(context){
      return context.append('g')
        .attr('transform', 'translate(210,210)')
        .append('path')
        .datum({ endAngle: this.tau })
        .style('fill', '#93d1ec')
        .attr('d', this.returnLvl3Arc());
    }
    drawArcLvl4(context){
      return context.append('g')
        .attr('transform', 'translate(210,210)')
        .append('path')
        .datum({ endAngle: this.tau })
        .style('fill', '#70c8e6')
        .attr('d', this.returnLvl4Arc());
    }

    setBackground(context) {
        return context.append('path')
        .datum({ endAngle: this.tau })
        .style('fill', '#e6e6e6')
        .attr('d', this.arc());
      }
    setForeground(context) {
      return context.append('path')
        .datum({ endAngle: this.tau * 0.3 })
        .style('fill', '#00ff00')
        .attr('d', this.arc());
    }

    tau = Math.PI * 2;
    innerRadius = 60;
    radarCompetences = [{
      "name":"Înțelegerea nevoilor potențialilor clienți",
      "score": 4.11
      },{
        "name":"Înțelegerea nevoilor potențialilor clienți2",
        "score": 1.11
      },{
        "name":"Înțelegerea nevoilor potențialilor clienți3",
        "score": 2.11
      },
      {
        "name":"Înțelegerea nevoilor potențialilor clienți4",
        "score": 3.11
      },{
        "name":"Înțelegerea nevoilor potențialilor clienți5",
        "score": 4.81
      },{
        "name":"Înțelegerea nevoilor potențialilor clienți6",
        "score": 4.00
      },
      {
        "name":"Înțelegerea nevoilor potențialilor clienți7",
        "score": 2.5
      },
      {
        "name":"Înțelegerea nevoilor potențialilor clienți8",
        "score": 4.3
    }

    ];

    arc() {
      return d3.arc()
        .innerRadius(100)
        .outerRadius(110)
        .startAngle(0)
    }

    returnFavorableAreaArc() {
      return d3.arc()
        .innerRadius(this.innerRadius+62)
        .outerRadius(this.innerRadius+105)
        .startAngle(0)
        .endAngle(this.tau);
    }


    returnLvl1Arc() {
      for (let i = 0; i < this.radarCompetences.length; i++) {
        const radarCompetence = this.radarCompetences[i];
                return d3.arc()
                    .innerRadius(this.innerRadius)
                    .outerRadius(this.innerRadius+30)
                    .startAngle(this.startAngle(i+1,this.radarCompetences.length))
                    .endAngle(this.endAngle(i+1,this.radarCompetences.length))
                    .padAngle(0.02)
                    .cornerRadius(0);
              }


    }
    returnLvl2Arc() {
      return d3.arc()
          .innerRadius(this.innerRadius+30)
          .outerRadius(this.innerRadius+60)
          .startAngle(0)
          .padAngle(0.02)
          .cornerRadius(0);
    }
    returnLvl3Arc() {
      return d3.arc()
          .innerRadius(this.innerRadius+60)
          .outerRadius(this.innerRadius+90)
          .startAngle(0)
          .padAngle(0.02)
          .cornerRadius(0);
    }
    returnLvl4Arc() {
      return d3.arc()
          .innerRadius(this.innerRadius+90)
          .outerRadius(this.innerRadius+120)
          .startAngle(0)
          .padAngle(0.02)
          .cornerRadius(0);
    }
     startAngle(k,n) {
      return ((k-1)*Math.PI*2)/n;
    }
     endAngle(k,n) {
      return (k*Math.PI*2)/n;
    }


  render() {
    return (
      <div ref="arc"></div>
    )
  }
}

export default ProgressArc;
