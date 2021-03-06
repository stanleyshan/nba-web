import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider} from './CountSlider';
import { Radio, Row, Col, Switch } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state= {
        minCount: 2,
        chartType: "hexbin",
        displayToolTip: true,
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    }

    onTooltipChange = (displayTooltip) => {
        this.setState({ displayTooltip });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayToolTip={this.state.displayToolTip}
                />
                <div className="filters">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider onCountSliderChange={this.onCountSliderChange}/> : null}
                    <Row>
                        <Col span={12} offset={2}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}