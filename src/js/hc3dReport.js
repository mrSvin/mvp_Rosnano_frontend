import * as Highcharts from 'highcharts';

require('../lib/highcharts-3d')(Highcharts);

require("highcharts/modules/exporting")(Highcharts);

export function highChart3Dcolumn(containerName) {

// Set up the chart
    const chart = new Highcharts.Chart({
        chart: {
            renderTo: containerName,
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        xAxis: {
            categories: ['Toyota', 'BMW', 'Volvo', 'Audi', 'Peugeot', 'Mercedes-Benz',
                'Volkswagen', 'Polestar', 'Kia', 'Nissan']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: 'Cars sold: {point.y}'
        },
        title: {
            text: 'Тестовый график 9',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://ofv.no/registreringsstatistikk"' +
                'target="_blank">OFV</a>'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
            colorByPoint: true
        }]
    });



}

export function highChart3Ddohut(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Global smartphone shipments market share, Q1 2022'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
                'target="_blank">Counterpoint Research</a>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: [
                ['Samsung', 23],
                ['Apple', 18],
                {
                    name: 'Xiaomi',
                    y: 12,
                    sliced: true,
                    selected: true
                },
                ['Oppo*', 9],
                ['Vivo', 8],
                ['Others', 30]
            ]
        }]
    });
}

export function highChart3Dpie(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Суммарное количество инвестиций (2010 - 2021)',
            style: {
                color: '#FFF'
            }
        },

        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}% - {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: [
                ['МИК',  23874640875],
                ['Наноцентр',  9077349904],
                {
                    name: 'Прочее',
                    y:  2015513678,
                    sliced: true,
                    selected: true
                },
                ['ТИК',  1536019540],
            ]
        }]
    });
}