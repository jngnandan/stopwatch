// Write your code here

import React, { Component } from 'react'

export class Stopwatch extends Component {
    state = {
        value: false,
        minutes: 0,
        seconds: 0
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    resetTimer = () => {
        const { value, minutes, seconds } = this.state
        this.setState({ value: false, minutes: 0, seconds: 0 })
        this.componentWillUnmount()
    }

    stopTimer = () => {
        const { value } = this.state
        this.setState({ value: false })
        this.componentWillUnmount()
    }

    updateTime = () => {
        const { value, minutes, seconds } = this.state
        this.setState({ seconds: seconds + 1 })
        if (seconds === 59) {
            this.setState({ seconds: 0, minutes: minutes + 1 })
        }
    }

    startTimer = () => {
        const { value } = this.state
        this.setState({ value: true })

        this.timerID = setInterval(this.updateTime, 1000)
    }


    render() {
        const { value, minutes, seconds } = this.state

        return (
            <div className='flex flex-col p-20 justify-start items-center'>
                <h1 className='text-3xl font-bold mb-6'>Stopwatch</h1>

                <div className='card shadow flex flex-col justify-start items-center bg-white rounded'>
                    <div className='flex flex-row justify-center items-center'>
                        <img className='w-6 mr-2' src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" />
                        <p className='font-bold'>Timer</p>
                    </div>
                    {seconds < 10 & minutes < 10 ?
                        <h1 className='my-3 text-3xl font-bold'>{`0${minutes}:0${seconds}`}</h1>
                        :
                        <h1 className='my-3 text-3xl font-bold'>{`${minutes}:${seconds}`}</h1>
                    }

                    <div className='flex flex-row justify-center items-center'>
                        <button onClick={this.startTimer} className='bg-green-500 hover:bg-green-600 py-1 w-16 rounded m-1'>Start</button>
                        <button onClick={this.stopTimer} className='bg-red-500 hover:bg-red-600 py-1 w-16 rounded m-1'>Stop</button>
                        <button onClick={this.resetTimer} className='bg-yellow-500 hover:bg-yellow-600 py-1 w-16 rounded m-1'>Reset</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default Stopwatch
