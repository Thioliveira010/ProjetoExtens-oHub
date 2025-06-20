import { Card, CardContent } from "@/components/ui/card";
import { Dice6, ChartLine } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bets Card */}
          <Card className="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-2xl p-10">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <Dice6 className="h-16 w-16 text-red-500 mb-4 mx-auto" />
                <h3 className="text-3xl font-bold text-red-500">Bets: A Emoção que Pode Te Destruir</h3>
              </div>
              <div className="text-gray-300 space-y-6">
                <p>
                  Apostas esportivas prometem ganhos rápidos e emoções fortes. Em 2024, 15% dos brasileiros caíram nessa ilusão, com 12% apresentando sinais de vício.
                </p>
                <p>
                  As bets são uma roleta-russa financeira: o alto risco é imediato e brutal, sem garantia alguma. Segundo o Ministério da Justiça, o crescimento acelerado das apostas tem gerado preocupação devido ao potencial aumento do vício e endividamento das famílias brasileiras.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <p className="text-red-500 font-semibold">⚠️ Estatística Alarmante: 85% dos apostadores perdem mais do que ganham</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investimentos Card */}
          <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-10">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <ChartLine className="h-16 w-16 text-green-500 mb-4 mx-auto" />
                <h3 className="text-3xl font-bold text-green-500">Investimentos: Seu Escudo Contra o Fracasso</h3>
              </div>
              <div className="text-gray-300 space-y-6">
                <p>
                  Investir é planejar, ter controle emocional e paciência. É o caminho oposto ao das apostas. Investir significa entender o mercado, aplicar dinheiro estrategicamente e colher resultados sólidos.
                </p>
                <p>
                  Dados mostram que 37% da população brasileira escolheu este caminho em 2024, crescendo constantemente. Renato Cariani, no canal "Os Sócios", enfatiza que a disciplina financeira é fundamental para estruturar uma carteira robusta e duradoura.
                </p>
                <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 mt-6">
                  <p className="text-green-500 font-semibold">✅ Fato Comprovado: Investidores disciplinados têm crescimento médio de 10-15% ao ano</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
