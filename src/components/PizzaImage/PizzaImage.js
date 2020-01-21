import React from 'react';

import PizzaImage from '@/assets/pizza.jpg';

import classes from './PizzaImage.module.scss';

const pizzaImage = () => {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImage} className={classes.PizzaImg} alt="Pizza" />
        </div>
    );
};

export default pizzaImage;
