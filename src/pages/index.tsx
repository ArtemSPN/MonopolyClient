import Header from '@/components/Header'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import adv1 from '../../public/assets/adv1.png';
import adv2 from '../../public/assets/adv2.png';
import adv3 from '../../public/assets/adv3.png';
import {Container, Row, Col} from 'react-bootstrap'
import AdvantagesCard from '@/components/AdvantagesCard';


const Index = () => {

    const advantages = [
        {img: adv1.src, title: 'Играйте где угодно', text: 'Вы можете играть на любом устройстве, где есть браузер — хоть на компьютере из дома, хоть на телефоне, пока едете в метро.'},
        {img: adv2.src, title: 'Соревнования', text: 'Играйте в Соревновательном режиме, чтобы получить звание и поднимать его с каждой победой.'},
        {img: adv3.src, title: 'Это бесплатно!', text: 'Просто создайте аккаунт и начните играть — никаких подписок и платежей.'},
    ]


    return (
        <MainLayout>
            <div className='introPage'>
                <div className='text-center'>
                    <div className='text-5xl font-bold'>Monopoly online</div>
                    <h4 className='mt-4 w-[500px] mx-auto'>
                        Это отличное место, чтобы поиграть с друзьями в легендарную настольную игру.
                    </h4>
                    <button className='startBtn'>Начать</button>
                </div>
            </div>
            <div className='flex justify-items-center'>
                <div className='titleAboutUs'>
                    Наши преимущества
                </div>
            </div>
            <Container>
                <Row style={{margin: '12px auto'}}>
                {advantages.map((item, index) => 
                    <Col md='4' key={index} className='flex justify-center'>
                        <AdvantagesCard title={item.title} text={item.text} img={item.img}/>
                    </Col>
                )}
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Index