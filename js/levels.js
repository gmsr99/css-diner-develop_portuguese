var levels = [
  {
    helpTitle : "Seleciona elementos pelo tipo",
    selectorName : "Seletor de tipo",
    doThis : "Seleciona os pratos",
    selector : "prato",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. O tipo é o nome da tag, por isso <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <prato/>
    <prato/>
    `
  },
  {
    doThis : "Seleciona as caixas bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Seleciona elementos pelo tipo",
    selectorName : "Seletor de tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. O tipo é o nome da tag, por isso <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <prato/>
    <bento/>
    `
  },
  {
    doThis : "Seleciona o prato chique",
    selector : "#chique",
    selectorName: "Seletor de ID",
    helpTitle: "Seleciona elementos com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com um <strong>id</strong> específico. Também podes combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#fixe</strong> seleciona qualquer elemento com <strong>id="fixe"</strong>',
      '<strong>ul#longa</strong> seleciona <tag>ul id="longa"</tag>'
    ],
    boardMarkup : `
    <prato id="chique"/>
    <prato/>
    <bento/>
    `
  },
  {
    helpTitle: "Seleciona um elemento dentro de outro elemento",
    selectorName : "Seletor de descendentes",
    doThis : "Seleciona a maçã no prato",
    selector : "prato maca",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> chama-se descendente porque está dentro de outro elemento. <br><br>Repara que, no código, a maçã é <tag>maca</tag>: nos nomes evitamos os acentos.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os elementos <tag>strong</tag> que estão dentro de qualquer <tag>p</tag>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estão dentro do elemento com <strong>id="chique"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <prato>
      <maca/>
    </prato>
    <maca/>
    `
  },
  {
    doThis : "Seleciona o pepino no prato chique",
    selector : "#chique pepino",
    helpTitle: "Combina os seletores de descendentes e de ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Podes combinar qualquer seletor com o seletor de descendentes.',
    examples : [
      '<strong>#fixe&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estão dentro de elementos com <strong>id="fixe"</strong>'
    ],
    boardMarkup : `
    <bento>
    <laranja/>
    </bento>
    <prato id="chique">
      <pepino/>
    </prato>
    <prato>
      <pepino/>
    </prato>
    `
  },
  {
    doThis : "Seleciona as maçãs pequenas",
    selector : ".mini",
    selectorName: "Seletor de classe",
    helpTitle: "Seleciona elementos pela classe",
    syntax: ".classe",
    help : 'O seletor de classe seleciona todos os elementos com esse atributo class. Um elemento só pode ter um ID, mas pode ter várias classes. <br><br>Espreita o HTML para descobrires a classe das maçãs pequenas.',
    examples : [
    '<strong>.fixe</strong> seleciona todos os elementos com <strong>class="fixe"</strong>'
    ],
    boardMarkup : `
    <maca/>
    <maca class="mini"/>
    <prato>
      <maca class="mini"/>
    </prato>
    <prato/>
    `
  },
  {
    doThis : "Seleciona as laranjas pequenas",
    selector : "laranja.mini",
    helpTitle: "Combina o seletor de classe",
    syntax: "A.classe",
    help : 'Podes combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.importante</strong> seleciona todos os elementos <tag>ul</tag> que têm <strong>class="importante"</strong>',
      '<strong>#grande.largo</strong> seleciona todos os elementos com <strong>id="grande"</strong> que também têm <strong>class="largo"</strong>'
    ],
    boardMarkup :`
    <maca/>
    <maca class="mini"/>
    <bento>
      <laranja class="mini"/>
    </bento>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="mini"/>
    </prato>`
  },
  {
    doThis : "Seleciona as laranjas pequenas nos bentos",
    selector : "bento laranja.mini",
    syntax: "Força nisso!",
    helpTitle: "Tu consegues...",
    help : 'Combina o que aprendeste nos últimos níveis para resolveres este!',
    boardMarkup : `
    <bento>
      <laranja/>
    </bento>
    <laranja class="mini"/>
    <bento>
      <laranja class="mini"/>
    </bento>
    <bento>
      <maca class="mini"/>
    </bento>
    <bento>
      <laranja class="mini"/>
    </bento>
    `
  },
  {
    doThis : "Seleciona todos os pratos e bentos",
    selector : "prato,bento",
    selectorName : "Combinador vírgula",
    helpTitle: "Combina, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Podes combinar quaisquer seletores desta forma e podes indicar mais do que dois.',
    examples: [
    '<strong>p, .divertido</strong> seleciona todos os elementos <tag>p</tag> e também todos os elementos com <strong>class="divertido"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <pepino class="mini"/>
    <pepino/>
    <prato>
      <pepino/>
    </prato>
    <bento>
      <pepino/>
    </bento>
    <prato>
      <pepino/>
    </prato>
    <pepino/>
    <pepino class="mini"/>
    `
  },
  {
    doThis : "Seleciona tudo!",
    selector : "*",
    selectorName:  "Seletor universal",
    helpTitle: "Podes selecionar tudo!",
    syntax : "*",
    help : 'Com o seletor universal podes selecionar todos os elementos!',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos os elementos <tag>p</tag>.',
    ],
    boardMarkup : `
    <maca/>
    <prato>
      <laranja class="mini" />
    </prato>
    <bento/>
    <bento>
      <laranja/>
    </bento>
    <prato id="chique"/>
    `
  },
  {
    doThis : "Seleciona tudo o que está num prato",
    selector : "prato *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combina o seletor universal",
    help : 'Isto seleciona todos os elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona todos os elementos dentro de cada elemento <tag>p</tag>.',
      '<strong>ul.chique *</strong> seleciona todos os elementos dentro de cada elemento <tag>ul class="chique"</tag>.'
    ],
    boardMarkup: `
    <prato id="chique">
      <laranja class="mini"/>
    </prato>
    <prato>
      <pepino/>
    </prato>
    <maca class="mini"/>
    <prato>
      <maca/>
    </prato>`
  },
  {
    doThis : "Seleciona as maçãs logo a seguir a um prato",
    selector : "prato + maca",
    helpTitle: "Seleciona um elemento que vem imediatamente a seguir a outro",
    selectorName: "Seletor de irmão adjacente",
    syntax : "A + B",
    help : "Isto seleciona todos os elementos <strong>B</strong> que vêm imediatamente a seguir a <strong>A</strong>. Os elementos que se seguem uns aos outros chamam-se irmãos. Estão no mesmo nível, ou profundidade. <br/><br/>No código HTML deste nível, os elementos com a mesma indentação são irmãos.",
    examples : [
      '<strong>p + .intro</strong> seleciona todos os elementos com <strong>class="intro"</strong> que vêm imediatamente a seguir a um <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos os elementos <tag>a</tag> que vêm imediatamente a seguir a um <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <maca class="mini"/>
    </bento>
    <prato />
    <maca class="mini"/>
    <prato />
    <maca/>
    <maca class="mini"/>
    <maca class="mini"/>
    `
  },
  {
    selectorName: "Seletor geral de irmãos",
    helpTitle: "Seleciona os elementos que vêm depois de outro elemento",
    syntax: "A ~ B",
    doThis : "Seleciona os pepinos depois do bento",
    selector : "bento ~ pepino",
    help : "Podes selecionar todos os irmãos que vêm depois de um elemento. É como o seletor de irmão adjacente (A + B), mas apanha todos os elementos seguintes em vez de apenas um.",
    examples : [
      '<strong>A ~ B</strong> seleciona todos os <strong>B</strong> que vêm depois de um <strong>A</strong>'
    ],
    boardMarkup : `
    <pepino/>
    <bento>
      <laranja class="mini"/>
    </bento>
    <pepino class="mini"/>
    <pepino/>
    <prato>
      <pepino/>
    </prato>
    <prato>
      <pepino class="mini"/>
    </prato>
    `
  },
  {
    selectorName: "Seletor de filhos",
    syntax: "A > B&nbsp;",
    doThis : "Seleciona a maçã diretamente num prato",
    selector : "prato > maca",
    helpTitle: "Seleciona os filhos diretos de um elemento",
    help : "Podes selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está aninhado diretamente noutro elemento. <br><br>Os elementos aninhados a maior profundidade chamam-se descendentes.",
    examples : [
      '<strong>A > B</strong> seleciona todos os <strong>B</strong> que são filhos diretos de <strong>A</strong>'
    ],
    boardMarkup: `
    <prato>
      <bento>
        <maca/>
      </bento>
    </prato>
    <prato>
      <maca/>
    </prato>
    <prato/>
    <maca/>
    <maca class="mini"/>
    `
  },
  {
    selectorName: "Pseudoclasse de primeiro filho",
    helpTitle: "Seleciona o primeiro elemento filho dentro de outro elemento",
    doThis : "Seleciona a laranja de cima",
    selector : "prato :first-child",
    syntax: ":first-child",

    help : "Podes selecionar o primeiro elemento filho. Um elemento filho é qualquer elemento que está aninhado diretamente noutro elemento. Podes combinar esta pseudoclasse com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os primeiros elementos filhos.',
      '<strong>p:first-child</strong> seleciona todos os elementos <tag>p</tag> que são primeiros filhos.',
      '<strong>div p:first-child</strong> seleciona todos os elementos <tag>p</tag> que são primeiros filhos e estão dentro de um <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <prato />
    <prato>
      <laranja />
      <laranja />
      <laranja />
    </prato>
    <pepino class="mini" />
    `
  },
  {
    selectorName: "Pseudoclasse de filho único",
    helpTitle: "Seleciona um elemento que é o único dentro de outro",
    doThis : "Seleciona a maçã e o pepino nos pratos",
    selector : "prato :only-child",
    syntax: ":only-child",
    help : "Podes selecionar qualquer elemento que seja o único dentro de outro.",
    examples : [
      '<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são filhos únicos de outro elemento.',
      '<strong>ul li:only-child</strong> seleciona o elemento <tag>li</tag> que é o único dentro de um <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato>
      <maca/>
    </prato>
    <prato>
      <pepino />
    </prato>
    <bento>
      <pepino />
    </bento>
    <prato>
      <laranja class="mini"/>
      <laranja/>
    </prato>
    <pepino class="mini"/>
    `
  },
  {
    selectorName: "Pseudoclasse de último filho",
    helpTitle: "Seleciona o último elemento dentro de outro elemento",
    doThis : "Seleciona a maçã pequena e o pepino",
    selector : ".mini:last-child",
    syntax: ":last-child",
    help : "Podes usar este seletor para selecionar um elemento que é o último filho dentro de outro elemento. <br><br>Dica de profissional &rarr; Quando só existe um elemento, esse elemento conta como first-child, only-child e last-child!",
    examples : [
      '<strong>:last-child</strong> seleciona todos os últimos elementos filhos.',
      '<strong>span:last-child</strong> seleciona todos os elementos <tag>span</tag> que são últimos filhos.',
      '<strong>ul li:last-child</strong> seleciona os últimos elementos <tag>li</tag> dentro de qualquer <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato id="chique">
      <maca class="mini"/>
    </prato>
    <prato/>
    <prato>
      <laranja class="mini"/>
      <laranja/>
    </prato>
    <pepino class="mini"/>`
  },
  {
    selectorName: "Pseudoclasse nth-child",
    helpTitle: "Seleciona um elemento pela sua ordem dentro de outro elemento",
    doThis : "Seleciona o 3.º prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleciona o filho que está na posição <strong>n</strong> (ex.: 1.º, 3.º, 12.º, etc.) dentro de outro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona todos os elementos que são o 8.º filho de outro elemento.',
      '<strong>div p:nth-child(2)</strong> seleciona o segundo <strong>p</strong> de cada <strong>div</strong>',
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    `
  },
  {
    selectorName: "Pseudoclasse nth-last-child",
    helpTitle: "Seleciona um elemento pela sua ordem dentro de outro elemento, a contar do fim",
    doThis : "Seleciona o 1.º bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Seleciona os filhos a contar do fim do elemento pai. É como o nth-child, mas a contar de trás para a frente!",
    examples : [
      '<strong>:nth-last-child(2)</strong> seleciona todos os penúltimos elementos filhos.'
    ],
    boardMarkup: `
    <prato/>
    <bento/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <bento/>
    `
  },
  {
    selectorName: "Pseudoclasse first-of-type",
    helpTitle: "Seleciona o primeiro elemento de um determinado tipo",
    doThis : "Seleciona a primeira maçã",
    selector : "maca:first-of-type",
    syntax: ":first-of-type",
    help : "Seleciona o primeiro elemento desse tipo dentro de outro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> seleciona o primeiro <tag>span</tag> de qualquer elemento.'
    ],
    boardMarkup: `
    <laranja class="mini"/>
    <maca/>
    <maca class="mini"/>
    <maca/>
    <maca class="mini"/>
    <prato>
      <laranja class="mini"/>
      <laranja/>
    </prato>
    `
  },
  {
    selectorName: "Pseudoclasse nth-of-type",
    doThis: "Seleciona todos os pratos pares",
    selector: "prato:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Seleciona um elemento específico com base no tipo e na ordem dentro de outro elemento - ou as ocorrências pares (<strong>even</strong>) ou ímpares (<strong>odd</strong>) desse elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> seleciona a segunda ocorrência de um div.',
      '<strong>.exemplo:nth-of-type(odd)</strong> seleciona todas as ocorrências ímpares da classe exemplo.'
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    <prato/>
    `
  },
  {
    selectorName: "Pseudoclasse nth-of-type com fórmula",
    doThis: "Seleciona 1 em cada 2 pratos, a partir do 3.º",
    selector: "prato:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "A fórmula do nth-of-type seleciona um elemento em cada n, a começar a contagem numa ocorrência específica desse elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> seleciona um <tag>span</tag> em cada 6, a começar pela segunda ocorrência (inclusive).'
    ],
    boardMarkup : `
    <prato/>
    <prato>
      <pepino class="mini" />
    </prato>
    <prato>
      <maca class="mini" />
    </prato>
    <prato/>
    <prato>
      <maca />
    </prato>
    <prato/>
    `
  },
  {
    selectorName: "Pseudoclasse only-of-type",
    helpTitle: "Seleciona os elementos que são os únicos do seu tipo dentro do elemento pai",
    selector : "maca:only-of-type",
    syntax: ":only-of-type",
    doThis : "Seleciona a maçã no prato do meio",
    help : "Seleciona o único elemento do seu tipo dentro de outro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> seleciona um <tag>span</tag> dentro de qualquer <tag>p</tag> se for o único <tag>span</tag> lá dentro.'
    ],
    boardMarkup: `
    <prato id="chique">
      <maca class="mini" />
      <maca />
    </prato>
    <prato>
      <maca class="mini" />
    </prato>
    <prato>
      <pepino />
    </prato>
    `
  },
  {
    selectorName: "Pseudoclasse last-of-type",
    helpTitle: "Seleciona o último elemento de um determinado tipo",
    doThis : "Seleciona a última maçã e a última laranja",
    selector : ".mini:last-of-type",
    syntax: ":last-of-type",
    help : "Seleciona o último elemento de cada tipo dentro de outro elemento. Lembra-te de que o tipo é o nome da tag, por isso <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Será que foi assim que o último dinossauro foi selecionado antes de se extinguir?",
    examples : [
      '<strong>div:last-of-type</strong> seleciona o último <tag>div</tag> de cada elemento.',
      '<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> de cada <tag>p</tag>.'
    ],
    boardMarkup : `
    <laranja class="mini"/>
    <laranja class="mini" />
    <pepino />
    <pepino />
    <maca class="mini" />
    <maca class="mini" />
    `
  },
  {
    selectorName: "Pseudoclasse empty",
    helpTitle: "Seleciona elementos sem filhos",
    doThis : "Seleciona os bentos vazios",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Seleciona elementos que não têm outros elementos lá dentro.",
    examples : [
      '<strong>div:empty</strong> seleciona todos os elementos <tag>div</tag> vazios.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pepino class="mini"/>
    </bento>
    <prato/>
    <bento/>`
  },
  {
    selectorName: "Pseudoclasse de negação",
    helpTitle: "Seleciona todos os elementos que não correspondem ao seletor de negação",
    doThis : "Seleciona as maçãs grandes",
    selector : "maca:not(.mini)",
    syntax: ":not(X)",
    help : 'Podes usar isto para selecionar todos os elementos que não correspondem ao seletor <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#chique)</strong> seleciona todos os elementos que não têm <strong>id="chique"</strong>.',
      '<strong>div:not(:first-child)</strong> seleciona todos os <tag>div</tag> que não são primeiros filhos.',
      '<strong>:not(.grande, .medio)</strong> seleciona todos os elementos que não têm <strong>class="grande"</strong> nem <strong>class="medio"</strong>.'
    ],
    boardMarkup: `
    <prato id="chique">
      <maca class="mini" />
    </prato>
    <prato>
      <maca />
    </prato>
    <maca />
    <prato>
      <laranja class="mini" />
    </prato>
    <pepino class="mini" />
    `
  },
  {
    selectorName: "Seletor de atributo",
    helpTitle: "Seleciona todos os elementos que têm um determinado atributo",
    doThis : "Seleciona os itens para alguém",
    selector : "[para]",
    syntax: "[atributo]",
    help : 'Os atributos aparecem dentro da tag de abertura de um elemento, assim: <tag>span atributo="valor"</tag>. Um atributo nem sempre tem valor, pode estar em branco!',
    examples : [
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href="qualquer-coisa"</strong>.',
      '<strong>[type]</strong> seleciona todos os elementos que têm um atributo <strong>type="qualquer-coisa"</strong>.'
    ],
    boardMarkup:`
    <bento><maca class="mini"/></bento>
    <maca para="Duarte"/>
    <prato para="Alice"><pepino/></prato>
    <bento para="Clara"><laranja/></bento>
    <pepino/>`
  },
  {
    selectorName: "Seletor de atributo",
    helpTitle: "Seleciona todos os elementos que têm um determinado atributo",
    doThis : "Seleciona os pratos para alguém",
    selector : "prato[para]",
    syntax: "A[atributo]",
    help : "Combina o seletor de atributo com outro seletor (como o seletor de tipo) acrescentando-o no fim.",
    examples : [
      '<strong>[value]</strong> seleciona todos os elementos que têm um atributo <strong>value="qualquer-coisa"</strong>.',
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href="qualquer-coisa"</strong>.',
      '<strong>input[disabled]</strong> seleciona todos os elementos <tag>input</tag> com o atributo <strong>disabled</strong>'
    ],
    boardMarkup:`
    <prato para="Sara"><pepino/></prato>
    <prato para="Lucas"><maca/></prato>
    <prato/>
    <bento para="Tiago"><laranja/></bento>
    `
  },
  {
    selectorName: "Seletor de valor de atributo",
    helpTitle: "Seleciona todos os elementos que têm um determinado valor de atributo",
    doThis : "Seleciona a refeição da Rita",
    selector : "[para=Rita]",
    syntax: '[atributo="valor"]',
    help : "Os seletores de atributo distinguem maiúsculas de minúsculas: cada carácter tem de corresponder exatamente.",
    examples : [
      '<strong>input[type="checkbox"]</strong> seleciona todos os elementos input do tipo checkbox.'
    ],
    boardMarkup:`
    <maca para="Diogo" />
    <bento para="Marta"><maca /></bento>
    <bento para="Rita"><laranja/></bento>
    <pepino/>
    `
  },
  {
    selectorName: "Seletor de atributo que começa por",
    helpTitle: "Seleciona todos os elementos com um valor de atributo que começa por determinados caracteres",
    doThis : "Seleciona os itens para nomes que começam por 'Sa'",
    selector : '[para^="Sa"]',
    syntax: '[atributo^="valor"]',
    // help : "Podes pôr o valor entre aspas no seletor, ou não&mdash;é opcional!",
    examples : [
      '<strong>.brinquedo[categoria^="Nat"]</strong> seleciona elementos com a classe <strong>brinquedo</strong> e <strong>categoria="Natal"</strong> ou <strong>categoria="Natação"</strong>.'
    ],
    boardMarkup: `
    <prato para="Samuel"><pepino/></prato>
    <bento para="Sara"><maca class="mini"/></bento>
    <bento para="Maria"><laranja/></bento>
    `
  },
  {
    selectorName: "Seletor de atributo que termina em",
    helpTitle: "Seleciona todos os elementos com um valor de atributo que termina em determinados caracteres",
    doThis : "Seleciona os itens para nomes que terminam em 'ana'",
    selector : '[para$="ana"]',
    syntax: '[atributo$="valor"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleciona todos os elementos de imagem que mostram uma imagem <strong>.jpg</strong>.',
    ],
    boardMarkup:`
    <maca class="mini"/>
    <bento para="Joana"><pepino/></bento>
    <maca para="Adriano"></maca>
    <prato para="Susana"><laranja/></prato>
    <pepino class="mini"/>
    `
  },
  {
    selectorName: "Seletor de atributo que contém",
    helpTitle: "Seleciona todos os elementos com um valor de atributo que contém determinados caracteres em qualquer posição",
    syntax: '[atributo*="valor"]',
    doThis : "Seleciona as refeições para nomes com 'ar'",
    selector : '[para*="ar"]',
    help : 'Um seletor útil quando consegues identificar um padrão comum em atributos como <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/miniaturas/"]</strong> seleciona todos os elementos de imagem que mostram imagens da pasta "miniaturas".',
      '<strong>[class*="titulo"]</strong> seleciona todos os elementos com "titulo" na classe, como <strong>class="titulo-principal"</strong> e <strong>class="subtitulo"</strong>'
    ],
    boardMarkup:`
    <bento para="Carla"><maca /></bento>
    <bento para="Rui"><pepino /></bento>
    <bento para="Marta"><laranja /></bento>
    `
  }
];
