//this is pretty much only used for the API query
//it was made so the query will return a single, random result from the DB
module.exports = sample = (results) => {
    const randomIndex = Math.floor(Math.random() * results.length)
    const singleResult = results[randomIndex]
    return singleResult
}