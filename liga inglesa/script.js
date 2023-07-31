const container = document.querySelector('#container');

const getDataEnglish = async () => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
    const data = await response.json()
    const leagueEnglish = data.teams
    // console.log(data)
    // console.log(leagueEnglish)

    container.innerHTML = ""
    leagueEnglish.forEach(element => {
        //console.log(element.strTeam)
        container.innerHTML +=
            `
        <section class="bg-gray-900 text-white hover:bg-white duration-700 hover:text-gray-900">

    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-10">

        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl font-extrabold text-gray-900 bg-gray-200 py-3 rounded-2xl">${element.strTeam}</h2>
            <h3 class="mb-1 text-2xl font-bold">${element.intFormedYear}</h3>
        </div> 

        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <img class="mx-auto mb-4 w-36 h-36" src="${element.strTeamBadge}" alt="Bonnie Avatar">
        </div>

        <div class="">
            <div class="text-center">
                <h4 class="mb-2 text-2xl font-bold ">
                    <a href="#">${element.strStadium}</a>
                </h4>
                <img class="mx-auto mb-4 w-52 h-36 rounded-xl" src="${element.strStadiumThumb}" alt="Bonnie Avatar">
                <h5 class="mb-1 text-xl font-bold">
                    <a href="#">${element.strLeague2}</a>
                </h5>
                <h5 class="mb-1 text-xl font-bold">
                    <a href="#">${element.strLeague3}</a>
                </h5>
                <h5 class="mb-1 text-xl font-bold">
                    <a href="#">${element.strLeague4}</a>
                </h5>
                <h5 class="mb-1 text-xl font-bold">
                    <a href="#">${element.strLeague5}</a>
                </h5>
            </div>
        </div>

    </div>

</section>
        `
    });
}

getDataEnglish()
