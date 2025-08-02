import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Zap, Shield, Users, Rocket, BarChart3, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "빠른 개발",
    description: "최신 기술 스택을 활용하여 빠르고 효율적인 개발을 제공합니다.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Shield,
    title: "보안 강화",
    description: "enterprise 급 보안 시스템으로 데이터를 안전하게 보호합니다.",
    features: ["데이터 암호화", "2FA 인증", "정기 보안 감사"]
  },
  {
    icon: Users,
    title: "팀 협업",
    description: "실시간 협업 도구로 팀의 생산성을 극대화합니다.",
    features: ["실시간 채팅", "프로젝트 관리", "파일 공유"]
  },
  {
    icon: Rocket,
    title: "성능 최적화",
    description: "최고의 성능과 사용자 경험을 위한 최적화를 제공합니다.",
    features: ["CDN 배포", "캐싱 전략", "모니터링"]
  },
  {
    icon: BarChart3,
    title: "데이터 분석",
    description: "상세한 분석과 리포트로 비즈니스 인사이트를 제공합니다.",
    features: ["실시간 대시보드", "커스텀 리포트", "예측 분석"]
  },
  {
    icon: HeartHandshake,
    title: "고객 지원",
    description: "24/7 전문가 지원으로 언제든지 도움을 받을 수 있습니다.",
    features: ["실시간 지원", "온보딩", "교육 자료"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">서비스</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            포괄적인 솔루션 제공
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            최고의 기술과 전문성으로 당신의 비즈니스 목표를 달성할 수 있도록 
            다양한 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}