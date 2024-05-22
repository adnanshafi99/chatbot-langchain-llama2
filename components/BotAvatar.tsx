import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Companion } from '@prisma/client'

export default function BotAvatar({
    src
}:{src:string}) {
  return (
    <Avatar>
  <AvatarImage src={src} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  )
}
