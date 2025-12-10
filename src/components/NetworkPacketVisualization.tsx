import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Packet {
  id: number;
  from: string;
  to: string;
  type: 'TCP' | 'UDP' | 'HTTP' | 'DNS';
  position: number;
  layer: number;
}

const NetworkPacketVisualization = () => {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [packetCounter, setPacketCounter] = useState(0);

  const nodes = [
    { id: 'client', label: 'Клиент', icon: 'Monitor', color: 'bg-secondary', position: 0 },
    { id: 'router', label: 'Маршрутизатор', icon: 'Router', color: 'bg-accent', position: 50 },
    { id: 'server', label: 'Сервер', icon: 'Server', color: 'bg-primary', position: 100 }
  ];

  const packetTypes: Array<'TCP' | 'UDP' | 'HTTP' | 'DNS'> = ['TCP', 'UDP', 'HTTP', 'DNS'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newPacketId = packetCounter + 1;
      setPacketCounter(newPacketId);

      const fromNode = Math.random() > 0.5 ? 'client' : 'server';
      const toNode = fromNode === 'client' ? 'server' : 'client';
      const packetType = packetTypes[Math.floor(Math.random() * packetTypes.length)];
      const layer = Math.floor(Math.random() * 3);

      const newPacket: Packet = {
        id: newPacketId,
        from: fromNode,
        to: toNode,
        type: packetType,
        position: fromNode === 'client' ? 0 : 100,
        layer
      };

      setPackets((prev) => [...prev, newPacket]);

      setTimeout(() => {
        setPackets((prev) => prev.filter(p => p.id !== newPacketId));
      }, 3000);
    }, 1500);

    return () => clearInterval(interval);
  }, [packetCounter]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPackets((prev) =>
        prev.map((packet) => {
          const direction = packet.from === 'client' ? 1 : -1;
          const newPosition = packet.position + direction * 2;

          if ((direction === 1 && newPosition >= 100) || (direction === -1 && newPosition <= 0)) {
            return packet;
          }

          return { ...packet, position: newPosition };
        })
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  const getPacketColor = (type: string) => {
    switch (type) {
      case 'TCP':
        return 'bg-blue-500';
      case 'UDP':
        return 'bg-green-500';
      case 'HTTP':
        return 'bg-purple-500';
      case 'DNS':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="relative border-2 overflow-hidden">
      <CardContent className="p-8">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Визуализация сетевых пакетов</h4>
          <p className="text-sm text-muted-foreground">Наблюдайте за передачей данных в реальном времени</p>
        </div>

        <div className="relative h-64">
          {nodes.map((node, index) => (
            <div
              key={node.id}
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: `${node.position}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`w-16 h-16 ${node.color} rounded-xl flex items-center justify-center shadow-lg mb-2 relative`}>
                <Icon name={node.icon as any} className="text-white" size={28} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-slow" />
              </div>
              <span className="text-xs font-medium">{node.label}</span>
            </div>
          ))}

          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border" style={{ transform: 'translateY(-50%)' }} />

          {packets.map((packet) => (
            <div
              key={packet.id}
              className="absolute top-1/2 transition-all duration-100"
              style={{
                left: `${packet.position}%`,
                transform: `translate(-50%, calc(-50% + ${(packet.layer - 1) * 30}px))`
              }}
            >
              <div className={`${getPacketColor(packet.type)} rounded-lg px-3 py-1.5 text-white text-xs font-mono shadow-lg animate-scale-in flex items-center gap-1.5`}>
                <Icon name="Zap" size={12} />
                {packet.type}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-blue-500 rounded" />
            <span>TCP</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-green-500 rounded" />
            <span>UDP</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-purple-500 rounded" />
            <span>HTTP</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-orange-500 rounded" />
            <span>DNS</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkPacketVisualization;
