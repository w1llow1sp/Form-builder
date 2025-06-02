import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Тест подключения к базе данных
    await prisma.$connect()
    
    // Попробуем получить количество форм
    const formCount = await prisma.form.count()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connected successfully!',
      formCount 
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database' 
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
} 