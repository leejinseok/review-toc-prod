var color;
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

$(document).ready(function () {
  color = Chart.helpers.color;
  drawChart_viewsInOneday();
  drawChart_inflowKeywordPc();
  drawChart_inflowKeywordMobile();
  drawChart_applicationTotal_gender();
  drawChart_applicationTotal_age();
  drawChart_applicationTotal_region();
  drawChart_applicationTotal_blog();
});

function drawChart_applicationTotal_blog () {
  var config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          color(window.chartColors.red).alpha(0.5).rgbString(),
          window.chartColors.red,
        ],
      }],
      labels: [
        '네이버',
        '기타',
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 5,
          fontSize: 10
        }
      },
    }
  };

  var ctx = document.getElementById('canvasApplicationTotal_blog').getContext('2d');
  window.myPie = new Chart(ctx, config);
}

function drawChart_applicationTotal_region () {
  var config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.green,
          window.chartColors.yellow,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '경기',
        '서울',
        '기타',
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 5,
          fontSize: 10
        }
      },
    }
  };

  var ctx = document.getElementById('canvasApplicationTotal_region').getContext('2d');
  window.myPie = new Chart(ctx, config);
}

function drawChart_applicationTotal_age () {
  var config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.green,
          window.chartColors.blue,
          window.chartColors.yellow,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '20대',
        '30대',
        '40대',
        '기타',
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 5,
          fontSize: 10
        }
      },
    }
  };

  var ctx = document.getElementById('canvasApplicationTotal_age').getContext('2d');
  window.myPie = new Chart(ctx, config);
}

function drawChart_applicationTotal_gender () {
  var config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          color(window.chartColors.red).alpha(0.5).rgbString(),
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '남성',
        '여성',
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 5,
          fontSize: 10
        }
      },
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
      },
    }
  };

  var ctx = document.getElementById('canvasApplicationTotal_gender').getContext('2d');
  window.myPie = new Chart(ctx, config);
}

function drawChart_viewsInOneday () {
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
      maintainAspectRatio: false,
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

}
  

function drawChart_inflowKeywordPc () {
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

  var ctx = document.getElementById('canvasInflowKeywordsPc').getContext('2d');
  window.myHorizontalBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
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
}

function drawChart_inflowKeywordMobile () {
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
  var ctx = document.getElementById('canvasInflowKeywordsMobile').getContext('2d');
  window.myHorizontalBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
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

}