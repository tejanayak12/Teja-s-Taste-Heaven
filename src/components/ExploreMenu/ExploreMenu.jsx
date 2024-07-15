import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu </h1>
            <p className='explore-menu-text'>Dive into a world of flavors with our meticulously crafted menu at Teja's Taste Heaven. Each dish is a celebration of culinary excellence, featuring fresh, high-quality ingredients and inspired by both traditional and contemporary recipes. From hearty breakfast options and savory lunches to delectable dinners and indulgent desserts, our menu offers something for every palate.Enjoy the perfect blend of taste and creativity with every bite at Teja's Taste Heaven!.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
