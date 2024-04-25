import React from 'react';
import './Home.css';

function Home({ selectedOption }) {
  let cardColor = '#ffffff'; 
  let titleText = 'Discover the hues of possibility with our vibrant color palette';
  let imgSrc = '';
  let col='';

  switch (selectedOption) {
    case 'dashboard':
      cardColor = '#191970';
      titleText = 'Midnight Majesty';
      col='blue';
      imgSrc='https://i.pinimg.com/564x/12/f7/3e/12f73e65136b5c45ff69346fa336bf76.jpg';
       break;
    case 'products':
      cardColor = '#2f4f4f';
      titleText = 'Emerald Hues';
      col='darkgreen';
      imgSrc='https://i.pinimg.com/564x/71/90/0c/71900ce7b77641d2830db81dd8974bc6.jpg';
      break;
    case 'categories':
      cardColor = '#663399';
      titleText = 'Rebbecca';
      col='violet';
      imgSrc='https://i.pinimg.com/564x/62/d3/6a/62d36a0b87c5ce42e13f350521b69576.jpg'
      break;
    case 'customers':
      cardColor = '#b0c4de';
      titleText = 'Steel Charms';
      col='lightblue';
      imgSrc='https://i.pinimg.com/564x/25/1e/3a/251e3a3cf4ba23d006f882ce35e4df24.jpg';
      break;
    case 'inventory':
      cardColor = '#ffa07a';
      titleText = 'Salmon Filet';
      imgSrc='https://i.pinimg.com/564x/4d/54/03/4d5403962a3a8bf24eccbf3ed8e38c0e.jpg'
      col='lightpink';
 break;
    case 'reports':
      cardColor = '#e6e6fa';
      titleText = 'Lavender Fields';
      col='violet'
      imgSrc='https://i.pinimg.com/564x/43/b3/38/43b3381400ed5c955d7cc824d06aa48f.jpg'
      break;
    case 'settings':
      cardColor = '#ffe4e1';
      titleText = 'Fairy Dust';
      col='lightpink'
      imgSrc='https://i.pinimg.com/564x/48/40/f0/4840f0b18bdcdfc5017895b91848e872.jpg';
 break;
    default:
      cardColor = 'lightpink'; 
      col='mistyrose';
      titleText = 'Get into a field of endless joy and colours';
 }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>{titleText}</h3>
      </div>

      <div className='main-cards'>
        <div className='card' style={{ backgroundColor: cardColor ,color:col}}>
          <div className='card-inner'>
            <center><h1 style={{'font-family': 'Roboto','font-style': 'italic'}}>{titleText}</h1></center>
            {imgSrc && <img src={imgSrc} alt={titleText} style={{ width: '500px', height: '300px', margin: 'auto', display: 'block' }} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;