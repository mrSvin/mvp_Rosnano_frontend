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
                name: 'МИК',
                y:  23874640875,
                sliced: true,
                selected: true
            }, {
                name: 'Наноцентр',
                y:  9077349904
            }, {
                name: 'Прочее',
                y:  2015513678

            }, {
                name: 'ТИК',
                y:  1536019540
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
            title: {
                text: 'Тестовая ось',
                align: 'high',
                style: {
                    color: '#FFF'
                }
            },
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },

        labels: {
            style: {
                color: '#FFF',
                fontSize: '18px',
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

    Highcharts.setOptions({
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
            viewFullscreen: 'На весь экран',

            downloadCSV: "Скачать CSV",
            downloadXLS: "Скачать XLS",
            viewData: 'Режим таблицы',
            hideData: "Скрыть таблицу"
        },
        plotOptions: {
            xrange: {
                grouping: false
            }
        },
        global: {
            timezoneOffset: new Date().getTimezoneOffset()
        }
    });

    Highcharts.chart(containerName, {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Тестовый график 5',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Зажмите и перетащите левую кнопку мыши для увеличения' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Рандомные значения'
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
        credits: {
            enabled: false
        },
        series: [{
            type: 'area',
            name: 'Значение',
            data: generateRandomValues()
        }]
    });

}

export function highChartMonthLine(containerName) {

    Highcharts.setOptions({
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
            viewFullscreen: 'На весь экран',

            downloadCSV: "Скачать CSV",
            downloadXLS: "Скачать XLS",
            viewData: 'Режим таблицы',
            hideData: "Скрыть таблицу"
        },
        plotOptions: {
            xrange: {
                grouping: false
            }
        },
        global: {
            timezoneOffset: new Date().getTimezoneOffset()
        }
    });

    Highcharts.chart(containerName, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Распределение инвестиций',
            style: {
                color: '#FFF'
            }
        },
        xAxis: {
            title: {
                text: 'Года',
                style: {
                    color: '#FFF'
                },
                align: 'high'
            },
            labels: {
                style: {
                    color: '#FFF'
                }
            },
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021']
        },
        credits: {
            enabled: false
        },
        yAxis: {
            min: 0,
            title: {
                text: '%',
                style: {
                    color: '#FFF'
                }
            },
            labels: {
                style: {
                    color: '#FFF'
                },
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.y} руб - {point.percentage:.1f}%<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },

        series: [{
            name: 'МИК',
            color: '#e81e1d',
            data: [ 0, 1512687, 5259664, 93477927, 212900742, 727573945,506327730,1270057284,3400267363,6971316500, 9102391637,1583555396]
        }, {
            name: 'Наноцентр',
            color: '#000000',
            data: [  0, 202892698, 185182593, 175500936,241076075,554087599,993398913,1497140632,1654787341,1539112094,1633563674,400607349]
        }, {
            name: 'Прочее',
            color: '#ffea32',
            data: [ 104676000,292719000, 156458000, 152841000, 168685000, 175522000, 158172000, 169448355, 188279886, 202702227, 194223990, 51786219]
        }, {
            name: 'ТИК',
            color: '#38e817',
            data: [ 0, 0, 3000000, 27386000, 42955938, 50510229, 91359049, 120935962, 270479050, 551504261, 272478971, 105410080]
        }],
        legend: {
            itemStyle: {
                color: '#FFF'
            }
        }
    });
}

export function highChartStackedColumn(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Динамика количества сотрудников по годам',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            labels: {
                style: {
                    color: '#FFF'
                }
            },
        },
        yAxis: {
            title: {
                text: 'количество людей',
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
        legend: {
            align: 'left',
            x: 70,
            verticalAlign: 'top',
            y: 70,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'НЦ+Тик+Прочие',
            data: [0, 178, 184, 167,291,221,325,402,455,422,338,554]
        }, {
            name: 'МИК',
            data: [35, 120, 338, 394,486,876,1212,2214,2617,3102,2674,1977]
        }
        ]
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

