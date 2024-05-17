import ContainerDetailCards from "./ContainerDetailCards"

export default function Details() {
  return (
    <section className="flex flex-col gap-5 w-full mt-10 bg-indigo-100 rounded-2xl px-6 py-6">
      <h3 className="text-gray-900/60 uppercase"> Weather Details </h3>
      <ContainerDetailCards />
    </section>
  )
}