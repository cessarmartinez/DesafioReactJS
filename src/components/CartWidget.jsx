import { Icon, Text, Button } from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartWidget() {

  const navegar = useNavigate()

  const {cart, cartQuantity} = useCart()

  return (

    <>
    {cart.length 
      ? <Button onClick={() => navegar('/cart')} rightIcon={<Icon as={BsCart} h="20px" w="20px" color='#f4f4f6'/>} background='#6393ff' variant='solid' _hover={{background: '#1a67ff'}}>
      <Text color='#f4f4f6'>{cartQuantity() || ''}</Text>
      </Button>
      : <span></span>
    }
    </>
  )
}
