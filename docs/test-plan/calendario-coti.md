# Plano de Teste  

**Sistema:** [Calendário – COTI Informática](https://www.cotiinformatica.com.br/calendario)  
**Versão:** 1.0.0 (release inicial)  
**Data:** 10/04/2026  
**Responsável:** QA Lead – *[Nome do QA Lead]*  

---  

## 1. Objetivo  

Garantir que o módulo **Calendário** da plataforma COTI Informática atenda aos requisitos funcionais e não‑funcionais, com foco na correta exibição das turmas de **Java** e **Front‑End**. O plano visa validar que:

* O calendário apresenta, no mínimo, **uma turma de Java**.  
* O calendário apresenta, no mínimo, **uma turma de Front‑End**.  

Além disso, será verificado o comportamento geral da página (acessibilidade, desempenho, segurança básica e compatibilidade).

---  

## 2. Escopo  

| **Incluído no Escopo** | **Descrição** |
|------------------------|---------------|
| Funcionalidade de listagem de turmas no calendário | Verificação da presença das turmas Java e Front‑End, bem como a correta exibição de informações (nome, data, horário, local, vagas). |
| Navegação e filtros | Testes de filtros por curso, data e modalidade. |
| Responsividade | Validação da renderização em dispositivos desktop, tablet e mobile. |
| Integração com API de cursos | Confirmação de que os dados são consumidos corretamente da API. |
| Requisitos de usabilidade e acessibilidade (WCAG 2.1 AA) | Verificação de contraste, navegação por teclado, leitores de tela. |
| Performance básica | Tempo de carregamento da página ≤ 3 s em conexão 3G. |
| Segurança superficial | Testes de injeção de script (XSS) nos campos de busca. |

| **Fora do Escopo** | **Descrição** |
|--------------------|---------------|
| Funcionalidades de cadastro/edição de turmas (não expostas ao usuário final). |
| Integração com sistemas externos que não impactam a visualização do calendário. |
| Testes de carga avançada (stress) e testes de penetração profunda. |

---  

## 3. Estratégia de Testes  

1. **Abordagem de Teste**  
   * **Teste de caixa preta** para validar requisitos funcionais.  
   * **Teste exploratório** para identificar comportamentos inesperados na UI.  
   * **Teste de regressão** automatizado (scripts Selenium/WebDriver) para garantir que correções não quebrem funcionalidades existentes.  

2. **Ferramentas**  
   * **Selenium WebDriver** (Chrome, Firefox, Edge) – automação de UI.  
   * **Postman** – validação de respostas da API de cursos.  
   * **JMeter** – medição de tempo de resposta (até 10 usuários simultâneos).  
   * **axe‑core** (integrado ao Cypress) – avaliação de acessibilidade.  
   * **Lighthouse** – análise de performance e SEO.  

3. **Critérios de Prioridade**  
   * **Alta** – Cenários críticos (presença das turmas Java/Front‑End, carregamento da página).  
   * **Média** – Responsividade, filtros, usabilidade.  
   * **Baixa** – Testes de compatibilidade com navegadores legados (IE11).  

4. **Gestão de Defeitos**  
   * Registro no **Jira** com fluxo: *Open → In Progress → Fixed → Verified → Closed*.  
   * SLA de correção:  
     * **Crítico** – 24 h.  
     * **Alto** – 48 h.  
     * **Médio** – 5 dias úteis.  
     * **Baixo** – 10 dias úteis.  

---  

## 4. Tipos de Teste  

| Tipo de Teste | Objetivo | Ferramenta(s) | Frequência |
|---------------|----------|---------------|------------|
| **Teste Funcional** | Verificar requisitos de negócio (presença das turmas). | Selenium, Postman | Cada build (CI). |
| **Teste de UI/UX** | Garantir consistência visual e usabilidade. | Cypress, axe‑core | Sprint 1 e regressão. |
| **Teste de Responsividade** | Confirmar layout em diferentes resoluções. | BrowserStack, Chrome DevTools | Sprint 1. |
| **Teste de Performance** | Avaliar tempo de carregamento e tempo de resposta da API. | Lighthouse, JMeter | Sprint 2. |
| **Teste de Segurança (Básico)** | Detectar vulnerabilidades simples (XSS, CSRF). | OWASP ZAP, manual | Sprint 2. |
| **Teste de Compatibilidade** | Verificar funcionamento nos principais navegadores. | BrowserStack | Sprint 1. |
| **Teste de Regressão Automatizado** | Assegurar que alterações não impactem funcionalidades existentes. | Selenium + CI (GitHub Actions) | Em cada commit que afete o módulo. |

---  

## 5. Ambiente de Teste  

| **Componente** | **Descrição** | **Versão/Configuração** |
|----------------|---------------|--------------------------|
| **Servidor Web** | Nginx (proxy reverso) | 1.24.0 |
| **Aplicação** | Front‑end Angular 15 | — |
| **API de Cursos** | Node.js/Express | 14.21.0 |
| **Banco de Dados** | PostgreSQL | 15.4 |
| **Ambiente** | Docker Compose (contêineres isolados) | — |
| **Navegadores** | Chrome 124, Firefox 124, Edge 124, Safari 17 | — |
| **Dispositivos** | Desktop (1920×1080), Tablet (768×1024), Mobile (375×667) | — |
| **Rede** | Simulação de 3G (Fast.com) e Wi‑Fi (100 Mbps) | — |
| **Ferramentas CI/CD** | GitHub Actions, SonarQube (qualidade de código) | — |

> **Observação:** O ambiente será provisionado via *Infrastructure as Code* (Terraform) para garantir reprodutibilidade.

---  

## 6. Critérios de Entrada  

| Item | Condição |
|------|----------|
| **Requisitos** | Documentação de requisitos aprovada e assinada pelo PO. |
| **Build** | Versão estável (tag `v1.0.0`) disponibilizada no repositório de artefatos. |
| **Ambiente** | Ambiente de teste configurado e validado (smoke test de conectividade). |
| **Dados de Teste** | Conjunto de dados de turmas (incluindo ao menos 1 turma Java e 1 turma Front‑End) inserido no banco de dados de teste. |
| **Ferramentas** | Licenças e credenciais das ferramentas de teste configuradas. |
| **Equipe** | QA Lead e analistas alocados e treinados nas ferramentas. |

---  

## 7. Critérios de Saída  

| Item | Condição |
|------|----------|
| **Cobertura de Testes** | ≥ 95 % dos casos de teste automatizados executados com sucesso. |
| **Defeitos Críticos** | Zero defeitos críticos ou altos abertos. |
| **Relatório de Performance** | Tempo médio de carregamento ≤ 3 s (3G) e API ≤ 500 ms. |
| **Acessibilidade** | Score ≥ 90 % no axe‑core (WCAG 2.1 AA). |
| **Documentação** | Todos os resultados, evidências (screenshots, logs) armazenados no Confluence. |
| **Aprovação** | Sign‑off do PO e do Gerente de Produto. |

---  

## 8. Riscos  

| Risco | Impacto | Probabilidade | Mitigação |
|-------|----------|----------------|-----------|
| **Dados de teste desatualizados** (turmas removidas da base) | Falha nos cenários críticos | Médio | Script de *seed* que garante a presença das turmas Java e Front‑End antes de cada execução. |
| **Instabilidade da API de cursos** | Testes de UI podem falhar por timeout | Alto | Mock da API em ambiente de teste; monitoramento de SLA da API. |
| **Alterações de layout não comunicadas** | Falhas nos testes de UI/UX | Médio | Reuniões de *design review* semanais; atualização automática dos testes de UI via *visual regression* (Applitools). |
| **Limitações de licença das ferramentas** | Bloqueio de execução de testes automatizados | Baixo | Contrato de licença renovado antecipadamente; alternativas open‑source (Cypress). |
| **Dependência de conexão externa (CDN)** | Tempo de carregamento acima do esperado | Baixo | Cache local configurado no ambiente de teste. |

---  

## 9. Cronograma  

| **Atividade** | **Responsável** | **Início** | **Término** | **Entregáveis** |
|---------------|----------------|------------|-------------|-----------------|
| Levantamento de requisitos e aprovação | PO / BA | 12/04/2026 | 14/04/2026 | Documento de Requisitos |
| Preparação do ambiente de teste (IaC) | DevOps | 15/04/2026 | 18/04/2026 | Scripts Terraform, ambiente provisionado |
| Criação de casos de teste (funcionais e não‑funcionais) | Analista QA | 19/04/2026 | 23/04/2026 | Plano de Teste detalhado, matriz de rastreabilidade |
| Desenvolvimento de scripts automatizados | Engenheiro de Automação | 24/04/2026 | 02/05/2026 | Repositório de testes (Selenium, Cypress) |
| Execução de testes de fumaça (smoke) | QA Lead | 03/05/2026 | 04/05/2026 | Relatório de Smoke |
| Execução completa de testes (funcionais, UI, performance, segurança) | Equipe QA | 05/05/2026 | 12/05/2026 | Relatórios de Teste, evidências |
| Análise de defeitos e reteste | QA + Dev | 13/05/2026 | 18/05/2026 | Lista de defeitos corrigidos |
| Revisão de resultados e sign‑off | PO / Gerente de Produto | 19/05/2026 | 20/05/2026 | Sign‑off final |
| Documentação final e entrega | QA Lead | 21/05/2026 | 22/05/2026 | Plano de Teste final, relatório de cobertura, lições aprendidas |

> **Observação:** O cronograma está alinhado ao sprint de duas semanas (Sprint 1: 12/04 – 25/04, Sprint 2: 26/04 – 09/05) e contempla margem de contingência de 10 % para imprevistos.

---  

### Anexos (opcional)

* **Matriz de Rastreabilidade** – Requisitos ↔ Casos de Teste.  
* **Script de Seed de Dados** – `seed_turmas.sql`.  
* **Checklist de Release** – validações pré‑deployment.  

---  

*Este Plano de Teste foi elaborado de acordo com as melhores práticas de QA e está sujeito a revisões conforme o andamento do projeto.*