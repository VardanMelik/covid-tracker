import React, { useState, useEffect } from 'react';
import './LineGraph.css';
import { Line } from 'react-chartjs-2';



function LineGraph() {
    const [data, setData] = useState();

    const historical = "https://disease.sh/v3/covid-19/historical/all?lastdays=120"

    const buildChartData = (date, casesType='cases') => {
        const chartData = [];
        let lastDataPoint;

        data[casesType].forEach(date => {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data['casesType'][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data['casesType'][date];
        } )
        return chartData;
    }

    useEffect( () => {
        fetch(historical)
        .then(response => response.json())
        .then( data => {
            //console.log('Line Graph' + data.cases['10/5/20']);
            const chartData = buildChartData(data, "cases");
            setData(chartData);
        })
        .catch( error => console.log(error))
    },[]);

    

    return (
        <div className="lineGraph">
            <Line
                data={{
                    options: {
                        scales: {
                            yAxes: [{
                                stacked: true
                            }]
                        }
                    },
                    backgroundColor: 'rgba(204, 16, 52, 0)',
                    borderColor: '#CC1034',
                    datasets: [{data: data}]
                }}
            />
        </div>
    )
}

export default LineGraph
