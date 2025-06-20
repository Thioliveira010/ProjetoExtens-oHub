import { Card, CardContent } from "@/components/ui/card";

export default function DataTable() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[var(--gold)] px-2">
          Gráficos e Dados Reais: Investimento x Bets
        </h2>
        
        <Card className="bg-[var(--dark-card)] border-[var(--dark-border)] rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gradient-to-r from-[var(--gold)]/20 to-[var(--gold)]/10">
                  <tr>
                    <th className="px-4 md:px-8 py-4 md:py-6 text-left text-sm md:text-lg font-bold text-[var(--gold)]">Critério</th>
                    <th className="px-4 md:px-8 py-4 md:py-6 text-center text-sm md:text-lg font-bold text-red-500">Bets</th>
                    <th className="px-4 md:px-8 py-4 md:py-6 text-center text-sm md:text-lg font-bold text-green-500">Investimentos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--dark-border)]">
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-4 md:px-8 py-4 md:py-6 font-semibold text-white text-sm md:text-base">Risco</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-red-500 text-sm md:text-base">95% de perda garantida</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-green-500 text-sm md:text-base">Apenas 5% de perdas, geralmente temporárias</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-4 md:px-8 py-4 md:py-6 font-semibold text-white text-sm md:text-base">Retorno médio anual</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-red-500 text-sm md:text-base">Instável e negativo (-40%)</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-green-500 text-sm md:text-base">Crescimento estável médio de 10-15%</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-4 md:px-8 py-4 md:py-6 font-semibold text-white text-sm md:text-base">Controle emocional</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-red-500 text-sm md:text-base">Nenhum, altamente impulsivo</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-green-500 text-sm md:text-base">Alto, baseado em disciplina</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-4 md:px-8 py-4 md:py-6 font-semibold text-white text-sm md:text-base">Educação financeira</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-red-500 text-sm md:text-base">Nenhuma</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-green-500 text-sm md:text-base">Necessária e recompensada</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-4 md:px-8 py-4 md:py-6 font-semibold text-white text-sm md:text-base">Sustentabilidade</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-red-500 text-sm md:text-base">Insustentável, perda constante</td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center text-green-500 text-sm md:text-base">Altamente sustentável, gera patrimônio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
