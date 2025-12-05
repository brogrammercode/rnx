import Card from "../components/card"

interface Tournament {
  name: string
  description: string
  banner: string
  href: string
}

const tournaments: Tournament[] = [
  {
    name: "Clash Squad",
    description: "Swiss Hosting",
    banner: "https://wallpapercave.com/wp/wp5879802.jpg",
    href: "/"
  },
]

export default function Home() {

  const wall = "https://cdn.dribbble.com/userupload/17112596/file/original-d7d5606e4d4a2c06a2f8531082f6061a.jpg?resize=1600x1200&vertical=center"

  return (
    <section className="my-10">
      <Card image={wall} height={500} />
    </section>
  );
}
