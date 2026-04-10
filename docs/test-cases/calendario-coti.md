# Plano de Casos de Teste – Calendário de Turmas  
**Sistema:** https://www.cotiinformatica.com.br/calendario  

> **Objetivo:** Validar que o calendário exibe, filtra e permite a navegação correta das turmas, garantindo que existam ao menos uma turma de **Java** e uma de **Front‑End**.  

---  

## CT-001 – Verificar existência de ao menos uma turma de Java  

**Pré‑condições:**  
- Usuário com acesso ao site (não é necessário login).  
- Conexão de internet estável.  

**Passos:**  
1. Acessar a URL `https://www.cotiinformatica.com.br/calendario`.  
2. Esperar o carregamento completo da página (máx. 10 s).  
3. Localizar a lista de turmas exibida na tela.  
4. Aplicar o filtro “Tecnologia” → “Java” (se houver campo de filtro) ou percorrer a lista visualmente.  

**Resultado Esperado:**  
- Ao menos **uma** turma com a palavra “Java” no título ou descrição deve ser exibida.  
- A turma deve conter informações de data, horário e vagas disponíveis.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

## CT-002 – Verificar existência de ao menos uma turma de Front‑End  

**Pré‑condições:**  
- Igual ao CT‑001.  

**Passos:**  
1. Acessar a página do calendário.  
2. Aplicar o filtro “Tecnologia” → “Front‑End” (ou buscar visualmente).  

**Resultado Esperado:**  
- Deve aparecer **pelo menos uma** turma cujo título ou descrição contenha “Front‑End”, “Frontend”, “HTML/CSS/JS” ou similar.  
- Dados da turma (data, horário, vagas) devem estar visíveis.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

## CT-003 – Filtrar turmas por tecnologia (Java) e validar número de resultados  

**Pré‑condições:**  
- Usuário na página do calendário.  

**Passos:**  
1. Selecionar o filtro “Tecnologia”.  
2. Marcar a opção “Java”.  
3. Confirmar a aplicação do filtro (botão “Aplicar” ou equivalente).  

**Resultado Esperado:**  
- A lista deve ser atualizada contendo **somente** turmas de Java.  
- O contador de resultados (se existir) deve refletir a quantidade exibida.  
- Nenhuma turma de outra tecnologia deve aparecer.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-004 – Filtrar turmas por tecnologia (Front‑End) e validar número de resultados  

**Pré‑condições:**  
- Igual ao CT‑003.  

**Passos:**  
1. Selecionar o filtro “Tecnologia”.  
2. Marcar a opção “Front‑End”.  
3. Aplicar o filtro.  

**Resultado Esperado:**  
- Lista contendo **apenas** turmas de Front‑End.  
- Contador de resultados coerente com a quantidade exibida.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-005 – Verificar comportamento da página quando não há turmas para o filtro selecionado  

**Pré‑condições:**  
- Conhecer um filtro que não possua turmas (ex.: “Data” = 01/01/2099 ou tecnologia inexistente).  

**Passos:**  
1. Aplicar o filtro que garante ausência de resultados.  
2. Aguardar o carregamento da lista.  

**Resultado Esperado:**  
- Mensagem informativa como “Nenhuma turma encontrada para os critérios selecionados”.  
- Nenhum card de turma deve ser exibido.  
- Layout da página deve permanecer consistente (sem quebras).  

**Prioridade:** Média  
**Tipo:** Negativo  

---  

## CT-006 – Navegação entre páginas (paginação)  

**Pré‑condições:**  
- Existência de mais de 10 turmas (ou número que gere paginação).  

**Passos:**  
1. Acessar o calendário sem aplicar filtros.  
2. Verificar a presença de controles de paginação (ex.: “1 2 3 … Próximo”).  
3. Clicar no número da página 2.  
4. Confirmar que a lista de turmas foi atualizada.  

**Resultado Esperado:**  
- As turmas exibidas mudam para o conjunto correspondente à página selecionada.  
- O número da página ativa é destacado.  
- Não há perda de informações (datas, vagas).  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-007 – Verificar responsividade da lista de turmas em dispositivos móveis  

**Pré‑condições:**  
- Emulador de dispositivo (ex.: iPhone X, Galaxy S22) ou dispositivo físico.  

**Passos:**  
1. Abrir a URL no navegador mobile.  
2. Verificar o layout da lista de turmas (cards, colunas).  
3. Aplicar filtro “Java”.  
4. Scrollar a página até o final.  

**Resultado Esperado:**  
- As turmas são apresentadas em layout de coluna única ou cards adaptados, sem sobreposição de texto.  
- Botões e filtros permanecem acessíveis e clicáveis.  
- Não há necessidade de zoom horizontal.  

**Prioridade:** Baixa  
**Tipo:** Usabilidade  

---  

## CT-008 – Verificar acessibilidade (WCAG) dos elementos de filtro  

**Pré‑condições:**  
- Ferramenta de auditoria de acessibilidade (ex.: axe, Lighthouse).  

**Passos:**  
1. Carregar a página do calendário.  
2. Executar auditoria de acessibilidade.  
3. Analisar os resultados referentes a: contraste de cores, rótulos de campos, navegação por teclado.  

**Resultado Esperado:**  
- Todos os filtros possuem rótulo associado (`<label for="...">`).  
- Contraste de cores ≥ 4.5:1.  
- Usuário pode navegar e selecionar filtros usando apenas o teclado (Tab/Enter).  
- Não há erros críticos de acessibilidade.  

**Prioridade:** Média  
**Tipo:** Usabilidade  

---  

## CT-009 – Verificar que ao clicar em uma turma, detalhes são exibidos corretamente  

**Pré‑condições:**  
- Existência de ao menos uma turma visível.  

**Passos:**  
1. Na lista de turmas, clicar no card/título da primeira turma.  
2. Observar se abre uma modal, página de detalhes ou redirecionamento.  

**Resultado Esperado:**  
- Detalhes da turma (nome, descrição completa, data, horário, vagas, preço, botão “Inscrever-se”) são exibidos.  
- URL pode mudar para `/calendario/turma/{id}` ou abrir modal sem erros de carregamento.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

## CT-010 – Verificar mensagem de erro ao falha de carregamento da lista (simulação de 500)  

**Pré‑condições:**  
- Ambiente de teste configurado para forçar resposta HTTP 500 na chamada que traz as turmas (proxy ou mock).  

**Passos:**  
1. Acessar a página do calendário.  
2. Aguardar o carregamento da lista.  

**Resultado Esperado:**  
- Exibição de mensagem amigável, ex.: “Não foi possível carregar as turmas. Tente novamente mais tarde.”  
- Botão “Recarregar” ou “Tentar novamente” disponível.  
- Layout permanece íntegro, sem quebra de página.  

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

### Observações Gerais  

| Campo | Valor |
|-------|-------|
| **Ambiente de Teste** | Navegadores: Chrome 118, Firefox 118, Edge 118; dispositivos: Desktop (1920×1080) e Mobile (iPhone X). |
| **Dados de Teste** | Não há necessidade de dados de login. As turmas são carregadas via API pública. |
| **Critério de Aceite** | Todos os casos acima devem ser executados com sucesso (Resultado Esperado atendido) antes da liberação da versão. |
| **Riscos** | Caso o backend não possua turmas de Java ou Front‑End, o teste CT‑001/CT‑002 falhará – será necessário solicitar inclusão de dados de teste ao time de desenvolvimento. |

---  

*Documento gerado por:* **Analista de Testes QA Sênior**  
*Data:* 10/04/2026