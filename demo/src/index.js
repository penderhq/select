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
        background-color: #fff;
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

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>SingleSelect Demo</h1>
                <Example1/>
                <Example2/>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
