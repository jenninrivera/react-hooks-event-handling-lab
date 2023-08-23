// Code EyesOnMe Component Here

function EyesOnMe() {

function handleFocus() {
    console.log("Good!")
}

function handleBlur() {
    console.log("Hey! Eyes on me!")
}    

    return (
        <button onFocus={handleFocus} onqBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe