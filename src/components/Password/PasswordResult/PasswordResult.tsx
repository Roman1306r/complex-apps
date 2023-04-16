import {useState} from "react";
import CopyPopup from "../../common/CopyPopup/CopyPopup";
import { PasswordResultProps } from "../../../models";



const PasswordResult = ({lenghtPassword, password, passwordValue, createPassword, settings} : PasswordResultProps) => {

    const [copyModal, setCopyModal ] = useState(false)

    function copyPassword () {
        let value = passwordValue.current.textContent
        navigator.clipboard.writeText(value)
        setCopyModal(true)
        setTimeout(() => setCopyModal(false), 2000)
    }





    
    return <div className="password__result">
                    <button className="password__create" onClick={() => createPassword(lenghtPassword, settings)}>Generate</button>

                    <div  className="password__res">
                            <h2 className="password__title" ref={passwordValue}>{password}</h2>

                            <button className="password__copy" onClick={copyPassword}>copy</button>
                    </div>    

                    {copyModal && <CopyPopup>text copied</CopyPopup>}
            </div>
}
export default PasswordResult;