document.getElementById('webhook-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('webhook-url').value;
  const message = document.getElementById('message').value;
  
  const sendRequest = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message })
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  sendRequest();
  setInterval(sendRequest, 250);
});
