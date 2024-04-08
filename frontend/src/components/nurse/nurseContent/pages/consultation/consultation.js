import React from 'react'
import './consultation.css'

function Consultation() {
  return (
    <div>
      <h2 id='Consultation'>Consultation</h2>

      <form className="formConst">
        <h4>Add a patient:</h4>
        <div className="rowConst">
          <input type="text" name="cin" placeholder="CIN" required />
          <input type="number" name="age" placeholder="Age" required />
        </div>
        <div className="rowConst">
          <label htmlFor="sex">Sex:
            <select name="sex" id="sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label htmlFor="arrival">Arrival mode:
            <select name="arrival" id="arrival">
              <option value="1">Walking</option>
              <option value="2">119 use</option>
              <option value="3">Private car</option>
              <option value="4">Private ambulance</option>
              <option value="5">Public transportation</option>
              <option value="6">Wheelchair</option>
              <option value="7">Others</option>
            </select>
          </label>
        </div>
        <div className="rowConst">
          <label htmlFor="Injury">Injury:
            <select name="Injury" id="Injury">
              <option value="1">Non-injury</option>
              <option value="2">Injury</option>
            </select>
          </label>
          <label htmlFor="Mental">Mental:
            <select name="Mental" id="Mental">
              <option value="1">Alert</option>
              <option value="2">Verval response</option>
              <option value="3">Pain response</option>
              <option value="4">Unconciousness</option>
            </select>
          </label>
          <label htmlFor="Pain">Pain:
            <select name="Pain" id="Pain">
              <option value="1">Pain</option>
              <option value="2">Non-pain</option>
            </select>
          </label>
        </div>
        <div className="rowConst">
          <input type="number" name="NRS_pain" placeholder="Numeric rating scales of pain" required />
          <input type="number" name="SBP" placeholder="Systolid blood pressure" required />
          <input type="number" name="DBP" placeholder="Diastolic blood pressure" required />
        </div>
        <div className="rowConst">
          <input type="number" name="HR" placeholder="Heart rate" required />
          <input type="number" name="RR" placeholder="Respiration rate" required />
        </div>
        <div className="row">
          <input type="number" name="BT" placeholder="Body temperature" required />
          <input type="number" name="Saturation" placeholder="Saturation to use pulse oxmeter" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Consultation