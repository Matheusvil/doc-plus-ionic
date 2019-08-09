# Doc plus - IONIC
## Getting started
- Clonar projeto
	 - `git clone https://github.com/Matheusvil/doc-plus-ionic.git`
- Entrar na pasta do projeto
	- `cd doc-plus-ionic`
- se o git flow estiver instalado
	- `git flow init`
- Instalar dependências
	- `npm installl`
## Rodando no browser
`ionic serve`
## Rodando no mobile (android)
- `ionic cordova prepare android`
- `ionic cordova run android -l`
- mais informações aqui https://ionicframework.com/docs/building/android
## Criando features (GIT FLOW)
sempre que você for começar uma nova feature (pode ser uma tela, um provider, um componente..) você precisará seguir os seguintes passos:

- Iniciar uma nova feature
	`git flow feature start novaFeature`
- Quando quiser fazer o commit
	- `git add ./`
	- `git commit -m"mensagem do commit"`
- Quando terminar a feature
	- tenha certeza que deu commit nas alterações antes
	- `git flow feature finish novaFeature`
- Se der tudo certo você precisará subir as novas alterações
	- `git push`
- Caso não tenha dado certo vc terá que resolver os conflitos dar um commit e subir
