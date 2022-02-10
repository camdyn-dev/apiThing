let string = "?type=fart&poop=shit&cum=fart"
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
    const num1 = (total[v]) + 1
    const num2 = (total[i])
    console.log(num1, num2)
    const uno = string.slice(num1, num2)
    const num3 = num2 + 1
    const num4 = (total[i + 1])
    const dos = string.slice(num3, num4)
    console.log(uno)
    console.log(dos)
    v += 2
}