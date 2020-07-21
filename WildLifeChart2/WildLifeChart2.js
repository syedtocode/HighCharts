Highcharts.chart('WildLifeChart', {
    title: { text: 'Wild Life Population vs Tiger Population' },
    subtitle: { text: 'In the last 4 years'},
    xAxis: {
      title: { text: 'Year'},
      categories: ['2017', '2018', '2019', '2020']
    },
    yAxis: {
      title: { text: 'Millions'},
      tickInterval: 0.10
    },
    series: [ {
      name: 'Wild Life in Millions',
      data: [ 100, 300, 400, 200 ],
      color: 'green'
    },
    {
	     name: 'Tiger in Millions',
       data: [10, 30, 50, 20],
       color: 'purple'

     } ],
     legend: { enabled: true }
  });
