import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'


const ShippingScreen = () => {
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [postalCode,setPostalCode] = useState('')
    const [country,setCountry] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Done')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Address' 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter City'
                        value={city}
                        required 
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>PostalCode</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter PostalCode' 
                        value={postalCode} 
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Country' 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
