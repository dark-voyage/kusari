import React, { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { CardFooter } from './ui/card'
import { Loader2 } from 'lucide-react'

type AddLinkParams = {
  id: string
  setId: React.Dispatch<React.SetStateAction<string>>
}

const AddLink: React.FC<AddLinkParams> = ({ id, setId }) => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (url.trim()) {
      const config: AxiosRequestConfig = {
        method: 'POST',
        url: '/api/add',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { url },
      }
      setLoading(true)
      const { data } = await axios(config)
      setLoading(false)
      setId(data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Enter URL</Label>
          <Input
            id="name"
            type="url"
            placeholder="Enter Your URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          {!loading ? (
            <Button type="submit">Shorten me</Button>
          ) : (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating the link for you
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}

export default AddLink
