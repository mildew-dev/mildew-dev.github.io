import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">회사 소개</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              10년간의 경험과 신뢰
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              우리는 2014년부터 혁신적인 디지털 솔루션을 제공해왔습니다. 
              수백 개의 프로젝트를 성공적으로 완료하며 쌓은 경험과 노하우로 
              고객의 비즈니스 성장을 도모합니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">전문성</h4>
                  <p className="text-muted-foreground">
                    최신 기술 트렌드를 선도하는 전문가들이 프로젝트를 진행합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">신뢰성</h4>
                  <p className="text-muted-foreground">
                    약속한 일정과 품질을 지키며 고객과의 신뢰를 최우선으로 합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">혁신</h4>
                  <p className="text-muted-foreground">
                    끊임없는 연구개발을 통해 차별화된 솔루션을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
            
            {/* Achievement Cards */}
            <div className="absolute -bottom-8 -left-8 bg-background border rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">완료 프로젝트</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-background border rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10년</div>
                <div className="text-sm text-muted-foreground">업계 경험</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}