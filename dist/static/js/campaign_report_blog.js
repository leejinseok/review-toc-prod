$(document).ready(function () {
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var color = Chart.helpers.color;
  var barChartData = {
    labels: ['2018-04-27', '2018-04-28', '2018-04-29', '2018-04-30', '2018-04-31', '2018-05-01', '2018-05-02'],
    datasets: [{
      label: 'pc',
      backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ]
    }, {
      label: 'mobile',
      backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
      borderColor: window.chartColors.blue,
      borderWidth: 1,
      data: [
        13,
        13,
        13,
        13,
        13,
        13,
        13
      ]
    }]
  
  };
  
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: '일별 콘텐츠 조회수',
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });

  
  var horizontalBarChartData = {
    labels: [
      '아가타립스틱', 
      '아가타', 
      '아가타 프리미에르 립스티', 
      '프리미에르 립스틱', 
      '아가타 코스메틱', 
      '아가타 미미핑크', 
      '아가타 핑크', 
      '아가타 립스틱 앙쥬핑크', 
      '아가타 립스틱', 
      '아가타럽'
    ],
    datasets: [{
      label: '키워드별 유입률',
      backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
      borderColor: window.chartColors.green,
      borderWidth: 1,
      data: [
        30,
        25,
        20,
        15,
        10,
        8,
        6,
        5,
        4,
        3
      ]
    }]
  };

  ctx = document.getElementById('canvasInflowKeywordsPc').getContext('2d');
  window.myHorizontalBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        rectangle: {
          borderWidth: 2,
        }
      },
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart'
      },
      scales:{
        xAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });

  ctx = document.getElementById('canvasInflowKeywordsMobile').getContext('2d');
  window.myHorizontalBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        rectangle: {
          borderWidth: 2,
        }
      },
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart'
      },
      scales:{
        xAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });
});