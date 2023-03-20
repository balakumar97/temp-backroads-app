import React from 'react'
import { Title } from './Title'
import { tours } from '../data'
import { Tour } from './Tour'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title titles="featured" subTitles="tours"></Title>
            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour}></Tour>
                    )
                })}

            </div>
        </section>

    )
}

export default Tours