class Tripple {
    static triple (n){
        n=n||1;
        return n*3;
    }
}

class BiggerTriple extends Tripple{

        static triple(n){
            return super.triple(n)* 3;
        }
}

console.log(Tripple.triple());
console.log(Tripple.triple(3));
console.log(BiggerTriple.triple());
console.log(BiggerTriple.triple(3));