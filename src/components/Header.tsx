import { navLink } from '@/types/router';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import userLogo from '../../public/assets/userLogo.png';

const Header: React.FC = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem('user')?true:false)
  }, [])

  return (
    <div className='bg-emerald-800'>
        <Container>
        <Navbar collapseOnSelect expand="lg">
      <Container className="bg-emerald-800">
        <Navbar.Brand 
            onClick={() => router.push('/')} 
            className="text-white font-bold"
            style={{cursor: 'pointer'}}            
            >
                Monopoly online
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {navLink.map(({name, link}) => 
                 <Nav.Link 
                    key={link} 
                    onClick={() => router.push(link)}
                    className='text-white'
                >
                    {name}
                </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              {
                isAuth
                ?<Image src={userLogo} width={50} height={50} alt='user logo'/>
                :<Button 
                    variant="light"  
                    className='font-bold'
                    onClick={() => router.push("/auth")}
                    >
                      Log in
                  </Button>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    </div>
    
  )
}

export default Header