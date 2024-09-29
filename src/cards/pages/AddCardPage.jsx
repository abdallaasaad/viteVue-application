import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Form from '../../forms/components/Form';
import cardSchema from '../../users/models/cardSchema';
import { Box, TextField } from '@mui/material';
import useForm from '../../forms/hooks/useForm.js';
import addCardObj from '../../users/helpers/initialForms/initialCardForm.js';
import { useSnack } from '../../providers/SnackbarProvider.jsx';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel.js';

export default function AddCardPage() {
    const setSnack = useSnack();

    const {
        data,
        errors,
        handleChange,
        handleResetForEdit,
        validateForm,
        onSubmit,
    } = useForm(addCardObj, cardSchema, () => { });
    const navigate = useNavigate();

    const fields = [
        { name: 'title', label: 'Title', required: true, required: true },
        { name: 'subtitle', label: 'Subtitle', required: true },
        { name: 'description', label: 'Description', required: true },
        { name: 'phone', label: 'Phone', required: true },
        { name: 'email', label: 'Email', required: true },
        { name: 'webUrl', label: 'Website', required: false },
        { name: 'imageUrl', label: 'Image URL', required: false },
        { name: 'imageAlt', label: 'Image Alt', required: false },
        { name: 'state', label: 'State', required: false },
        { name: 'country', label: 'Country', required: true },
        { name: 'city', label: 'City', required: true },
        { name: 'street', label: 'Street', required: true },
        { name: 'houseNumber', label: 'House Number', required: true },
        { name: 'zip', label: 'ZIP Code', required: true },
    ];
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                width={750}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Form
                    onSubmit={() => {
                        let token = localStorage.getItem('my token');
                        try {
                            const myHeaders = new Headers();
                            myHeaders.append("x-auth-token", token);
                            myHeaders.append("Content-Type", "application/json");
                            setSnack("success", "New card created successfully!");

                            const convertedObjectToTheServer = JSON.stringify({
                                title: data.title,
                                subtitle: data.subtitle,
                                description: data.description,
                                phone: data.phone,
                                email: data.email,
                                web: data.webUrl,
                                image: {
                                    url: data.imageUrl,
                                    alt: data.altUrl
                                },
                                address: {
                                    state: data.state,
                                    country: data.country,
                                    city: data.city,
                                    street: data.street,
                                    houseNumber: data.houseNumber,
                                    zip: data.zip
                                }
                            });

                            const requestOptions = {
                                method: "POST",
                                headers: myHeaders,
                                body: convertedObjectToTheServer,
                                redirect: "follow"
                            };

                            fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards", requestOptions)
                                .then((response) => response.text())
                                .then((result) => console.log(result))
                                .catch((error) => console.error(error));
                            navigate(ROUTES.MY_CARDS);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    onReset={handleResetForEdit}
                    validateForm={validateForm}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        ADD NEW CARD
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                    >
                        {fields.map((field) => (
                            <Grid
                                key={field.name}
                                item
                                xs={12}
                                sm={6}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <TextField
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    onChange={handleChange}
                                    value={data[field.name] || ""}
                                    required={field.required}
                                    error={!!errors[field.name]}
                                    helperText={errors[field.name]}
                                    fullWidth
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Form>
            </Box>
        </Box>

    );
}
