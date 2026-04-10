# Plano de Casos de Teste – Sauce Demo  
**Sistema:** https://www.saucedemo.com/  
**Versão:** 1.0 (Web)  
**Data:** 10/04/2026  
**Responsável:** Analista de Testes QA Sênior  

---  

## Sumário de Casos de Teste  

| ID | Título | Prioridade | Tipo | Cobertura |
|----|--------|------------|------|-----------|
| CT-001 | Login com sucesso – Usuário padrão | Alta | Funcional | Cenário 1 |
| CT-002 | Login com sucesso – Usuário bloqueado (locked_out_user) | Média | Negativo | Cenário 1 |
| CT-003 | Login com credenciais inválidas – Senha errada | Alta | Negativo | Cenário 2 |
| CT-004 | Login com credenciais inválidas – Usuário inexistente | Alta | Negativo | Cenário 2 |
| CT-005 | Login sem preencher campo **Username** | Média | Negativo | Cenário 3 |
| CT-006 | Login sem preencher campo **Password** | Média | Negativo | Cenário 3 |
| CT-007 | Login sem preencher **Username** e **Password** | Baixa | Negativo | Cenário 3 |
| CT-008 | Verificação de mensagens de erro de validação | Média | Usabilidade | Cenário 2 & 3 |
| CT-009 | Persistência da sessão após login bem‑sucedido | Média | Funcional | Complementar ao CT‑001 |

---  

## Detalhamento dos Casos de Teste  

### CT-001 – Login com sucesso – Usuário padrão  

**Pré‑condições:**  
- O navegador está aberto na URL `https://www.saucedemo.com/`.  
- Não há sessão ativa (cookies/LocalStorage limpos).  

**Passos:**  
1. No campo **Username**, digitar `standard_user`.  
2. No campo **Password**, digitar `secret_sauce`.  
3. Clicar no botão **Login**.  

**Resultado Esperado:**  
- O usuário é redirecionado para a página **Products** (`/inventory.html`).  
- O cabeçalho exibe o nome do usuário (`PRODUCTS`).  
- Não há mensagens de erro.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

### CT-002 – Login com sucesso – Usuário bloqueado (locked_out_user)  

**Pré‑condições:**  
- Navegador na página de login, sem sessão ativa.  

**Passos:**  
1. Inserir `locked_out_user` no campo **Username**.  
2. Inserir `secret_sauce` no campo **Password**.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- O sistema exibe a mensagem de erro:  
  
  Epic sadface: Sorry, this user has been locked out.
    
- O usuário **não** é redirecionado para a página de produtos.  

**Prioridade:** Média  
**Tipo:** Negativo  

---  

### CT-003 – Login com credenciais inválidas – Senha errada  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Digitar `standard_user` no campo **Username**.  
2. Digitar `wrong_password` no campo **Password**.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro exibida:  
  
  Epic sadface: Username and password do not match any user in this service
    
- O usuário permanece na tela de login.  

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

### CT-004 – Login com credenciais inválidas – Usuário inexistente  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Inserir `nonexistent_user` no campo **Username**.  
2. Inserir `any_password` no campo **Password**.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro idêntica ao CT‑003.  
- Nenhum redirecionamento ocorre.  

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

### CT-005 – Login sem preencher campo **Username**  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Deixar o campo **Username** vazio.  
2. Digitar `secret_sauce` no campo **Password**.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro:  
  
  Epic sadface: Username is required
    
- O foco do cursor deve ser reposicionado no campo **Username**.  

**Prioridade:** Média  
**Tipo:** Negativo  

---  

### CT-006 – Login sem preencher campo **Password**  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Digitar `standard_user` no campo **Username**.  
2. Deixar o campo **Password** vazio.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro:  
  
  Epic sadface: Password is required
    
- O foco do cursor deve ser reposicionado no campo **Password**.  

**Prioridade:** Média  
**Tipo:** Negativo  

---  

### CT-007 – Login sem preencher **Username** e **Password**  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Manter ambos os campos vazios.  
2. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro única (ou duas, dependendo da implementação) indicando que ambos os campos são obrigatórios.  
- Exemplo esperado:  
  
  Epic sadface: Username is required
    
  (ou ainda: `Password is required`).  

**Prioridade:** Baixa  
**Tipo:** Negativo  

---  

### CT-008 – Verificação de mensagens de erro de validação  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Executar os casos CT‑003, CT‑004, CT‑005, CT‑006 e CT‑007.  
2. Capturar a mensagem exibida em cada tentativa.  

**Resultado Esperado:**  
- As mensagens de erro devem ser exatamente as especificadas nos casos individuais (texto, formatação e cor padrão da aplicação).  
- Não deve haver mensagens adicionais ou truncamento de texto.  

**Prioridade:** Média  
**Tipo:** Usabilidade  

---  

### CT-009 – Persistência da sessão após login bem‑sucedido  

**Pré‑condições:**  
- Usuário logado com sucesso (CT‑001).  

**Passos:**  
1. Após o carregamento da página **Products**, fechar a aba do navegador sem efetuar logout.  
2. Reabrir o navegador e acessar novamente `https://www.saucedemo.com/`.  

**Resultado Esperado:**  
- O usuário deve ser redirecionado automaticamente para a página **Products** (sessão ainda válida) ou, caso a aplicação não mantenha sessão, ser apresentado novamente à tela de login.  
- O comportamento observado deve ser documentado; se a aplicação não persiste sessão, isso deve ser registrado como requisito de negócio.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## Considerações Gerais  

1. **Ambiente de Execução**  
   - Navegadores suportados: Chrome 124+, Firefox 124+, Edge 124+.  
   - Resolução mínima: 1366 × 768.  
   - Dados de teste (usuários) são os fornecidos pela própria aplicação (standard_user, locked_out_user, problem_user, performance_glitch_user).  

2. **Critérios de Aceite**  
   - Todos os casos acima devem ser executados com sucesso (resultado esperado atendido).  
   - Taxa de falha ≤ 2 % para funcionalidades críticas (login).  

3. **Riscos**  
   - Alterações nas mensagens de erro podem gerar falsos negativos.  
   - Bloqueio temporário de IP por múltiplas tentativas falhas (rate‑limit) – deve ser monitorado.  

4. **Ferramentas de Apoio**  
   - Selenium WebDriver (JavaScript/TypeScript) ou Cypress para automação.  
   - JIRA/Confluence para rastreamento de defeitos.  

---  

*Documento elaborado por:*  
**[Seu Nome]** – Analista de Testes QA Sênior  
*E‑mail:* seu.email@empresa.com  
*Telefone:* +55 (11) 99999‑9999