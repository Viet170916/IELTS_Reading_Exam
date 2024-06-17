import "./DragType2.css";
import "../../../commonCSS/commonCSS.css";

import Answer from "../../../../model/Answer";
import React from "react";
import {DragDropContext} from "react-beautiful-dnd";
import classNames from "classnames";
import {uuid} from "../../../../mockData/mockData";

import DragBox from "../Drag/DragBox";
import DropBox from "../Drag/DropBox";
import onDragEnd from "../Drag/onDragEnd";
import EssayTransfer from "../../essayTransfer";

const dragType2 = (props: any) => {
    let finalScore: number = 0;
    props.finalScore = finalScore;
    let ans: Answer[] = props.ans;
    // let finalAnswer: string[] = props.finalAnswer;
    // let score: number = props.score;
    let noteLayout: string[] = [];
    try {
        noteLayout = props.note.split("__");
    } catch (e: any) {
    }

    let ondragend = onDragEnd(ans);
    let data = ondragend.data;
    let answerArea = ondragend.answerArea;
    return (
        <DragDropContext onDragEnd={ondragend.onDragEnd}>
            <div className="drag2">
                <div className={classNames("texArea2", "td", "inner-box")} style={{"overflowY": "auto"}}>
                    <div className={classNames("text-area")}>
                        {answerArea.map((answerBox, index) => {
                                if (index > noteLayout.length - 2) {
                                    // eslint-disable-next-line array-callback-return
                                    return;
                                }
                                return (
                                    <div key={index}>
                                        <div>
                                            <EssayTransfer>
                                                {noteLayout[index]}
                                            </EssayTransfer>
                                        </div>
                                        <DropBox ID={answerBox.ID}
                                                 className={["ques-box-content2", "ans-box", "inner-box"]}>
                                            {answerBox.ans.length !== 1 ? <div
                                                className={"default-content-drag"}>{"Drag Here"}</div> : answerBox.ans.map((an) => (
                                                <DragBox ID={an.ID === "" ? uuid() : an.ID} key={index} ans={an.ans}
                                                         index={index}
                                                         className={["ans-box-child"]}/>
                                            ))}
                                        </DropBox>
                                    </div>)
                            }
                        )}
                        <div>
                            <EssayTransfer>
                                {noteLayout[noteLayout.length - 1]}
                            </EssayTransfer>
                        </div>
                    </div>

                </div>
                <DropBox ID={"questionBox"} className={["drag-box-content", "scroll-table", "table", "height-170"]}>
                    {data.map((text, index) => (
                        <DragBox ID={text.ID} key={index} ans={text.ans} index={index}
                                 className={["drag-box", "components"]}/>
                    ))}
                </DropBox>
            </div>
        </DragDropContext>)
}
export default dragType2;
