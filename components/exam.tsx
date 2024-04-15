/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0QzM6ihzhyx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function exam() {
  return (
    <div className="mx-auto max-w-4xl px-4 flex flex-col space-y-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Examate</h1>
      </div>
      <div className="space-y-2">
        <div className="border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container grid items-center gap-4 px-4 py-4 md:gap-6 md:px-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-10 h-10" />
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Exam Title</h2>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Exam Description</p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Instructions</h1>
              <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                Instructions will be added here. Instructions will be added here. Instructions will be added here.
                Instructions will be added here. Instructions will be added here. Instructions will be added here.
                Instructions will be added here.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 last:border-0 dark:border-gray-800">
              <div className="grid items-center gap-4 md:grid-cols-3">
                <h3 className="text-lg font-medium">1. Question 1</h3>
                <div className="space-y-2 md:col-start-2 md:col-end-4">
                  <details>
                    <summary className="text-sm font-medium cursor-pointer">Add your answer</summary>
                    <div className="mt-2 space-y-2">
                      <Label className="text-sm font-medium peer-disabled:cursor-not-allowed" htmlFor="question-1">
                        Answer
                      </Label>
                      <Textarea
                        className="min-h-[100px] peer-disabled:pointer-events-none peer-disabled:bg-transparent peer-disabled:opacity-100"
                        disabled
                        id="question-1"
                        placeholder="Enter your answer"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-gray-200 last:border-0 dark:border-gray-800">
              <div className="grid items-center gap-4 md:grid-cols-3">
                <h3 className="text-lg font-medium">2. Question 2</h3>
                <div className="space-y-2 md:col-start-2 md:col-end-4">
                  <details>
                    <summary className="text-sm font-medium cursor-pointer">Add your answer</summary>
                    <div className="mt-2 space-y-2">
                      <Label className="text-sm font-medium peer-disabled:cursor-not-allowed" htmlFor="question-2">
                        Answer
                      </Label>
                      <Textarea
                        className="min-h-[100px] peer-disabled:pointer-events-none peer-disabled:bg-transparent peer-disabled:opacity-100"
                        disabled
                        id="question-2"
                        placeholder="Enter your answer"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-gray-200 last:border-0 dark:border-gray-800">
              <div className="grid items-center gap-4 md:grid-cols-3">
                <h3 className="text-lg font-medium">3. Question 3</h3>
                <div className="space-y-2 md:col-start-2 md:col-end-4">
                  <details>
                    <summary className="text-sm font-medium cursor-pointer">Add your answer</summary>
                    <div className="mt-2 space-y-2">
                      <Label className="text-sm font-medium peer-disabled:cursor-not-allowed" htmlFor="question-3">
                        Answer
                      </Label>
                      <Textarea
                        className="min-h-[100px] peer-disabled:pointer-events-none peer-disabled:bg-transparent peer-disabled:opacity-100"
                        disabled
                        id="question-3"
                        placeholder="Enter your answer"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-gray-200 last:border-0 dark:border-gray-800">
              <div className="grid items-center gap-4 md:grid-cols-3">
                <h3 className="text-lg font-medium">4. Question 4</h3>
                <div className="space-y-2 md:col-start-2 md:col-end-4">
                  <details>
                    <summary className="text-sm font-medium cursor-pointer">Add your answer</summary>
                    <div className="mt-2 space-y-2">
                      <Label className="text-sm font-medium peer-disabled:cursor-not-allowed" htmlFor="question-4">
                        Answer
                      </Label>
                      <Textarea
                        className="min-h-[100px] peer-disabled:pointer-events-none peer-disabled:bg-transparent peer-disabled:opacity-100"
                        disabled
                        id="question-4"
                        placeholder="Enter your answer"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-gray-200 last:border-0 dark:border-gray-800">
              <div className="grid items-center gap-4 md:grid-cols-3">
                <h3 className="text-lg font-medium">5. Question 5</h3>
                <div className="space-y-2 md:col-start-2 md:col-end-4">
                  <details>
                    <summary className="text-sm font-medium cursor-pointer">Add your answer</summary>
                    <div className="mt-2 space-y-2">
                      <Label className="text-sm font-medium peer-disabled:cursor-not-allowed" htmlFor="question-5">
                        Answer
                      </Label>
                      <Textarea
                        className="min-h-[100px] peer-disabled:pointer-events-none peer-disabled:bg-transparent peer-disabled:opacity-100"
                        disabled
                        id="question-5"
                        placeholder="Enter your answer"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
