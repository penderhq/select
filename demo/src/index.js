import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Heading, Paragraph, Canvas, Box } from '@pndr/demo-utils'
import { render } from 'react-dom'
import { css } from 'emotion'
import { injectGlobal } from 'emotion'
import gridView from '@pndr/icons/lib/gridView'
import listView from '@pndr/icons/lib/listView'
import galleryView from '@pndr/icons/lib/galleryView'
import plus from '@pndr/icons/lib/plus'
import Button from '@pndr/button'
import times from 'lodash/times'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import Select from '../../src'
import OptionList from '../../src/OptionList'
import AdaptiveDialog from '../../src/AdaptiveDialog'

class Example extends Component {

    state = {
        value: 'opt1'
    }

    render() {
        return <div>
            <Box>
                <Select
                    value={this.state.value}
                    alignLeft={true}
                    size={this.props.size}
                    disabled={this.props.disabled}
                    options={[{
                        id: 'opt1',
                        name: 'Option 1'
                    }, {
                        id: 'opt2',
                        name: 'Option 2'
                    }, {
                        id: 'opt3',
                        name: 'Option 3'
                    }, {
                        id: 'opt4',
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }]}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: 'opt1'
    }

    render() {
        return <div>
            <Heading>
                With icon
            </Heading>
            <Box>
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
                    }, {
                        id: 'opt4',
                        icon: listView,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }]}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: null
    }

    render() {
        return <div>
            <Heading>
                Clearable
            </Heading>
            <Box>
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
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example4 extends Component {

    state = {
        value: 'opt1'
    }

    optionRenderer = ({ option }) => (
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
            <Heading>
                Custom Option Rendering
            </Heading>
            <Box>
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
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example5 extends Component {

    state = {
        value: null
    }

    render() {
        return <div>
            <Heading>
                Inline Option List
            </Heading>
            <Box>
                <OptionList
                    className={css`
                        position: relative;
                    `}
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
                    onOptionClick={({ id }) => {

                        this.setState({
                            value: id
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example6 extends Component {

    state = {
        options: [],
        open: false
    }

    componentDidMount() {

        this.button = ReactDOM.findDOMNode(this.refs.button)
    }

    render() {

        const availableOptions = [{
            id: 'opt1',
            name: 'Option 1'
        }, {
            id: 'opt2',
            name: 'Option 2'
        }, {
            id: 'opt3',
            name: 'Option 3'
        }]

        const options = availableOptions.filter(option => {
            return this.state.options.includes(option.id) === false
        })

        return <div>
            <Heading>
                Button with Option List
            </Heading>
            <Box>
                <div
                    className={css`
                    width: 200px;
                    margin-bottom: 24px;
                `}
                >
                    <div
                        className={css`
                        position: relative;

                    `}
                    >
                        <Button
                            ref={'button'}
                            icon={plus}
                            onClick={() => this.setState({ open: true })}
                        >
                            Select an option
                        </Button>
                        {this.state.open ? (
                            <AdaptiveDialog
                                referenceElement={this.button}
                                options={options}
                                onOptionClick={({ id }) => {

                                    const options = [].concat(this.state.options)

                                    options.push(id)

                                    this.setState({
                                        options,
                                        open: false
                                    })
                                }}
                                onClickOutside={() => this.setState({ open: false })}
                                component={OptionList}
                            />
                        ) : null}
                    </div>
                </div>
                <div>
                    {this.state.options.map((id) => {

                        const option = availableOptions.find(option => {
                            return option.id === id
                        })

                        return (
                            <div key={id} className={css`margin-bottom: 8px;`}>
                                {option.name} <button type={'button'} onClick={() => this.handleRemoveOption({ id })}>remove</button>
                            </div>
                        )
                    })}
                </div>
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }

    handleRemoveOption = ({ id }) => {

        const options = this.state.options.filter(optionId => optionId !== id)

        this.setState({
            options
        })
    }
}


class Example7 extends Component {

    state = {
        value: 'opt1'
    }

    render() {
        return <div>
            <Box>
                <Select
                    value={this.state.value}
                    alignLeft={true}
                    size={this.props.size}
                    disabled={this.props.disabled}
                    options={times(200).map(i => ({
                        id: 'opt' + (i + 1),
                        name: 'Option ' + (i + 1)
                    }))}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}


class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <Heading>
                    Default
                </Heading>
                <Paragraph>
                    Default select
                </Paragraph>
                <Example />
                <Paragraph>
                    Long list
                </Paragraph>
                <Example7 />
                <Paragraph>
                    Select in small size
                </Paragraph>
                <Example
                    size={'sm'}
                />
                <Paragraph>
                    Select that's been disabled
                </Paragraph>
                <Example
                    disabled={true}
                />
                <Example2 />
                <Example3 />
                <Example4 />
                <Example5 />
                <Example6 />
            </Canvas>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))
