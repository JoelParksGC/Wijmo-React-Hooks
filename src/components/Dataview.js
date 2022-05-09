import './Dataview.css';
import { useRef, useState } from 'react';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { FlexChart, FlexChartLegend, FlexChartAxis, FlexChartSeries } from '@grapecity/wijmo.react.chart';
import { FlexChartAnimation } from '@grapecity/wijmo.react.chart.animation';
import { ComboBox } from '@grapecity/wijmo.react.input';
import { getData, getChartData } from '../data/data'

function Dataview() {
    const [cv, setCV] = useState(new CollectionView(getData(), {}));
    const [chartCV, setChartCV] = useState(new CollectionView(getChartData(0), {}));
    const flexGrid = useRef();
    const flexChart = useRef();
    // Functions
    function selectedIndexChanged(s, e) {
        flexChart.current.control.collectionView.sourceCollection = getChartData(s.selectedIndex);
    }
    function itemsSourceChanged(s, e) {
        s.refresh();
    }
    return (
        <div>
            <div>
                <ComboBox itemsSource={cv} displayMemberPath="country" selectedIndexChanged={selectedIndexChanged}></ComboBox>
            </div>
            <br></br>
            <div>
                <FlexGrid ref={flexGrid} itemsSource={cv} selectionMode="Row">
                    <FlexGridColumn binding="id" header="ID"></FlexGridColumn>
                    <FlexGridColumn binding="country" header="Country"></FlexGridColumn>
                    <FlexGridColumn binding="gdp" header="GDP (T)"></FlexGridColumn>
                    <FlexGridColumn binding="hci" header="HCI" format="g3"></FlexGridColumn>
                    <FlexGridColumn binding="gini" header="Gini Coefficient" width="*"></FlexGridColumn>
                </FlexGrid>
            </div>
            <br></br>
            <div>
                <FlexChart ref={flexChart} itemsSource={chartCV} bindingX="year" header="Breakdown by Decade" itemsSourceChanged={itemsSourceChanged}>
                    <FlexChartLegend position="Bottom"></FlexChartLegend>
                    <FlexChartAxis wjProperty="axisY" title="HCI/Gini Coefficient" axisLine={true}></FlexChartAxis>
                    <FlexChartSeries binding="hci" name="HCI"></FlexChartSeries>
                    <FlexChartSeries binding="gini" name="Gini"></FlexChartSeries>
                    <FlexChartSeries binding="gdp" name="GDP">
                        <FlexChartAxis wjProperty="axisY" position="Right" title="GDP (T)" axisLine={true} min={0}></FlexChartAxis>
                    </FlexChartSeries>
                    <FlexChartAnimation></FlexChartAnimation>
                </FlexChart>
            </div>
        </div>
    );
}

export default Dataview;