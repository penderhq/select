import React from 'react'
import ClickOutside from 'react-click-outside'
import {css, cx} from 'emotion'
import EmptyOption from './EmptyOption'
import defaultOptionRenderer from './defaultOptionRenderer'
import optionItemRenderer from './optionItemRenderer'
import defaultNoOptionsRenderer from './defaultNoOptionsRenderer'
import PropTypes from 'prop-types'

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

export default class OptionList extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
        optionRenderer: PropTypes.func,
        noOptionsRenderer: PropTypes.func,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string
            })
        ),
        onOptionClick: PropTypes.func,
        onClickOutside: PropTypes.func
    }

    render() {

        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        return (
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
                            `,
                    this.props.className
                )}
                onClickOutside={this.handleClickOutside}
            >
                {this.props.clearable ? (
                    <EmptyOption
                        selected={this.props.value === null}
                        onClick={() => this.props.onOptionClick({
                            id: null
                        })}
                    />
                ) : null}
                {this.props.options && this.props.options.length ? this.props.options.map((option) => {

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
                        onClick: () => this.props.onOptionClick({
                            id: option.id
                        })
                    })
                }) : noOptionsRenderer()}
            </ClickOutside>
        )
    }

    handleClickOutside = e => {

        if (this.props.onClickOutside) {
            this.props.onClickOutside(e)
        }
    }
}