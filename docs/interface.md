## 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nas seções a seguir constarão as especificações detalhadas dos requisitos propostos para o Software.

## 3.1 Objetivos deste documento

Descrever e especificar as necessidades dos usuários do projeto de Educação Financeira no site intitulado Solute.


## 3.2 Escopo do produto

3.2.1 Nome do produto e seus componentes principais

O produto será um sistema voltado para a Educação Financeira chamado Solute. Será composto por três componentes (módulos), sendo eles: sugestão de conteúdo, simuladores para testes e perguntas frequentes.


3.2.2 Missão do produto

Fornecer uma plataforma educativa que possa entregar uma experiência completa e eficiente no ensino de conceitos básicos de Educação Financeira aos usuários, usando os componentes supracitados.


3.2.3 Limites do produto

A plataforma Solute não oferece cursos de nenhum tipo e assinaturas. Não fornece, também, atendimento via WhatsApp ou telefone e não fornece o serviço de carteira digital ou qualquer um que venha envolver dinheiro do usuário.


3.2.4 Benefícios do produto

|## Benefício   |   Valor para o Cliente      |
|-------------  | --------------------------- |
1 Facilidade de uso |                                                        Essencial
2 Precisão nos resultados dos simuladores |                                  Essencial
3 Qualidade dos conteúdos disponibilizados |                                 Essencial
4 Melhoria na comunicação com os usuários via e-mail e redes sociais |       Essencial





## 3.3 Descrição geral do produto

3.3.1 Requisitos Funcionais

Código| Funcionalidade | Descrição |
|---- | -------------- | --------- |
RF1 | O Administrador deve Gerenciar Comentários na Página de Artigos | Processamento de exclusão de comentários pelo Administrador em caso de comentários impróprios. |
RF2 | O Administrador deve gerenciar a Página de Recomendações de Livros | Gerenciamento da página de Recomendações de Livros pelo Administrador para incluir recomendações novas e excluir antigas.|
RF3 | O Administrador deve gerenciar a Página de Recomendações de Podcasts | Gerenciamento da página de Recomendações de Podcasts pelo Administrador para incluir recomendações novas e excluir antigas. |
RF4 | O Administrador deve gerenciar a Página de Recomendações de Vídeos | Gerenciamento da página de Recomendações de Vídeos pelo Administrador para incluir recomendações novas e excluir antigas. |
RF5 | O criador de conteúdo vai captar tendências sobre o assunto | Captar tendências sobre o assunto, está relacionado ao gerenciamento do conteúdo do site, onde o criador de conteúdo vai passar as tendências para o administrador implementar no site. |
RF6 | O Usuário deve simular a Capitalização | Ferramenta interativa que permite ao usuário calcular quanto deve investir ou em quanto tempo vai pagar um empréstimo. |
RF7 | O Usuário deve simular o Planejamento de Gastos | Ferramenta interativa que permite ao usuário simular um planejamento de gastos a partir do seu rendimento mensal. |
RF8 | O Administrador deve atualizar a  Cotação de Moedas | Manter a barra de rolagem com as cotações das principais moedas atualizadas em tempo real. |
RF9 | O Administrador deve gerenciar as FAQ (Perguntas Frequentes) | Processamento de manter atualizado pelo a Administrador a página de FAQ com as perguntas atuais mais frequentes. |
RF10 | O Criador de Conteúdos deve gerenciar publicações de artigos | Editar artigos já postados, incluir artigos novos e excluir antigos. |
RF11 | O Administrador deve gerenciar links de   notícias para sugestão | Redirecionar o usuário para os sites de notícias sugeridos e renovar os links de notícias ao longo do tempo.|
RF12 | O Administrador deve Gerar relatórios de acessos | Gerar um relatório constando o número de acessos ao site, no período de um dia, para o administrador. |
RF13 | O Usuário deve simular a Reserva de Emergência | Ferramenta interativa que permite ao usuário simular um planejamento  de reserva a partir de um percentual mensal a ser guardado durante determinado tempo. |


3.3.1 Requisitos Não Funcionais

Código | Restrição | Descrição |
|------| --------- | --------- |
RNF1 | Ambiente |O sistema estará disponível apenas em endereço WEB |
RNF2 | Compatibilidade | O sistema apresentará design responsivo |
RNF3 | Disponibilidade | Assegurar que o site esteja disponível o máximo de tempo possível, minimizando o tempo de inatividade planejado para manutenção.|

3.3.2 Usuários 

 Descrição 
| # | Ator | Definição | 
|---|------|  --------- |
1 | Administrador da aplicação | Usuário responsável pela manutenção do site. Possui acesso geral a aplicação. |
2 | Usuários | Adolescentes, jovens, adultos e idosos que acessam o site como forma de adquirir conhecimento. |
3 | Criador de conteúdo | Usuário responsável por atualizar as mídias e postagens do site. |


3.4 Modelagem do Sistema

3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, o usuário pode usar os simuladores de reserva de emergências, capitalização e planejamento de gastos. O administrador deve fazer o gerenciamento do site,  das páginas de conteúdo, atualização da cotação de moedas, FAQ, e links de notícias. Já o criador de conteúdo, gerencia a página de artigos, criando os textos e ainda capta tendências sobre o assunto de Educação Financeira.


Figura 1: Diagrama de Casos de Uso do Sistema.

![diagrama csi de uso](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/ab005fcc-00f1-47bf-b663-6e03970f575a)


3.4.2 Descrições de Casos de Uso

![DCU 1](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/d1dc1b02-6604-41eb-ba8c-11faf54dd94b)
![DCU 2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/94515af7-1bdb-4fde-8e4c-dcdf434e79a2)
![DCU 3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/802325b8-721e-4a54-b2be-5cba1322c2a6)
![DCU 4](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/3d3dbc55-ec42-4ffa-a52c-47e88785691f)
![DCU 5 E 6](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/171b3319-8fa5-4e73-98be-9ace0d9bca63)
![DCU 6 7 E 8](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/be61a534-a4cb-45f3-8323-abb187b50f39)
![DCU 8 E 9](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/ca1c38a4-68dc-46d7-85ec-b54afbf7a863)
![DCU 9 E 10](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/96d26b7e-795d-4f44-9b11-56dace0cab7a)


3.4.3 Diagrama de Classes 
A Figura 2 mostra o diagrama de classes do sistema de Educação Financeira.
Para o usuário, há a possibilidade de consultar o conteúdo do site, simuladores, FAQ e artigos. O administrador deve ter registrado o nome, CPF, email e endereço, e ele pode atualizar a cotação das moedas e monitorar dados. O criador de conteúdo é uma herança de administrador e além de possuir suas propriedades, ele pode criar e excluir artigos. A classe gerenciar está ligada ao administrador e usuário e tem a função de gerenciar todas as páginas e gerar relatórios de acesso. Todas as classes que representam páginas possuem um endereço web e um id e, à exceção de simuladores, que possuem métodos para fazer as simulações, há métodos de visualização.


## Figura 2: Diagrama de Classes do Sistema.

![DSC](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-e3-proj-dcu-t1-educacao_financeira/assets/113143021/a3003014-ba9c-4182-b402-e36f4ba9c683)

