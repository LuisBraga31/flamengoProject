import './titles.css'
import titles from '../../data/titles.json'

export default function Titles() {
    return (
        <section id="titles" className="sectiontitle">
            
            <h2> Títulos do Clube </h2>
            
            <div className="titles-container">
                {titles.map((item, index) => (
                    <div key={index} className="titleCard">
                        
                        <h3> {item.name} </h3>
                        <img src={item.image} alt="" />
                        <span> {item.years} </span>

                    </div>
                ))}
            </div>

        </section>
    )
}