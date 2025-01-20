'use client'

import '@/styles/globals.css'

import NextLink from 'next/link'
import { Noto_Serif, Noto_Sans_TC } from 'next/font/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ShareButton } from '@readr-media/share-button'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
})
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

import Icon from '../components/icon'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant" className={notoSerif.className}>
      <body className="border-[3px] border-black bg-background-gray">
        <header className="fixed left-0 top-0 z-10 w-full border-[3px] border-b-0 border-black bg-background-gray py-5 pl-5 pr-6">
          <div className="flex flex-row justify-between">
            <Icon iconName="logo" size={{ width: 152, height: 46 }} />
            <div className="flex flex-row items-center gap-3">
              <Dialog>
                <DialogTrigger className="text-sm text-black underline">
                  製作團隊
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                    <ul className={`${notoSansTC.className} text-sm font-bold`}>
                      <li>記者：李又如</li>
                      <li>設計：曾立宇</li>
                      <li>工程：李文瀚、鄧宇哲、陳柏維、簡信昌</li>
                      <li>資料處理：李又如、劉怡馨、陳珮瑜</li>
                      <li>
                        資料合作：
                        <NextLink
                          href={'https://openfun.tw/'}
                          className="text-custom-blue"
                        >
                          歐噴有限公司
                        </NextLink>
                      </li>
                    </ul>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <ShareButton
                pathColor="black"
                direction="vertical"
                className=""
                // onClick={() => {}}
                // LineClick={() => {}}
                // FbClick={() => {}}
                // LinkClick={() => {}}
              />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
