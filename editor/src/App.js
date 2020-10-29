import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import React, { useState} from 'react';
import 'socket.io';
import io from 'socket.io-client';
import ReactHtmlParser from 'react-html-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  './server';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// import M from  'materialize-css/dist/js/materialize.min.js';
// import Navbar from "./Navbar.js"; 

const socket = io('http://localhost:3002');

function App ()  {

  const [value, setValue] = useState("") ;

   const handleOnChange = (event , editor) => {
    var data = editor.getData();
    setValue(data);
    socket.send(data);
    
    
    }
  

  return (  

    <div className="text" > 
          <CKEditor 
          editor={ ClassicEditor }
          onChange={  handleOnChange  }/>
          
          
      <div> 
        {ReactHtmlParser(value)}
        </div>
    </div>

   
  );

}

export default App