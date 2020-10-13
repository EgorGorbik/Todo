import React, {ChangeEvent, FormEvent, SetStateAction, useState} from "react";
import {AddTodo} from "./types";
import { ReactMic } from 'react-mic';
import {Button, Form, Row, Image, FormGroup, FormControl} from "react-bootstrap";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [ text, setText ] = useState();
    const [ files, setFiles ] = useState();
    const [ audio, setAudio ] = useState();
    const [ record, setRecord ] = useState();

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(text || files || audio) {
            addTodo(text, files, audio);
            setText('');
            setFiles(undefined);
            setAudio(undefined);
        }
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
    }

    const handleRecording = () => {
        setRecord(!record)
    }

    const onStop = (e: any) => {
        setAudio(e.blobURL);
    }

    return (
        <form className='addTodoForm'>
            <div className="image-upload">
                <label htmlFor="file-input">
                    <Image src="images/upload.png" style={{width:'40px', marginRight:10}}/>
                </label>
                <input multiple onChange={onFileChange} style={{display:'none'}} id="file-input" type="file"/>
                {
                    files &&
                    <div className='count'>
                        {files.length}
                    </div>
                }
            </div>

            <Form.Control style={{resize:'none', height:'50px', width:'50%'}} as="textarea" value={text} onChange={handleTextChange} />
            <Button onClick={handleSubmit} style={{height:'50px'}}>Send</Button>

            <div>
                <Image onClick={handleRecording} src="images/microfon.png" style={{width:'40px'}}/>
                {
                    audio &&
                    <div className='count'>
                        1
                    </div>
                }
            </div>

            <div style={record ? {visibility:'visible'} : {visibility:'hidden'}}>
                <ReactMic
                    record={record}
                    className="sound-wave"
                    onStop={onStop}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
                />
            </div>
        </form>
    )
}

