import { BMIFormProps } from "../../../models"
import {CiCalculator2} from 'react-icons/ci'



const BMIForm = ({setHeight, height, setWeight, weight, calculateBMI} : BMIFormProps) => {


    function validate(event: any, setState: Function | any) {
        let min = 0, max = 300
        if(Number(event.target.value) > max) {
            return setState(max)
        } else if (Number(event.target.value) < min) {
            return setState(min)
        } else {
            setState(event.target.value)
        }
    }
    




    return <div className="bmi__form">
                <div className="bmi__form-cont">
                    <label htmlFor="growth">Your height in centimeters <input  value={height} onChange={(e) => validate(e, setHeight) } id="growth" type="number"/></label>
                </div>
                <div className="bmi__form-cont">
                    <label htmlFor="weight">Your weight in kilograms <input  value={weight} onChange={(e) => validate(e, setWeight)} id="weight" type="number"/></label>
                </div>
                <button onClick={calculateBMI}><CiCalculator2 /></button>
            </div>
}



export default BMIForm;