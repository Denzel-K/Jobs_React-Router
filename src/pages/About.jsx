/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
    const [user, setUser] = useState('Jack');

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores magni illo harum odio vel. Vero eum ipsum, nobis blanditiis accusantium enim temporibus, a, inventore accusamus dolore sit! Facilis, porro.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores magni illo harum odio vel. Vero eum ipsum, nobis blanditiis accusantium enim temporibus, a, inventore accusamus dolore sit! Facilis, porro.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores magni illo harum odio vel. Vero eum ipsum, nobis blanditiis accusantium enim temporibus, a, inventore accusamus dolore sit! Facilis, porro.</p>
        
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    );
}
 
export default About;