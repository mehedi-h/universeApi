
const loadAiNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json()
    const aiDatas = data.data

    displayAiData(aiDatas)
    // console.log(data)
}

const displayAiData = aiDatas => {
    const aiNewsContainer = document.getElementById('ai-news-container');
    
    aiDatas.forEach(data => {
        console.log(data)
    })
}

loadAiNews()