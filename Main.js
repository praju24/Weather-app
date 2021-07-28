import React ,{useState,useEffect}from 'react';
import {WiHumidity} from 'react-icons/wi'
import {WiThermometer} from 'react-icons/wi'
import {WiThermometerExterior} from 'react-icons/wi'
import {WiMeteor} from 'react-icons/wi'


export default function Main(){
  
  const key ="495b4c597fd44fa0d2676614e9198571";

  const[all_data,setAllData]=useState('');
  const[city_name,setCityName]=useState('nagpur');

  useEffect(()=>{
    const getTemp=async()=>{
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&unit=metric&appid='+key)

         .then(res=>res.json())
         .then(abc=>{
           setAllData(abc.main);

         })
        };

        getTemp();

      },[city_name])

      // var =10;

      return(

        <div className="container mt-3">
              <div className="row mb-3">
                <div className="col-md-12">

                  <input type="text" class="form-control" value={city_name} onChange={(e)=>{setCityName
                  (e.target.value)}} placeholder="enter city name"/>
                  </div>
                  </div>


<table class="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col"> Max Temp <WiThermometer size={50} /></th>
      <th scope="col">Min-Temp <WiThermometerExterior  size={50}/> </th>
      {/* <th scope="col">wind speed</th> */}
      <th scope="col">pressure <WiMeteor size={50}/> </th>
      <th scope="col" >  Humidity  < WiHumidity  size={50}/> </th>
      {/* <th scope="col">visibility</th> */}
      </tr>
      </thead>
      <tbody>

        <tr>

          <td>
            {typeof all_data=="undefined" ? "loading" : all_data.temp_max} 
            </td>

            <td>
            {typeof all_data=="undefined" ? "loading" : all_data.temp_min} 
            
            </td>

            {/* <td> */}
            {/* {typeof all_data=="undefined" ? "loading" : all_data.wind_speed}  */}
            {/* </td> */}


            <td>
            {typeof all_data=="undefined" ? "loading" : all_data.pressure} 
            </td>

            <td>
            {typeof all_data=="undefined" ? "loading" : all_data.humidity} 
            </td>

            {/* <td> */}
            {/* {typeof all_data=="undefined" ? "loading" : all_data.visibility}  */}
            {/* </td> */}

            </tr>

            </tbody>

            </table>
            </div>
      );
      }