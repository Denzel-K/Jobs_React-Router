/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

/* eslint-disable react-refresh/only-export-components */
const Careers = () => {
    const careers = useLoaderData()

    return ( 
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

 
export default Careers;