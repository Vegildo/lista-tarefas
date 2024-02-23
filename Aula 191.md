    Aula 191 - Eslint e EditorConfig

      Instalar extensao, no vscode, editorConfig. Depois na raiz do projeto clicar no butão direito do mouse e depois clicar em regenerate editorconfig e depois configurá-lo.

      Eslint:
        ~npm i eslint @babel/eslint-parser --save-dev
        Instalar a extensão eslint By Microsoft
        ~npx eslint --init
        Perguntas serão feitas:
          √ How would you like to use ESLint? · style
          √ What type of modules does your project use? · esm
          √ Which framework does your project use? · react
          √ Does your project use TypeScript? · No / Yes
          √ Where does your code run? · browser
          √ How would you like to define a style for your project? · guide
          √ Which style guide do you want to follow? · airbnb
          √ What format do you want your config file to be in? · JavaScript
        Depois configure o arquivo criado .eslintrc.js
