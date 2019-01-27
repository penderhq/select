import React from 'react'
import PropTypes from 'prop-types'
import arrowDown from '@cmds/icons/es/arrowDown'
import ClickOutside from 'react-click-outside'
import {css, cx} from 'emotion'

const EmptyOption = ({selected, onClick}) => (
    <div
        className={cx(
            css`
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            padding-right: 8px;
            cursor: pointer;
            align-items: center;
            display: flex;
            &:active {
                opacity: 0.75;
            }
        `, selected ? css`
            background-color: #fff;
            border-radius: 3px;
            color: #000;
        ` : null
        )}
        onClick={onClick}
    >
        <div>&nbsp;</div>
    </div>
)

const optionItemRenderer = ({key, id, className, selected, option, icon, onClick, optionRenderer}) => (
    <div
        key={key}
        className={className}
        onClick={onClick}
    >
        {optionRenderer({option, inList: true})}
    </div>
)

const createOptionClassName = ({selected}) => cx(
    css`
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 34px;
        &:active {
            opacity: 0.75;
        }
    `, selected ? css`
        background-color: #fff;
        border-radius: 3px;
        color: #000;
    ` : null
)

const defaultOptionRenderer = ({option, inList}) => (
    <span
        className={css`
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
        `}
    >
    {inList && option.icon ? option.icon({
        height: 16,
        style: {marginRight: 8, color: '#6C9AEF'}
    }) : null}
        {option.name ? option.name : <div>&nbsp;</div>}
    </span>
)

export default class Select extends React.Component {

    static defaultProps = {
        clearable: false,
        alignRight: false
    }

    static propTypes = {
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
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
                        <ClickOutside
                            className={cx(
                                css`
                                background-color: #282D33;
                                padding: 8px;
                                position: absolute;
                                top: 100%;
                                z-index: 1;
                                border-radius: 6px;
                                color: #fff;
                                min-width: 220px;
                            `, this.props.alignLeft ? css`
                                left: 0;
                            ` : css`
                                right: 0;
                            `
                            )}
                            onClickOutside={this.close}
                        >
                            {this.props.clearable ? (
                                <EmptyOption
                                    selected={this.props.value === null}
                                    onClick={() => this.handleChange({
                                        id: null
                                    })}
                                />
                            ) : null}
                            {this.props.options.map((option) => {

                                const selected = option.id === this.props.value

                                return optionItemRenderer({
                                    className: createOptionClassName({
                                        selected
                                    }),
                                    key: option.id,
                                    id: option.id,
                                    option,
                                    selected,
                                    optionRenderer,
                                    onClick: () => this.handleChange({
                                        id: option.id
                                    })
                                })
                            })}
                        </ClickOutside>
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