import { DatasBMI } from "../../../models";
import {bmiInfo} from "../../common/data/bmi";


const BMIInfo = () => {


    const arrayBMI = bmiInfo.map((b: DatasBMI) => <tr key={b.id}><td>{b.bmi}</td><td>{b.title}</td></tr>)


    return <div className="bmi__info">
        <h2>Interpretation of BMI indicators, in accordance with the recommendations of the World Health Organization (WHO)</h2>
        <table>
            <thead><tr><th>BMI</th><th>Description</th></tr></thead>
            <tbody>{arrayBMI}</tbody>
        </table>
    </div>
}



export default BMIInfo;