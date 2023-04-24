import { useState } from 'react';
import VerticalSpacer from "@/design-system/VerticalSpacer";
import TextField from '@mui/material/TextField';
import { Title } from "./Campaign";
import TemplateObject from '../TemplateObject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage as MessageIcon } from '@fortawesome/free-solid-svg-icons';

export default function Build(){
    const [name, setName] = useState('Campaign Name');

    // TODO: add effect here that does a fetch for campaign name
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const save = () => {
        // Send a save request
    }
    
    return(
        <>
            <Title>Build Campaign</Title>
            <VerticalSpacer size={2} />
            <h3>Campaign Name</h3>
            <VerticalSpacer size={2} />
            <TextField
                size="small"
                value={name}
                onChange={onChange}
                onBlur={() => save()}
            />
            <VerticalSpacer size={2} />
            <h3>Drag and Drop</h3>
            <VerticalSpacer size={2} />
            <TemplateObject name="message" hint="Drag to create a message block">
                <FontAwesomeIcon icon={MessageIcon} color="#666" />
            </TemplateObject>
        </>
    )
}