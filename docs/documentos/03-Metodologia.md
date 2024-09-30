# Sistema de RH

## Equipe do projeto:
- Daniel Almeida Espindola
- Jhonata Oscar do Carmo
- Júlio Cesar Matos
- Kaio Eduardo Gomes
- Lucas Henrique de Jesus Souza
- Otavio Nascimento de Castro

## Professor Tutor:
- Clóvis Lemos Tavares

**Betim, 2024**

---

## Sumário
1. [Documentação de Contexto](#documentação-de-contexto)
   - [Introdução](#introdução)
   - [Problema](#problema)
   - [Objetivos](#objetivos)
   - [Justificativa](#justificativa)
   - [Público-alvo](#público-alvo)
2. [Especificação do Projeto](#especificação-do-projeto)
   - [Perfis de Usuários](#perfis-de-usuários)
   - [Histórias de usuários](#histórias-de-usuários)
   - [Requisitos do Projeto](#requisitos-do-projeto)
     - [Requisitos Funcionais](#requisitos-funcionais)
     - [Requisitos não funcionais](#requisitos-não-funcionais)
3. [Projeto de Interface](#projeto-de-interface)
4. [Metodologia](#metodologia)
5. [Referências Bibliográficas](#referências-bibliográficas)

---

## 1. Documentação de Contexto

### Introdução
Entrar no mercado de trabalho ou encontrar novas oportunidades profissionais é um grande desafio, independente da década em que esteja. Segundo Lima e Rodrigues (2018, p. 107), a competitividade no local de trabalho com regularidade e mudanças contínuas obriga os profissionais a se adaptarem continuamente às novidades das ofertas.

Algumas das dificuldades mais comuns são as seguintes: falta de recursos e orientação adequada para encontrar vagas que apliquem as habilidades e objetivos dos candidatos. Muitas vezes, para aqueles que acabaram de começar a carreira, além de qualquer profissional em transição ou alguém que procura um novo emprego, as expectativas do mercado sobre as oportunidades que os colocarão em um emprego são de fato um grande desafio.

Portanto, sistemas de intermediação viáveis entre candidatos e empresas são importantes para facilitar a correspondência de habilidades com as vagas.

### Problema
O problema que se apresenta, e que este projeto visa abordar, é a carência de suporte enfrentada pela população, principalmente a mais jovem na busca de empregos, segundo os dados retirados do artigo SMITHSON, Janet; LEWIS, Suzan; GUERREIRO, Maria das Dores. Percepções dos jovens sobre a insegurança no emprego e suas implicações no trabalho e na vida familiar. 1998.

A taxa de desemprego entre os jovens é geralmente bem maior do que a verificada para o total da população economicamente ativa. No caso específico do Brasil, a situação dos jovens não é diferente. Considerando o período de janeiro de 2006 até dezembro de 2012, a taxa de desemprego registrada para as seis principais regiões metropolitanas brasileiras foi de 7,28%. Enquanto entre os indivíduos na faixa etária de 25 até 65 anos, 5,13% se encontram desempregados, para os jovens com idade entre 15 e 24 anos a taxa de desemprego era de 16,22%.

Nota-se, portanto, a necessidade de reverter esse cenário de desemprego no Brasil. Para tal, é fulcral levar em consideração que a ausência de uma plataforma que disponibiliza vagas mais personalizadas e faz a intermediação entre empresa e candidato pode resultar em dificuldades na hora de se ingressar no mercado de trabalho.

### Objetivos
O objetivo geral deste projeto é o desenvolvimento de uma solução de fácil uso que permita aos usuários a busca de vagas de emprego. Como objetivos específicos, podemos destacar:
- Vagas personalizadas;
- Conectar empresas e candidatos em um local centralizado;
- Oferecer um ambiente de uso gratuito para apoiar os usuários em seu desenvolvimento profissional;
- Praticidade na busca de um emprego.

### Justificativa
De acordo PAULUCCI, Leonardo Passos; DEL VECHIO, Gustavo Henrique. Em “A importância do ambiente digital para o relacionamento da marca com clientes: estudo de caso da coca-cola como um caso de sucesso”. Revista Interface Tecnológica, v. 15, n. 1, p. 51-62, 2018.

"Tal, ambiente digital mostra-se, assim, bastante propício para as empresas, de uma infinidade de segmentos, não apenas divulgarem suas marcas no universo on-line, mas também oferecerem produtos e serviços bem como manterem uma relação estreita de conectividade com seu público."

Portanto, a criação de ambientes digitais para a resolução da carência de referências empregatícias é importante pela presença da internet na vida das pessoas, e os fins aos quais estes a utilizam. A internet permite que aqueles que buscam vagas de emprego acessem uma vasta quantidade de informações de diversas fontes e permite que os mesmos interajam com empregadores de grande, médio e pequeno porte.

Fóruns de discussão, atualizações sobre a empresa e principalmente, plataformas que realizam as devidas intermediações entre candidato e contratante de maneira colaborativa facilitam a troca de ideias e o compartilhamento de informações.

Como diz Geoffrey Moore: "As tecnologias que mudam o jogo não são aquelas que apenas melhoram o que já existe; elas mudam as regras do jogo."

### Público-alvo
Embora os desafios relacionados com a procura de emprego possam surgir em diferentes fases da vida, o foco deste trabalho está na população jovem com faixa etária entre 18 à 25 anos, cursando o ensino superior.

Portanto, esta solução é direcionada a homens e mulheres que enfrentam barreiras na transição para o mercado de trabalho. Além da necessidade de maior autonomia nas escolhas profissionais, esses indivíduos devem se adaptar rapidamente às demandas do mercado, e essas mudanças podem impactar na sua capacidade de se destacarem em suas aplicações.

Para entender melhor o público-alvo, foi criado um formulário do Google Forms para coletar informações de candidatos a emprego, incluindo trabalhadores em busca de novas oportunidades, aqueles que foram demitidos e profissionais mudando de carreira. Isso tornou possível identificar algumas características e ações que são comuns entre eles. São elas:
1. Agitada gestão do tempo;
2. Uso intenso de tecnologia para fins de busca de emprego;
3. Busca por oportunidades melhores.

Vale ressaltar que o projeto não se limita às pessoas mencionadas acima, mas também a empresas interessadas em serem mentoras e desejam ajudar a orientar novos talentos para o mercado de trabalho.

---

## 2. Especificação do Projeto

### Perfis de Usuários
#### Perfil 01: Chef de Cozinha
**Descrição:** Chef de cozinha que busca um emprego fixo.

**Objetos e Lugares:** Além do uniforme, ele utiliza facas, utensílios e equipamentos de alta qualidade, como fogões e fornos no trabalho. Mantendo consigo um caderno de anotações com as suas receitas favoritas, utilizadas na hora de seu processo criativo. No digital, ele usa seu celular para redes sociais e inspiração, e seu notebook para planejar cardápios e aprender novas tecnologias.

**Objetivos Chave:** Seus principais objetivos são encontrar vagas compatíveis com sua formação em Gastronomia, principalmente em restaurantes focados na culinária estrangeira. Ele precisa desse serviço para ganhar maior facilidade em um mercado tão competitivo, permitindo que ele tenha um contato direto com os restaurantes.

**Como Devemos Tratá-la:** Ele valoriza a praticidade, então o sistema deve ser intuitivo e de fácil navegação, com filtros que permitam encontrar rapidamente vagas alinhadas ao seu perfil. Além disso, fornecer recomendações de vagas personalizadas com base nas suas qualificações e preferências o fará sentir que o sistema entende suas necessidades; receber uma notificação ou então ver vagas recomendadas para ele é algo que o faz feliz.

**Nunca Devemos:** Nunca devemos oferecer um sistema confuso, com erros constantes ou com promessas falsas, como vagas inexistentes. Isso é algo capaz de deixá-lo furioso. Ele valoriza a eficiência e a honestidade, logo não suporta qualquer coisa que o faça pensar que o serviço é ineficaz ou desperdiça seu tempo.

#### Perfil 02: Freelancer
**Descrição:** Deseja um emprego de Bartender.

**Objetos e Lugares:** Um bartender precisa de uma coqueteleira, copo de bar, colher de barman, coador, medidor, abridor de garrafas, espremedor e balde de gelo para preparar os drinks no balcão. Além de conhecimento sobre bebidas, habilidades de serviço ao cliente, higiene, educação e treinamento para atender os clientes da melhor forma possível.

**Objetivos Chave:** O principal objetivo de João é poder ser um bartender famoso, criar o seu próprio drink e se tornar famoso por isso. Ele precisa desse serviço para estar sempre inserido no mercado de trabalho, além de realizar seu sonho.

**Como Devemos Tratá-la:** João gosta de ser tratado com respeito e empatia, e não gosta que as pessoas o desrespeitem. Um comportamento que deixa João feliz é quando falam que o drink estava bom, isso o deixa feliz e confiante.

**Nunca Devemos:** Não devemos fornecer um local de trabalho que não seja apropriado para seu trabalho. João gosta de trabalhar em um local limpo e organizado e não suporta trabalhar com uma equipe onde as pessoas não têm responsabilidade com o trabalho.

#### Perfil 03: Estagiário
**Descrição:** Busca um estágio.

**Objetos e Lugares:** Ele usa um computador para jogar Valorant, estudar e procurar estágios. Durante os jogos, ele busca informações na internet sobre o mercado de trabalho. Em casa, ele tem o auxílio dos pais e amigos. Ele também pode fazer uso de um telefone, computador e videogame.

**Objetivos Chave:** A principal meta do estagiário é desenvolver suas habilidades em um ambiente profissional. Para ele, o estágio deve ser um divisor de águas em sua carreira, onde o mesmo possa adquirir experiências práticas em sua área de atuação.

**Como Devemos Tratá-la:** É importante que a plataforma mostre transparência sobre as ofertas, permitindo que o estagiário saiba como funciona a dinâmica do estágio e o que é esperado dele. Deve haver clareza nas informações sobre as empresas e as vagas disponíveis, para que se sinta mais seguro ao se inscrever.

**Nunca Devemos:** Não devemos fazer promessas de estágios com exigências excessivas ou condições que não sejam favoráveis ao estagiário. Isso só trará frustração e desconfiança.

### Histórias de usuários
1. **Maria, 22 anos**: Cansada de enviar currículos e nunca receber resposta, ela decide usar a plataforma, onde encontra uma vaga que combina com suas habilidades e é contatada em menos de uma semana.
   
2. **Carlos, 19 anos**: Recém-formado, Carlos se cadastra na plataforma e, após uma semana, consegue uma entrevista para o estágio dos seus sonhos.

3. **João, 25 anos**: Depois de ser demitido, João utiliza a plataforma e encontra uma nova oportunidade que se encaixa perfeitamente nas suas expectativas salariais e de horário.

### Requisitos do Projeto
#### Requisitos Funcionais
- O sistema deve permitir o cadastro de empresas e candidatos.
- O sistema deve oferecer um mecanismo de busca para as vagas disponíveis.
- O sistema deve enviar notificações para candidatos quando surgirem novas vagas que se encaixem no perfil.

#### Requisitos não funcionais
- O sistema deve ser seguro e proteger as informações dos usuários.
- O sistema deve ser responsivo, funcionando em dispositivos móveis e desktop.
- O sistema deve ter uma interface amigável e intuitiva.

---

## 3. Projeto de Interface
*(Aqui devem ser incluídas as telas do projeto)*

---

## 4. Metodologia
*(Aqui deve ser incluída a descrição da metodologia utilizada)*

---

## 5. Referências Bibliográficas
- Lima, J. P., & Rodrigues, A. R. (2018). *Gestão de Recursos Humanos: Desafios e Oportunidades*. Editora XYZ.
- PAULUCCI, L. P., & DEL VECHIO, G. H. (2018). A importância do ambiente digital para o relacionamento da marca com clientes: estudo de caso da coca-cola como um caso de sucesso. Revista Interface Tecnológica, v. 15, n. 1, p. 51-62.
- SMITHSON, J., LEWIS, S., & GUERREIRO, M. D. (1998). Percepções dos jovens sobre a insegurança no emprego e suas implicações no trabalho e na vida familiar.

