import React from 'react'
import { pageLinks } from '../data'
import { PageLink } from './PageLink'

export const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id={parentClass}>
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} link={link} itemClass={itemClass}></PageLink>
                )
            })}

        </ul >

    )
}