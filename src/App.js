import react from 'react';

const url = 'https://api.jikan.moe/v3/top/anime/1/bypopularity'

async function fetchAsyncTodos() {
 
  const response = await fetch(url)
  return  await response.json()
  
}

function App() {
  return <div> {fetchAsyncTodos()} </div>
}
export default App;
