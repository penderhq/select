import React from 'react'
import {css} from 'emotion'

export default ({option, inList}) => (
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
