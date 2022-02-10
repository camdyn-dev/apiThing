let string = "?type=wappa&language=yiddish&pee=pee"
let total = [0]
for(let i = 0; i < string.length; i++){
    if(string[i] === "&" || string[i] === "="){
        total.push(i)
    }
}


//holy fuck this shit workie
//so, gonna use this to filter a query string
let v = 0
let i = 1
for(i; i < total.length; i += 2){
    const index1 = (total[v]) + 1
    const index2 = (total[i])
    console.log(index1, index2)
    const key = string.slice(index1, index2)
    const index3 = index2 + 1
    const index4 = (total[i + 1])
    const value = string.slice(index3, index4)
    console.log(key, value)

    v += 2
}
//after careful consideration, it seems this does not workie
