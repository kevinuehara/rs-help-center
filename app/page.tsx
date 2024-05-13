import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <section className="text-xl p-2">
        <p className="mt-2">
          O intuito desse site é auxiliar na busca e ajuda para pessoas que
          estão passando pelo desastre no Rio Grande do Sul.
        </p>
        <p className="mt-2">
          O projeto RS Help Center é voltado totalmente para ajuda social sem
          fins lucrativos
        </p>
        <p className="mt-2">
          O RS Help Center ou <span className="font-bold">RHC</span> foi criado
          por Kevin Uehara porém é um projeto Open Source para que as pessoas
          possam contribuir cada vez mais com o projeto.
        </p>
        <p className="mt-2">
          {" "}
          Empatia e soliedariedade pelas vítimas do desastre ❤️
        </p>
        <div className="w-full flex items-center justify-center">
          <Image
            className="mt-5 mb-4"
            src="/bandeira.png"
            width={300}
            height={300}
            alt="Bandeira Rio Grande do Sul"
            priority
          />
        </div>

        <p className="mt-4 mb-20">
          Auxilie na busca cadastrando as vítimas desaparecidas em{" "}
          <span className="font-bold">vítimas</span> no menu e também é possível
          visualizar as regiões no mapa.
        </p>
      </section>
      <Footer />
    </div>
  );
}
