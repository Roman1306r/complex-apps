import { BMIResultProps } from "../../../models";


const BMIResult = ({result, equality} : BMIResultProps) => {


    return <div className="bmi__result">
                <h2>Your BMI: <span>{result}</span></h2>
                <h3>BMI corresponds to: <span>{equality}</span></h3>
            </div>
}



export default BMIResult;