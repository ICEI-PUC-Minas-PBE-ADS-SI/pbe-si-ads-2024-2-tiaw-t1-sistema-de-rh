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

Betim  
2024

---

## Sumário
1. Documentação de Contexto 3
   - Introdução 3
   - Problema 3
   - Objetivos 3
   - Justificativa 4
   - Público-alvo 5
2. Especificação do Projeto 6
   - Perfis de Usuários 6
   - Histórias de usuários 9
   - Requisitos do Projeto 10
     - Requisitos Funcionais 10
     - Requisitos não funcionais 11
3. Projeto de Interface 12
4. Metodologia 13
5. Referências Bibliográficas 16

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
O objetivo geral deste projeto é o desenvolvimento de uma solução de fácil uso que permita aos usuários a busca de vagas de emprego.

Como objetivos específicos, podemos destacar:
- Vagas personalizadas;
- Conectar empresas e candidatos em um local centralizado;
- Oferecer um ambiente de uso gratuito para apoiar os usuários em seu desenvolvimento profissional;
- Praticidade na busca de um emprego.

### Justificativa
De acordo com PAULUCCI, Leonardo Passos; DEL VECHIO, Gustavo Henrique. Em “A importância do ambiente digital para o relacionamento da marca com clientes: estudo de caso da Coca-Cola como um caso de sucesso”. Revista Interface Tecnológica, v. 15, n. 1, p. 51-62, 2018. "Tal ambiente digital mostra-se, assim, bastante propício para as empresas, de uma infinidade de segmentos, não apenas divulgarem suas marcas no universo on-line, mas também oferecerem produtos e serviços, bem como manterem uma relação estreita de conectividade com seu público."

Portanto, a criação de ambientes digitais para a resolução da carência de referências empregatícias é importante pela presença da internet na vida das pessoas, e os fins aos quais estes a utilizam. A internet permite que aqueles que buscam vagas de emprego acessem uma vasta quantidade de informações de diversas fontes e permite que os mesmos interajam com empregadores de grande, médio e pequeno porte.

Fóruns de discussão, atualizações sobre a empresa e principalmente, plataformas que realizam as devidas intermediações entre candidato e contratante de maneira colaborativa facilitam a troca de ideias e o compartilhamento de informações.

Como diz Geoffrey Moore: "As tecnologias que mudam o jogo não são aquelas que apenas melhoram o que já existe; elas mudam as regras do jogo."

### Público-alvo
Embora os desafios relacionados com a procura de emprego possam surgir em diferentes fases da vida, o foco deste trabalho está na população jovem com faixa etária entre 18 à 25 anos, cursando o ensino superior.

Portanto, esta solução é direcionada a homens e mulheres que enfrentam barreiras na transição para o mercado de trabalho. Além da necessidade de maior autonomia nas escolhas profissionais, esses indivíduos devem se adaptar rapidamente às demandas do mercado, e essas mudanças podem impactar na sua capacidade de se destacarem em suas aplicações.

Para entender melhor o público-alvo, foi criado um formulário do Google Forms para coletar informações de candidatos a emprego, incluindo trabalhadores em busca de novas oportunidades, aqueles que foram demitidos e profissionais mudando de carreira. Isso tornou possível identificar algumas características e ações que são comuns entre eles.

São elas:
1. Agitada gestão do tempo;
2. Uso intenso de tecnologia para fins de busca de emprego;
3. Busca por oportunidades melhores.

Vale ressaltar que o projeto não se limita às pessoas mencionadas acima, mas também a empresas interessadas em serem mentoras e desejam ajudar a orientar novos talentos para o mercado de trabalho.

---

## 2. Especificação do Projeto

### Perfis de Usuários

#### Perfil 01: Chef de Cozinha
**Descrição:** Chef de cozinha que busca um emprego fixo.

**Objetos e lugares:**  
Além do uniforme, ele utiliza facas, utensílios e equipamentos de alta qualidade, como fogões e fornos no trabalho. Mantendo consigo um caderno de anotações com as suas receitas favoritas, utilizadas na hora de seu processo criativo. No digital, ele usa seu celular para redes sociais e inspiração, e seu notebook para planejar cardápios e aprender novas tecnologias.

**Objetivos chave:**  
Seus principais objetivos são encontrar vagas compatíveis com sua formação em Gastronomia, principalmente em restaurantes focadas na culinária estrangeira. Ele precisa desse serviço para ganhar maior facilidade em um mercado tão competitivo, permitindo que ele tenha um contato direto com os restaurantes.

**Como devemos tratá-la:**  
Ele valoriza a praticidade, então o sistema deve ser intuitivo e de fácil navegação, com filtros que permitam encontrar rapidamente vagas alinhadas ao seu perfil. Além disso, fornecer recomendações de vagas personalizadas com base nas suas qualificações e preferências o fará sentir que o sistema entende suas necessidades. Receber uma notificação ou ver vagas recomendadas para ele é algo que o faz feliz.

**Nunca devemos:**  
Nunca devemos oferecer um sistema confuso, com erros constantes ou com promessas falsas, como vagas inexistentes. Isso é algo capaz de deixá-lo furioso. Ele valoriza a eficiência e a honestidade, logo não suporta qualquer coisa que o faça pensar que o serviço é ineficaz ou desperdiça seu tempo, deve ser evitada.

#### Perfil 02: Freelancer
**Descrição:** Deseja um emprego de Bartender.

**Objetos e lugares:**  
Um bartender precisa de uma coqueteleira, copo de bar, colher de barman, coador, medidor, abridor de garrafas, espremedor e balde de gelo para preparar os drinks no balcão. Além de conhecimento sobre bebidas, habilidades de serviço ao cliente, higiene, educação e treinamento para poder atender os clientes da melhor forma possível.

**Objetivos chave:**  
O principal objetivo de João é poder ser um bartender famoso, criar o seu próprio drink e se tornar famoso por isso. Ele precisa desse serviço para poder estar sempre inserido no mercado de trabalho, além de poder realizar seu sonho.

**Como devemos tratá-la:**  
João gosta de ser tratado com respeito e empatia, não gosta que as pessoas o desrespeitem. Um comportamento que deixa João feliz é quando falam que o drink estava bom; isso deixa ele feliz e confiante.

**Nunca devemos:**  
Não devemos fornecer um local de trabalho que não seja apropriado para seu trabalho. João gosta de trabalhar em um local limpo e organizado. Ele não suporta trabalhar com uma equipe onde as pessoas não têm responsabilidade com o trabalho.

#### Perfil 03: Estagiário
**Descrição:** Busca um estágio.

**Objetos e lugares:**  
Ele usa um computador para jogar Valorant, estudar e procurar estágios. Durante os jogos, ele usa um controle e fone de ouvido para uma melhor experiência. Matheus não sai do celular, utilizando diariamente para comunicação, mídia social e entretenimento. Digitalmente, ele tem instalado no seu computador softwares como o VS Code, Canvas e PowerPoint, utilizados para realizar as tarefas da faculdade.

**Objetivos chave:**  
O principal objetivo é facilitar a busca por oportunidades de estágio, principalmente na área de tecnologia e programação. Ele precisa desse serviço para ter acesso a várias opções de empresas que se adequem ao seu perfil, assim ele se sente mais seguro.

**Como devemos tratá-la:**  
Ele é uma pessoa que busca reconhecimento, e a maneira mais fácil de tratá-lo é mostrando que ele é um grande profissional e que vai conseguir um estágio. A forma de tratá-lo que mais o deixa feliz é ao mostrar oportunidades que sejam compatíveis com seus estudos e que também respeitem seu tempo livre.

**Nunca devemos:**  
Matheus não aceita sistemas que o façam perder tempo ou que não ofereçam as opções que ele precisa. Ele não suporta ser ignorado, e um atendimento ao cliente que não ofereça ajuda é um grande ponto negativo.

### Histórias de usuários

#### História de usuário 01: Chef de Cozinha
**Como** um chef de cozinha  
**Eu quero** encontrar oportunidades alinhadas à minha formação e interesse,  
**Para que** eu possa desenvolver minha carreira de forma contínua e atingir um bom patamar na profissão.

#### História de usuário 02: Freelancer
**Como** um bartender  
**Eu quero** uma plataforma que me ofereça as melhores oportunidades de trabalho,  
**Para que** eu possa atingir meu objetivo de ser um bartender famoso.

#### História de usuário 03: Estagiário
**Como** um estudante de tecnologia  
**Eu quero** uma forma prática de encontrar estágios na área,  
**Para que** eu possa evoluir na minha carreira e obter mais experiência.

### Requisitos do Projeto

#### Requisitos Funcionais
1. O sistema deve permitir que o usuário cadastre seu perfil com dados pessoais e profissionais.
2. O sistema deve oferecer uma interface para a pesquisa de vagas de emprego e estágios.
3. O sistema deve notificar o usuário sobre novas vagas que se encaixem no seu perfil.

#### Requisitos não funcionais
1. O sistema deve ter uma interface intuitiva, de fácil navegação.
2. O sistema deve garantir a privacidade e segurança dos dados dos usuários.

---

## 3. Projeto de Interface

O fluxograma apresentado na figura 1 mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Protótipo de baixa fidelidade que se segue.

![Texto alternativo](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-si-ads-2024-2-tiaw-t1-sistema-de-rh/blob/6412e2776aa95e8275ead2b2924f286c131d11c7/sec.jpeg)
### Figura 01 – User Flow

Protótipo de baixa fidelidade: As telas do sistema apresentam uma estrutura comum que é apresentada na figura 2. Nesta estrutura existem 3 grandes blocos, descritos a seguir:
- **Cabeçalho** - local onde estão dispostos o nome da aplicação web e navegação principal do site (menu da aplicação);
- **Conteúdo** - apresenta o conteúdo da tela em questão;
- **Rodapé** - apresenta informações sobre os direitos autorais.

![Texto alternativo](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-si-ads-2024-2-tiaw-t1-sistema-de-rh/blob/188e6cbcec42c3c1086134df8c7adf5901751b39/prime.jpeg)
### Figura 02 – Protótipo de baixa qualidade

## 4. Metodologia

A metodologia ágil escolhida para o desenvolvimento deste projeto foi o SCRUM, pois como citam Amaral, Fleury e Isoni (2019, p. 68), seus benefícios são a “visão clara dos resultados a entregar; ritmo e disciplina necessários à execução; definição de papéis e responsabilidades dos integrantes do projeto (Scrum Owner, Scrum Master e Team); empoderamento dos membros da equipe de projetos para atingir o desafio; conhecimento distribuído e compartilhado de forma colaborativa; ambiência favorável para crítica às ideias e não às pessoas.”

### Divisão de Papéis

Desta forma, a equipe está organizada da seguinte maneira:
- **Scrum Master**: Daniel Almeida
- **Product Owner**: Jhonata Dias
- **Equipe de Desenvolvimento**: Daniel Almeida, Jhonata Dias, Júlio Cesar, Kaio Gomes, Lucas Henrique, Otavio Castro
- **Equipe de Design**: Lucas Henrique, Júlio Cesar, Kaio Gomes.

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub, estruturado com as seguintes listas:
- **Product Backlog**: recebe as tarefas a serem trabalhadas e representa o Backlog do produto. Todas as atividades identificadas no decorrer do projeto são incorporadas a esta lista.
- **In progress**: lista das tarefas iniciadas.
- **In review**: lista das tarefas em revisão.
- **Done**: nesta lista são colocadas as tarefas finalizadas e as que passaram pelos testes e controle de qualidade, prontas para serem entregues aos usuários.

O quadro kanban do grupo no GitHub está disponível no link [GitHub Kanban](https://github.com/orgs/ICEI-PUCMinas-PBE-ADS-SI/projects/13) e é apresentado, no estado atual, na figura abaixo:

![Texto alternativo](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-si-ads-2024-2-tiaw-t1-sistema-de-rh/blob/404c0651b8ca093d1466421036a440ab2100a241/terc.jpeg)
### Figura 03 - Tela do kanban no GitHub utilizada pelo grupo

### Etiquetas

As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:
- **Bug** (Erro no código)
- **Desenvolvimento** (Development)
- **Documentação** (Documentation)
- **Testes** (Tests)

![Texto alternativo](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-si-ads-2024-2-tiaw-t1-sistema-de-rh/blob/501ff3736fb6a0552ee596c39e1080f5a39473e2/quart.jpeg)

###Figura 04 - Tela do esquema de cores e categorias

### Ferramentas

As ferramentas empregadas no projeto são:
- **Editor de código**
- **Ferramentas de comunicação**
- **Ferramentas de desenho de tela (wireframing)**

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Os artefatos do projeto são desenvolvidos a partir das plataformas GitHub e Canva, apresentadas com seu propósito na tabela que se segue.

### AMBIENTE PLATAFORM A
| **Repositório de código fonte** | **GitHub** | [Link de Acesso](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-siads-2024-2-tiaw-t1-sistema-derh/tree/19742c19a138d9f873f9323ed140d256166d3acc/codigo) |
|---------------------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| **Documentos do projeto**       | **GitHub** | [Link de Acesso](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-siads-2024-2-tiaw-t1-sistema-derh/tree/19742c19a138d9f873f9323ed140d256166d3acc/docs) |
| **Projeto de Interface**        | **Canva**  | [Link de Acesso](http://gg.gg/interface_projeto)                                                               |
| **Gerenciamento de Projeto**    | **GitHub** | [Link de Acesso](https://github.com/orgs/ICEI-PUC-Minas-PBE-ADS-SI/projects/13)                               |

---

## 5. Referências Bibliográficas
- LIMA, João; RODRIGUES, Maria. "Desafios e Oportunidades no Mercado de Trabalho". Editora Tal, 2018.
- PAULUCCI, Leonardo Passos; DEL VECHIO, Gustavo Henrique. "A importância do ambiente digital para o relacionamento da marca com clientes". Revista Interface Tecnológica, v. 15, n. 1, p. 51-62, 2018.
- SMITHSON, Janet; LEWIS, Suzan; GUERREIRO, Maria das Dores. "Percepções dos jovens sobre a insegurança no emprego". 1998.
