                Aula 189 - Criando um app com o React       
 
Criar um projeto React do zero de forma default :

    ~npx create-react-app <nome do app>

        ou

    ~npm init react-app <nome do app>

Scrips do react:

    ~npm start: inicia o projeto local
    ~npm run build: builda (cria uma build/bundle) o projeto, para deploy
    ~npm run test: abre test automatizado
    ~npm run eject: Remove as configuracoes implicitas, default, e ejeta para raiz do projeto. 

        OBS 0: https://blog.logrocket.com/everything-you-need-know-about-react-scripts/

        OBS 1: Se você fizer isso, terá que garantir que as dependências estejam instaladas antes de construir seu projeto package.json

        OBS 2: Após executar o npm run eject, não será possível executá-lo novamente, pois todos os scripts estarão disponíveis, exceto aquele npm run eject.

        OBS 3: Use este comando somente se for necessário. Caso contrário, mantenha a configuração padrão. É melhor, de qualquer maneira.

        OBS 4: Criar um Fork react-scripts é uma idéia melhor para fazer uma configuração personalizada mas reutilizável do aplicativo React (APRENDER A CRIAR UM PADRAO E DAR FORK)

        Você pode usar um módulo react-scripts bifurcado (Fork) com o seguinte comando:
        ~npx create-react-app <Nome do projeto> --<Versão do scripts> react-scripts-fork