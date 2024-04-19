// XMLHttpRequest (XHR)

function withXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://rickandmortyapi.com/api/character/1", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const character = JSON.parse(xhr.responseText);
        document.body.innerHTML = `
  
      <div>
        <h1>${character.name}</h1>
        <p>Status: ${character.status}</p>
      </div>
      
      
      `;
        console.log("done");

        // console.log(xhr.responseText);
      } else {
        console.error("An error occurred");
      }
    }
  };
  xhr.send();
}

// fetch
async function withFetch() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/1");

    if (response.status == 200) {
      const character = await response.json();
      document.body.innerHTML = `
      <div>
        <h1>${character.name}</h1>
        <p>Status: ${character.status}</p>
      </div>
      `;
      console.log(data);
    } else {
      // ---
      console.log("Not ok");
    }
  } catch (e) {
    console.log("Error occurred");
  }
}

withFetch();
