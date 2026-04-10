# Plano de Teste  

**Projeto:** Saucedemo – Aplicação Web de E‑commerce (https://www.saucedemo.com/)  
**Versão:** 1.0.0  
**Data:** 10/04/2026  
**Responsável:** QA Lead – *[Nome do QA Lead]*  

---  

## 1. Objetivo  

Garantir que as funcionalidades de autenticação da aplicação **Saucedemo** atendam aos requisitos de negócio e de qualidade, assegurando que:

* Usuários válidos consigam efetuar login com sucesso.  
* Usuários com credenciais inválidas recebam mensagens de erro adequadas.  
* Os campos obrigatórios (username e password) sejam validados corretamente, impedindo o envio de formulários incompletos.  

O plano de teste tem como meta identificar defeitos de funcionalidade, usabilidade e segurança nas áreas de login antes da liberação para produção.

---

## 2. Escopo  

| **Incluído** | **Excluído** |
|--------------|--------------|
| • Testes funcionais de login (cenários 1, 2 e 3).<br>• Validação de mensagens de erro.<br>• Verificação de requisitos de UI (ex.: presença de placeholders, estado disabled do botão).<br>• Testes de compatibilidade em navegadores suportados (Chrome, Firefox, Edge). | • Fluxos pós‑login (checkout, carrinho, etc.).<br>• Testes de performance e carga.<br>• Testes de API que não estejam diretamente ligados à tela de login.<br>• Testes de acessibilidade avançada (WCAG). |

---

## 3. Estratégia de Testes  

1. **Abordagem:**  
   * **Teste de caixa preta** – baseado nos requisitos funcionais e nas histórias de usuário.  
   * **Teste exploratório** – para descobrir comportamentos inesperados nas telas de login.  

2. **Níveis de teste:**  
   * **Teste de Unidade** – já coberto pelos desenvolvedores (não incluído neste plano).  
   * **Teste de Integração** – verificação da integração entre a UI e o serviço de autenticação.  
   * **Teste de Sistema** – execução dos casos de teste listados na seção *Tipos de Teste*.  

3. **Critérios de Prioridade:**  
   * **Alta** – cenários que impedem o acesso ao sistema (login com sucesso, bloqueio por credenciais inválidas).  
   * **Média** – validações de UI e mensagens de erro.  

4. **Ferramentas:**  
   * **Selenium WebDriver** + **JavaScript (Node.js)** ou **Cypress** para automação.  
   * **Postman** (para validar a API de autenticação, caso necessário).  
   * **Jira** – gerenciamento de defeitos.  
   * **TestRail** – controle de casos de teste.  

5. **Gestão de Defeitos:**  
   * Defeitos críticos (bloqueiam login) – prioridade **P1**, prazo de correção ≤ 24 h.  
   * Defeitos de UI – prioridade **P2**, prazo de correção ≤ 3 dias úteis.  

---

## 4. Tipos de Teste  

| **Tipo** | **Descrição** | **Casos de Teste Principais** |
|----------|---------------|-------------------------------|
| **Teste Funcional** | Verifica se a funcionalidade de login se comporta conforme especificado. | 1.1 – Login com credenciais válidas (standard_user).<br>1.2 – Login com credenciais válidas (locked_out_user).<br>2.1 – Login com usuário inexistente.<br>2.2 – Login com senha incorreta.<br>2.3 – Login com usuário e senha vazios.<br>3.1 – Campo *Username* vazio → botão *Login* desabilitado.<br>3.2 – Campo *Password* vazio → botão *Login* desabilitado.<br>3.3 – Validação de mensagens de erro (ex.: “Username is required”). |
| **Teste de UI/Usabilidade** | Avalia a consistência visual e a experiência do usuário na tela de login. | Verificar presença de logo, placeholders, foco automático no campo *Username*, comportamento de “Enter” no teclado. |
| **Teste de Compatibilidade** | Garante que o login funcione em diferentes navegadores e resoluções. | Execução dos casos acima em Chrome 118, Firefox 119, Edge 119, em modo desktop e mobile (emulação). |
| **Teste de Segurança (Básico)** | Confirma que a aplicação não expõe informações sensíveis. | Verificar que a senha não é exibida em texto plano no código-fonte, que o campo *Password* tem atributo `type="password"` e que a comunicação ocorre via HTTPS. |
| **Teste de Regressão (Automatizado)** | Reexecuta os casos críticos a cada build. | Scripts automatizados que cobrem os casos 1, 2 e 3. |

---

## 5. Ambiente de Teste  

| **Componente** | **Versão / Configuração** |
|----------------|---------------------------|
| **Sistema Operacional** | Windows 10/11 (64‑bit) e macOS 14 (Ventura). |
| **Navegadores** | Chrome 118, Firefox 119, Edge 119 (últimas versões estáveis). |
| **Hardware** | CPU i7, 16 GB RAM, SSD 512 GB. |
| **Rede** | Conexão com internet de banda larga (mínimo 20 Mbps). |
| **Ambiente de Aplicação** | *Saucedemo* – ambiente de demonstração (https://www.saucedemo.com/). |
| **Ferramentas de Automação** | Cypress 13.0 ou Selenium 4.15 + WebDriverManager. |
| **Gerenciamento de Testes** | TestRail (cloud). |
| **Controle de Versão** | Git (branch `test/login`). |

*Observação:* Todos os ambientes são provisionados via **Docker** (containers para browsers) e **VirtualBox** (máquinas virtuais) para garantir reprodutibilidade.

---

## 6. Critérios de Entrada  

| **Item** | **Condição** |
|----------|--------------|
| Requisitos de login | Aprovados e assinados pelo Product Owner. |
| Build da aplicação | Disponível em ambiente de teste (URL funcional). |
| Dados de teste | Usuários de teste criados (ex.: `standard_user`, `locked_out_user`). |
| Ambiente de teste | Configurado e validado (acesso ao site, browsers instalados). |
| Scripts de automação | Implementados e revisados (pelo menos 80 % de cobertura). |
| Aprovação da equipe de QA | Checklist de preparação concluído. |

---

## 7. Critérios de Saída  

| **Item** | **Condição** |
|----------|--------------|
| Execução de todos os casos de teste planejados | ≥ 95 % concluídos. |
| Taxa de defeitos críticos | 0 (nenhum bloqueador encontrado). |
| Defeitos abertos | Todos com prioridade **P2** ou inferior devem ter status **Resolved** ou **Deferred**. |
| Relatório de Teste | Gerado, revisado e aprovado pelo QA Lead e pelo PO. |
| Artefatos de automação | Scripts versionados e armazenados no repositório `test/login`. |
| Aprovação final | Sign‑off da equipe de QA e do Product Owner. |

---

## 8. Riscos  

| **Risco** | **Probabilidade** | **Impacto** | **Mitigação** |
|-----------|-------------------|-------------|---------------|
| Instabilidade temporária do site de demonstração (downtime). | Média | Alta | Agendar janelas de teste fora dos horários de manutenção; usar monitoramento de disponibilidade. |
| Mudança de credenciais de teste sem comunicação prévia. | Baixa | Média | Manter planilha de controle de usuários de teste sob versionamento e notificar a equipe antes de alterações. |
| Incompatibilidade de versões de browsers com as bibliotecas de automação. | Média | Média | Atualizar dependências (Cypress/Selenium) antes de cada ciclo de teste; manter um matrix de compatibilidade. |
| Falha na captura de mensagens de erro por alterações de texto (i18n). | Baixa | Baixa | Utilizar localizadores baseados em atributos `data-test` ao invés de texto puro. |
| Falta de tempo para execução completa de testes de compatibilidade. | Média | Média | Priorizar navegadores críticos (Chrome, Firefox) e executar testes de mobile em modo de emulação. |

---

## 9. Cronograma  

| **Atividade** | **Responsável** | **Início** | **Término** | **Duração** |
|---------------|----------------|------------|------------|------------|
| Preparação do ambiente de teste | Infra/QA | 12/04/2026 | 13/04/2026 | 2 dias |
| Criação e revisão dos casos de teste | QA Analyst | 14/04/2026 | 16/04/2026 | 3 dias |
| Desenvolvimento de scripts de automação | Automation Engineer | 17/04/2026 | 20/04/2026 | 4 dias |
| Execução manual dos casos (Cenário 1‑3) | QA Analyst | 21/04/2026 | 23/04/2026 | 3 dias |
| Execução automatizada (regressão) | Automation Engineer | 24/04/2026 | 25/04/2026 | 2 dias |
| Análise de resultados & reporte de defeitos | QA Lead | 26/04/2026 | 27/04/2026 | 2 dias |
| Reteste de defeitos críticos | QA Team | 28/04/2026 | 30/04/2026 | 3 dias |
| Revisão final e sign‑off | QA Lead / PO | 01/05/2026 | 02/05/2026 | 2 dias |
| **Total** | | | | **21 dias úteis** |

*Observação:* O cronograma pode ser ajustado conforme a disponibilidade da equipe e eventuais bloqueios identificados nos critérios de entrada.

---  

**Aprovações**

| Nome | Cargo | Assinatura | Data |
|------|-------|------------|------|
| *[Nome do QA Lead]* | QA Lead |  |  |
| *[Nome do Product Owner]* | Product Owner |  |  |
| *[Nome do Gerente de Projeto]* | Gerente de Projeto |  |  |

---  

*Este Plano de Teste foi elaborado de acordo com as melhores práticas de QA e está alinhado aos objetivos de qualidade da aplicação Saucedemo.*