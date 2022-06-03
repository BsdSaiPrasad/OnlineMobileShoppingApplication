import { Outlet, Link } from "react-router-dom";

const LayoutCart = () => {
    return (
        <>

            <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="displayMobiles"> Display Mobiles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="displayRating"> Display Ratings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="addRatingToMobile">Add Rating to Mobile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default LayoutCart;