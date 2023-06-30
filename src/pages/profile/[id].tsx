import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import cls from './profile.module.css'
import Image from 'next/image'
import userLogo from '../../../public/assets/user.png';
import ChartPie from '@/components/Chart'
import CardLayout from '@/layouts/CardLayout'

const ProfilePage = () => {
    const user = {
        email: 'leskin-artem@mail.ru',
        username: 'ArtemSPN',
        game: 100,
        win: 40,
        winrate: 100/40,
        avatar: userLogo,
        gender: 'male'
    }


    return (
        <CardLayout>
             <Row>
                <Col md='5'>
                    <Image src={userLogo} width={400} height={400} alt='user'/>
                </Col>
                <Col md='6'>
                    <Row className={cls.title}>Игровой профиль</Row>
                    <Row className={cls.prop}>
                        {`Имя пользователя: ${user.username}`}
                    </Row>
                    <Row className={cls.prop}>
                        {`Пол: ${user.gender === 'male'?'мужской':"женский"}`}
                    </Row>
                    <Row className={cls.prop}>
                        {`Почта: ${user.email}`}
                    </Row>
                    <Row className={cls.prop}>
                        {`Игр всего: ${user.game}`}
                    </Row>
                    <Row className={cls.prop}>
                        {`Кол-во побед: ${user.win}`}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md='5'>
                    <ChartPie win={user.win} losses={user.game - user.win}/>
                </Col>
                <Col md='6' style={{fontSize: 24, fontWeight: 'bold'}}>
                    Друзья
                </Col>
            </Row>
        </CardLayout>
  )
}

export default ProfilePage