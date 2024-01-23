/* eslint-disable react/prop-types */
import './carditem.css'

export default function CardItem({name, image, position, age, nationality, number}) {
    return (
        <div className="card">
            <h2> {name} </h2>
            <img src={image} alt="" />
            <span> {position} </span>
            <span> {age} anos </span>
            <span> {nationality} </span>
            <span className="number"> {number} </span>
        </div>
    )
}