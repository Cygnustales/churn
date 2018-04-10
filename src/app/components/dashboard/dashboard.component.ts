import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart=[];
  bar=[];

  constructor(private service:ProjectService) { }

  ngOnInit() {
    // this.service.dailyForecast().subscribe(res => {
    //   console.log(res)
    // })
    this.lineChart();
    this.barChart();
    this.lineChart2();
    this.donutChart();
  }


  lineChart(){
      this.chart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [{
            label: 'Net',
            data: [48, 24, -10, -36, -18, 14],
            backgroundColor: '#c00000',
            borderColor: '#c00000',
            fill: false
        }
      ]
    },
    options: {
      // animation: true,
      // animationSteps: 60,
      responsive: false,
      title:{
        display:true,
        text:'New vs Churned Customers'
      },
        scales: {
          xAxes: [{
            stacked: true
        }]
        }
    }
    });
  }

  barChart(){
    this.bar = new Chart('bar-chart', {
      type: 'bar',
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [{
            label: 'New Customer',
            data: [23000, 29000, 21000, 18000, 17000, 17500],
            backgroundColor: '#00cc99',
            borderColor: '#00cc99',
            fill: false
        },
        {
          label: 'Churn',
          data: [12000, 27000, 23000, 24500, 20000, 15000],
          backgroundColor: '#ccc',
          borderColor: '#ccc',
          fill: false
        }
      ]
    },
    options: {
      // animation: true,
      // animationSteps: 60,
      responsive: false,
      title:{
        display:true,
        text:'New vs Churned Customers'
      },
        scales: {
          xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
        }
    }
    });
  }

  pieChart(){
    this.bar = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: ["Pink", "Green", "Orange"],
        datasets: [{
            data: [10, 20, 70],
            backgroundColor: ['#F1428A','#48960C', '#EE4A08'],
        }
      ]
    },
    options: {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      responsive: false,
      title:{
        display:true,
        text:'Pie Chart'
      }
    }
    });
  }

  donutChart(){
    this.bar = new Chart('donut-chart', {
      type: 'doughnut',
      data: {
        labels: ["Millenials", "Young Adult", "Famullies", "XX% & Differences with 2 years Average"],
        datasets: [{
            data: [10, 40, 20, 30],
            backgroundColor: ['#00cc99','#ccc', '#c00000', '#FFDC0B'],
        }
      ]
    },
    options: {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      responsive: false,
      title:{
        display:true,
        text:'Lost Contribution'
      }
    }
    });
  }

  lineChart2(){
    this.chart = new Chart('line-chart2', {
    type: 'line',
    data: {
      labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
      datasets: [{
          label: 'Potential Lost due to churn (in Million)',
          data: [450, 450, 450, 450, 450, 450],
          backgroundColor: '#0070c0',
          borderColor: '#0070c0',
          fill: false
      }
    ]
  },
  options: {
    // animation: true,
    // animationSteps: 60,
    responsive: false,
    title:{
      display:true,
      text:'Potential Lost'
    },
      scales: {
        xAxes: [{
          stacked: true
      }]
      }
  }
  });
}


}
