
const baseUrl = "https://api.football-data.org/v2/teams/";
const preload = document.querySelector('#preload')

const getTeam = async (idTeam) => {

    preload.innerHTML = `<center><div class="spinner-border text-success" role="status"></div></center>`;

    let response = await fetch(`${baseUrl}${idTeam}`, {
        method: "GET",
        headers: {
            "X-Auth-Token": "1a28d9ecdf374c79981473576486a3b6"
        }
    })
    let teamData = await response.json() 

    showTeamDetail(teamData)
}

let showTeamDetail = (team) => {

    const tableBody = document.querySelector("#tableBody");
    const name = document.querySelector("#name")
    const img = document.querySelector("#img")

    name.innerHTML = team.name
    img.innerHTML = `<img src="${team.crestUrl}" class="rounded img-fluid"/>`

    let squad = team.squad
    
    tableBody.innerHTML = ''
    let i = 1
    squad.forEach((man) => {
        tableBody.innerHTML +=
            `<tr>
                    <th scope="row">${i++}</th>
                    <td>${man.name}</td>
                    <td>${man.position}</td>
                    <td>${man.nationality}</td>
            </tr>`;
    });

    preload.innerHTML = ''
    
}
