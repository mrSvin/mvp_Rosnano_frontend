import * as Highcharts from 'highcharts';

require("highcharts/modules/exporting")(Highcharts);


export function highChartEnergy(inputData, containerName) {
    Highcharts.chart(containerName,
        {
            lang: {
                loading: 'Загрузка...',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
                exportButtonTitle: "Экспорт",
                printButtonTitle: "Печать",
                rangeSelectorFrom: "С",
                rangeSelectorTo: "По",
                rangeSelectorZoom: "Период",
                downloadPNG: 'Скачать PNG',
                downloadJPEG: 'Скачать JPEG',
                downloadPDF: 'Скачать PDF',
                downloadSVG: 'Скачать SVG',
                printChart: 'Напечатать график',
                viewFullscreen: 'На весь экран'
            },
            plotOptions: {
                xrange: {
                    grouping: false
                },
                column: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            global: {
                timezoneOffset: new Date().getTimezoneOffset()
            },

            chart: {
                type: 'column'
            },
            colors: ['#fc2455'],

            title: {
                text: 'Тестовый график 1',
                style: {
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: '22px',
                }
            },
            xAxis: {
                title: {
                    text: 'Тестовая ось',
                    align: 'high',
                    style: {
                        color: '#FFF'
                    }
                },
                labels: {
                    style: {
                        color: '#FFF',
                        fontSize: '18px',
                    }
                },
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            },
            credits: {
                enabled: false
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#FFF'
                    },
                },
                min: 0,
                title: {
                    text: 'тестовые значения',
                    style: {
                        color: '#FFF'
                    }
                }
            },
            tooltip: {
                valueSuffix: ' чего-то'
            },

            legend: {
                enabled: false
            },


            series: [{
                name: 'Тестовое значение',
                data: inputData
            }]
        }
    );
}

export function highChartPie(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Тестовый график 2',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
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
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Значение',
            colorByPoint: true,
            data: [{
                name: 'Пример 1',
                y: 25.67,
                sliced: true,
                selected: true
            }, {
                name: 'Пример 2',
                y: 14.77
            }, {
                name: 'Пример 3',
                y: 4.86
            }, {
                name: 'Пример 4',
                y: 2.63
            }, {
                name: 'Пример 5',
                y: 1.53
            }, {
                name: 'Пример 6',
                y: 1.40
            }, {
                name: 'Пример 7',
                y: 0.84
            }, {
                name: 'Пример 8',
                y: 0.51
            }, {
                name: 'Пример 9',
                y: 2.6
            }]
        }],

    });

}

export function highChartColumn(containerName) {

    Highcharts.chart(containerName, {
        title: {
            text: 'Тестовый график 3',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        xAxis: {
            categories: ['Пример 1', 'Пример 2', 'Пример 3', 'Пример 4', 'Пример 5'],
            labels: {
                style: {
                    color: '#FFF'
                }
            },
        },
        yAxis: {
            title: {
                text: 'тестовые значения',
                style: {
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: '12px',
                }
            }
        },
        credits: {
            enabled: false
        },
        labels: {
            items: [{
                html: 'Общее',
                style: {
                    left: '50px',
                    top: '18px',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'white'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '2020',
            data: [59, 83, 65, 228, 184]
        }, {
            type: 'column',
            name: '2021',
            data: [24, 79, 72, 240, 167]
        }, {
            type: 'column',
            name: '2022',
            data: [58, 88, 75, 250, 176]
        }, {
            type: 'spline',
            name: 'Среднее',
            data: [47, 83.33, 70.66, 239.33, 175.66],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Liter',
            data: [{
                name: '2020',
                y: 619,
                color: Highcharts.getOptions().colors[0] // 2020 color
            }, {
                name: '2021',
                y: 586,
                color: Highcharts.getOptions().colors[1] // 2021 color
            }, {
                name: '2022',
                y: 647,
                color: Highcharts.getOptions().colors[2] // 2022 color
            }],
            center: [80, 70],

            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }],
        legend: {
            itemStyle: {
                color: '#FFF'
            }
        }
    });

}

export function highChartLine(containerName) {

    Highcharts.chart(containerName, {

        title: {
            text: 'Тестовый график 4',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },

        yAxis: {
            title: {
                text: 'тестовые значения',
                style: {
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: '12px',
                }
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            itemStyle: {
                color: '#FFF'
            },
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: [{
            name: 'Пример 1',
            data: [43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610]
        }, {
            name: 'Пример 2',
            data: [24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050]
        }, {
            name: 'Пример 3',
            data: [11744, 30000, 16005, 19771, 20185, 24377,
                32147, 30912, 29243, 29213, 25663]
        }, {
            name: 'Пример 4',
            data: [null, null, null, null, null, null, null,
                null, 11164, 11218, 10077]
        }, {
            name: 'Пример 5',
            data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                17300, 13053, 11906, 10073]
        }],
        credits: {
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });

}

export function highChartLineZoom(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: generateRandomValues()
        }]
    });

}


function generateRandomValues() {
    let array = [];
    let startTime = 1167609600000;
    for (let i=0; i<1000; i++) {
        let arrayInput = [];
        startTime=startTime+86400000
        arrayInput.push(startTime, Math.random())
        array.push(arrayInput)
    }
    // console.log(array)
    return array
}

