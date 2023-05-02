import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import AddLink from '../components/AddLink'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

const Home: NextPage = () => {
  const [id, setId] = useState('')

  const baseUrl =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <Head>
        <title>🔗 Kusari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <CardHeader>
          <CardTitle>🔗 Kusari</CardTitle>
          <CardDescription>
            Kasuri is a fast and user-friendly URL shortener.
            {/* with personalized shortened links and basic analytics. */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddLink id={id} setId={setId} />
        </CardContent>
        <CardFooter>
          {id && (
            <div className="bg-fuchsia-50 flex items-center justify-center w-full text-xl text-cyan-800 mt-4 p-3 rounded-sm">
              <a
                href={`${baseUrl}/${id}`}
                target="_blank"
              >{`${baseUrl}/${id}`}</a>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home
