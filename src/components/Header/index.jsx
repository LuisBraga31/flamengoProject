import { useEffect, useState } from 'react';
import './header.css'

export default function Header() {

    const [background, setBackground] = useState(false);
    
    useEffect(() => {
        
        const handleScroll = () => {

          if (window.scrollY > 0) {
            setBackground(true);
          } else {
            setBackground(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

    return (
        <header className={`${background ? 'header-active' : ''}`}>

            <h2 href="#" className="logo"> FlamengoSpace! </h2>
            
            <nav className="navbar">
                <a href="#"> Home </a>
                <a href="#players"> Jogadores </a>
                <a href="#titles"> Títulos </a>
            </nav>
            
        </header>
    )
}