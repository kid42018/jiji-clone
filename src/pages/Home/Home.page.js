import React from 'react'
import { StyledHomePage } from './Home.styled'
import { CatagorieMain, CatagorieSideBar, HomeTipsContainer, MainFooter, SearchContainer, TreandingAds } from '../../components'

export default function Home() {
    return (
        <StyledHomePage>
            <SearchContainer />
            <CatagorieMain />
            <main>
                <CatagorieSideBar />
                <div>
                    <HomeTipsContainer />
                    <TreandingAds />
                </div>
            </main>
            <MainFooter />
        </StyledHomePage>
    
    )
}
