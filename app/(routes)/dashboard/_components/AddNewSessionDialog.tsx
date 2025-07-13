"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { IconCirclePlusFilled } from '@tabler/icons-react'
import { Textarea } from '@/components/ui/textarea'
import { ArrowBigRight, ArrowRight } from 'lucide-react'

type text ={
  text:string
}
const AddNewSessionDialog = ({text:text}) => {

  const [note,setNote] = useState<string>()

  return (
    <Dialog>
    <DialogTrigger>
        <Button className='mt-3'>{text}</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Add Basic Details</DialogTitle>
        <DialogDescription asChild>
            <div>
              <h2>Add Symptoms or any other details</h2>
              <Textarea 
                placeholder='Add details here...' 
                className='h-[200px] mt-3'
                onChange={(e)=>setNote(e.target.value)}
              />
            </div>
        </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button disabled={!note} >Next <ArrowRight/></Button>
        </DialogFooter>
    </DialogContent>
    </Dialog>
  )
}

export default AddNewSessionDialog