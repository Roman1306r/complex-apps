import {useState} from 'react';
import BMIForm from "./BMIForm/BMIForm";
import BMIResult from "./BMIResult/BMIResult";
import BMIInfo from "./BMIInfo/BMIInfo";
import CopyPopup from "../common/CopyPopup/CopyPopup";
import {bmiInfo} from "../common/data/bmi";
import { DatasBMI } from '../../models';
import SyncLoader from "react-spinners/SyncLoader";


const BMI = () => {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState(0)
    const [isLoad, setIsLoad] = useState(false)
    const [copyModal, setCopyModal] = useState(false)
    const [equality, setEquality] = useState('')
    const [dataBMI, setDataBMI] = useState<DatasBMI[] | any>(bmiInfo) 


    function calculateBMI() {
        if(+height === 0 && +weight === 0) {
            setCopyModal(true)
            return setTimeout(() => setCopyModal(false), 3000)
        }
        setIsLoad(true)
        let bmi = +(weight / Math.pow(height / 100, 2)).toFixed(1)
        setResult(bmi)
        checkToCorresponds(bmi)
        setTimeout(() => {
            setHeight(0)
            setWeight(0)
            setIsLoad(false)
        }, 500)
    }

    function checkToCorresponds(bmi: number) {
        if(bmi < 16) setEquality(dataBMI.find((o: DatasBMI) => o.id === 1).title)
        else if(bmi >= 16 && bmi < 18.5) setEquality(dataBMI.find((o: DatasBMI) => o.id === 2).title)
        else if(bmi >= 18.5 && bmi < 25) setEquality(dataBMI.find((o: DatasBMI) => o.id === 3).title)
        else if(bmi >= 25 && bmi < 30) setEquality(dataBMI.find((o: DatasBMI) => o.id === 4).title)
        else if(bmi >= 30 && bmi < 35) setEquality(dataBMI.find((o: DatasBMI) => o.id === 5).title)
        else if(bmi >= 35 && bmi < 40) setEquality(dataBMI.find((o: DatasBMI) => o.id === 6).title)
        else  setEquality(dataBMI.find((o: DatasBMI) => o.id === 7).title)
    }




    return <div className="bmi">
                {isLoad ? <SyncLoader size="30" color='#00de4e' margin={15}/> :  <>
                    <h1>Body Mass Index (BMI) Calculator</h1>
                    <BMIForm  calculateBMI={calculateBMI} setHeight={setHeight} height={height} weight={weight} setWeight={setWeight}  />
                    <BMIResult result={result} equality={equality}  />
                    <BMIInfo />
                    {copyModal && <CopyPopup>enter indicators</CopyPopup>}
                </>}
            </div>
}



export default BMI;
