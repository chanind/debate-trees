import Image from 'next/image'
import args from './test.json'
import Arg from '@/components/Arg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Arg arg={args} />
    </main>
  )
}
