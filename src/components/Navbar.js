import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
    border: 0.5px solid #999;
    display: flex;
    margin-left: 25px;
    align-items: center;
    padding: 5px
`

const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '24px' })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

function navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default navbar
