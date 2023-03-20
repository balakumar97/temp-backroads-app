import React from 'react'

export const Title = ({ titles, subTitles }) => {
    return (
        <div className="section-title">
            <h2>{titles} <span>{subTitles}</span></h2>
        </div>
    )
}
