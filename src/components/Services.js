import React from 'react'
import { Title } from './Title'
import { services } from '../data'
import { Service } from './Service'

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title titles="our" subTitles="services"></Title>
            <div className="section-center services-center">
                {services.map((service) => {
                    return (
                        <Service key={service.id} {...service}></Service>
                    )
                })}


            </div>
        </section>

    )
}

export default Services