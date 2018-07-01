import React, { Component } from 'react';
import * as d3 from "d3";

class Pathsvg extends Component {


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




  render() {
    return (
      <div ref="arc"></div>
    )
  }
}

export default Pathsvg;
