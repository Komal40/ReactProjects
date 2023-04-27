
export function Button({clickbtn,clickSubmit}){
    return(
        <button
        className={clickbtn}
        onClick={clickSubmit}
        >
        Match Number
        </button>
    )
}
