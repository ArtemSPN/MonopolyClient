import MainLayout from '@/layouts/MainLayout'
import { useRouter } from 'next/router'
import React from 'react'
import { Badge, Button, Container, Form } from 'react-bootstrap'
import CardLayout from '@/layouts/CardLayout'


const Index = () => {
    const router = useRouter();

    return (
        <CardLayout>
            <div className="w-50 mx-auto mt-20">
                <h1 className='text-5xl'>
                    <Badge bg="secondary" className='w-100'>Войдите в аккаунт</Badge>
                </h1>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <div className='flex justify-between w-80'>
                    <Button style={{padding: '5px 40px'}} variant="success" onClick={() => ({})}>Войти</Button>
                    <Button variant="success" onClick={() => router.push('/reg')}>Пройти регистрацию</Button>
                </div>
            </div>
        </CardLayout>
    )
}

export default Index