import "../../../commonCSS/components.css";
function RadioInput(props:any){
    return(
        <div className="radio">
            <div className="radio__1">
                <input  id={"radio-"+props.ID} type="radio" checked ={props.checked} onChange={props.onChange} value={props.value}/>
                    <label htmlFor={"radio-"+props.ID} ></label>
            </div>
        </div>
    );
}
export default RadioInput;