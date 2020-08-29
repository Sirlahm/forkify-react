import React from 'react'

import '../../global.style.css'

const Ingredient = ({ingredient}) => {
    

    return (
        <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1000</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">g</span>
                            pasta
                        </div>
                    </li>
    )
}