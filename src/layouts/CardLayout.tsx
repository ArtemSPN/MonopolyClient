import MainLayout from '@/layouts/MainLayout'
import router from 'next/router'
import React, { ReactNode } from 'react'
import { Container, Button } from 'react-bootstrap'

interface CardLayoutProps {
    children: ReactNode
}

const CardLayout: React.FC<CardLayoutProps> = ({children}: CardLayoutProps) => {
    return (
        <MainLayout>
            <div className={'wrap'}>
                <Container >
                    <div className={'cardLayout'}>
                        {children}
                    </div>
                </Container>
            </div>
        </MainLayout>
    )
}

export default CardLayout