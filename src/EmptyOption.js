import React from 'react'
import {css, cx} from 'emotion'
import defaultEmptyRenderer from './defaultEmptyRenderer';

export default ({selected, onClick}) => (
    <div
        className={cx(
            css`
            min-height: 34px;
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
        {defaultEmptyRenderer()}
    </div>
)

