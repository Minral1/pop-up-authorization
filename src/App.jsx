import React, {useState} from "react"
import PopUp from "./components/popUp"
import OnePage from "./onePage";



const App = () => {
    const [showPopUp, setShowPopUp] = useState(true);
  
    const handleClosePopUp = () => {
      setShowPopUp(false);
     
    };

    return(
        <div>
            <div className= {`main ${showPopUp ? "main-popup" : "main-no-popup"}`} >
                <div className="model-popup" >
                    <div>
                        {showPopUp && <PopUp onClose={handleClosePopUp} />}
                    </div>
                </div>
            </div>
            {!showPopUp && <OnePage />}
        </div>

       )
    };

export default App