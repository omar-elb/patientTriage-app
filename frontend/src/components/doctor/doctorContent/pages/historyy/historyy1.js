import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import './historyy1.css'

function Historyy1() {

  const [consults, setConsults] = useState([])
  const [responseStatus, setResponseStatus] = useState(0);
  const [responseMessage, setResponseMessage] = useState('');
  const [page, pageChange] = useState(0)

  function handlePageChange(event, newPage) {
    pageChange(newPage)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_consultations');

        const data = response.data;
        console.log(data);
        setResponseMessage(data.message);

        if (response.status === 201) {
          setConsults(data);
          setResponseStatus(response.status);
          console.log("Success:", data);
        } else {
          console.error("Failure:", data);
        }
      } catch (error) {
        console.error("Error during the request:", error.message);
      }
    }

    fetchData();
  }, []);


  return (
    <div >
      <h2 id='history1'>History of Patients</h2>

      <form className="serchConsu1">
        <h4>Find consultations of patient:</h4>
        <div className="row2">
          <input type="text" name="cin" placeholder="CIN" required />
          <button type="submit">Search</button>
        </div>
      </form>

      <Paper sx={{ width: '95%', marginLeft: '2%' }} style={{borderRadius: '10px'}}>
        <TableContainer style={{borderRadius: '10px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>consultation_id</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>cin_patient</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>date_consultation</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>Arrival mode</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>Injury</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>Mental</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>Pain</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>NRS_pain</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>SBP</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>DBP</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>HR</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>RR</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>BT</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>Saturation</TableCell>
                <TableCell style={{ backgroundColor: 'rgb(0, 217, 255)', color: 'white' }}>diagnostic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consults && consults
                .slice(page * 5, page * 5 + 5)
                .map((consult, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{consult.consultation_id}</TableCell>
                      <TableCell>{consult.cin_patient}</TableCell>
                      <TableCell>{new Date(consult.date_consultation).toISOString().slice(0, 10)}</TableCell>
                      <TableCell>{consult.arrival_mode}</TableCell>
                      <TableCell>{consult.injury}</TableCell>
                      <TableCell>{consult.mental_status}</TableCell>
                      <TableCell>{consult.pain}</TableCell>
                      <TableCell>{consult.nrs_pain}</TableCell>
                      <TableCell>{consult.systolic_blood_pressure}</TableCell>
                      <TableCell>{consult.diastolic_blood_pressure}</TableCell>
                      <TableCell>{consult.heart_rate}</TableCell>
                      <TableCell>{consult.respiration_rate}</TableCell>
                      <TableCell>{consult.body_temperature}</TableCell>
                      <TableCell>{consult.oxygen_saturation}</TableCell>
                      <TableCell>{consult.diagnostic}</TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={5}
          count={consults.length}
          page={page}
          rowsPerPage={5}
          component='div'
          onPageChange={handlePageChange}
        >
        </TablePagination>
      </Paper>
      {responseMessage && responseStatus === 201 ? <p style={{ color: 'green', marginLeft: '30px' }}>{responseMessage}</p> : <p style={{ color: 'red', marginLeft: '30px' }}>{responseMessage}</p>}
    </div>
  )
}

export default Historyy1