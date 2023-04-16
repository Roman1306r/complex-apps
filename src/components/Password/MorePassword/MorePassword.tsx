import { useState} from "react";
import {passwords} from "../../common/data/passwords";
import CopyPopup from "../../common/CopyPopup/CopyPopup";




const MorePassword = () => {
    const [modal, setModal] = useState(false)
    const copyPassword = (text: string) => {
        setModal(true)
        navigator.clipboard.writeText(text)
        setTimeout(() => setModal(false), 2000)
    }



    const passwordsArray = passwords.map((pass, index) => <div onClick={() => copyPassword(pass)} className="password__item" key={index}>{pass}</div>)


    return <div className="password__more">
                <h2 className="password__more-title">Last generated passwords <span className="password__titlespan">To copy, click on the password</span></h2>
                <div className="password__array">
                    {passwordsArray}
                </div>
                {modal && <CopyPopup>text copied</CopyPopup>}
            </div>
}
export  default MorePassword;