import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div>
            <h2>Page Not Found!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsam sint totam, perferendis, nihil, suscipit dignissimos sapiente alias molestias blanditiis minus praesentium vitae necessitatibus adipisci rerum magni quasi voluptas similique.</p>

            <p>Go to the <Link to="/">HomePage</Link></p>
        </div>
    );
}
 
export default NotFound;