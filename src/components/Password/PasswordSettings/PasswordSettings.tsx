import { PasswordSettingsProps } from '../../../models';



const PasswordSettings = ({lenghtPassword, setLenghtPassword, settings, setSettings} : PasswordSettingsProps) => {

    return <div className="password__settings">
                    <div className="password__lenght">
                        <input className="password__range" type="range" id="pass" name="volume"
                               min="4" max="25" value={lenghtPassword} onChange={(e) => setLenghtPassword(e.target.value)}  />
                        <label className="password__lenght-label" htmlFor="pass">Password length - <span className="lenghtEl">{lenghtPassword}</span> </label>
                    </div>
                    <div className="password__lenghtcheckbox">
                        <input onChange={() => setSettings({...settings, num: !settings.num})} className="checkbox" type={'checkbox'} checked={settings.num} id={'num'}/><label htmlFor={'num'}>With numbers</label>
                    </div>
                    <div className="password__lenghtcheckbox">
                        <input onChange={() => setSettings({...settings, special: !settings.special})} className="checkbox" type={'checkbox'} checked={settings.special} id={'symbol'}/><label htmlFor={'symbol'}>With special characters</label>
                    </div>
                    <div className="password__lenghtcheckbox">
                        <input onChange={() => setSettings({...settings, capital: !settings.capital})} className="checkbox" type={'checkbox'} checked={settings.capital} id={'capital'}/><label htmlFor={'capital'}>Capital letters</label>
                    </div>
            </div>
}
export  default PasswordSettings;