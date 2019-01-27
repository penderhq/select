import React from 'react'
import PropTypes from 'prop-types'
import arrowDown from '@cmds/icons/es/arrowDown'
import {css, cx} from 'emotion'
import OptionList from './OptionList'

import defaultNoOptionsRenderer from './defaultNoOptionsRenderer'
import defaultOptionRenderer from './defaultOptionRenderer'

export default class Select extends React.Component {

    static defaultProps = {
        clearable: false,
        alignRight: false
    }

    static propTypes = {
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
        noOptionsRenderer: PropTypes.func,
        optionRenderer: PropTypes.func,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string
            })
        ),
        onChange: PropTypes.func
    }

    state = {
        open: false
    }

    render() {

        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        const option = this.props.options.find(option => {
            return option.id === this.props.value
        })

        return (
            <div
                className={cx(
                    css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `,
                    this.props.className
                )}
            >
                <div
                    className={cx(
                        css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        align-items: center;
                        padding-left: 4px;
                        padding-right: 4px;
                        cursor: pointer;
                        border-radius: 3px;
                        position: relative;
                        &:active {
                            background-color: hsla(0,0%,0%,0.05);
                        }
                    `
                    )}
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <div
                            className={cx(css`
                                display: flex;
                                flex-grow: 1;
                                overflow: hidden;
                                white-space: nowrap;
                            `, this.props.alignRight ? css`justify-content: flex-end` : null
                            )}
                        >
                            {option ? (
                                optionRenderer({
                                    option
                                })
                            ) : null}
                        </div>
                        <div>
                            {arrowDown({width: 12})}
                        </div>
                    </div>
                    {this.state.open ? (
                        <OptionList
                            alignLeft={this.props.alignLeft}
                            value={this.props.value}
                            options={this.props.options}
                            clearable={this.props.clearable}
                            onOptionClick={this.handleChange}
                            noOptionsRenderer={noOptionsRenderer}
                            optionRenderer={optionRenderer}
                            onClickOutside={this.close}
                        />
                    ) : null}
                </div>
            </div>
        )
    }

    handleChange = ({id}) => {

        this.props.onChange({
            value: id
        })
    }

    close = () => {
        this.setState({
            open: false
        })
    }
}