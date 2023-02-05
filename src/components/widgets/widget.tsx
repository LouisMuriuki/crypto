import React from 'react'
import { Card } from 'antd';

interface Props{
  text:string
}

function Widget({text}:Props) {
  return (
    <Card style={{ width: 300, margin: '0 auto' }}>
    {text}
  </Card>
  )
}

export default Widget