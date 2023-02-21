import React from "react";
import image from "./nature.jpg";
import "./App.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//import { fontSize } from "@mui/system";
//import { color } from "@mui/system";

const App = ()=> {
  return (
    <>
      <div className="h-96 max-w-screen-2xl bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <h1 class="text-blue-600 text-2xl font-bold ml-5 pt-32 pl-6">Are you being hassled by a Balliff</h1>
        <h1 class="text-indigo-600 text-xl font-bold ml-5 pl-6 "> We are here to help </h1> <br />

        <div className="text-white pl-6"> <DoneAllIcon sx={{color:"green"}} /> Stop Calls And further Action From Creditores & Bailiffs.</div><br />
        <div className="text-white pl-6"><DoneAllIcon  sx={{color:"green"}}/> Write off whar you cannot afford to pay</div><br />
        <div className="text-white pl-6"><DoneAllIcon  sx={{color:"green"}}/> More than half your debt repayments </div> <br />
        
        </div>

      <div className =" flex flex-row justify-center text-center h-96   ">
        
        <div className="h-40 w-96 border-2 bg-white border-gray-600 justify-self-center rounded" style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}>
        <DoNotDisturbAltIcon sx= {{color:"green"}}/>Do Not let Bailiffs In.
        <p>Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
        </p>
        </div>
        <div className="h-40 w-96 border-2 bg-white border-gray-600 justify-self-center rounded"  style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}><DoNotDisturbAltIcon sx= {{color:"green"}}/>
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
        <div className="h-40 w-96 border-2 bg-white border-gray-600 justify-self-center rounded"  style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}>
          
          <DoNotDisturbAltIcon sx= {{color:"green"}} />
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
      </div>
      
      
      <div className="h-96 w-46  bg-gray-600  flex flex-row">
      <div className="flex flex-col">
        <LocalPhoneIcon  sx={{color:"white", marginTop:"70px",marginLeft:"80px", fontSize:"50px"}} />
        <br />
        <div >
        <h1 className="ml-20 mt-5 text-2xl font-bold">
          Speak to our team
          <br />
          for free help and advice
          <br />
          now
          <br />
          Call Today 0202 101 3842 Lines
          <br />
          open 24 Hours a Day / 7 Days A Week
        </h1>
        </div>
        </div>
        <div className="h-40 w-50 border-2 border-gray-600 mt-10 ml-36 flex flex-col">
        <h1>GET FREE BAILIFF HELP NOW</h1>
        <p>Get your baliff Problem resolved today by</p>
<div className="h-8 w-30 border-2 border-white mt-10 mr-20 "> TELEPHONE</div>
<div className="h-8 w-30 border-2 border-white mt-10 mr-20">EMAIL</div>
        </div>
      </div>
      <div className ="flex flex-row bg-white text-2xl font-bold mt-10 ml-10 ">
      <div className ="flex flex-col">
      <div className="text-2xl ">WAYS WE CAN HELP</div>
      <div className="text-2xl ">
      <p className="text-sm font-sm w-74">We recognise that dealinng with creditors and bailliffs may be streedul, but you are not alone. Because of our experience,we can examine your issue and recommedn the besst course of action.<br/><br/>

you might call us right now to explore what solutions area vailablt to help you get through everything with our assistance and support.<br/><br/>

Whether you're seeking for free,noobligation guidance or a way to get out of debt, we provide a pleasant,discreet,specialised service.
</p>
</div>
  
</div>

<div className="w-2/3">
<img src={image} alt="hello" />
  

</div>
      </div>
      <div className ="h-96 w-46 flex flex-row bg-green-600 ">
      </div>
      <div className ="h-96 w-46 flex flex-row bg-white ">

      <div className="h-40 w-96  bg-white border-2  justify-self-center rounded shadow-md" style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}><DoNotDisturbAltIcon/>Do Not let Bailiffs In.
        <p>Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
        </p>
        </div>
        <div className="h-40 w-96  bg-white border-2  justify-self-center rounded shadow-md" style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}><DoNotDisturbAltIcon />
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
        <div className="h-40 w-96  bg-white border-2  justify-self-center rounded shadow-md"style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}>
          
          <DoNotDisturbAltIcon />
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
        <div className="h-40 w-96  bg-white border-2 shadow-md justify-self-center rounded"style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}>
          
          <DoNotDisturbAltIcon />
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
        <div className="h-40 w-96  bg-white border-2  justify-self-center shadow-md"style={{marginTop:"-20px",marginRight:"10px", marginLeft:"10px"}}>
          
          <DoNotDisturbAltIcon />
          Do Not let Bailiffs In.
          <p>
            Do not Panic,you are not compelled to let anyone enter your home,so
            make sure you don't
          </p>
        </div>
        
      </div>
 </>
  );
};

export default App;
