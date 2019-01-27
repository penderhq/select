import React from 'react'
import {css, cx} from 'emotion'

export default ({selected, onClick}) => (
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

