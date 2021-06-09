const apiKey = '0KvctpdTAg881oZKdN9U4UEpfYSQA9am'

export const getNews = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
            .then(response => response.json())
            
}