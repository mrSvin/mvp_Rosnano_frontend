import * as Highcharts from 'highcharts';

require('highcharts-3d/3d')(Highcharts);

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
            text: 'Sold passenger cars in Norway by brand, January 2021'
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