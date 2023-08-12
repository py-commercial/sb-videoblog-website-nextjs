import Hero from "./containers/Hero";
import Container from "./containers/Container";
import MainClient from "./containers/MainClient";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <section className="main-content">
        <Container>
          <MainClient />
        </Container>
      </section>
    </main>
  );
}
