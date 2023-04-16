import { useRef, useState, useEffect} from 'react';
import PasswordSettings from "./PasswordSettings/PasswordSettings";
import PasswordResult from "./PasswordResult/PasswordResult";
import MorePassword from "./MorePassword/MorePassword";
import { SettingsPassword } from '../../models';
import SyncLoader from "react-spinners/SyncLoader";



const Password = () => {
    const passwordValue = useRef()
    const [isChoose, setIsChoose] = useState(true)
    const [lenghtPassword, setLenghtPassword ] = useState(8)
    const [settings, setSettings] = useState({num: true, special: true, capital: true})
    const [password, setPassword] = useState('')
    useEffect(() => {
        createPassword(lenghtPassword, settings)
    }, [])
    


    function createPassword (l: number, settings: SettingsPassword) {
        setIsChoose(true)
        let symbols = 'abcdefghijklmnopqrstuvwxyz'
        if(settings.num) symbols = symbols + '1234567890';
        if(settings.special) symbols = symbols + '@!#$%&-';
        if(settings.capital) symbols = symbols + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result: string[] = []
        let i = 0
        while (i < l) {
            let randomSymbols = Math.floor(Math.random() * symbols.length)
            result.push(symbols[randomSymbols])
            i++
        }      
        setTimeout(() => {
            setPassword(result.join(''))
            setIsChoose(false)
        }, 500)
    }
    



    

   return <div className="password">
                {isChoose ? <SyncLoader size="30" color='#00de4e' margin={15}/> : <>
                    <h1>Generate a password</h1>
                    <div className="password__container">
                            <PasswordSettings settings={settings} setSettings={setSettings} lenghtPassword={lenghtPassword} setLenghtPassword={setLenghtPassword}  />
                            <PasswordResult lenghtPassword={lenghtPassword} password={password} passwordValue={passwordValue} settings={settings}  createPassword={createPassword} />
                    </div>
                    <MorePassword  />
                </>}
         </div>
};

export default Password;
