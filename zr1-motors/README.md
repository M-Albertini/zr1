# ZR1 Motors — Site institucional

Site estático (HTML + CSS + JS puro, sem build) pronto para publicar no **GitHub Pages**.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `zr1-motors`).
2. Copie **todo o conteúdo desta pasta** (incluindo o arquivo oculto `.nojekyll`) para a raiz do repositório.
3. Faça commit e push:
   ```bash
   git init
   git add .
   git commit -m "Site ZR1 Motors"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/zr1-motors.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings → Pages**.
5. Em "Build and deployment", escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
6. Salve. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/zr1-motors/`.

Não é necessário Node, build step ou qualquer instalação — é um site 100% estático.

## Estrutura de arquivos

```
index.html              → Página inicial
estoque.html             → Listagem de veículos com filtros
veiculo.html              → Ficha do veículo (usa ?id= do inventário)
vender-meu-carro.html     → Página "quero vender meu carro"
consignacao.html          → Página de consignação
financiamento.html        → Simulador de financiamento
avaliacao.html            → Formulário de avaliação (wizard em 4 etapas)
faq.html                  → Perguntas frequentes
privacidade.html          → Política de Privacidade / LGPD
partials/header.html      → Cabeçalho compartilhado (editado uma vez, aplicado em todas as páginas)
partials/footer.html      → Rodapé compartilhado
assets/css/style.css      → Sistema de design (cores, tipografia, componentes)
assets/js/inventory.js    → **Fonte única dos veículos** (edite aqui para add/remover carros)
assets/js/main.js         → Comportamento do site (menu, animações, formulários, FAQ)
sitemap.xml / robots.txt  → SEO técnico
```

## Como adicionar ou editar veículos

Abra `assets/js/inventory.js` e edite o array `ZR1_INVENTORY`. Cada objeto representa um carro — copie um bloco existente, ajuste os campos e salve. Todas as páginas (home, estoque, ficha do veículo) leem desse mesmo arquivo, então você edita em um único lugar.

Troque as URLs de `fotos` pelos links reais das fotos do veículo (hospede as imagens em `/assets/img/` ou em um serviço como Cloudinary/Imgur e cole a URL).

## Sobre os formulários

Como o GitHub Pages não executa backend/servidor, todos os formulários do site (venda, consignação, avaliação, proposta) foram construídos para **redirecionar a solicitação para o WhatsApp da loja** com os dados já preenchidos na mensagem — sem precisar de nenhum serviço externo.

Se preferir também receber os leads por e-mail ou em uma planilha, é possível conectar os formulários a um serviço gratuito como [Formspree](https://formspree.io) ou [Google Forms](https://forms.google.com) — normalmente basta trocar a URL de destino do `<form>`. Peça ajuda para essa integração quando quiser.

## Sobre o "painel administrativo"

O GitHub Pages hospeda apenas arquivos estáticos, então não é possível rodar um painel administrativo tradicional (com login e banco de dados) só com esses arquivos. Para isso, as opções mais simples são:

- **Edição direta** do `inventory.js` (mais simples, sem custo, ideal para o volume de estoque de uma revenda).
- Migrar para uma plataforma com backend (ex: Next.js + banco de dados, ou um CMS headless como Sanity/Contentful) quando o catálogo crescer e for necessário um painel visual de verdade.

## Trocar o número de WhatsApp

O número `5543999999999` aparece em vários arquivos (header, footer, formulários). Recomenda-se localizar e substituir esse valor em todos os arquivos `.html` pelo número real da loja antes de publicar.

## Performance e SEO

- Sem frameworks pesados — carregamento rápido por padrão.
- Imagens com `loading="lazy"`.
- Meta tags Open Graph e dados estruturados Schema.org (`AutoDealer`, `Article`, `FAQPage`) já incluídos.
- Troque as imagens placeholder (`placehold.co`) por fotos reais otimizadas (formato WebP, até ~200KB) para manter a performance alta no Google Lighthouse.
