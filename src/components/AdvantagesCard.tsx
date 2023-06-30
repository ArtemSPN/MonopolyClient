import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import asd from '../../public/assets/adv1.png'
import Image from 'next/image';

interface AdvantagesCardProps {
    title: string,
    text: string,
    img: string
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = (adv:AdvantagesCardProps) => {
    console.log(adv.img)
  return (
    <Card style={{ width: '18rem', height: '400px' }}>
      <Image src={adv.img} width={350} height={200} alt='asfd' style={{borderRadius: '5px 5px 0 0'}}/>
      <Card.Body>
        <Card.Title>{adv.title}</Card.Title>
        <Card.Text>
          {adv.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AdvantagesCard