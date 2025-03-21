## 📍Descrição do Desafio

Você precisará recriar as páginas do eCommerce (**dê um nome para o nosso eCommerce**), um site de compras de roupas e calçados, mantendo-se fiel ao seu design original usando:

HTML, CSS, Javascript + Typescript, React e Tailwind.

5.  Integração com API de CEP (uma das opções abaixo):

    1. Viacep: https://viacep.com.br/
    2. BrasilAPI: https://brasilapi.com.br/

    ## 📍Descrição dos requisitos

### ☕ Requisitos **OBRIGATÓRIOS**:

**Todas as Paginas devem ser responsivas.**

1. **Header**
   1. Deve aparecer em todas as paginas
   2. No topo deve aparecer uma oferta atrativa
   3. O header deve conter o logo com o nome do site (**escolha um nome**)
   4. Deve ter um menu com as seguintes opções
      1. Home → direciona para home
      2. Shop → direciona para lista de produtos
      3. About → direciona para pagina de informação sobre o desenvolvedor (você)
   5. Deve ter um icone de carrinho
      1. Quando tiver produtos no carrinho deve aparecer a quantidade de produtos no carrinho
   6. icon de perfil
      1. Quando o usuário não estiver logado, ao clicar, deve direcionar para pagina de login
      2. Quando o usuário estiver logado deve mostrar a foto de perfil, se não tiver a foto deve aparecer as iniciais do nome e sobrenome.
      3. Quando clicado deve direcionar para pagina de profile
2. **Footer**
   1. Deve aparecer em todas as paginas
   2. Deve ter uma sessão “Join Our newsletter”
      1. Deve ser possível adicionar um e-mail valido
         1. ao clicar em Subscribe deve enviar o e-mail para api.
            1. se o e-mail não for valido, mostrar uma mensagem de erro abaixo do campo
            2. quando o e-mail for salvo com sucesso deve mostrar uma mensagem de sucesso informando que o email foi cadastrado
            3. em caso de erro deve informar que não foi possível cadastrar o e-mail naquele momento.
   3. Deve ter uma sessão contendo
      1. logo e nome do site e descrição
      2. Opções de navegação onde
         1. About us → direciona para pagina de about
         2. My Account → direciona para pagina de profile
         3. Checkoutn → direciona para pagina de checkout
         4. Cart → direciona para pagina de Cart
         5. demais links deve direcionar para pagina 404 (implementação livre, seguindo o estilo do design)
   4. Deve ter uma sessão de copyright
      1. o ano deve ser sempre o atual.
3. **Home**
   1. O botão “View Collection” deve direcionar para pagina Shop.
   2. O botão “Start Browsing” deve direcionar para pagina Shop.
   3. Os produtos das sessões “Best Selling” e “On Offer” devem vir da API.
      1. Deve ter no máximo 4 produtos nessa sessão.
      2. Ao clicar nos produtos, deve direcionara para pagina Product e mostrar os detalhes do produto que foi clicado.
4. **Listing**
   1. Deve ter um breadcrumber “Ecommerce > Search”
   2. Dever ter um menu de filtros contendo:
      1. Categories:
         1. Aas categorias devem vir da api.
         2. Deve permitir apenas uma categoria selecionada
         3. Quando a categoria for selecionada deve filtrar na api pela categoria selecionada
      2. Price
         1. Deve ter um slider de preço de zero até o valor do produto que tem o preço mais alto na api (arredondar pra cima, ex. 697, 85 → 698,00)
         2. Quando selecionado deve buscar na API produtos com preços menores ou iguais ao valor informado.
      3. Quando os filtros forem aplicados deve mostrar o que está sendo filtrado em Applied Filters, em formato de tags
   3. Deve ter um campo de busca por nome do produto
      1. deve buscar na api produtos com parte do nome informado.
   4. Deve ter uma lista de produtos em formato de card
      1. cada card de produto deve ter
         1. imagem
         2. Nome
         3. In Stock ou No Stock
         4. preço
      2. Ao clicar no card deve direcionar para pagina de Produtos onde será exibido as informações do produto que foi clicado.
      3. Deve ter paginação mostrar 9 produtos por pagina
         1. o botão de proximo deve está desabilitado quando não tiver mais paginas disponíveis
         2. o botão de anterior deve está desabilitado quando estiver na pagina 1
5. **Product**
   1. deve ter um beadcrumber “Ecommerce > Black man t-shirt”
      1. o segundo item do breadcrumber deve ser o nome do produto
   2. deve ter um carrossel com as imagens do produto
      1. cada produto deve ter no máximo 4 imagens
   3. Deve ter mostrar o nome do produto
   4. Deve mostrar a pontuação de avaliações do produto
   5. Deve mostrar se o produto está em estoque ou não
   6. Deve mostrar as opções de cores do produto
      1. as opções devem ser dinâmicas:
         1. se o produto tiver apenas uma opção de cor, por padrão já deve ser selecionada
         2. se tiver mais de uma opção (no máximo 5) o usuário deve selecionar uma opção
   7. Deve mostrar as opções de tamanho do produto:
      1. as opções devem ser dinâmicas:
         1. se o produto tiver apenas uma opção de tamanho, por padrão já deve ser selecionada
         2. se tiver mais de uma opção (no máximo 5) o usuário deve selecionar uma opção
   8. Deve ter um campo para selecionar a quantidade, por padrão deve começar com 1 o usuário pode aumentar ou diminuir a quantidade, não deve ser menor que 1
   9. Deve ter um botão para adicionar ao carrinho.
      1. Caso as opções de cor e tamanho não estejam selecionadas deve mostrar uma mensagem abaixo do botão informando ao usuário que ele precisa seleciona cor e tamanho
   10. Deve ter uma sessão para mostrar a descrição do produto.
   11. Deve ter uma sessão para mostrar produtos relacionados:
       1. No máximo 4 produtos e devem vir da API
   12. Se o produto não estiver o em estoque não deve mostrar as opções de
       1. cor, produto e botão de adicionar ao carrinho
6. **Cart**
   1. **importante!** **Deve ser usado Redux ou Context API para gerenciar o estado do carrinho.**
   2. Deve ter um breadcrumber “Ecommerce > Cart”
   3. Deve mostrar a lista de produtos adicionados e cada item da lista deve ter
      1. a imagem do produto
      2. nome
      3. cor escolhida
      4. tamanho escolhido
      5. o preço
      6. quantidade
         1. deve ser possível alterar a quantidade para mais ou para menos não pode ser menor que 1
         2. deve ser possível remover esse item do carrinho
   4. Deve mostrar um preview da compra contendo:
      1. subtotal → total dos itens da lista, total → subtotal mais taxa de entrega.
         1. deve ser ajustado ao aumentar ou diminuir a quantidade ou remove produto da lista
      2. Shipping → tipo de entrega
      3. Tax → valor da taxa de entrega
      4. Deve ter um botão:
         1. Checkout → aparece quando o usuário está logado e direciona para pagina de checkout.
         2. Login to Checkout → aparece quando usuário não está logado e direciona para pagina de login.
      5. Deve ter um link “Continue Shopping” → deve direcionar para pagina de Shop.
7. **Authentication**
   1. **importante!** **Deve ser usado o Clerk como provedor de autenticação.**
   2. **Login**
      1. Deve ter as seguinte opções de login:
         1. Email e Senha
         2. Google
      2. Deve ter um botão de Login para logar com e-mail senha
      3. Deve ter um botão continue com google para logar com o google
      4. Deve ter um link para criar conta → direcionar para tela de criação de conta
      5. Deve ter um link para recuperar senha (opcional, apenas se fizer a tela de recuperar senha)
   3. **Sing up**
      1. Deve ser possível fazer cadastro com google
      2. Deve ser possível fazer cadastro com e-mail e senha
      3. Deve ter um link para direcionar para o login
8. **Checkout**
   1. Deve ter um beadcrumber “Ecommerce > checkout”
   2. Deve ter um formulário com os seguintes campos: Street Address, City, State, Zip Code, Country, Email e Full name
   3. Os campos Email e Full name, devem ficar desabilitados e preenchidos com as informações do usuário logado
   4. Caso o usuário preencha um Zip Code válido, deve ser consultado em uma api de CEP de maneira dinâmica, para que assim, seja preenchido os outros campos de endereço com as informações retornadas
   5. Deve haver um botão “Edit Cart” que retorna para página **Cart** caso seja clicado
   6. Deve aparecer as informações de Subtotal, Shipping, Tax (opcional) e Total. Todos calculados de acordo com os produtos adicionados no carrinho.
   7. Deve haver um botão “Place Order”, que quando clicado, realiza o checkout, registra na api a compra (que pode ser exibida na página **Profile [menu: Order]**), zera o carrinho e redireciona para a página **After Payment.** Esse Botão deve ficar desabilitado enquanto as informações de endereço não estejam preenchidas corretamente
   8. Caso o usuário acesse esta página sem está logado, deve ser redirecionado para página de login
   9. Caso o usuário acesse esta página e não tenha nenhum produto no carrinho, redirecionar para página de lista de produtos
9. **After Payment**
   1. Deve ter um beadcrumber “Ecommerce > Successful Order”
   2. Deve apresentar as mensagens como estão no protótipo do figma
   3. Deve haver um botão “Go to my account”, que quando clicado, redireciona para página **Profile (menu: Order)**
10. **Profile**
    1. Deve ter um beadcrumber “Ecommerce > My Account”
    2. Deve haver um menu com duas opções:
       1. Orders → lista os pedidos de compra, caso clique no botão “view item”, o usuário é redirecionado para página **Product**
       2. Account Detail → Deve aparecer o avatar do usuário, e os campos Full name e Email desabilitados com as informações preenchidas.
       3. Logout → desloga o usuário e retorna para a home
11. **About**
    1. Deve ter uma capa (você escolhe), sua foto, Seu nome, uma breve descrição sobre você e informações de contatos
12. **404**
    1. Implementação livre desde que siga o estilo do design do figma.
13. Observações importantes
    1. Lembre-se de exibir feedbacks visuais enquanto carrega informações da api: Shimmer effect, Skeleton, Spinners em botões, etc.
14. **~~AWS~~**
    1. ~~Deve ser realizado o deploy na AWS~~
    2. ~~As imagens devem está hospedadas na AWS S3~~
    3. ~~A apresentação deve ser realizada com o projeto online na AWS~~

[Opcionais]

1. Modo dark
2. Recuperar senha
3. Testes Automatizado (demonstrar na apresentação com 60% de cobertura)
