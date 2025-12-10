import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface VideoLesson {
  id: number;
  title: string;
  duration: string;
  description: string;
  category: string;
  difficulty: 'Начальный' | 'Средний' | 'Продвинутый';
  thumbnail: string;
  watched: boolean;
}

const VideoLessonsSection = () => {
  const [lessons, setLessons] = useState<VideoLesson[]>([
    {
      id: 1,
      title: 'Введение в модель OSI',
      duration: '12:34',
      description: 'Изучите 7 уровней модели OSI и их функции',
      category: 'Основы',
      difficulty: 'Начальный',
      thumbnail: '🌐',
      watched: true
    },
    {
      id: 2,
      title: 'Протокол TCP/IP: теория и практика',
      duration: '18:45',
      description: 'Глубокое погружение в работу протокола TCP/IP',
      category: 'Протоколы',
      difficulty: 'Средний',
      thumbnail: '📡',
      watched: true
    },
    {
      id: 3,
      title: 'Настройка маршрутизатора Cisco',
      duration: '25:12',
      description: 'Пошаговая настройка маршрутизатора через CLI',
      category: 'Оборудование',
      difficulty: 'Средний',
      thumbnail: '🔧',
      watched: false
    },
    {
      id: 4,
      title: 'VLAN и сегментация сети',
      duration: '15:30',
      description: 'Создание виртуальных локальных сетей',
      category: 'Маршрутизация',
      difficulty: 'Средний',
      thumbnail: '🔀',
      watched: false
    },
    {
      id: 5,
      title: 'Основы кибербезопасности',
      duration: '22:18',
      description: 'Защита сетей от современных угроз',
      category: 'Безопасность',
      difficulty: 'Продвинутый',
      thumbnail: '🛡️',
      watched: false
    },
    {
      id: 6,
      title: 'DNS и DHCP серверы',
      duration: '16:42',
      description: 'Настройка служб разрешения имён и выдачи адресов',
      category: 'Сервисы',
      difficulty: 'Начальный',
      thumbnail: '⚙️',
      watched: false
    },
    {
      id: 7,
      title: 'VPN туннели и шифрование',
      duration: '20:55',
      description: 'Создание защищённых соединений между сетями',
      category: 'Безопасность',
      difficulty: 'Продвинутый',
      thumbnail: '🔒',
      watched: false
    },
    {
      id: 8,
      title: 'Мониторинг сети с Wireshark',
      duration: '19:20',
      description: 'Анализ сетевого трафика и поиск проблем',
      category: 'Инструменты',
      difficulty: 'Средний',
      thumbnail: '📊',
      watched: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const categories = ['Все', 'Основы', 'Протоколы', 'Оборудование', 'Маршрутизация', 'Безопасность', 'Сервисы', 'Инструменты'];

  const toggleWatched = (id: number) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, watched: !lesson.watched } : lesson
    ));
  };

  const filteredLessons = selectedCategory === 'Все' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory);

  const watchedCount = lessons.filter(l => l.watched).length;
  const totalCount = lessons.length;
  const progressPercentage = Math.round((watchedCount / totalCount) * 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Начальный':
        return 'bg-green-500/10 text-green-700 border-green-200';
      case 'Средний':
        return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'Продвинутый':
        return 'bg-purple-500/10 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Video" className="text-primary" size={28} />
                Видеоуроки
              </CardTitle>
              <CardDescription className="mt-2">
                Изучайте материал в удобном формате и отмечайте прогресс
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{watchedCount}/{totalCount}</div>
              <div className="text-sm text-muted-foreground">просмотрено</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Общий прогресс</span>
              <span className="text-primary">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredLessons.map((lesson) => (
          <Card 
            key={lesson.id} 
            className={`hover:shadow-lg transition-all hover:scale-[1.02] ${
              lesson.watched ? 'border-primary/30 bg-primary/5' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                  {lesson.thumbnail}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight">{lesson.title}</CardTitle>
                    <Checkbox
                      checked={lesson.watched}
                      onCheckedChange={() => toggleWatched(lesson.id)}
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {lesson.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{lesson.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>{lesson.duration}</span>
                </div>
                <Button 
                  size="sm" 
                  variant={lesson.watched ? 'outline' : 'default'}
                  className="gap-2"
                >
                  <Icon name={lesson.watched ? 'RotateCcw' : 'Play'} size={16} />
                  {lesson.watched ? 'Пересмотреть' : 'Смотреть'}
                </Button>
              </div>
              {lesson.watched && (
                <div className="flex items-center gap-2 text-xs text-primary font-medium pt-2 border-t">
                  <Icon name="CheckCircle2" size={14} />
                  <span>Просмотрено</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <Card className="border-dashed border-2">
          <CardContent className="p-12 text-center text-muted-foreground">
            <Icon name="VideoOff" className="mx-auto mb-4" size={48} />
            <p className="text-lg">Видеоуроки в этой категории скоро появятся</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VideoLessonsSection;
