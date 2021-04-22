// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

const url = 'http://localhost:3000/'
const fetchApi = async (url, option) => {
  const res = await fetch(url, option)
  return res.json()
}

const getOrder = async () => {
  const productsUrl = url + 'order'
  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const res = await fetchApi(productsUrl, option)
  chart1(res)
  chart2(res)
}

getOrder()

function chart1(data) {
  // var arr = []
  var max = 0
  var id
  var name
  var email
  for (let i = 0; i < data.length; i++) {
    if (data[i].toltals > max) {
      max = data[i].toltals
      id = data[i].id
      name = data[i].name
      email = data[i].email
    }
  }

  var ctx = document.getElementById("myAreaChart");
  ctx.innerHTML = `
  <p>Username: ${name}</p>
  <p>Email: ${email}</p>
  <h3>Toltals: &nbsp; £${max}</h3>
  `
  var maxtoltals = document.getElementById('maxtoltals')
  maxtoltals.innerHTML = `£${max}`
}

function chart2(data) {
  // var toltalsMax = []
  var thang_1 = 0
  var thang_2 = 0
  var thang_3 = 0
  var thang_4 = 0
  var thang_5 = 0
  var thang_6 = 0
  var thang_7 = 0

  data.forEach(item => {
    // toltalsMax.push(item.toltals)

    let timeDay = item.dateTime
    let p = timeDay.slice(0, 9)

    let month_1 = /\d{2}-1/
    let resoult_1 = month_1.test(p)
    if (resoult_1 == true) {
      thang_1 += 1
    }

    let month_2 = /\d{2}-2/
    let resoult_2 = month_2.test(p)

    if (resoult_2 == true) {
      thang_2 += 1
    }

    let month_3 = /\d{2}-3/
    let resoult_3 = month_3.test(p)

    if (resoult_3 == true) {
      thang_3 += 1
    }


    let month_4 = /\d{2}-4/
    let resoult_4 = month_4.test(p)

    if (resoult_4 == true) {
      thang_4 += 1
    }

    let month_5 = /\d{2}-5/
    let resoult_5 = month_5.test(p)

    if (resoult_5 == true) {
      thang_5 += 1
    }

    let month_6 = /\d{2}-6/
    let resoult_6 = month_6.test(p)

    if (resoult_6 == true) {
      thang_6 += 1
    }

    let month_7 = /\d{2}-7/
    let resoult_7 = month_7.test(p)

    if (resoult_7 == true) {
      thang_7 += 1
    }
  });

  var arr = [thang_1, thang_2, thang_3, thang_4, thang_5, thang_6, thang_7]
  var maxArr = Math.max.apply(Math, arr);
  document.getElementById('lengthOrder').innerHTML = `${maxArr}` 

  // Bar Chart Example
  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [3, 1, thang_3, thang_4, thang_5, thang_6],
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          },
          maxBarThickness: 25,
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ':  ' + number_format(tooltipItem.yLabel);
          }
        }
      },
    }
  });

}
