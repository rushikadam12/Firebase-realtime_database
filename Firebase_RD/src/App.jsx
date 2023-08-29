import React, { useEffect, useState } from 'react';
import { db } from "./assets/firebaseConfig"
import { getDatabase, onValue, ref, set ,get,child} from "firebase/database";

function App() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [realDB, setrealDB] = useState([]);
  const storageRef = ref(db, 'Programming in java');
  //var ref = db.ref("Programming in java/");
  const issuesRef =ref(db,'Programming in java');

  const ReadDB = async () => {
 
  /* await onValue(ref(db,"Programming in java/"),(snapshot) => {
        const data=snapshot.val()
        /*const keys=Object.key(data);
        console.log(keys)
        /*for(let i=0;i<keys.length;i++){
          let k=keys[i];
        }
        console.log(realDB)*/
       
   //   })
      const snapshot= await get(child(ref(db),"Programming in java/Theory assignments"))
        const data= snapshot.val();
        const keys=Object.keys(data);
        
        const newDataArrya=[];
        for(let i=0;i<keys.length;i++){
          let k=keys[i];
          newDataArrya.push(data[k]);
        }
        setrealDB(newDataArrya);
        console.log(realDB)
      
      
      
    /* issuesRef(on("value", function(snapshot) {
        snapshot.forEach(snap => {
          const issue = snap.val();
          setrealDB(issue);
      })
      }))*/





     /*get(child(db,'Programming in java/')).then(function (snapshot) {
        const data = snapshot.val();
        setrealDB(data);
      })*/
      /*storageRef.once("value",(snapshot)=>{
        snapshot.forEach(item => {
            setrealDB(item.val());
        });
      })*/

     
      /*ref.on("value", function(snapshot) {
        console.log(snapshot.val());
     }, function (error) {
        console.log("Error: " + error.code);
     });*/


     /*const StrRef=ref(db,'Programming in java');
     on(StrRef,'value',(data)=>{
        const dbs=data.val();
        let keys=Object.keys(dbs);
        console.log(keys)
     })*/



      }
    
      
   
  
  const putDB = async () => {
    /*here we using 'methods' 'headers' to create unique ID while storing data 'body' use to specify the data which will store into the Realtime database*/
    const rep = await fetch('https://fireabase-auth-1ae6a-default-rtdb.firebaseio.com/Programming in java/Theory assignments.json', {
      method: "POST",/*methods declaring Postman method  */
      headers: {
        "Content-Type": "application.json",/*For specifying content type so here we use application.json */
      },
      body: JSON.stringify({
        name,
        desc:email,
        date:'20-08-2023',
        url: "https://firebasestorage.googleapis.com/v0/b/fireabase-auth-1ae6a.appspot.com/o/assignMate%2Ftechnical-specifications-dlts-ver-2.3.pdf?alt=media&token=018f6a4e-219d-46f5-be4b-d4402bb51c14"
      })
    });

  }
  useEffect(() => {
    ReadDB();
  }, [])
  return (

    <>
      <div>
        <input type="text" onChange={(e) => { setname(e.target.value) }} placeholder='Enter your Name' value={name} />
        <br></br>
        <input type="email" onChange={(e) => { setemail(e.target.value) }} placeholder='Enter your Email' value={email} />
        <br></br>
        <button onClick={() => {
          putDB(),
            setemail(""),
            setname("")
        }}>Submit</button>
        {
         realDB.map((item) => {
            return (
              <>
              <div style={{display:'flex',fontSize:'50px',alignItems:'center',flexDirection:'column'}}>
                <p>{item.desc}</p>
                <p>{item.name}</p>
                <div>
                  <a href={item.url} target='blank'>
                  <button>Open_URL</button>
                    </a></div>
                </div>
              </>
            )
            })
          }
      </div>
    </>
  )
}

export default App
