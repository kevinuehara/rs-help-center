import { Header } from "../components/Header";

export default function Help() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Como Ajudar?</h1>
      <section className="mt-2 text-xl">
        <p>
          As vítimas precisam de água, roupas, calçados, cobertas e comida para
          atravessar esse período tão difícil. Neste espaço o Metrópoles
          concentra iniciativas para doar esses materiais ou dinheiro para
          iniciativas que estão socorrendo os gaúchos.
        </p>
        <p className="mt-2">
          Instituições públicas, privadas e filantrópicas estão organizadas para
          receber as doações que chegam de todo o país e direcionar para os
          abrigos e hospitais. Para isso, é preciso entender quais locais
          precisam de quais tipos de artigos e filtrar o que chega.
        </p>

        <h2 className="mt-5 font-bold">
          Lista de instituições que estão apoiando o RS
        </h2>
        <p>
          Para quem deseja fazer uma doação para ajudar pessoas e animais no Rio
          Grande do Sul, vejam algumas ONGs que estão atuando na região.
        </p>

        <div className="border-4 mt-7 p-3">
          <h3 className="mt-1 font-bold text-2xl">Ação da Cidadania</h3>
          <p>
            A ONG criada em 1993 pelo Betinho mobilizou a sociedade para a
            missão de tirar 32 milhões de pessoas da fome e criou uma conta
            especial para ajudar a população do Rio Grande do Sul. Para doar, é
            possível fazer a doação via PIX:
          </p>
          <p className="font-bold">PIX: sos@acaodacidadania.org.br</p>
          <p>
            Para mais informações sobre a ONG, acesse o site:{" "}
            <a
              className="text-red-700 font-bold"
              href="https://www.acaodacidadania.org.br/"
            >
              https://www.acaodacidadania.org.br/
            </a>
          </p>
        </div>

        <div className="border-4 mt-7 p-3">
          <h3 className="mt-1 font-bold text-2xl">Campo Bom para Cachorro</h3>
          <p>
            A ONG Campo Bom para Cachorro já resgatou mais de 5,6 mil animais em
            enchentes no Rio Grande do Sul.
          </p>
          <p className="font-bold">
            PIX: E-mail: ongcampobompracachorro@gmail.com
          </p>
          <p className="font-bold">PIX: CNPJ: 24.494.672/0001-69</p>
        </div>

        <div className="border-4 mt-7 p-3">
          <h3 className="mt-1 font-bold text-2xl">Cufa + Instituto Gol</h3>
          <p>
            A Central Única das Favelas (CUFA), em parceria com o Instituto Gol,
            está liderando uma mobilização solidária para auxiliar as vítimas da
            enchente, concentrando esforços na arrecadação de alimentos,
            produtos de limpeza e higiene pessoal, remédios água, roupas,
            calçados e cobertores. As contribuições podem ser realizadas em
            sedes da CUFA e:
          </p>
          <p className="font-bold">Doações pelo PIX: doacoes@cufa.org.br</p>
          <p>
            Postos de entregas da GOLLOG:
            <a
              className="text-red-700 font-bold"
              href="https://www.gollog.com.br/atendimento/lojas-gollog"
            >
              Golllog
            </a>
          </p>
        </div>

        <div className="border-4 mt-7 p-3">
          <h3 className="mt-1 font-bold text-2xl">GRAD Brasil</h3>
          <p>
            Desde 2011 a ONG GRAD Brasil tem como missão resgatar animais em
            locais de desastres. Já somam mais de 60 operações realizadas e mais
            de 14.500 animais resgatados.
          </p>
          <p className="mt-2">
            Para resgatar os animais no Rio Grande do Sul, o GRAD está atuando
            junto a SEMA – Secretaria do Meio Ambiente e Infraestrutura do
            estado.
          </p>
          <p>
            Para ajudar os animais que estão no estado gaúcho, a ONG indica o
            seguinte site:
            <a
              className="text-red-700 font-bold"
              href="https://linktr.ee/gradbrasil"
            >
              https://linktr.ee/gradbrasil
            </a>
          </p>
          <p>
            Para saber mais sobre a Grad Brasil, acesse:
            <a
              className="text-red-700 font-bold"
              href="https://gradbrasil.org.br/"
            >
              https://gradbrasil.org.br/
            </a>
          </p>
        </div>

        <div className="border-4 mt-7 p-3">
          <h3 className="mt-1 font-bold text-2xl">
            Rede de Bancos de Alimentos do RS e Bancos Sociais
          </h3>
          <p>
            A Rede de Bancos de Alimentos do Rio Grande do Sul foi criada em
            2007, com o objetivo de ampliar as atividades do Banco de Alimentos
            de Porto Alegre, o primeiro Banco de Alimentos criado no Brasil.
          </p>
          <p className="mt-2">
            Para ajudar a população gaúcha, a Rede já disponibilizou à Defesa
            Civil do estado 100 toneladas de alimentos. A ajuda também está
            sendo oferecida a organizações que estão atuando na linha de frente.
            A ONG conta com apoio de empresas e organizações como o Instituto
            Helda Gerdau, FIERGS, Grupo SLC, Cyrella, Cooperativa Santa Clara,
            Rodex, Sport Club Internacional, entre outro, mas para alcançar o
            maior número possível de gaúchos que perderam casas e familiares, a
            Rede informa que a contribuição pode ser feita via PIX:
          </p>
          <ul className="mt-2">
            <li>- PIX: CNPJ - 04.580.781/0001-91</li>
            <li>- Favorecido Banco de Alimentos do RS</li>
            <li>- Conta corrente: Banco Santander</li>
            <li>- Agência: 1001</li>
            <li>- Conta: 13.000.284-4</li>
            <li>- Beneficiário: Banco de Alimentos do RS</li>
          </ul>
        </div>

        <h2 className="mt-2 font-bold text-red-500">
          ⚠️ Antes de fazer uma contribuição, garanta que os itens enviados
          estejam em bom estado.
        </h2>

        <h2 className="mt-5 font-bold">👞 ROUPAS E CALÇADOS</h2>
        <ul className="mt-2">
          <li>
            - Separe os itens por gênero e idade (adultos/crianças) e coloque em
            caixas ou sacolas que podem ser fechadas/amarradas.
          </li>
          <li>
            - Coloque os itens em pares, como sapatos ou meias, juntos em uma
            sacola e, quando possível, amarre-os para que nada se perca.
          </li>
          <li>
            - Priorize roupas de inverno, a expectativa é que uma onda de frio
            chegue nos próximos dias.
          </li>
          <li>
            - Evite doar peças de roupa íntima usadas ou itens manchados/
            rasgados.
          </li>
        </ul>

        <h2 className="mt-5 font-bold">🥛 ALIMENTOS</h2>
        <ul className="mt-2">
          <li>
            - Verifique a validade de todos os itens, não doe alimentos
            vencidos.
          </li>
          <li>
            - Coloque os itens em pares, como sapatos ou meias, juntos em uma
            sacola e, quando possível, amarre-os para que nada se perca.
          </li>
          <li>
            - Não envie itens estragados ou que podem se deteriorar rapidamente.
          </li>
          <li>
            - Coloque em caixas ou sacola com boa vedação, com cuidado para não
            haver rasgos ou furos.
          </li>
        </ul>

        <h2 className="mt-5 font-bold">💊 MEDICAMENTOS</h2>
        <ul className="mt-2">
          <li>
            - O Exército da Salvação recebe doações diretas de farmácias e a
            distribuição é feita por meio de médicos que estão atendendo
            diretamente nos abrigos.
          </li>
          <li>
            - Caso queira contribuir com medicamentos, busque profissionais da
            saúde ou voluntários oficiais.
          </li>
          <li>- Não doe medicamentos vencidos.</li>
        </ul>
      </section>
    </main>
  );
}
