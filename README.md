# CSS Diner em português

Um jogo para aprender e praticar seletores CSS, em português de Portugal.

É uma adaptação do [CSS Diner](https://github.com/flukeout/css-diner), criado por [@flukeout](https://twitter.com/flukeout).

## Usar em aula

- Não é preciso criar conta. O progresso fica guardado no browser de cada aluno.
- O jogo não recolhe estatísticas. O único serviço externo que usa é o Google Fonts.
- Em computadores partilhados, usa **Reiniciar progresso**, no fundo do menu de níveis.
- Escrever um número no editor salta para esse nível (por exemplo, `5`).
- As respostas de cada nível estão no campo `selector` de [js/levels.js](js/levels.js).
- Os alunos devem escrever só o seletor pedido: `prato` funciona, mas `.mesa prato` não é aceite, embora seja CSS válido. O original comporta-se da mesma forma.

## O que mudou em relação ao original

Além dos textos, foram traduzidos os nomes que os alunos escrevem:

| Original | Em português |
| --- | --- |
| `plate` | `prato` |
| `apple` | `maca` |
| `orange` | `laranja` |
| `pickle` | `pepino` |
| `.small` | `.mini` |
| `#fancy` | `#chique` |
| `for` | `para` |
| `.table` | `.mesa` |

`bento` mantém-se. As palavras do próprio CSS e do HTML real (`:first-child`, `even`, `div`, `href`) continuam em inglês.

Dois nomes têm uma razão técnica:

- `maca` não tem acentos porque o jQuery usado pelo jogo não processa corretamente tags com acentos.
- `.mini` não tem género porque a mesma classe se aplica à maçã, à laranja e ao pepino.

Outras alterações:

- O Google Analytics foi removido, porque enviava dados para a conta do autor original.
- **Reiniciar progresso** passou a apagar mesmo o progresso.
- Os botões de partilha apontam para o endereço onde o jogo estiver publicado.
- O `jquery-mousewheel` passou a estar no projeto. Antes vinha de um CDN e, se este estivesse bloqueado, a roda do rato deixava de funcionar.

## Experimentar no computador

```sh
python3 -m http.server 8000
```

Depois abre <http://localhost:8000>.

## Publicar no Vercel

O projeto não precisa de compilação e o `vercel.json` já o indica.

```sh
npx vercel          # da primeira vez: inicia sessão e cria o projeto
npx vercel --prod   # publica no endereço final
```

Em alternativa, coloca o projeto num repositório do GitHub e importa-o em <https://vercel.com/new>.

Depois de saberes o endereço final, troca o valor de `og:image` no `index.html` pelo endereço completo da imagem (por exemplo, `https://o-teu-projeto.vercel.app/images/fb-share.jpg`) e publica outra vez. Sem isto, a pré-visualização do link pode não aparecer nalgumas aplicações.

## Agradecimentos do projeto original

- [@k88hudson](https://twitter.com/k88hudson)
- [@antlam](http://www.twitter.com/antlam)
- [@smashman2004](https://twitter.com/smashman2004)

## Licença

[Mozilla Public License 2.0](LICENSE), a mesma do projeto original. O ficheiro `LICENSE` deve ser mantido em qualquer publicação.
