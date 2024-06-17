import Card from "../../card";
import {Draggable} from "react-beautiful-dnd";
import classNames from "classnames";
import React from "react";

function dragBox(props: any) {
    return (<Draggable
        key={props.ID}
        draggableId={props.ID}

        index={Number.parseInt(props.index)}>
        {(provided, snapshot) => (
            <div className={classNames(...props.className)}
                 ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}
                 style={{
                     ...provided.draggableProps.style,
                     opacity: snapshot.isDragging ? '0.5' : '1'
                 }}>
                <Card>
                    {props.ans}
                </Card>
            </div>)}
    </Draggable>)
}

export default dragBox;