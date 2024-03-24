import React from 'react'
import './treatment.css'

function Treatment() {
    return (
        <div>
            <h2 id='treat'>Treatment</h2>

            <form className="serchPat">
                <h4>Enter the CIN of patient:</h4>
                <input type="text" name="cin" placeholder="CIN" required />
                <h4>Enter the treatment:</h4>
                <textarea name="treatment" id="treatment" cols="30" rows="10"></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Treatment