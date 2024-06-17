import "./Drag.css"
import "../../../commonCSS/commonCSS.css";

import Answer from "../../../../model/Answer";

import {DragDropContext} from "react-beautiful-dnd";
import {uuid} from "../../../../mockData/mockData";
import classNames from "classnames";

import DropBox from "./DropBox";
import DragBox from "./DragBox";
import onDragEnd from "./onDragEnd";
import EssayTransfer from "../../essayTransfer";
import React from "react";

const ondragEnd = (props: any) => {
    let ans: Answer[] = props.ans;
    const essay: string = props.note;
    let noteLayout: string[] = [];
    try {
        noteLayout = essay.split("__");
    } catch (e: any) {
    }
    let ondragend = onDragEnd(ans);
    let data = ondragend.data;
    let answerArea = ondragend.answerArea;
    return (
        <DragDropContext onDragEnd={ondragend.onDragEnd}>
            <div className={classNames("drag")}>
                <DropBox ID={"questionBox"} className={["drag-box-content", "scroll-table", "table"]}>
                    {data.map((text, index) => (
                        <DragBox ID={text.ID} index={index} key={index} ans={text.ans} className={["drag-box","components"]}/>
                    ))}
                </DropBox>
            </div>
            <div className={classNames("quesBlock", "td", "drop", "components")} style={{"overflowY": "auto"}}>
                <div className={classNames("content", "td", "inner-box")}>
                    <div className={classNames("content-child")}>
                        {answerArea.map((answerBox, index) => {
                            if (index > noteLayout.length - 1) {
                                return<></>;
                            }
                            return (
                                <div>
                                    <div>
                                        <EssayTransfer>
                                            {noteLayout[index]}
                                        </EssayTransfer>
                                    </div>
                                    <DropBox key={props.quesNum} ID={answerBox.ID}
                                             className={["ans-box", "ques-box-content","inner-box"]}>
                                        {answerBox.ans.length !==1? <div className={"default-content-drag"}>{"Drag Here"}</div>: answerBox.ans.map((an, index) => {
                                            return (
                                                <DragBox key={index} ID={an.ID === "" ? uuid() : an.ID} index={index}
                                                         className={["ans-box-child"]} ans={an.ans}/>
                                            )
                                        })}
                                    </DropBox>
                                </div>)
                        })}
                        <div>
                            <EssayTransfer>
                                {noteLayout[noteLayout.length - 1]}
                            </EssayTransfer>
                        </div>
                    </div>
                </div>
            </div>
        </DragDropContext>)
}
export default ondragEnd;