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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
          {true && (
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="url"
                placeholder="URL"
                value={`${baseUrl}/${id}`}
                disabled
              />
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${
                      baseUrl == 'https://xn--qv8h.uz/'
                        ? 'https://🔗.uz/'
                        : baseUrl
                    }/${id}`
                  )
                }}
              >
                Copy
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home
