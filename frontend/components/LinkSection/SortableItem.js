import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { LinkInput } from './../LinkInput'
export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        //     <LinkInput
        //     data={item}
        //     provided={provided}
        //     functionSelected={functionSelected}
        //   ></LinkInput>
        <div ref={setNodeRef} style={style}>
            {/* <h1>{JSON.stringify(props)}</h1> */}
            <LinkInput
                attributes={attributes}
                listeners={listeners}
                data={props.data}
            // provided={provided}
            functionSelected={props.functionSelected}
            ></LinkInput>
        </div>
    );
}