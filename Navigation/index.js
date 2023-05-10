import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Router from './Router'
import { CartProvider } from './Provider.js'

export default function Stack () {
    return (
      <CartProvider>
        <Router />
      </CartProvider>
      
    )
}
