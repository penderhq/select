import React from 'react'
import ClickOutside from 'react-click-outside'
import { css, cx, keyframes } from 'emotion'
import noop from 'lodash/noop'

const Popover = ({ width, className, children, align, onClose }) => (
    <ClickOutside
        onClickOutside={onClose || noop}
        className={cx(
            css`
                margin-top: 8px;
                -webkit-transform-origin: 50% 0;
                -webkit-transition: all .3s cubic-bezier(.02,.71,.23,.99);
                background-color: #fff;
                box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
                border-radius: 6px;
                color: #000;
                display: block;
                fill: #000;
                font-size: 14px;
                line-height: 1.4;
                transform-origin: 50% 0;
                transition: all .3s cubic-bezier(.02,.71,.23,.99);
                z-index: 15;
                -webkit-filter: drop-shadow(0 1px 7px rgba(0,0,0,.13));
                filter: drop-shadow(0 1px 7px rgba(0,0,0,.13));
                animation-duration: .15s;
                max-height: calc(100vh - 30px);
    overflow: hidden auto;
            `,
            align === 'left' ? css`
                position: absolute;
                left: 0;
            ` : null,
            align === 'right' ? css`
                position: absolute;
                right: 0;
            ` : null,
            className
        )}
        style={{
            width
        }}
    >
        {children}
    </ClickOutside>
)

export default Popover