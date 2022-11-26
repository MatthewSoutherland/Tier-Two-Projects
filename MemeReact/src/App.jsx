import './App.css'
import React from 'react'


function App() {
  const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "https://i.imgflip.com/30b1gx.jpg"
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function getData(){
    let randomNum = Math.floor(Math.random() * allMemes.length);
    let memeImg = allMemes[randomNum].url;
    
    setMeme(prev => {
      return {
        ...prev,
        memeImage: memeImg
      }
    });
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setMeme(prevMemeData => {
        return {
            ...prevMemeData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
}, [])

  return (
    <>
      <div id='main-container'>
        <div id="input-container">
        <input 
          type="text" 
          placeholder='text-top' 
          className="form-input" 
          name='topText'
          onChange={handleChange}
          value={meme.topText}  
        />
        <input 
          type="text" 
          placeholder='text-bottom' 
          className="form-input" 
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}  
        />
        </div>
          <div id="button-container">
            <button type="button" id="meme-but" onClick={getData}>New Meme</button>
          </div>
          <div id="meme-image-div">
            <img src={meme.memeImage} alt="meme" id='meme-image' className='image-responsive' />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
      </div>
    </>
  )
}

export default App
