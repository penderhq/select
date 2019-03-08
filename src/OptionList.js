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
        padding: 8px 15px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 34px;
        &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: #e6f1ff;
        }
    `, selected ? css`
        background-color: #07f;
        color: #fff;
        &:hover {
            background-color: #005fcc;
            color: #fff;
        }
    ` : null
)

export default class OptionList extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        inline: PropTypes.bool,
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
        iconGetter: PropTypes.func,
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

        const {iconGetter} = this.props
        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        return (
            <ClickOutside
                className={cx(
                    !this.props.inline ? css`
                     top: 100%;
                        position: absolute;
                        z-index: 1;
                    ` : null,
                    css`
                        background-color: rgb(255, 255, 255);
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
                        margin-bottom: 8px;
                        margin-top: 8px;
                        padding-top: 4px;
                        padding-bottom: 4px;
                        width: 100%;
                        box-sizing: border-box;
                        border-radius: 4px;
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
                        iconGetter,
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