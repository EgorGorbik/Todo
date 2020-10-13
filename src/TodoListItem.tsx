import React from 'react';
import {Todo, ToggleTodo} from './types';
import './TodoListItem.css';
import ReactAudioPlayer from 'react-audio-player';
import { Container, Row, Col, Form } from 'react-bootstrap';

interface TodoListItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo, toggleTodo }) => {

    return (
        <Container>
            <Row className="todoItem">
                <Col md={1} style={{display:'inline'}}>
                        <Form.Check
                            checked={todo.complete}
                            onChange={() => toggleTodo(todo)}
                        ></Form.Check>
                </Col>
                <Col>
                    <Row>
                        <div className={todo.complete ? 'complete' : undefined}>
                            <p>{todo.text}</p>
                        </div>

                        <div style={{width: '100%', marginTop:'10px'}}>
                            {
                                todo.audio &&
                                <ReactAudioPlayer
                                    src={todo.audio}
                                    style={{width:'90%'}}
                                    controls
                                />
                            }
                        </div>

                        <div style={{marginBottom:'10px'}}>
                            {
                                todo.image && Object.values(todo.image).map((el) =>
                                        <img style={{maxWidth:'100px', margin:'15px'}} key={el.name} src={URL.createObjectURL(el)}/>

                                )
                            }
                        </div>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}
