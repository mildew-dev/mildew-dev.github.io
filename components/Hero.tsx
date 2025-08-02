import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              새로운 서비스 출시
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              쉽고 빠른 <span className="text-primary">시제품 제작</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              전문적이고 최신화된 기술로<br />
              당신의 사업에 부스터를 달아보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base">
                지금 시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Play className="mr-2 h-4 w-4" />
                데모 보기
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">만족한 고객</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">성공률</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">고객 지원</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Business team working"
                className="w-full h-full object-cover rounded-lg"
                width={600}
                height={400}
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">프로젝트 완료</div>
                  <div className="text-xs text-muted-foreground">+25% 이번 달</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">★</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">고객 만족도</div>
                  <div className="text-xs text-muted-foreground">4.9/5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}