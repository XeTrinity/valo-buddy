   
   
   
   async function getCards() {
    let response = await fetch('https://valorant-api.com/v1/playercards');
    let data = await response.json();
    return data.data;
  }