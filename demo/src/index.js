import React, {Component} from 'react'
import {render} from 'react-dom'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'
import gridView from '@cmds/icons/es/gridView'
import listView from '@cmds/icons/es/listView'
import galleryView from '@cmds/icons/es/galleryView'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

import Select from '../../src'

class Example1 extends Component {

    state = {
        value: 'opt1'
    }

    render() {
        return <div>
            <h2>
                Default
            </h2>
            <div
                className={css`
                    width: 200px;
                    height: 40px;
                    display: flex;
                `}
            >
                <Select
                    value={this.state.value}
                    alignLeft={true}
                    options={[{
                        id: 'opt1',
                        name: 'Option 1'
                    }, {
                        id: 'opt2',
                        name: 'Option 2'
                    }, {
                        id: 'opt3',
                        name: 'Option 3'
                    }]}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: 'opt1'
    }

    render() {
        return <div>
            <h2>
                With icon
            </h2>
            <div
                className={css`
                    width: 200px;
                    height: 40px;
                    display: flex;
                `}
            >
                <Select
                    value={this.state.value}
                    alignLeft={true}
                    options={[{
                        id: 'opt1',
                        icon: galleryView,
                        name: 'Gallery view'
                    }, {
                        id: 'opt2',
                        icon: gridView,
                        name: 'Grid view'
                    }, {
                        id: 'opt3',
                        icon: listView,
                        name: 'List view'
                    }]}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: null
    }

    render() {
        return <div>
            <h2>
                Clearable
            </h2>
            <div
                className={css`
                    width: 200px;
                    height: 40px;
                    display: flex;
                `}
            >
                <Select
                    clearable={true}
                    value={this.state.value}
                    alignLeft={true}
                    options={[{
                        id: 'opt1',
                        name: 'Option 1'
                    }, {
                        id: 'opt2',
                        name: 'Option 2'
                    }, {
                        id: 'opt3',
                        name: 'Option 3'
                    }]}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example4 extends Component {

    state = {
        value: 'opt1'
    }

    optionRenderer = ({option}) => (
        <div
            className={css`
                    background-color: rgb(222, 54, 24);
                    color: rgb(255, 255, 255);
                    min-width: 18px;
                    height: 18px;
                    font-size: 13px;
                    font-weight: 400;
                    max-width: 100%;
                    align-items: center;
                    display: inline-flex;
                    padding-left: 8px;
                    padding-right: 8px;
                    line-height: 1.5;
                    -webkit-print-color-adjust: exact;
                    border-radius: 9999px;
                    flex: 0 0 auto;
                `}
        >
            {option.name}
        </div>
    )

    render() {
        return <div>
            <h2>
                Custom optionRenderer
            </h2>
            <div
                className={css`
                    width: 200px;
                    height: 40px;
                    display: flex;
                `}
            >
                <Select
                    clearable={true}
                    value={this.state.value}
                    alignLeft={true}
                    optionRenderer={this.optionRenderer}
                    options={[{
                        id: 'opt1',
                        name: 'Option 1'
                    }, {
                        id: 'opt2',
                        name: 'Option 2'
                    }, {
                        id: 'opt3',
                        name: 'Option 3'
                    }]}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>Select Demo</h1>
                <Example1/>
                <Example2/>
                <Example3/>
                <Example4/>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
