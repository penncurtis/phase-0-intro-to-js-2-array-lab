const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop("Bob")
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("Bob")
}


function appendCat(name) {
    const copyCat = [...cats]
    copyCat.push(name)
    return copyCat
}

function prependCat(name) {
    const copyCat = [...cats]
    copyCat.unshift(name)
    return copyCat
}

function removeLastCat(name) {
    const copyCat = [...cats]
    copyCat.splice(-1)
    return copyCat
}

function removeFirstCat(name) {
    const copyCat = [...cats]
    copyCat.shift(0)
    return copyCat
}