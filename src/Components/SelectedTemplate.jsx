import React, { useState } from 'react'

function SelectedTemplate(props) {

  const [form, setForm] = useState({
    template_id : props.meme.id,
    username: "CosmicBliss",
    password: "somethingrandom321",
    boxes : []
  })

  // When the generate meme  button is clicked
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url+=`&boxes[${index}][text]=${box.text}`
      console.log(`&boxes[${index}][text]=${box.text}`)
    })
    console.log(url);
    fetch(url).then(response => response.json())
    .then(data=> {
      if (data.success) {
      props.setSelectedTemplate({...props.meme, url : data.data.url})
      }
    })
  }

  return (
    <>
      <div className="meme">

        <img src={props.meme.url} alt=""/>
        <div className="caption-boxes">

          {/* Creating the input boxes */}
          {[...Array(props.meme.box_count)].map((_, index) => ( 
              <input 
              key={index}
              type="text" 
              placeholder={`Caption ${index+1}`}
              onChange={(e)=>{
                const newBoxes = form.boxes;
                newBoxes[index] = {text: e.target.value}
                setForm({...form, boxes: newBoxes})
              }} 
              />
          ))}

        </div>

        <button onClick={() => generateMeme()}>Generate meme</button>
        <button  onClick={() => props.setSelectedTemplate(null)}>Choose Template</button>

      </div>
    </>
  )
}

export default SelectedTemplate