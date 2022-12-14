// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    if (Array.isArray(data)) {
        return (
            <>
                <List  className='contact-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {data.map((todo, index) => {
                        return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={todo.photo} alt="Logo" />
                                    </Avatar>
                                </ListItemAvatar>
                            <ListItemText primary={todo.name} secondary={
                                <React.Fragment>
                                    {todo.phone} <br/> {todo.email}
                                </React.Fragment>
                            } />
                            </ListItem>
                        );
                    })}
                </List>
            </>
        );
    } else {
        return (
            <>
                Monica 087577588432 devi@email.com
                <img src="http://placekitten.com/600" alt="Logo" />
            </>
        );
    }
};

export default Contact;
