import React from 'react'
import PropTypes from 'prop-types'
import arrowDown from '@cmds/icons/lib/arrowDown'
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
        inline: PropTypes.bool,
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
        noOptionsRenderer: PropTypes.func,
        iconGetter: PropTypes.func,
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

        const {iconGetter} = this.props
        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        const option = this.props.options.find(option => {
            return option.id === this.props.value
        })

        return (
            <div
                className={css`
                    position: relative;
                `}
            >
                <div
                    className={cx(
                        css`
                        position: relative;
                        appearance: none;
                        background-color: #fff;
                        border: 1px solid #d9d9d9;
                        border-radius: 3px;
                        color: #191919;
                        display: flex;
                        align-items: center;
                        font-size: 16px;
                        height: 38px;
                        line-height: 1.42857;
                        padding: 5px 15px;
                        transition: border-color .15s ease-in-out;
                        max-width: 100%;
                        width: 280px;
                        &:active {
                            -webkit-transition-duration: 0s;
                            border-color: #07f;
                            outline: 0;
                            transition-duration: 0s;
                        }
                    `,
                        this.state.open ? css`
                            -webkit-transition-duration: 0s;
                            border-color: #07f;
                            outline: 0;
                            transition-duration: 0s;
                    ` : null
                    )}
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            align-items: center;
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
                                    option,
                                    iconGetter
                                })
                            ) : null}
                        </div>
                        <div>
                            {arrowDown({width: 12})}
                        </div>
                    </div>
                </div>
                {this.state.open ? (
                    <OptionList
                        inline={this.props.inline}
                        alignLeft={this.props.alignLeft}
                        value={this.props.value}
                        options={this.props.options}
                        clearable={this.props.clearable}
                        iconGetter={this.props.iconGetter}
                        onOptionClick={this.handleChange}
                        noOptionsRenderer={noOptionsRenderer}
                        optionRenderer={optionRenderer}
                        onClickOutside={this.close}
                    />
                ) : null}
            </div>

        )
    }

    handleChange = ({id}) => {

        this.setState({
            open: false
        })

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