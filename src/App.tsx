import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import '@/styles/globals.css'

function App() {
  return (
    <div className="p-4 space-y-4">
      <div className="space-x-2">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
      
      <div className="space-x-2">
        <Badge>Default Badge</Badge>
        <Badge variant="secondary">Secondary Badge</Badge>
        <Badge variant="destructive">Destructive Badge</Badge>
      </div>
    </div>
  )
}

export default App
