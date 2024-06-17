import MultipleChoices from "./TypeOfQues/multipleChoices";
import CheckBox from "./TypeOfQues/CheckBox";
import Write from "./TypeOfQues/Write";
import Drag from "./TypeOfQues/Drag";
import dragType2 from "./TypeOfQues/DragType2";
import Question from "../../model/Question";

function TypeOfQuestion(props:any): JSX.Element{
    let value: Question = props.question;
    let typeList: (((prop: any) => JSX.Element))[] = [MultipleChoices, CheckBox, Write, Drag, dragType2];

    return typeList[value.type]({
        ans: value.answer,
        finalAnswer: value.finalAnswer,
        score: value.score,
        finalScore: 0,
        quesNum: props.index,
        ID: value.ID,
        note: value.note,
        func: function () {
            props.calculateTheFinalScore(props.index, this.finalScore)
        }
    });
}
export default TypeOfQuestion;