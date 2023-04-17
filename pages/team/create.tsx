import Image from 'next/image'
import { Inter } from 'next/font/google'
import GottaCatch from '/components/buttons/GottaCatch'
import AddNewTeam from '/components/buttons/AddNewTeam'

const inter = Inter({ subsets: ['latin'] })

export default function TeamCreate() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <a href="/team/list" > Show list of teams </a>

      <AddNewTeam></AddNewTeam>
      <GottaCatch></GottaCatch>

    </main>
  )
}
