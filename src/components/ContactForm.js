// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";

const ContactForm = ({onClickHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [todo, setTodo] = useState("");

    return (
        <> 
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <TextField required id="f-name" label="Name" variant="filled" onChange={(e) => {setTodo(e.target.value)}} />
                    <TextField required id="f-phone" label="Phone" variant="filled" onChange={(e) => {setTodo(e.target.value)}} />
                    <TextField required id="f-email" label="Email" variant="filled" onChange={(e) => {setTodo(e.target.value)}} />
                    <TextField required id="f-photo" label="Photo URL" variant="filled" onChange={(e) => {setTodo(e.target.value)}} />
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onClickHandler}>ADD NEW</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;
