import React, {useState, useEffect} from 'react';
import './Testimonial.scss';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor,client } from '../../client';

const Testimonial = () =>{
    const [brands,setBrands] = useState([ ]);
    const [testimonials,setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const query = '*[_type == "Testimonials"]';
        const brandsQuery = '*[_type == "brands"]';


        client.fetch(query)
        .then((data) => {
            setTestimonials(data);
        })

        client.fetch(brandsQuery)
        .then((data) => {
            setBrands(data);
        })

    },[])

    const test = testimonials[currentIndex];

    return (
       <>
       {testimonials.length && (
        <>
        <div className="app__testimonial-item app__flex">
            <img src = {urlFor(test.ImgURL)} alt ="Testimonial"/>
            <div className="app__Testimonial-content">
            <p className="p-text">{test.feedback}</p>
            <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
            </div>
            </div>

            <div className="app__testimonial-btns app__flex">
                

            </div>
        </div>
        </>
       )}
       </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial,'app__Testimonial'),
    'Testimonial',
    "app__primarybg"
);