import React from 'react';
import cl from './../../../scss/MainPage.module.css';


const Hero = ()=>{
    return (
        <section className={cl.Hero}>
            <div className='container'>
                <div className={cl.wrap}>
                    <h1 className={cl.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className={cl.descr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus asperiores illo dolor facilis quaerat assumenda. Exercitationem quas deserunt dolores nihil enim, harum explicabo autem debitis</p>
                </div>
            </div>
        </section>
    )
}

export default Hero