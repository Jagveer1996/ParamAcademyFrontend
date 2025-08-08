// import "./styles.css";
import React, { useEffect, useState } from "react";
// import Select from "react-select";

const TestCountry = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
        console.log("!!!!!!!!!!!!!!!!!!", data);

      });
  }, []);
//   console.log("-------------------",selectedCountry);
  
  return (
    <>

    {/* <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    /> */}

    <div>
        <select onChange={(e)=>{setSelectedCountry(e.target.value)}} name="" id="">
            {
              countries.map((element, index)=> {
                return(

                <option  value={element.label}>{element.label}</option>
                
                )
            })  
              
            }
            
        </select>
    </div>
    </>
  );
};

export default TestCountry;
