
module.exports = queryFilter = (params) => {
    if (params[0] === "?" && params.indexOf("=" === true)) {
        var parameters = params
        let indexes = [0]
        for (let i = 0; i < parameters.length; i++) {
            if (parameters[i] === "&" || parameters[i] === "=") {
                indexes.push(i) //push the location of the identifier into the index list
            }
        }

        const returnValue = {}

        //wish I could do this another way, but integer and value it is
        let v = 0
        let i = 1

        for (i; i < indexes.length; i += 2) {
            const index1 = (indexes[v]) + 1 //grab first letter of param
            const index2 = (indexes[i]) //grab last letter of param
            const key = parameters.slice(index1, index2) //slice the param out

            const index3 = index2 + 1 //grab first letter of argument
            const index4 = (indexes[i + 1]) //grab second letter of argument
            const value = parameters.slice(index3, index4) //slice the argument out

            returnValue[key] = value //add it to the returnValue object

            v += 2
            //i and v are incremented by two because there are half the amount of outputs as there are inputs
        }
        return returnValue
    }
    return "INVALID QUERY STRING"
}
