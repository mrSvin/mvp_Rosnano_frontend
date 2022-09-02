import * as Highcharts from 'highcharts';

require('highcharts/highcharts-more')(Highcharts);

export function highChartPolar(containerName) {

    Highcharts.chart(containerName, {
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
        chart: {
            type: 'column',
            inverted: true,
            polar: true
        },
        title: {
            text: 'Winter Olympic medals per existing country (TOP 5)'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table"' +
                'target="_blank">Wikipedia</a>'
        },
        tooltip: {
            outside: true
        },
        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            categories: [
                'Norway <span class="f16"><span id="flag" class="flag no">' +
                '</span></span>',
                'United States <span class="f16"><span id="flag" class="flag us">' +
                '</span></span>',
                'Germany <span class="f16"><span id="flag" class="flag de">' +
                '</span></span>',
                'Austria <span class="f16"><span id="flag" class="flag at">' +
                '</span></span>',
                'Canada <span class="f16"><span id="flag" class="flag ca">' +
                '</span></span>'
            ]
        },
        yAxis: {
            crosshair: {
                enabled: true,
                color: '#333'
            },
            lineWidth: 0,
            tickInterval: 25,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.15
            }
        },
        series: [{
            name: 'Gold medals',
            data: [148, 113, 104, 71, 77]
        }, {
            name: 'Silver medals',
            data: [113, 122, 98, 88, 72]
        }, {
            name: 'Bronze medals',
            data: [124, 95, 65, 91, 76]
        }]
    });

}

export function highChartMoreRange(containerName) {

    Highcharts.chart(containerName, {

        chart: {
            type: 'columnrange',
            inverted: true
        },

        accessibility: {
            description: 'Image description: A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
        },

        title: {
            text: 'Temperature variation by month'
        },

        subtitle: {
            text: 'Observed in Vik i Sogn, Norway, 2021 | ' +
                'Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °C )'
            }
        },

        tooltip: {
            valueSuffix: '°C'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    format: '{y}°C'
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: [
                [-13.9, 5.2],
                [-16.7, 10.6],
                [-4.7, 11.6],
                [-4.4, 16.8],
                [-2.1, 27.2],
                [5.9, 29.4],
                [6.5, 29.1],
                [4.7, 25.4],
                [4.3, 21.6],
                [-3.5, 15.1],
                [-9.8, 12.5],
                [-11.5, 8.4]
            ]
        }]

    });

}

export function highChartRadar(containerName) {

    Highcharts.chart(containerName, {

        chart: {
            polar: true
        },

        title: {
            text: 'Highcharts Polar Chart'
        },

        subtitle: {
            text: 'Also known as Radar Chart'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                format: '{value}°'
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },

        series: [{
            type: 'column',
            name: 'Column',
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            pointPlacement: 'between'
        }, {
            type: 'line',
            name: 'Line',
            data: [1, 2, 3, 4, 5, 6, 7, 8]
        }, {
            type: 'area',
            name: 'Area',
            data: [1, 8, 2, 7, 3, 6, 4, 5]
        }]
    });

}