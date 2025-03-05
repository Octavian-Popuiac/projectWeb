const app = document.getElementById('app');

interface Session {
  id: number;
  title: string;
}

const sessionList = document.getElementById('session-list');

if(sessionList){
  fetch('http://localhost:3000/api/sessions')
  .then(response => response.json())
  .then((sessions: Session[]) => {
    sessions.forEach(session => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${session.title}</span>
        <button onclick="enterSession(${session.id})">Entrar</button>
        `;
      sessionList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching sessions: ', error);
    sessionList.innerHTML = '<li>Error fetching sessions</li>';
  }) 

  function enterSession(sessionId: number){
    window.location.href = `session.html?id=${sessionId}`;
  }
}