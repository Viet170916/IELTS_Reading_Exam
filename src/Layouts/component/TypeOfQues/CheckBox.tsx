import "./css/CheckBox.css"
import {useState} from "react";
import classNames from "classnames";
import Answer from "../../../model/Answer";
import "../../commonCSS/commonCSS.css";
import CheckBoxInput from "../inputComponents/CheckBoxInput";

export function CheckBox(props: any): JSX.Element {
    // const [finalScores] = useState(0);
    // let finalScore: number = finalScores;
    let ans: Answer[] = props.ans;
    // let finalAnswer: string[] = props.finalAnswer;
    // let score: number = props.score;

    const [checked, setChecked] = useState(ans.map((each) => -1));
    return <div className= {classNames("check-box","scroll-table")}>
        {ans.map((value, index) =>
            <div className={classNames("each-check-box")} key={index}>

                <CheckBoxInput ID={index+value.ID} key={index} checked={checked[index] === index} onChange ={() => {
                    if (checked[index] !== -1) {
                        setChecked([...checked.slice(0, index), -1, ...checked.slice(index + 1)])
                    } else {
                        setChecked([...checked.slice(0, index), index, ...checked.slice(index + 1)])
                    }
                }}>
                    &#10003;
                </CheckBoxInput>
                <p style={{"color": checked[index] === index ? "#6D5DFCFF":"" }}>
                    {value.ans}
                </p>
            </div>
        )}
    </div>
}

export default CheckBox;
