import React, { useState, useEffect } from "react";
import './CountDown.scss'

class CountDownClass extends React.Component {
    state = {
        count: 10
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                this.props.onTimesup()
            }
        }
    }

    render() {
        return (
            <div>
                <p className="title">Count Down with Class Component and Function Component</p>
                {this.state.count} classes
            </div>
        )
    }
}

const CountDownFunc = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) return

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div>{count} hooks</div>
    )
}
export { CountDownClass, CountDownFunc }