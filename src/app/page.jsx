import { getUniqueUuiidV4 } from "../helpers";

export default async function Home() {
  return (
    <section className="flex justify-center items-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-2-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="w-auto px-6 py-3 rounded-full bg-neutral-100">
            <span className="text-sm font-medium text-primary">
              Next.js Components library
            </span>
          </span>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Create apps with ease
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
            Startup components designed to eliminate roadblocks and accelerate
            your journey from concept to reality. <br /> uuid:{" "}
            {getUniqueUuiidV4()}
          </p>
          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <button className="py-4 px-6 bg-zinc-700 rounded-full text-white hover:bg-zinc-600 shadow-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
