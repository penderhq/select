import React from 'react'
import {css, cx} from 'emotion'

const Button = ({onClick, type, className, icon, highlighted, primary, children}) => (
    <button
        type={type || 'button'}
        className={cx(css`
            background: #fff;
            border: none;
            border-radius: 5px;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
            color: #262626;
            cursor: pointer;
            fill: currentColor;
            font-size: 14px;
            font-weight: 400;
            line-height: 30px;
            padding: 0 10px;
            height: 30px;
            position: relative;
            text-align: center;
            text-decoration: none;
            transition: all .05s ease-out;
            user-select: none;
            white-space: nowrap;
            display: flex;
            align-items: center;
            &:focus, &:hover {
                -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
                -webkit-transform: translateY(-1px);
                box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
                transform: translateY(-1px);
                outline: none;
            }
            &:active {
                -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
                -webkit-transform: translateY(1px);
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
                transform: translateY(1px);
            }
        `,
            primary ? css`
            background-color: #07f;
            color: #fff;
            font-weight: 700;
            ` : css`

            `,
            highlighted ? css`
                &:before {
                    background-color: rgba(0,119,255,.1);
                    border: 3px solid #fff;
                    border-radius: 5px;
                    bottom: 0;
                    content: "";
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
                &:after {
                    border: 1px solid #07f;
                    border-radius: 5px;
                    bottom: 0;
                    content: "";
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            ` : null,
            className
        )}
        onClick={onClick}
    >
        {icon ? icon({
            height: 16,
            className: children ? css`
                margin-right: 4px;
            ` : null
        }) : null}
        {children}
    </button>
)

export default Button