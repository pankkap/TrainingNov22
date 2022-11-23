const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url) {
  
    var data = await fetch(url)
    var result = await data.json()   
    displayData(result)

  }
fetchData(API_URL);

function displayData(serverData)
{
    console.log(serverData);
    for(let user of serverData)
    {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')

        td1.innerText = `${user.id}`
        td2.innerText = `${user.name}`
        td3.innerText = `${user.email}`
        td4.innerText = `${user.phone}`

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        document.getElementById('myTable').appendChild(tr)
    }
}  