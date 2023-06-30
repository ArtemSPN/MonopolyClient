import MainLayout from '@/layouts/MainLayout'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Badge } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import CardLayout from '@/layouts/CardLayout'

const Reg = () => {
    const router = useRouter();
    return (
        <CardLayout>
            <div className="w-50 mx-auto mt-20">
                <h1 className='text-5xl'>
                    <Badge bg="secondary" className='w-100'>Регистрация</Badge>
                </h1>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Мужской</option>
                            <option value="1">Женский</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Avatar</Form.Label>
                            <input className="form-control" type="file" id="formFile"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <div className='flex justify-between' style={{width: '70%'}}>
                    <Button variant="success" onClick={() => router.push('/auth')}>Войти в аккаунт</Button>
                    <Button variant="success" onClick={() => ({})}>Зарегистрироваться</Button>
                </div>
            </div>
        </CardLayout>
    )
}

export default Reg