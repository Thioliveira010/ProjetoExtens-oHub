import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, Loader2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Eu sou o Priminho IA e estou aqui para te ajudar a entender melhor sua situação financeira. Responda às perguntas acima para começarmos! 👆',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send to webhook
      const response = await fetch('https://thioliveira010.app.n8n.cloud/webhook-test/Projeto de extensão', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
      });

      const data = await response.json();
      
      // Add bot response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || data.message || 'Obrigado pela sua mensagem! Vou analisar suas informações e te dar dicas personalizadas sobre como seu dinheiro pode render mais através de investimentos inteligentes.',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
    } catch (error) {
      // Add error message
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Obrigado pelas informações! Com base no que você compartilhou, posso te ajudar a criar uma estratégia de investimentos personalizada. Continue acompanhando o conteúdo para aprender mais!',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[var(--gold)]">
          Simule você mesmo
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Antes de tomar qualquer decisão, é importante se conhecer melhor e entender a real situação do seu dinheiro. Bora fazer isso juntos?
        </p>
        
        <Card className="bg-[var(--dark-card)] border-[var(--gold)]/30 rounded-2xl p-8">
          <CardContent className="p-0">
            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-6">Me conta aqui rapidinho:</p>
              <div className="space-y-2 text-gray-300">
                <p>1️⃣ Qual é o seu nome?</p>
                <p>2️⃣ Quanto você recebe por mês?</p>
                <p>3️⃣ E quanto você consegue separar por mês — seja pra investir ou pra jogar nas bets?</p>
              </div>
              <p className="text-gray-300 mt-6">
                Com isso, eu te mostro de forma simples como o seu dinheiro pode trabalhar por você no longo prazo... e te alerto, com carinho, sobre os perigos das apostas.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="bg-[var(--dark-bg)] rounded-xl border border-[var(--dark-border)]">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-[var(--gold)]/20 to-[var(--gold)]/10 px-6 py-4 border-b border-[var(--dark-border)] rounded-t-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-[var(--dark-bg)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--gold)]">Priminho IA</h3>
                    <p className="text-xs text-gray-400">Seu consultor financeiro</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 max-h-96 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start space-x-3 ${message.isUser ? 'justify-end' : ''}`}>
                    {message.isUser ? (
                      <>
                        <div className="bg-[var(--gold)]/20 rounded-lg px-4 py-3 max-w-md">
                          <p className="text-gray-300">{message.content}</p>
                        </div>
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-[var(--dark-bg)]" />
                        </div>
                        <div className="bg-[var(--gold)]/10 rounded-lg px-4 py-3 max-w-md">
                          <p className="text-gray-300">{message.content}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-[var(--dark-border)]">
                <div className="flex space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua resposta aqui..."
                    className="flex-1 bg-[var(--dark-card)] border-[var(--dark-border)] text-white placeholder-gray-500 focus:border-[var(--gold)]"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--dark-bg)] px-6"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {isLoading && (
                  <div className="mt-3 flex items-center justify-center space-x-2 text-[var(--gold)]">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Priminho está digitando...</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
