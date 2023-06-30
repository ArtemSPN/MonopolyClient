import Header from '@/components/Header';
import Head from 'next/head';
import React, { ReactNode } from 'react'
import Container from 'react-bootstrap/Container';

interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
  }
  
  const MainLayout:React.FC<MainLayoutProps> = ({children, title, description, keywords}:MainLayoutProps) => {
    return (
        <div className='App'>
            <Head>
                <title>{title || "Музыкальная платформа"}</title>
                <meta name='discription' content={`Музыкальная площадка, на которой можно найти множество популярных треков. ${description}`}/>
                <meta name='robots' content='index, follow'/>
                <meta name='keywords' content={keywords  || 'Музака, треки, артисты'}/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )
  }

export default MainLayout