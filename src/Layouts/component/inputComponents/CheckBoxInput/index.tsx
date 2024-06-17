
import "../../../commonCSS/components.css";
import classNames from "classnames";
function CheckBox2(props: any){
    return(
        <div className={classNames("checkbox") }>
            <div className={classNames("checkbox__1")}>
                <input id={"checkbox-"+props.ID} type="checkbox" checked ={props.checked}  onChange={props.onChange}/>
                <label htmlFor={"checkbox-"+props.ID} >
                    <i className={classNames("material-icons")} style={{"fontWeight": "0.01"}}>
                        {props.children}
                    </i></label>
            </div>
        </div>
    );
}
export default CheckBox2;