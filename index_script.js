
const baseUrl = "https://api.football-data.org/";
const preload = document.querySelector('#preload')

const getStanding = async (idLeague) => {

    preload.innerHTML = `<center><div class="spinner-border text-success" role="status"></div></center>`;

    let response = await fetch(`${baseUrl}${idLeague}`, {
        method: "GET",
        headers: {
            "X-Auth-Token": "1a28d9ecdf374c79981473576486a3b6"
        }
    })
    let teams = await response.json()

    showTeams(teams)
}

let showTeams = (team) => {


    const title = document.querySelector("#title");
    title.innerHTML = ''

    title.innerHTML = 'List Standing of ' + team.competition.name

    let teams = team.standings[0].table
    const tableBody = document.querySelector("#tableBody");
    

    tableBody.innerHTML = ''

    teams.forEach((team) => {
        tableBody.innerHTML +=
            `<tr>
                    <th scope="row">${team.position}</th>
                    <td><img src="${team.team.crestUrl}" class="rounded img-size"></td>
                    <td>${team.team.name}</td>
                    <td>${team.points}</td>
                    <td><a href="more.html?${team.team.id}"><button class="btn btn-primary">more</button></a></td>
            </tr>`;
    });
    preload.innerHTML = ''
}
