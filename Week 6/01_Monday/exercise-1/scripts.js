let result = getHammingDistance("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT");
let h4Span = document.querySelector("h4 span");

h4Span.innerText = result;

function getHammingDistance(strA,strB){
    if (strA.length !== strB.length) {
        alert('Strings must be of the same length');
    }
    let hammingDistance = 0;

    for (let i = 0; i < strA.length; i += 1) {
        if (strA[i] !== strB[i]) {
            hammingDistance += 1;
        }
    }

    return hammingDistance;
}