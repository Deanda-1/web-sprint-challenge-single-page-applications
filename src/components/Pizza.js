/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import axios from "axios";
import { useState } from  "react";
import * as yup from "yup";
import { formSchema } from "./formSchema";

const initialFormState = {
    name: "",
    size: "",
    hasMushroom: false,
    hasPepperoni: false,
    hasBananaPeppers: false,
    hasExtraCheese: false,
    specialText: "",
};
const initialErrorState = {
    name: "",
};
export const Pizza = (props) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrorState);
    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setFormValues({
                ...formValues,
                [e.target.name]: !formValues[e.target.name],
            });
        } else {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        }
        if (e.target.name === "name") {
            yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                console.log('no error');
                setErrors({
                    ...errors,
                    [e.target.name]: "",
                });
            })
            .catch((err) => {
                console.log(err.errors[0]);
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0],
                });
            });
        }
    };
    const onSubmitCLicked = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/orders', {}).then((res) => {
            console.log(res);
        });
    };
    return (
        <div>
            <form onSubmit={onSubmitCLicked} id="pizza-form">
                <input 
                name="name" 
                onChange={handleChange} 
                value={formValues.name} 
                id="name-input" 
                />
                {errors.name && <p>{errors.name}</p>}
                <select 
                name="size" 
                onChange={handleChange} 
                value={formValues.size} 
                id="size-dropdown"
                >
                    <option value=""></option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
                <input 
                name="hasMushroom" 
                onChange={handleChange} 
                checked={formValues.hasMushroom} 
                type="checkbox" 
                />Mushroom
                <input 
                name="hasPepperoni" 
                onChange={handleChange} 
                checked={formValues.hasPepperoni} 
                type="checkbox" 
                />Pepperoni
                <input 
                name="hasBananaPeppers" 
                onChange={handleChange} 
                checked={formValues.hasBananaPeppers} 
                type="checkbox" 
                />Banana Peppers
                <input 
                name="hasExtraCheese" 
                onChange={handleChange} 
                checked={formValues.hasExtraCheese} 
                type="checkbox" 
                />Extra Cheese
                <input 
                name="specialText" 
                onChange={handleChange} 
                value={formValues.specialText} 
                id="special-text" 
                />
                <button id="order-button">Order</button>
            </form>
        </div>
    );
};