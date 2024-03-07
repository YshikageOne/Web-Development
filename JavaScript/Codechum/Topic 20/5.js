function outerFunction(){
    let outerVariable = 5;

    function innerFunction() {
        let innerVariable = 10;

        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);
    }

    innerFunction();
}

outerFunction();