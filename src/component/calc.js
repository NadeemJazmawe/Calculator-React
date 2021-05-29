import React, { Component } from 'react';
import Button from './Button';
import '../css/style.css';

class calc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '0',
            previous: []
        }
    }

    reset = () => {
        this.setState({
            current: '0',
            previous: ''
        })
    }

    addToCurrent = (symbol) => {
        if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
            console.log({"state": this.state});
            let { previous } = this.state;
            console.log({"prev": previous});
            previous += this.state.current + symbol;
    
            this.setState({
                current: '0',
                previous
            });
        } else {
            if (this.state.current === "0" && symbol !== ".") {
                this.setState({ current: symbol })
            } else {
                this.setState({ current: this.state.current + symbol })
            }
        }
    }

    calculate = (symbol) => {
        if (this.state.previous.length > 0) {
            // eslint-disable-next-line 
            let current = eval(this.state.previous + this.state.current);
            this.setState({ current, previous: [] });
        }
    }

    render() {
        const buttons = [
            { symbol: 'C', cols: 3, action: this.reset },
            { symbol: '/', cols: 1, action: this.addToCurrent },
            { symbol: '7', cols: 1, action: this.addToCurrent },
            { symbol: '8', cols: 1, action: this.addToCurrent },
            { symbol: '9', cols: 1, action: this.addToCurrent },
            { symbol: '*', cols: 1, action: this.addToCurrent },
            { symbol: '4', cols: 1, action: this.addToCurrent },
            { symbol: '5', cols: 1, action: this.addToCurrent },
            { symbol: '6', cols: 1, action: this.addToCurrent },
            { symbol: '-', cols: 1, action: this.addToCurrent },
            { symbol: '1', cols: 1, action: this.addToCurrent },
            { symbol: '2', cols: 1, action: this.addToCurrent },
            { symbol: '3', cols: 1, action: this.addToCurrent },
            { symbol: '+', cols: 1, action: this.addToCurrent },
            { symbol: '0', cols: 1, action: this.addToCurrent },
            { symbol: '.', cols: 1, action: this.addToCurrent },
            { symbol: '=', cols: 1, action: this.calculate }
        ];

        return (
            <div className="container">
                <div className="App">
                    {this.state.previous.length > 0 ?
                        <div className="floaty-last"> {this.state.previous}</div>
                        : null}
                    <input className="result" type="text" value={this.state.current} />

                    {buttons.map((btn, i) => {
                        return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol => btn.action(symbol))} />
                    })}

                </div>
            </div>
        );
    }
}





export default calc;