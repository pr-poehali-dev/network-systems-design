import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import NetworkPacketVisualization from '@/components/NetworkPacketVisualization';

const Index = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      id: 1,
      title: 'Основы TCP/IP',
      description: 'Изучите протоколы передачи данных и модель OSI',
      progress: 65,
      level: 'Начальный',
      duration: '4 недели',
      students: 1243,
      icon: 'Network'
    },
    {
      id: 2,
      title: 'Маршрутизация и коммутация',
      description: 'Настройка сетевого оборудования Cisco',
      progress: 30,
      level: 'Средний',
      duration: '6 недель',
      students: 892,
      icon: 'Router'
    },
    {
      id: 3,
      title: 'Информационная безопасность',
      description: 'Защита сетей от киберугроз',
      progress: 0,
      level: 'Продвинутый',
      duration: '8 недель',
      students: 654,
      icon: 'Shield'
    },
    {
      id: 4,
      title: 'Облачные технологии',
      description: 'AWS, Azure и Google Cloud Platform',
      progress: 0,
      level: 'Средний',
      duration: '5 недель',
      students: 1056,
      icon: 'Cloud'
    }
  ];

  const simulations = [
    {
      id: 1,
      title: 'Построение локальной сети',
      description: 'Создайте топологию сети для офиса',
      difficulty: 'Легко',
      time: '15 мин',
      icon: 'Cpu'
    },
    {
      id: 2,
      title: 'Настройка VLAN',
      description: 'Сегментируйте сеть на виртуальные подсети',
      difficulty: 'Средне',
      time: '30 мин',
      icon: 'GitBranch'
    },
    {
      id: 3,
      title: 'Протокол DHCP',
      description: 'Настройте автоматическую выдачу IP-адресов',
      difficulty: 'Легко',
      time: '20 мин',
      icon: 'Settings'
    }
  ];

  const certificates = [
    {
      id: 1,
      course: 'Основы TCP/IP',
      date: '15 ноября 2024',
      grade: 'Отлично'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Network" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">NetLearn</h1>
                <p className="text-xs text-muted-foreground">Платформа обучения сетям</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-sm">Курсы</Button>
              <Button variant="ghost" className="text-sm">Симуляции</Button>
              <Button variant="ghost" className="text-sm">Форум</Button>
              <Button variant="ghost" className="text-sm">Контакты</Button>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={18} />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-secondary text-secondary-foreground">АИ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-secondary">🚀 Новая платформа обучения</Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Изучайте компьютерные сети на практике
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Интерактивные курсы, симуляции реальных сетей и сертификаты после успешного завершения
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  Начать обучение
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Успеваемость</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
              <NetworkPacketVisualization />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Ваше обучение</h3>
                <p className="text-muted-foreground">Выберите раздел для продолжения</p>
              </div>
              <TabsList className="grid w-auto grid-cols-4 gap-4">
                <TabsTrigger value="courses" className="gap-2">
                  <Icon name="BookOpen" size={18} />
                  Курсы
                </TabsTrigger>
                <TabsTrigger value="simulations" className="gap-2">
                  <Icon name="Cpu" size={18} />
                  Симуляции
                </TabsTrigger>
                <TabsTrigger value="profile" className="gap-2">
                  <Icon name="User" size={18} />
                  Профиль
                </TabsTrigger>
                <TabsTrigger value="certificates" className="gap-2">
                  <Icon name="Award" size={18} />
                  Сертификаты
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow hover:scale-[1.02] duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={course.icon as any} className="text-primary" size={24} />
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Прогресс</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          {course.students}
                        </div>
                      </div>
                      <Button className="w-full gap-2">
                        {course.progress > 0 ? 'Продолжить' : 'Начать курс'}
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="simulations" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {simulations.map((sim) => (
                  <Card key={sim.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={sim.icon as any} className="text-accent" size={24} />
                      </div>
                      <CardTitle className="text-lg">{sim.title}</CardTitle>
                      <CardDescription>{sim.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="secondary">{sim.difficulty}</Badge>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          {sim.time}
                        </div>
                      </div>
                      <Button className="w-full gap-2" variant="outline">
                        <Icon name="Play" size={18} />
                        Запустить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Профиль студента</CardTitle>
                  <CardDescription>Ваш прогресс и достижения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">АИ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1">Алексей Иванов</h4>
                      <p className="text-muted-foreground mb-3">alexey.ivanov@email.com</p>
                      <div className="flex gap-2">
                        <Badge className="bg-primary">Студент</Badge>
                        <Badge variant="outline">Уровень 5</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-primary mb-1">4</div>
                        <div className="text-sm text-muted-foreground">Курса завершено</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-1">12</div>
                        <div className="text-sm text-muted-foreground">Симуляций пройдено</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">240</div>
                        <div className="text-sm text-muted-foreground">Часов обучения</div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-4">Активные курсы</h5>
                    <div className="space-y-3">
                      {courses.filter(c => c.progress > 0 && c.progress < 100).map((course) => (
                        <div key={course.id} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name={course.icon as any} className="text-primary" size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{course.title}</div>
                            <Progress value={course.progress} className="h-1.5 mt-1" />
                          </div>
                          <div className="text-sm font-medium">{course.progress}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ваши сертификаты</CardTitle>
                  <CardDescription>Подтверждение успешного завершения курсов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                              <Icon name="Award" className="text-primary-foreground" size={32} />
                            </div>
                            <div>
                              <h5 className="font-bold text-lg mb-1">{cert.course}</h5>
                              <p className="text-sm text-muted-foreground">Выдан {cert.date}</p>
                              <Badge className="mt-2 bg-secondary">{cert.grade}</Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                              <Icon name="Download" size={16} />
                              Скачать
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                              <Icon name="Share2" size={16} />
                              Поделиться
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Card className="border-dashed border-2">
                    <CardContent className="p-6 text-center text-muted-foreground">
                      <Icon name="Lock" className="mx-auto mb-2" size={32} />
                      <p>Завершите курс, чтобы получить сертификат</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t bg-card/50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Network" className="text-primary-foreground" size={20} />
                </div>
                <span className="font-bold text-lg">NetLearn</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для обучения основам компьютерных сетей и информационных систем
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-3">Обучение</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Симуляции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тестирование</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-3">Сообщество</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-3">Контакты</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@netlearn.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 NetLearn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;