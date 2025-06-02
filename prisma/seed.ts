import { PrismaClient } from '../app/generated-prisma-client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Создаем тестовую форму
  const form = await prisma.form.create({
    data: {
      userId: 'user_test_123',
      name: 'Тестовая форма',
      description: 'Это тестовая форма для демонстрации',
      content: JSON.stringify([
        {
          type: 'text',
          label: 'Имя',
          required: true
        },
        {
          type: 'email',
          label: 'Email',
          required: true
        }
      ]),
      published: true,
      visits: 10,
      submissions: 3
    }
  })

  // Создаем тестовые отправки формы
  await prisma.formSubmissions.createMany({
    data: [
      {
        formId: form.id,
        content: JSON.stringify({
          name: 'Иван Иванов',
          email: 'ivan@example.com'
        })
      },
      {
        formId: form.id,
        content: JSON.stringify({
          name: 'Мария Петрова',
          email: 'maria@example.com'
        })
      },
      {
        formId: form.id,
        content: JSON.stringify({
          name: 'Алексей Сидоров',
          email: 'alexey@example.com'
        })
      }
    ]
  })

  console.log('✅ Database seeded successfully!')
  console.log(`📝 Created form: ${form.name} (ID: ${form.id})`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 