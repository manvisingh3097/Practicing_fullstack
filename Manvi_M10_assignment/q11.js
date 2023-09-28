let myfunc = function(arr) {

    let res = arr.map ((each,ind) => `${each} is present at ${ind} index and has a length of ${each.length}`)
    console.log(res)
}

myfunc(['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'])
