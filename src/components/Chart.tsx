import React from 'react'
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

interface ChartProps {
    win: number,
    losses: number
}

const ChartPie: React.FC<ChartProps> = ({win, losses}) => {
    const pieChartData = {
        labels: ["Поражения", "Победы"],
        datasets: [{
            data: [losses, win],
            label: "Infected People",
            backgroundColor: ["#FF0000", "#00CC00"],
            hoverBackgroundColor: ["#BF3030", "#008500"]
        }]
      };
        
        return (
            <div style={{width: '270px', height: '270px'}}>
                <h3 style={{display: 'flex', justifyContent: 'center'}}>Статистика игр</h3>
                <Pie
                type="pie"
                width={30}
                height={30}
                options={{
                    title: {
                    display: true,
                    text: "Статистика игр",
                    fontSize: 15
                    },
                    legend: {
                    display: false, //Is the legend shown?
                    }
                }}
                data={pieChartData}
                />
            </div>
        )
}

export default ChartPie