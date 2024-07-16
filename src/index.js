import express from 'express'

const app = express()
const port = 3000
// const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

console.log(24)

// {
//   "compilerOptions": {
//     "target": "ES2020", // Указывает, в какую версию ECMAScript следует скомпилировать код.
//     "module": "NodeNext", // Указывает, какой код модуля должен быть сгенерирован.
//     "moduleResolution": "NodeNext", // Указывает, как TypeScript должен разрешать импорт модулей.
//     "outDir": "./backend/dist", // Перенаправляем структуру вывода в каталог.
//     "rootDir": "./backend",
//     "strict": true, // Включаем все параметры строгой проверки типов.
//     "esModuleInterop": true, // Это позволит вам использовать импорт по умолчанию с модулями CommonJS.
//     "skipLibCheck": true // эта опция пропустит проверку типа для всех файлов .d.ts.
//   },
//   "ts-node": {
//     "esm": true
//   },
//   "include": ["backend/src/**/*"], // Указывает, какие файлы включить при компиляции проекта.
//   "exclude": ["node_modules", "**/*.spec.ts", "frontend"] // Указывает, какие файлы исключить при компиляции проекта.
// }
