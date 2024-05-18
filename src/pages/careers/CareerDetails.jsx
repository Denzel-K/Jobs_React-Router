/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();

    return ( 
        <div className="career-details">
            <h2>Career details for <span>{career.title}</span></h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, assumenda temporibus aperiam labore provident deleniti voluptatem quae animi magni harum necessitatibus nostrum tempore impedit ad debitis quidem maxime illum tenetur.</p>
            </div>
        </div>
    );
}


 
export default CareerDetails;