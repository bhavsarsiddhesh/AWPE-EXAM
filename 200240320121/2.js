function Username() {
    let usrnm = document.querySelector("#Username1").value;
    let output = document.querySelector("#innerDiv").cloneNode(true);
    output.innerHTML = usrnm;
    document.querySelector("#mainDiv").append(output);

    document.querySelector("#Username1").value = "";

}