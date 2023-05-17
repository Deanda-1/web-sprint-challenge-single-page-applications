/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
export const Home = (props) => {
    const navigate = useNavigate ();
    return (
        <div>
            <button onClick={() => navigate('/pizza')} id="order-pizza">
                Order Pizza
            </button>
        </div>
    )
}