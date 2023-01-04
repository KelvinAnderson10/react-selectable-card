import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function App() {
  const [index, setIndex] = useState(0)
  const data = [
    {locationName: 'Rawamangun'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Jawa Barat'},
    {locationName: 'Rawamangun'},
  ]
  return (
    <div className="App">
      <div className='outerContainer'>
        <AiFillLeftCircle size={'40px'} color='#B70621' onClick={() => {
          document.getElementById('location-container').scrollLeft -= 500;
        }}></AiFillLeftCircle>
      <div id='location-container' className='container'>
        {data.map((item, i) => {
          return(
            <div className={`box ${index == i && 'my-checkfield-selected'}`} onClick={() => {
              setIndex(i)
            }}>
              <p className='contentTitle'>{item.locationName}</p>
              <p className='content'>{item.locationName}</p>
            </div>
          )
        })}
      </div>
      <AiFillRightCircle size={'40px'} color='#B70621' onClick={() => {
          document.getElementById('location-container').scrollLeft += 500;
        }}></AiFillRightCircle>
      </div>
    </div>
  );
}

export default App;
