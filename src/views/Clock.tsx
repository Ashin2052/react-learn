import React from "react";

export default  class Clock extends React.Component<any, any>{
    timerId:any;
    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    }
}

