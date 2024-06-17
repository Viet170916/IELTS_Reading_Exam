import {Droppable} from "react-beautiful-dnd";
import React from "react";
import classNames from "classnames";

function DropBox(props: any) {
    return (
        <Droppable
            key={props.ID}
            droppableId={props.ID}>
            {(provided) => {
                return (
                    <div
                        {...provided.droppableProps}
                        className={classNames(...props.className)}
                        ref={provided.innerRef}>
                        {props.children}
                        {provided.placeholder}
                    </div>)
            }}
        </Droppable>)
}


export default DropBox;