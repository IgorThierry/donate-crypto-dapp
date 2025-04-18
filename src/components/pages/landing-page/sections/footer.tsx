import { FacebookSvg } from '@/components/svgs/facebook'
import { GithubSvg } from '@/components/svgs/github'
import { TwitterSvg } from '@/components/svgs/twitter'
import Link from 'next/link'

type FooterProps = {
  handleSmoothScroll: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Footer({ handleSmoothScroll }: FooterProps) {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 mx-auto">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <span className="text-white">D</span>
            </div>
            <span className="text-xl font-bold">DonateCrypto</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering change through blockchain technology. Create transparent
            donation campaigns and contribute to causes you care about.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <FacebookSvg />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <TwitterSvg />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <GithubSvg />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={handleSmoothScroll}
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={handleSmoothScroll}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#fee"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={handleSmoothScroll}
                >
                  Fees
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={handleSmoothScroll}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:flex-row mx-auto">
          <p className="text-center text-sm text-muted-foreground lg:text-left">
            © 2025 DonateCrypto. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground lg:text-left">
            Powered by blockchain technology for maximum transparency and
            security.
          </p>
        </div>
      </div>
    </footer>
  )
}
