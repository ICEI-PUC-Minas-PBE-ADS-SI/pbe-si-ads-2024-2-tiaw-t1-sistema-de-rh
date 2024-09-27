## Perfis de Usuários

| Perfil            | Descrição                                    | Objetos e Lugares                                                                                                        | Objetivos Chave                                                                                                                                               | Como devemos tratá-lo                                                                                                                                         | Nunca devemos                                                                                                                         |
|-------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Chef de Cozinha    | Chef de cozinha que busca um emprego fixo    | Uniforme, facas, utensílios, fogões, fornos. Usa celular para redes sociais e notebook para planejar cardápios            | Encontrar vagas compatíveis com sua formação em Gastronomia, principalmente em restaurantes focados na culinária estrangeira                                    | Sistema intuitivo com filtros rápidos. Recomendações de vagas personalizadas o farão sentir que o sistema entende suas necessidades.                          | Nunca devemos oferecer um sistema confuso ou com vagas inexistentes. Ele valoriza a eficiência e a honestidade.                                                           |
| Freelancer         | Deseja um emprego de Bartender               | Coqueteleira, copo de bar, coador, medidor, abridor de garrafas, espremedor e balde de gelo                                | Tornar-se um bartender famoso, criar seu próprio drink e se destacar. Precisa do serviço para manter-se inserido no mercado de trabalho.                        | Tratá-lo com respeito e empatia. Ele se sente feliz quando recebe elogios sobre seus drinks.                                                                  | Nunca devemos fornecer um local de trabalho desorganizado. Ele não suporta trabalhar com uma equipe irresponsável.                                                       |
| Estagiário         | Busca um estágio                            | Computador para jogar, estudar e procurar estágios. Softwares como VS Code, Canvas e PowerPoint para tarefas acadêmicas.  | Facilitar a busca por estágios na área tecnológica, aumentando a visibilidade do perfil para recrutadores.                                                     | Nosso sistema deve economizar tempo e fornecer uma alta gama de oportunidades, personalizando o perfil para aumentar a visibilidade para recrutadores.         | Nunca devemos pressioná-lo ou negligenciar a comunicação com falta de feedback ou atualizações sobre candidaturas.                                                       |
| Empresa Contratante | Loja de Suplementos                         | Caixas digitais, máquinas de cartão, prateleiras, freezers para refrigerar bebidas de proteína. Usa Instagram e TikTok.    | Contratar bons funcionários para aumentar a produtividade da empresa.                                                                                          | Devemos fornecer um excelente trabalho, focando na satisfação dos clientes.                                                                                   | Nunca devemos desrespeitar clientes ou funcionários. Alta rotatividade e tentativas de roubo deixam a empresa furiosa.                                                     |

## Histórias de Usuários

| Eu como ...           | Quero/Desejo ...                                    | Para ...                                                                            |
|-----------------------|----------------------------------------------------|-------------------------------------------------------------------------------------|
| Usuário               | Criar um perfil profissional completo e detalhado  | Facilitar a visualização do meu currículo e aumentar minhas chances de ser notado.  |
| Usuário               | Enviar currículos personalizados para cada vaga    | Aumentar a eficácia das minhas candidaturas adaptando o currículo para a vaga.      |
| Usuário               | Receber notificações rápidas sobre novas vagas     | Não perder oportunidades importantes e ser um dos primeiros a aplicar.              |
| Usuário               | Receber recomendações de vagas relevantes ao perfil | Economizar tempo e aumentar as chances de encontrar o emprego certo.                |
| Usuário               | Conhecer avaliação e comentários da empresa        | Obter informações válidas para o meu futuro emprego.                                |
| Usuário               | Conseguir uma vaga para ganhar experiência          | Iniciar uma trajetória de carreira e desenvolver habilidades práticas.               |
| Empresa recrutadora   | Publicar vagas diretamente pelo sistema de RH      | Centralizar todas as minhas vagas em um único lugar.                                |
| Empresa recrutadora   | Acompanhar as interações dos candidatos             | Ajustar minhas estratégias de recrutamento.                                          |
| Empresa recrutadora   | Personalizar a página de divulgação de vagas        | Fortalecer a marca empregadora e atrair candidatos que se identifiquem com a empresa.|
| Empresa recrutadora   | Acessar perfis de candidatos                        | Buscar ativamente por candidatos adequados.                                          |
| Empresa recrutadora   | Ver o histórico de vagas publicadas                 | Avaliar a eficácia de anúncios e melhorar futuras divulgações.                       |
| Empresa recrutadora   | Criar uma conta na plataforma                       | Acessar todas as funcionalidades do sistema.                                         |

## Requisitos do Projeto

### Requisitos Funcionais

| ID     | Descrição                                                             | Prioridade |
|--------|------------------------------------------------------------------------|------------|
| RF-01  | O sistema deve permitir que o usuário faça o login                     | ALTA       |
| RF-02  | O sistema deve permitir que o usuário clique na opção "me interessei"   | ALTA       |
| RF-03  | O sistema deve permitir que o usuário filtre as opções                 | MÉDIA      |
| RF-04  | O sistema deve permitir que a empresa liste suas vagas de emprego      | ALTA       |
| RF-05  | O sistema deve permitir que o usuário informe suas habilidades         | MÉDIA      |
| RF-06  | O sistema deve permitir que o usuário monte seu currículo              | ALTA       |
| RF-07  | O sistema deve permitir que o usuário se comunique via chat            | BAIXA      |
| RF-08  | O sistema deve permitir que o usuário altere sua senha                 | BAIXA      |
| RF-09  | O sistema deve permitir que o usuário atualize suas informações pessoais | BAIXA      |
| RF-10  | O sistema deve permitir que o usuário veja notificações de vagas novas | BAIXA      |

**Prioridade: Alta / Média / Alta

### Requisitos Não Funcionais

| ID        | Descrição                                                                                             | Prioridade |
|-----------|-------------------------------------------------------------------------------------------------------|------------|
| RNF-01    | O tempo de resposta para operações críticas, como login, deve ser menor que 5 segundos.                | ALTA       |
| RNF-02    | A interface deve ser intuitiva, com uma curva de aprendizado acessível.                                | MÉDIA      |
| RNF-03    | Deve estar em conformidade com regulamentações, como LGPD ou GDPR.                                     | ALTA       |
| RNF-04    | Deve ser responsivo e funcionar em dispositivos móveis e desktops.                                     | ALTA       |
| RNF-05    | O código deve ser modular e seguir padrões de codificação para facilitar atualizações e manutenção.     | MÉDIA      |
| RNF-06    | Deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge).                     | ALTA       |

**Prioridade: Alta / Média / Alta
