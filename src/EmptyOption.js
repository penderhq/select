import React from 'react'
import {css, cx} from 'emotion'

export default ({selected, onClick}) => (
    <div
        className={cx(
            css`
            padding: 8px 15px;
            cursor: pointer;
            align-items: center;
            display: flex;
           &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: #e6f1ff;
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

