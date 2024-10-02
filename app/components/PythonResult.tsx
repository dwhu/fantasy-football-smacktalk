'use client'

import { useState, useEffect } from 'react'
import styles from '../page.module.css'

export default function PythonResult() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.text()
        setCurrentTime(data)
      } catch (error) {
        console.error('Error fetching time:', error)
        setCurrentTime('Error fetching time')
      }
    }

    fetchTime()
  }, [])

  return (
    <div>
      <h2>Python Function Result:</h2>
      <p>{currentTime}</p>
    </div>
  )
}