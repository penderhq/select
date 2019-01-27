import React from 'react'

export default ({key, id, className, selected, option, icon, onClick, optionRenderer}) => (
    <div
        key={key}
        className={className}
        onClick={onClick}
    >
        {optionRenderer({option, inList: true})}
    </div>
)
