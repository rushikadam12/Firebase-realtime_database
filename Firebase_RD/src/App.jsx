import React, { useEffect, useState } from 'react';
import { db } from "./assets/firebaseConfig"
import { getDatabase, onValue, ref, set ,get,child} from "firebase/database";

function App() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [realDB, setrealDB] = useState([]);
  const storageRef = ref(db, 'Programming in java/');
  //var ref = db.ref("Programming in java/");
  const issuesRef =ref(db,'Programming in java');

  const ReadDB = async () => {
 
   /* await onValue(ref(db,"Programming in java/"),(snapshot) => {
        const data=snapshot.val()
        setrealDB(data);
        console.log(realDB)
       
      })*/
      get(child(ref(db),"Programming in java")).then((snapshot)=>{
        const data=snapshot.val()
        console.log(data)
        setrealDB(snapshot.val())
        console.log(realDB)
      })
      
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

      }
      /*ref.on("value", function(snapshot) {
        console.log(snapshot.val());
     }, function (error) {
        console.log("Error: " + error.code);
     });*/
    
      
   
  
  const putDB = async () => {
    /*here we using 'methods' 'headers' to create unique ID while storing data 'body' use to specify the data which will store into the Realtime database*/
    const rep = await fetch('https://fireabase-auth-1ae6a-default-rtdb.firebaseio.com/Programming in java.json', {
      method: "POST",/*methods declaring Postman method  */
      headers: {
        "Content-Type": "application.json",/*For specifying content type so here we use application.json */
      },
      body: JSON.stringify({
        name,
        email,
        url: "https://c4.wallpaperflare.com/wallpaper/106/910/391/ichigo-bankai-ichigo-kurosaki-wallpaper-preview.jpg"
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
         /* realDB.map((item) => {
            return (
              <>
              <div>
                <h1>{item.email}</h1>
                <h2>{item.name}</h2>
                <div><img src={item.url} alt='image_'/></div>
                </div>
              </>
            )
          })*/
        }
      </div>
    </>
  )
}

export default App
