import RightCard from './Components/RightCard';
import profilePic from './Assets/profilePic.jpg'
import { useState } from "react";
import './App.css';

function App() {
  const [Val1, setVal1] = useState(25);
  const [Val2, setVal2] = useState(30);
  const [Val3, setVal3] = useState(65);
  const [Val4, setVal4] = useState(15);
  const [Val5, setVal5] = useState(16);
  const [Val6, setVal6] = useState(29);
  const [Val7, setVal7] = useState("last week - " + 50);
  const [Val8, setVal8] = useState("last week - " + 60);
  const [Val9, setVal9] = useState("last week - " + 44);
  const [Val10, setVal10] = useState("last week - " + 88);
  const [Val11, setVal11] = useState("last week - " + 15);
  const [Val12, setVal12] = useState("last week - " + 19);
  const cards =[
    {
      value:"Work",hours:Val1,period:Val7,bgColor:'#FF8B64'
    },
    {
      value:"Play",hours:Val2,period:Val8,bgColor:'#56C2E6'
    },
    {
      value:"Study",hours:Val3,period:Val9,bgColor:'#FF5E7D'
    },
    {
      value:"Exercise",hours:Val4,period:Val10,bgColor:'#4BCF83'
    },
    {
      value:"Social",hours:Val5,period:Val11,bgColor:'#7235D1'
    },
    {
      value:"Self care",hours:Val6,period:Val12,bgColor:'#F1C75B'
    },

  ]
  return (
    <div className="App">
      <div className='left'>
      <div className='leftContainer'>
            <div className='Presentation'>
                <img src={profilePic} alt="Person" />
                <h3 className='Text Report'>Report for</h3>
                <h1 className='Text'>Robert Fisk</h1>
            </div>
            <div className='Period'>
                <h2 onClick={() => {
                setVal1(17);
                setVal2(18);
                setVal3(60);
                setVal4(11);
                setVal5(8);
                setVal6(20);
                setVal7("last day - " + 19);
                setVal8("last day - " + 15);
                setVal9("last day - " + 9);
                setVal10("last day - " + 10);
                setVal11("last day - " + 5);
                setVal12("last day - " + 13);
                }}>Daily</h2>
                <h2 onClick={() => {
                setVal1(25);
                setVal2(30);
                setVal3(65);
                setVal4(15);
                setVal5(16);
                setVal6(29);
                setVal7("last week - " + 50);
                setVal8("last week - " + 60);
                setVal9("last week - " + 44);
                setVal10("last week - " + 88);
                setVal11("last week - " + 15);
                setVal12("last week - " + 19);
               }}>Weekly</h2>
                <h2 onClick={() => {
                setVal1(90);
                setVal2(79);
                setVal3(99);
                setVal4(88);
                setVal5(52);
                setVal6(31);
                setVal7("last month - " + 99);
                setVal8("last month - " + 80);
                setVal9("last month - " + 96);
                setVal10("last month - " + 80);
                setVal11("last month - " + 45);
                setVal12("last month - " + 99);
              }}>Monthly</h2>
            </div>
        </div>
      </div>
      <div className='right'>
        {
         cards.map((val) => (
              <RightCard {...val}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
