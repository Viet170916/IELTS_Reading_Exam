import {useState} from "react";
import Answer from "../../../../../model/Answer";
import {uuid} from "../../../../../mockData/mockData";

let oDE = function OnDragEnd(ans: Answer[]) {
    const [data, setData] = useState(ans);
    const answerAreaAnsForObj: Answer[] = [];
    const [answerArea, updateAnswerArea] = useState(ans.map((value, index) => {
        return {title: index, ans: answerAreaAnsForObj, ID: uuid()}
    }))
    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        let destinationIndex: number;
        let sourceIndex = result.source.index;
        if (result.source.droppableId === "questionBox") {
            if (result.destination.droppableId === "questionBox"){
                return;
            }
            destinationIndex = answerArea.findIndex(e => e.ID === result.destination.droppableId);
            updateAnswerArea([...answerArea.slice(0, destinationIndex), {
                title: destinationIndex,
                ans: [data[sourceIndex]],
                ID: answerArea[destinationIndex].ID
            }, ...answerArea.slice(destinationIndex + 1)])
            setData([...data.slice(0, sourceIndex), ...data.slice(sourceIndex + 1)])
        }
        else {
            sourceIndex = answerArea.findIndex((value)=>value.ID===result.source.droppableId);

            if (result.destination.droppableId === "questionBox") {
                setData([...data, new Answer(answerArea[sourceIndex].ans[0].ID, answerArea[sourceIndex].ans[0].ans)]);
                updateAnswerArea([...answerArea.slice(0, sourceIndex), {
                    title: answerArea[sourceIndex].title,
                    ans: answerAreaAnsForObj,
                    ID: answerArea[sourceIndex].ID
                }, ...answerArea.slice(sourceIndex + 1)])
            } else {
                let destinationIndex: number;
                destinationIndex = answerArea.findIndex((value) => value.ID === result.destination.droppableId);

                console.log("des: "+destinationIndex);
                console.log("src: "+sourceIndex);

                let ansAreTemp = [...answerArea.slice(0, destinationIndex),
                    {
                        title: destinationIndex,
                        ans: answerArea[sourceIndex].ans,
                        ID: answerArea[destinationIndex].ID
                    },
                    ...answerArea.slice(destinationIndex + 1)];
                console.log("ansTemp: ")
                console.log(ansAreTemp);
                ansAreTemp = [...ansAreTemp.slice(0, sourceIndex),
                    {
                        title: sourceIndex,
                        ans: answerAreaAnsForObj,
                        ID: answerArea[sourceIndex].ID
                    },
                    ...ansAreTemp.slice(sourceIndex + 1)
                ]
                updateAnswerArea(ansAreTemp);
            }
        }
    }
    return ({
        data: data,
        answerArea: answerArea,
        onDragEnd: onDragEnd
    });
}
export default oDE;