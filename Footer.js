import React from 'react'
import {WiDayThunderstorm} from 'react-icons/wi'



  
export default function footer() {
  return (
    <div>
       <div className="container   ">
    <div className="bg-dark text-light">
      
      
        <div class="row " style={{ borderBottom: "2px solid white " }}>
          <div class="col md 4">
            <h3 className="h3"  ><WiDayThunderstorm size={60}/> My Weather.Com</h3>
          </div>
          <div class="col md 4">
            <h2 className="h2">Contact</h2>
            <ul class="list-group">
              <li class="list-group-item bg-dark text-light">Aboutus</li>
              <li class="list-group-item bg-dark text-light">blog</li>
              <li class="list-group-item bg-dark text-light">Mo.No7972642196</li>
              <li class="list-group-item bg-dark text-light">web chat</li>
              <li class="list-group-item bg-dark text-light"><a class="nav-link"  href="prajunagrale24@gmail.com" ><u>Email-id-prajunagrale24@gmail.com</u></a></li>
              
            </ul>
          </div>
          <div class="col md 4">
            <h2 className="h2">Social Media Links</h2>
            <ul class="list-group">
              <li class="list-group-item bg-dark text-light"> <a class="nav-link"  href="https://github.com/praju24" >Github</a></li>
              <li class="list-group-item bg-dark text-light"><a class="nav-link" href="https://www.instagram.com/itz_praju_24/">Instagram</a></li>
              <li class="list-group-item bg-dark text-light"><a class="nav-link" href="https://www.facebook.com/prajakta.nagrale.75">Facebook</a></li>
              <li class="list-group-item bg-dark text-light"><a class="nav-link" href="https://youtube.com/channel/UCMec0tBgAiihqomielLUsvQ">Youtube</a></li>
              
            </ul>
          </div>
        </div>

        <p className="text-center mt-2">2021@ all rights are reserved</p>
      </div>
     
    </div>


    </div>
  )
}


