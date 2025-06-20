import { Card, CardContent } from "@/components/ui/card";

export default function DataTable() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--gold)]">
          Gráficos e Dados Reais: Investimento x Bets
        </h2>
        
        <Card className="bg-[var(--dark-card)] border-[var(--dark-border)] rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[var(--gold)]/20 to-[var(--gold)]/10">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold text-[var(--gold)]">Critério</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-red-500">Bets</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-green-500">Investimentos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--dark-border)]">
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">Risco</td>
                    <td className="px-8 py-6 text-center text-red-500">95% de perda garantida</td>
                    <td className="px-8 py-6 text-center text-green-500">Apenas 5% de perdas, geralmente temporárias</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">Retorno médio anual</td>
                    <td className="px-8 py-6 text-center text-red-500">Instável e negativo (-40%)</td>
                    <td className="px-8 py-6 text-center text-green-500">Crescimento estável médio de 10-15%</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">Controle emocional</td>
                    <td className="px-8 py-6 text-center text-red-500">Nenhum, altamente impulsivo</td>
                    <td className="px-8 py-6 text-center text-green-500">Alto, baseado em disciplina</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">Educação financeira</td>
                    <td className="px-8 py-6 text-center text-red-500">Nenhuma</td>
                    <td className="px-8 py-6 text-center text-green-500">Necessária e recompensada</td>
                  </tr>
                  <tr className="hover:bg-[var(--dark-border)]/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">Sustentabilidade</td>
                    <td className="px-8 py-6 text-center text-red-500">Insustentável, perda constante</td>
                    <td className="px-8 py-6 text-center text-green-500">Altamente sustentável, gera patrimônio</td>
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
