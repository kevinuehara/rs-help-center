import React from "react";

export default function Faq() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        FAQ <span className="font-normal">- Frequented Asked Questions</span>
      </h1>
      <section className="mt-5 text-xl">
        <h2 className="font-bold">Como posso contribuir com a aplicação?</h2>
        <p className="mt-2">
          A RHC é uma aplicação totalmente Open Source, ou seja, qualquer pessoa
          pode contribuir com a aplicação. Basta realizar um{" "}
          <span className="font-bold">Fork</span> do repositório original e
          realizar as mudanças que deseja. Adicionando e melhorando a
          experiência, novas funcionalidades, fique à vontade de estar
          contribuindo. Novamente, é uma plataforma para ajudar e promover o
          auxílio na busca e ajuda no desastre do Rio Grande do Sul ❤️
        </p>

        <h2 className="mt-7 font-bold">Sobre a RHC</h2>
        <p className="mt-2">
          A RHC é uma plataforma totalmente independente e desvinculada à
          qualquer organização social ou política. Foi totalmente criada
          inicialmente por mim, <span className="font-bold">Kevin Uehara</span>.
          - Staff Frontend Engineer no IFood, colaborador das comunidades NodeBR
          e GDG Campinas (Google Developer Groups), palestrante e criador de
          conteúdo tech.å
        </p>
        <p className="font-bold mt-2">Contatos:</p>
        <ul>
          <li>
            <span className="font-bold">Email:</span> uehara.kevin@gmail.com
          </li>
          <li>
            <span className="font-bold">Telefone/Whatsapp:</span> (19)
            99172-7014
          </li>
          <li>
            <span className="font-bold">Linkedin</span>{" "}
            <a
              className="font-bold text-blue-500"
              href="https://www.linkedin.com/in/kevin-uehara/"
            >
              Kevin Uehara
            </a>
          </li>
          <li>
            <span className="font-bold">Twitter</span>{" "}
            <a
              className="font-bold text-blue-500"
              href="https://twitter.com/ueharaDev"
            >
              @ueharaDev
            </a>
          </li>
          <li>
            <span className="font-bold">Instagram</span>{" "}
            <a
              className="font-bold text-blue-500"
              href="https://www.instagram.com/uehara_kevin/"
            >
              @uehara_kevin
            </a>
          </li>
        </ul>

        <h2 className="mt-7 font-bold">Como posso ajudar a RHC?</h2>
        <p className="mt-2">
          Caso não tenha conhecimento sobre desenvolvimento, você pode ajudar
          <span className="font-bold"> compartilhando</span> o site para outras
          pessoas ou alimentando com dados de pessoas desaparecidas.
        </p>
      </section>
    </main>
  );
}
