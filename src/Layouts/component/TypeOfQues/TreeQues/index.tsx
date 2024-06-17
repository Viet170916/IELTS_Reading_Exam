import "../css/Write.css";
import "../../../commonCSS/commonCSS.css";
import "./Tree.css";

import {useState} from "react";
import classNames from "classnames";

import Answer from "../../../../model/Answer";
import AddTextBoxes from "../AddTextBoxes";

export function Write(props: any) {
    let finalScore: number = 0;
    props.finalScore = finalScore;
    let ans: Answer[] = props.ans;
    let finalAnswer: string[] = props.finalAnswer;
    let score: number = props.score;
    let [txtOut, setTextOut] = useState(ans.map((each) => {
                let ansTerm = splitTextWithInputBox(each.ans);
                ansTerm.pop();
                return ansTerm.map((e) => {
                        return "";
                    }
                )
            }
        )
    );

    function splitTextWithInputBox(text: string): string[] {
        try {
            return text.split("__");
        } catch (e: any) {
        }
        return [text];
    }

    function calculateTheFinalScore() {
        let i = 0;
        ans.map((each, parentIndex) => splitTextWithInputBox(each.ans).map((ansSplit, index) => {
            return finalAnswer[i++] === txtOut[parentIndex][index] ? score / finalAnswer.length : 0
        }))
    }

    return (
        <div className="tree">
            <div className={classNames("body-tree")}>
                <div className={classNames("root-node", "node", "components")}>
                    {"CR mimetic"}
                </div>
                <div className={classNames("root-tree", "node", "components")}>
                    <div className={"content-node"}>
                        <AddTextBoxes
                            props={{
                                answers: txtOut[0],
                                onBlur: function () {
                                    calculateTheFinalScore();
                                    props.finalScore = finalScore;
                                    props.func();
                                },
                                onChange: function () {
                                    setTextOut([...txtOut.slice(0, 0), this.answers, ...txtOut.slice(1)]);
                                },
                            }}
                            key={0}
                        >
                            {ans[0].ans}
                        </AddTextBoxes>
                    </div>
                </div>
                <div className={classNames("node", "components")}>
                    {"production of ATP is decreased"}
                </div>
                <div className={classNames("body-tree2")}>

                    <div className={classNames("first-node-1", "node", "components")}>
                        <div className={"content-node"}>
                            <AddTextBoxes
                                props={{
                                    answers: txtOut[1],
                                    onBlur: function () {
                                        calculateTheFinalScore();
                                        props.finalScore = finalScore;
                                        props.func();
                                    },
                                    onChange: function () {
                                        setTextOut([...txtOut.slice(0, 1), this.answers, ...txtOut.slice(2)]);
                                    },
                                }}
                                key={1}
                            >
                                {ans[1].ans}
                            </AddTextBoxes>
                        </div>
                    </div>
                    <div className={classNames("first-node-1", "node", "components")}>
                        <div className={"content-node"}>
                            <AddTextBoxes
                                props={{
                                    answers: txtOut[2],
                                    onBlur: function () {
                                        calculateTheFinalScore();
                                        props.finalScore = finalScore;
                                        props.func();
                                    },
                                    onChange: function () {
                                        setTextOut([...txtOut.slice(0, 2), this.answers, ...txtOut.slice(3)]);
                                    },
                                }}
                                key={2}
                            >
                                {ans[2].ans}
                            </AddTextBoxes>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Write;
