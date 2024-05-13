import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen">
      <section className="text-xl p-5">
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
        <div className="w-full flex md:flex-row flex-col items-center justify-center">
          <Image
            className="mt-5 mb-4"
            src="/noticia1.png"
            width={400}
            height={400}
            alt="Primeira Notícia 136 Mortos"
            priority
          />
          <Image
            className="mt-5 mb-4"
            src="/noticia2.png"
            width={350}
            height={350}
            alt="Segunda Notícia: Rebanhos e animais afogados"
            priority
          />
          <Image
            className="mt-5 mb-4"
            src="/noticia3.png"
            width={350}
            height={350}
            alt="Terceira Notícia: Família encontrada morta fogada"
            priority
          />
        </div>

        <p className="mt-4 mb-20">
          Auxilie na busca cadastrando as vítimas (sejam pessoas, animais, etc)
          desaparecidas em <span className="font-bold">vítimas</span> no menu e
          também é possível visualizar as regiões no mapa.
        </p>
        <div className="w-full flex md:flex-row flex-col items-center justify-center">
          <Image
            src="/bandeira.png"
            width={150}
            height={150}
            alt="Bandeira Rio Grande do Sul"
            priority
          />
        </div>
      </section>
    </div>
  );
}
