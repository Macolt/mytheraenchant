# Macolt Enchantment Simulator — Mythera


## Configurar itens

Edite `item-config.js`.

Cada item possui:
- `name`: nome exibido;
- `tier`: quantidade máxima de atributos/slots (1 a 5);
- `type`: tipo do item;
- `image`: caminho da imagem;
- `attributes`: lista de atributos possíveis exclusivamente daquele item;
- `levels`: T1, T2 e T3, cada um com `value` e `chance`.

O algoritmo de cada pedra é:
1. sorteia um atributo entre os atributos disponíveis;
2. sorteia T1/T2/T3 com 33,33% cada;
3. usa somente a chance daquele Tier para o roll de sucesso;
4. em caso de falha, consome a pedra e não adiciona atributo;
5. em caso de sucesso, o atributo ocupa um slot e não pode repetir.

## Imagens

Coloque as imagens dos itens em `assets/` e altere o campo `image` no `item-config.js`.

A tabela de minérios e seus valores também fica no `index.html`, no objeto `CONFIG`.

## Custos padrão

- 1 pedra = 7.500 ouro
- 1 pedra = 5 Dwarf Coins

Minérios:
- Copper = 1 DC
- Silver = 2 DC
- Gold = 5 DC
- Obsidian = 10 DC
- Hell = 20 DC


## Idiomas

O simulador possui seletor de idioma para **Português (Brasil)**, **English** e **Polski**. A preferência fica salva no navegador usando `localStorage`.

A tradução cobre a interface, mensagens, custos, estatísticas, fluxo e nomes padrão dos minérios/atributos conhecidos. **Nomes de itens e atributos personalizados no `item-config.js` continuam exatamente como você cadastrá-los**, para não alterar seus dados manualmente.
