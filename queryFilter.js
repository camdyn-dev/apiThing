let params = "?type=wappa&language=yiddish&pee=pee"

const queryFilter = (params) => {

let indexes = [0]
for(let i = 0; i < params.length; i++){
    if(params[i] === "&" || params[i] === "="){
        indexes.push(i) //push the location of the identifier into the index list
    }
}

const returnValue = {}

//wish I could do this another way, but integer and value it is
let v = 0
let i = 1

for(i; i < indexes.length; i += 2){
    const index1 = (indexes[v]) + 1 //grab first letter of param
    const index2 = (indexes[i]) //grab last letter of param
    const key = params.slice(index1, index2) //slice the param out

    const index3 = index2 + 1 //grab first letter of argument
    const index4 = (indexes[i + 1]) //grab second letter of argument
    const value = params.slice(index3, index4) //slice the argument out

    returnValue[key] = value //add it to the returnValue object

    v += 2
    //i and v are incremented by two because there are half the amount of outputs as there are inputs
}
return returnValue
}

const newParams = queryFilter(params)
console.log(newParams)

module.exports = queryFilter()
