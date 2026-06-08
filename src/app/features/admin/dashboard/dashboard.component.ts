import { Component, signal } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faArrowUp, faUsers, faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, HighchartsChartComponent, FaIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  faArrowUp = faArrowUp
  faUsers = faUsers
  faNewspaper = faNewspaper

  Highcharts: typeof Highcharts = Highcharts;

  ngOnInit(): void {
  }

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent', // Blends into your Tailwind card wrapper
      height: 350
    },
    title: {
      text: 'Monthly Sales',
      style: { color: '#f3f4f6' } // Matches text-gray-100
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { color: '#9ca3af' } }, // Matches text-gray-400
      lineColor: '#374151' // Matches border-gray-700
    },
    yAxis: {
      title: { style: { color: '#9ca3af' } },
      labels: { style: { color: '#9ca3af' } },
      gridLineColor: '#374151' // Softens grid lines against dark layouts
    },
    legend: {
      itemStyle: { color: '#e5e7eb' } // Matches text-gray-200
    },
    plotOptions: {
      column: {
        // 🛠️ SHAPE: Smoothly rounds only the top edge corners of each bar
        // borderRadius: { radius: 8, where: 'top' }, 
        
        // 📏 SIZE: Sets a fixed pixel thickness for each bar (e.g., 20px wide)
        pointWidth: 15,
        
        // 💡 ALTERNATIVE SIZE: If you prefer dynamic responsive widths instead of fixed pixels, 
        // remove 'pointWidth' and tweak the spacing padding multipliers below:
        // pointPadding: 10,  // Space between bars in the same category group
        // groupPadding: 5,  // Space between different category groups
      }
    },
    series: [
      {
        color: '#1447e6',
        name: 'Monthly Articles', type: 'column', data: [25, 40, 32, 12, 23, 49, 33, 29, 13, 5, 22, 51],
        borderColor: 'transparent',
      }
    ]
  };

  pieOptions: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
      width: "370"
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Software Development',
          y: 36.02
        },
        {
          name: 'Marketing',
          // sliced: true,
          // selected: true,
          y: 26.71,
          color: '#38bdf8'
        },
        {
          name: 'Education',
          y: 9.0
        },
        {
          name: 'Philosophy',
          y: 15.5
        },
        {
          name: 'Travel',
          y: 12.68
        }
      ]
    }]
  }

  linechartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 900,
        scrollPositionX: 1
      },
      backgroundColor: 'transparent',
      width: 1000
    },
    title: {
      text: '',
      align: 'left'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    xAxis: {
      type: 'datetime',
      tickColor:'gray',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Users Activity'
      },
      color:'red',
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: '#1e2939',
      plotBands: [{ // Light air
        from: 0.3,
        to: 1.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Light air',
          style: {
            opacity: 1
          }
        }
      }, { // Light breeze
        from: 1.5,
        to: 3.3,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Light breeze',
          style: {
            opacity: 0.7
          }
        }
      }, { // Gentle breeze
        from: 3.3,
        to: 5.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Gentle breeze',
          style: {
            opacity: 0.7
          }
        }
      }, { // Moderate breeze
        from: 5.5,
        to: 8,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Moderate breeze',
          style: {
            opacity: 0.7
          }
        }
      }, { // Fresh breeze
        from: 8,
        to: 11,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Fresh breeze',
          style: {
            opacity: 0.7
          }
        }
      }, { // Strong breeze
        from: 11,
        to: 14,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Strong breeze',
          style: {
            opacity: 0.7
          }
        }
      }, { // Near Gale
        from: 14,
        to: 17,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Near gale',
          style: {
            opacity: 0.7
          }
        }
      }, { // Fresh Gale
        from: 17,
        to: 20.5,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Fresh gale',
          style: {
            opacity: 0.7
          }
        }
      }, { // Strong Gale
        from: 20.5,
        to: 24,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Strong gale',
          style: {
            opacity: 0.7
          }
        }
      }]
    },
    tooltip: {
      valueSuffix: ' m/s'
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: '2014-02-29'
      }
    },
    series: [{
      name: 'Hestavollane',
      data: [
        12.9, 13.8, 10.2, 8.4, 10.0, 9.2, 10.0,
        12.2, 13.2, 12.7, 12.5, 11.4, 10.4,
        7.9, 8.0, 11.4, 11.5, 12.0, 12.0,
        10.4, 11.2, 11.5, 12.2, 11.5, 8.3
      ]

    }, {
      name: 'Vik',
      data: [
        null, 1.3, 1.1, 0.8, 1.8, 1.7, 0.8,
        0.8, 1.0, 1.0, 1.0, 0.8, 1.4,
        1.3, 2.9, 6.1, 6.4, 6.6, 6.4,
        6.3, 5.4, 3.9, 3.0, 1.7, 1.4
      ]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px',
        color:'red'
      }
    }
  }

}
