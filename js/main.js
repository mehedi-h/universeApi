
const loadAiNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json()
    console.log(data)
    const aiDatas = data.data.tools

    // console.log(aiDatas)
    displayAiData(aiDatas)
}
const displayAiData = (aiDatas) => {
    console.log(aiDatas)

    const aiNewsContainer = document.getElementById('ai-news-container')
    aiNewsContainer.textContent = '';
    
    aiDatas.forEach(aiData => {
        // console.log(element)

        const aiNewsCard = document.createElement('div')
        aiNewsCard.classList = `card bg-slate-100 shadow-xl`

        aiNewsCard.innerHTML = `
            <div>
                <figure class="px-5 pt-5">
                    <img src="${aiData.image}" alt="" class="rounded-xl" />
                </figure>
                <div class="card-body text-justify">
                    <h2 class="card-title text-xl font-bold">Features :</h2>
                    <div class="pb-5">
                        <li>${aiData.features[0]}</li>
                        <li>${aiData.features[1]}</li>
                        <li>${aiData.features[2]}</li>
                    </div>
                    <hr class="">
                    <h2 class="card-title text-xl font-bold pt-3">${aiData.name}</h2>
                    <p class="font-normal"><img class="inline" src="/images/calendar.png" alt="" srcset="">${aiData.published_in}</p>
                </div>
            </div>
        `
        //--------------- Append Child ------------------------>
        aiNewsContainer.appendChild(aiNewsCard)
    });

}

loadAiNews()