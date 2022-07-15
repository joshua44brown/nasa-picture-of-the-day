 //Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=QNchDuSH75bfDKbv4ucNUPUqQM80OqKO8J1eDBKv&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.querySelector('img').src = data.hdurl
          document.getElementById("video").style.display = "none";
          document.getElementById("image").style.display = "inline-block";
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.getElementById("video").style.display = "inline-block";
          document.getElementById("image").style.display = "none";
        }else{
          alert('Media Not Supported - Contact NASA IMMEDIATLY')
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

