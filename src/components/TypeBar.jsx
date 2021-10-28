import React, {useContext} from 'react';
import  '../APP.css'
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup'
import {Context} from "../index";
import {Button} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    action
                    active={type.id === device.selectedType.id}
                    // onClick={() => test(type)}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    );
});

export default TypeBar;