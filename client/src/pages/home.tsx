import HeroSection from "@/components/hero-section";
import ComparisonSection from "@/components/comparison-section";
import ChatInterface from "@/components/chat-interface";
import VideoCarousel from "@/components/video-carousel";
import DataTable from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Building, PiggyBank, Eye, EyeOff, TrendingUp, TrendingDown, Dice6, ChartLine } from "lucide-react";
import usainBoltImage from "@assets/usain-bolt-olympics-rio-2016-gold-medals_1750453020133.jpg";
import flavioAugustoImage from "@assets/flavio-augusto_1750453020134.jpg";
import savingPersonImage from "@assets/5db7635b714142a139e09cc7_30462_tumb_750Xauto_1750453020134.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white">
      <HeroSection />
      
      {/* Dobra 1: Caminho da Ruína ou Jornada da Liberdade */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-[var(--dark-card)] border-[var(--dark-border)] rounded-2xl p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-danger-gold">
                Caminho da Ruína ou Jornada da Liberdade?
              </h2>
              <h3 className="text-2xl font-semibold text-[var(--gold)] mb-12">
                Você Está Jogando com Seu Futuro?
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-xl">
                  Você já imaginou perder tudo em questão de segundos? A adrenalina das apostas pode parecer sedutora, mas o que acontece quando essa emoção vira um pesadelo? Neste momento, muitos jovens brasileiros apostam seu futuro financeiro em algo tão imprevisível quanto arriscado.
                </p>
                <p className="text-xl">
                  Será que vale a pena jogar seu amanhã em uma aposta? Neste eBook, vamos te mostrar dois caminhos claramente definidos: o da destruição financeira através das apostas, e o da construção sólida através dos investimentos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dobra 2: Bets vs Investimentos */}
      <ComparisonSection />

      {/* Dobra 3: Perfil do Fracasso vs Sucesso */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-gold">
            Perfil do Fracasso ou Perfil do Sucesso: Qual é o seu?
          </h2>
          
          <div className="space-y-16">
            {/* Curto Prazo - Perfil do Fracasso */}
            <Card className="bg-[var(--dark-card)] border-red-500/30 rounded-2xl p-10">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                  <TrendingDown className="mr-4 h-8 w-8" />
                  Curto Prazo: O Perfil que Escolhe Perder
                </h3>
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  <p>
                    Imagine um atleta que busca resultados rápidos sem treinar adequadamente. O resultado? Derrota garantida. Assim é o apostador: busca lucros rápidos, ignora o planejamento e acaba em ruína financeira.
                  </p>
                  <p>
                    Estudos mostram que 78% das famílias endividadas no Brasil vivem assim, gastando mais do que podem e acumulando dívidas enormes. A regulamentação das apostas no Brasil em 2025 trouxe à tona ainda mais problemas financeiros, revelando como famílias inteiras são impactadas negativamente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Longo Prazo - Perfil do Sucesso */}
            <Card className="bg-[var(--dark-card)] border-green-500/30 rounded-2xl p-10">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
                  <TrendingUp className="mr-4 h-8 w-8" />
                  Longo Prazo: O Perfil do Vencedor
                </h3>
                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  <p>
                    Agora imagine um atleta disciplinado que treina diariamente, foca no longo prazo e acumula vitórias consistentes. Essa é a mentalidade do investidor. Como diz Denner Lippert, CEO da V4 Company: "O melhor remédio para ansiedade é a paciência e o planejamento a longo prazo."
                  </p>
                  <p>
                    Investidores disciplinados acumulam patrimônio, têm segurança financeira e uma vida tranquila, com mais renda garantida na aposentadoria. No vídeo "AÇÕES SÃO PARA COMPRAR NÃO PRA VENDER", fica claro como a paciência gera resultados exponenciais.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exemplos Práticos */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-[var(--gold)]">
              Exemplos Práticos: A Disciplina que Gera Sucesso
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[var(--dark-card)] border-[var(--gold)]/30 rounded-xl p-8 text-center">
                <CardContent className="p-0">
                  <div className="relative w-full h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-[var(--gold)]">
                    <img 
                      src={usainBoltImage} 
                      alt="Usain Bolt com medalha de ouro olímpica"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[var(--gold)]">Atletas olímpicos</strong> treinam anos para segundos de sucesso.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[var(--dark-card)] border-[var(--gold)]/30 rounded-xl p-8 text-center">
                <CardContent className="p-0">
                  <div className="relative w-full h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-[var(--gold)]">
                    <img 
                      src={flavioAugustoImage} 
                      alt="Flavio Augusto - Empreendedor de sucesso"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[var(--gold)]">Empreendedores de sucesso</strong> planejam e investem por anos até a empresa prosperar.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[var(--dark-card)] border-[var(--gold)]/30 rounded-xl p-8 text-center">
                <CardContent className="p-0">
                  <div className="relative w-full h-32 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-[var(--gold)]">
                    <img 
                      src={savingPersonImage} 
                      alt="Pessoa planejando futuro financeiro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[var(--gold)]">Pessoas que poupam</strong> regularmente garantem um futuro tranquilo e estável.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 4: A Verdade Nua e Crua */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-danger-gold">
            A Verdade Nua e Crua: O Real vs. A Ilusão
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ilusão das Bets */}
            <Card className="bg-gradient-to-br from-red-500/10 to-[var(--dark-card)] border-red-500/20 rounded-2xl p-10">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                  <EyeOff className="mr-4 h-8 w-8" />
                  Ilusão: O Sonho Perigoso das Bets
                </h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Apostas parecem um caminho fácil para riqueza rápida, mas são ilusórias e extremamente perigosas. Dados apontam que 85% dos apostadores perdem mais do que ganham.
                  </p>
                  <p>
                    Viver na ilusão das bets é como navegar sem bússola: você pode acabar perdido rapidamente. O alerta da Senacon reforça que apostar consistentemente leva à deterioração financeira e emocional.
                  </p>
                  <div className="bg-red-500/20 p-4 rounded-lg mt-6">
                    <p className="text-sm text-red-500 font-semibold">
                      ⚠️ A pesquisa do Senado destacou que a instabilidade financeira e o desemprego são frequentes entre apostadores compulsivos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Realidade dos Investimentos */}
            <Card className="bg-gradient-to-br from-green-500/10 to-[var(--dark-card)] border-green-500/20 rounded-2xl p-10">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-green-500 mb-6 flex items-center">
                  <Eye className="mr-4 h-8 w-8" />
                  Realidade: Investimentos e o Controle Absoluto
                </h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Investir não é um sonho, é uma estratégia real com resultados comprovados. Em 2024, dados indicaram que investidores regulares tiveram crescimento estável e constante.
                  </p>
                  <p>
                    Os juros compostos garantem que seu dinheiro cresça exponencialmente, trazendo segurança e previsibilidade. Louise Barsi, no canal "Os Sócios", exemplifica como é possível viver de dividendos com investimentos consistentes.
                  </p>
                  <div className="bg-green-500/20 p-4 rounded-lg mt-6">
                    <p className="text-sm text-green-500 font-semibold">
                      ✅ Prova da eficácia do planejamento financeiro com resultados documentados e sustentáveis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dobra 5: Gráficos e Dados Reais */}
      <DataTable />

      {/* Dobra 6: Simule você mesmo - Chat Interface */}
      <ChatInterface />

      {/* Dobra 7: O Futuro Está em Suas Mãos */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-[var(--gold)]/10 via-[var(--dark-card)] to-green-500/10 border-[var(--gold)]/30 rounded-2xl p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[var(--gold)] to-green-500 bg-clip-text text-transparent">
                O Futuro Está em Suas Mãos
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Você agora conhece a verdade nua e crua. As apostas podem parecer sedutoras, mas trazem dor e perda a longo prazo. Investir, por outro lado, te coloca no controle do seu destino financeiro, garantindo o futuro que você sempre sonhou.
              </p>
              <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl">
                <p className="text-2xl font-bold text-green-500">
                  Escolha com sabedoria, escolha investir.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dobra 8: Conteúdos Extras */}
      <VideoCarousel />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--dark-border)]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-[var(--gold)] font-bold text-2xl mb-4">
            Investimentos x Bets
          </div>
          <p className="text-gray-400">
            A escolha é sua. O futuro também.
          </p>
        </div>
      </footer>
    </div>
  );
}
