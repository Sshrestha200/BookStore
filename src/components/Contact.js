import React from 'react';
import { Box, TextField, Button, Container, Typography, Grid, Card, CardContent, CardActions, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import axios from 'axios';

const ContactSchema = Yup.object().shape({
  fullname: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  contact: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').required('Contact number is required'),
  address: Yup.string().required('Address is required'),
  message: Yup.string().required('Message is required') 
});

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const Id = Math.floor(Math.random() * 100000);
    values.Id = Id;

    console.log("Form values:", values);

    try {
      const response = await axios.post('https://tr4qpofhdh7ua3bkjiu25iqywe0sgpqp.lambda-url.ap-southeast-2.on.aws/', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("API Response:", response);

      if (response.status === 200) {
        alert('Your message has been sent successfully!');
        resetForm();
      } else {
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Contact Form
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              If you have any questions, feel free to reach out to us. We're here to help!
            </Typography>
            <Formik
              initialValues={{ fullname: '', email: '', gender: '', contact: '', address: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Field
                      as={TextField}
                      name="fullname"
                      label="Enter Full Name"
                      error={touched.fullname && Boolean(errors.fullname)}
                      helperText={touched.fullname && errors.fullname}
                      fullWidth
                    />
                    <Field
                      as={TextField}
                      name="email"
                      label="Enter Email Address"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                    />

                    <FormControl fullWidth>
                      <InputLabel>Select Your Gender</InputLabel>
                      <Field
                        name="gender"
                        as={Select}
                        label="Select Your Gender"
                        value={touched.gender ? touched.gender : ""}
                        onChange={e => setFieldValue('gender', e.target.value)}
                        error={touched.gender && Boolean(errors.gender)}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                      {touched.gender && errors.gender ? (
                        <Typography color="error" variant="caption">{errors.gender}</Typography>
                      ) : null}
                    </FormControl>

                    <Field
                      as={TextField}
                      name="contact"
                      label="Enter Mobile No"
                      error={touched.contact && Boolean(errors.contact)}
                      helperText={touched.contact && errors.contact}
                      fullWidth
                    />
                    <Field
                      as={TextField}
                      name="address"
                      label="Enter Address"
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      fullWidth
                    />

                    <Field
                      as={TextField}
                      name="message"
                      label="Enter Your Message"
                      multiline
                      rows={4}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                      fullWidth
                    />

                    <Button variant="contained" type="submit" color="primary" fullWidth>
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Our Address
              </Typography>
              <Typography variant="body2" align="center">
                123 Darby Street, NewCastle, NSW
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Phone Number
              </Typography>
              <Typography variant="body2" align="center">
                +61 45 123-4567
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Email Address
              </Typography>
              <Typography variant="body2" align="center">
                support@thebooknook.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom align="center">
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton href="https://facebook.com" target="_blank" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="primary">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Contact;
