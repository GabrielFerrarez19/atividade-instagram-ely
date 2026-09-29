# Atividade 012 – Instagram (React Native / Expo)

Recriação da tela de login e do feed do Instagram, feita para a disciplina de Desenvolvimento de Software para Dispositivos Móveis (Prof. Ely Prado).

## Como rodar

```bash
npm install
npx expo start      # escaneie o QR code com o app Expo Go
```

Para entrar, digite qualquer usuário e senha.

## Estrutura

| Arquivo | Parte da tela |
|---|---|
| `src/screens/Login.js` | Tela de login |
| `src/screens/Home.js` | Tela do feed: junta título, feed e menu |
| `src/components/titulo.js` | Logo do Instagram e os ícones (+, ♡, Messenger) |
| `src/components/stories.js` | Lista horizontal de stories |
| `src/components/story.js` | Um story (avatar com a borda colorida e o nome) |
| `src/components/foto.js` | Uma publicação (cabeçalho, foto, ações, curtidas e legenda) |
| `src/components/feed.js` | Lista de publicações, com os stories no topo |
| `src/components/menu.js` | Menu inferior (início, busca, reels, loja, perfil) |
| `src/data/dados.js` | Dados de exemplo dos stories e das publicações |
