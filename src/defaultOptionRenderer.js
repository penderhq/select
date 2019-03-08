import React from 'react'
import {css} from 'emotion'


export default ({iconGetter, selected, option, inList}) => {

    let icon = option.icon

    if (iconGetter) {
        icon = iconGetter({option})
    }

    return (
        <span
            className={css`
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;
            align-items: center;
            overflow: hidden;
        `}
        >
    {inList && icon ? icon({
        height: 16,
        style: {marginRight: 8, color: selected ? '#fff' : '#6C9AEF'}
    }) : null}
            {option.name ? option.name : <div>&nbsp;</div>}
    </span>
    )
}
