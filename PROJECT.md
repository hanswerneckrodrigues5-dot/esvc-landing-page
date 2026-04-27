# Landing Page de Viagens (Boleto Parcelado)

## Status
Fase atual: 8 (Pós-lançamento e evolução)
Modo de condução: Guiado
Nível de rigor: MVP real
Próximo passo: Monitorar a conversão dos links e planejar melhorias futuras

## Problema
- **Ideia:** Landing page para divulgar um produto específico de agência de viagens, focado em conversão via venda no boleto bancário parcelado.
- **A Dor:** Os clientes não sabem que a agência vende viagens no boleto pré-pago. Quando descobrem, ficam surpresos.
- **A Solução:** Uma vitrine que comunique claramente a facilidade: viagem sem análise de crédito, sem score e sem precisar de limite no cartão. O cliente parcela e paga tudo até 30 dias antes da viagem. Qualquer um pode comprar.
- **O Usuário:** Cliente quente que já procurou a agência (presencialmente ou no WhatsApp) com intenção de viajar, mas relata não ter cartão de crédito ou limite suficiente. A página será enviada diretamente a ele como solução.
- **Sucesso:** O cliente lê a página, entende perfeitamente como funciona o boleto pré-pago (entrada + parcelas até 30 dias antes do embarque), vê os exemplos de destinos com preços diluídos, e volta pro WhatsApp convencido a fechar negócio.

## Escopo
### MVP (Aprovado)
- 1. Cabeçalho direto com promessa forte.
- 2. Seção "Como Funciona" em 3 passos visuais.
- 3. Vitrine de Destinos (Cards) com preços quebrados em entrada + parcelas.
- 4. Botões de CTA direcionando de volta ao WhatsApp.

## Stack
- Frontend: Vite + React
- Estilização: Tailwind CSS
- Deploy: Vercel (ou Netlify)

## Skills em uso
- mentor-de-projeto (principal)

## Skills necessárias
### Essenciais agora
- frontend-design — Layout, tipografia e visual premium — status: ✅ recebida
- copywriting — Textos persuasivos para vendas — status: ⚠️ inline (resolvido pelo mentor)

### Úteis em breve
- seo — Para rankear no Google futuramente

### Depois
- db-modeling — Se no futuro houver sistema de login ou reservas complexo

## Decisões
- Decidimos usar: frontend-design (skill existente)
- Decidimos seguir inline por enquanto: copywriting

## Vinculação skills → marcos
| Marco | Skills invocadas | Momento |
|---|---|---|
| M1: Landing Page MVP | frontend-design | Na hora de codar o layout, cores e responsividade |

## Registro de invocações
- M1: Skill `frontend-design` invocada e executada para construção de UI Premium (concluído com sucesso).

## Marcos
- [x] M1: Landing Page MVP construída e responsiva

## Decisões importantes
- 2026-04-27: Modo Guiado definido. Prazo de 1 dia exige escopo cirúrgico e simplicidade na arquitetura.

## Pendências / Dúvidas
- Precisa testar no celular (view mobile).

## Aprendizados
- A separação do MVP focada no Lead quente eliminou a necessidade de seções longas de "Quem Somos".
