/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import axios from "axios";
const initialFormState = {
    name: '',
    size: '',
    hasMushrooms: false,
    hasPepperoni: false,
    hasBananaPeppers: false,
    hasExtraCheese: false,
    specialText: ''
}
export const Pizza = (props) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const handleChange = (e) => {
        console.log(e.target.name);
    }
    const onSubmitCLicked = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/orders', {}).then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitCLicked} id="pizza-form">
                <input name="name" onChange={handleChange} value={formValues.name} id="name-input" />
                <select name="size" onChange={handleChange} value={formValues.size} id="size-dropdown">
                    <option value=""></option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
                <input name="hasMushroom" onChange={handleChange} checked={formValues.hasMushrooms} type="checkbox" />Mushrooms
                <input name="hasPepperoni" onChange={handleChange} checked={formValues.hasPepperoni} type="checkbox" />Pepperoni
                <input name="hasBananaPeppers" onChange={handleChange} checked={formValues.hasBananaPeppers} type="checkbox" />Banana Peppers
                <input name="hasExtraCheese" onChange={handleChange} checked={formValues.hasExtraCheese} type="checkbox" />Extra Cheese
                <input name="hasSpecialText" onChange={handleChange} value={formValues.specialText} id="special-text" />
                <button id="order-button">Order</button>
            </form>
        </div>
    )
}