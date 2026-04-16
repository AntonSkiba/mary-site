import {useCallback} from 'react';

function App() {
  const onClick = useCallback(() => {
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Anton',
        message: 'Hello'
      })
    });
  }, []);
  return (
    <div>
      <div>Инфа</div>
      <div>ФОТКИ</div>
    </div>
  )
}

export default App
