import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/polipsjuxhebx", "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-orange-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.15),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="animate-fade-in">
          <div className="mb-8 inline-block animate-float">
            <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-2xl">
              <Icon name="Zap" size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Мой ТГК
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto font-medium">
            Присоединяйся к моему Telegram каналу
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl mx-auto">
            Эксклюзивный контент, полезные материалы и крутые новости каждый день 🔥
          </p>

          <Button
            onClick={handleTelegramClick}
            size="lg"
            className="text-xl px-12 py-8 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105 animate-pulse-glow"
          >
            <Icon name="Send" size={28} className="mr-3" />
            Перейти в Telegram
          </Button>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={24} className="text-primary" />
              <span className="font-semibold">10K+ подписчиков</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-secondary" />
              <span className="font-semibold">Актуальные тренды</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-accent" />
              <span className="font-semibold">Уникальный контент</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-sm">
        <p>Следи за обновлениями в моём Telegram канале</p>
      </div>
    </div>
  );
};

export default Index;