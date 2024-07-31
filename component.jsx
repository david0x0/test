/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yCKWgPCHtvE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative group">
            <img
              src="/placeholder.svg"
              alt="Sportwagenverleih Produkt"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Entdecken Sie die neuesten Sportwagen
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Erkunden Sie unsere hochmoderne Technologie und innovatives Design. Erleben Sie die Zukunft des Fahrens.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="w-full min-[400px]:w-auto">
                Jetzt mieten
              </Button>
              <Link
                href="#"
                className="inline-flex h-12 w-full items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 min-[400px]:w-auto"
                prefetch={false}
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Neueste Sportwagen</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entdecken Sie die neuesten Innovationen von Sportwagenverleih, die Ihr Fahrerlebnis bereichern.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Porsche 911"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Porsche 911</h3>
                <p className="text-muted-foreground">
                  Erleben Sie die ultimative Sportwagentechnologie mit dem Porsche 911.
                </p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Lamborghini Aventador"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Lamborghini Aventador</h3>
                <p className="text-muted-foreground">Entfesseln Sie die Kraft des Lamborghini Aventador.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Ferrari F8 Tributo"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Ferrari F8 Tributo</h3>
                <p className="text-muted-foreground">Erleben Sie die Leistung und Eleganz des Ferrari F8 Tributo.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="McLaren 720S"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">McLaren 720S</h3>
                <p className="text-muted-foreground">Entdecken Sie die Leistung und Präzision des McLaren 720S.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Aston Martin DB11"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Aston Martin DB11</h3>
                <p className="text-muted-foreground">Erleben Sie den Luxus und die Leistung des Aston Martin DB11.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Bentley Continental GT"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Bentley Continental GT</h3>
                <p className="text-muted-foreground">
                  Genießen Sie den Komfort und die Leistung des Bentley Continental GT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Erleben Sie den Thrill</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tauchen Sie ein in die Welt der Sportwagen und lassen Sie sich von unseren Fahrzeugen begeistern.
              </p>
            </div>
            <div className="relative w-full max-w-2xl overflow-hidden rounded-lg aspect-video">
              <video className="w-full" autoPlay loop muted>
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entdecken Sie unsere Dienstleistungen</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Erkunden Sie die Welt der innovativen Dienstleistungen von Sportwagenverleih und erschließen Sie neue
                Möglichkeiten.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Reservierung"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Reservierung</h3>
                <p className="text-muted-foreground">Reservieren Sie Ihren Traumsportwagen ganz einfach online.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Lieferung"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Lieferung</h3>
                <p className="text-muted-foreground">Wir liefern Ihren Sportwagen direkt zu Ihnen nach Hause.</p>
              </div>
            </div>
            <div className="grid gap-4 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt="Versicherung"
                  className="aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Versicherung</h3>
                <p className="text-muted-foreground">Genießen Sie den Komfort einer umfassenden Versicherung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}