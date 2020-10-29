import './App.css';
import React, { useState} from 'react';
import 'socket.io';
import io from 'socket.io-client';
import ReactHtmlParser from 'react-html-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  './NewServer.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Navbar from './Component/Layout/Navbar';

// import M from  'materialize-css/dist/js/materialize.min.js';
// import Navbar from "./Navbar.js"; 

const socket = io('http://localhost:3000');

function App ()  {

  const [value, setValue] = useState("") ;

   const handleOnChange = (event , editor) => {
    var data = editor.getData();
    setValue(data);
    socket.send(data);
    
    
    }
  

  return (  


      <div>  

        <Navbar />
        <div className="text" > 
              <CKEditor 
              editor={ ClassicEditor }
              onChange={  handleOnChange  }/>

              
          <div> 
            {ReactHtmlParser(value)}
            </div>
        </div>
    </div>

   
  );

}

export default App