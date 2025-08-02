import { Badge } from "./ui/badge";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">L</span>
              </div>
              <span className="text-lg font-semibold">Company</span>
            </div>
            <p className="text-muted-foreground">
              혁신적인 디지털 솔루션으로 
              고객의 성공을 이끌어가는 
              기술 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">웹 개발</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">모바일 앱</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX 디자인</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">컨설팅</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">유지보수</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">회사 소개</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">팀</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">채용</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">뉴스</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">블로그</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">서울시 강남구 테헤란로</li>
              <li className="text-muted-foreground">02-1234-5678</li>
              <li className="text-muted-foreground">contact@company.com</li>
              <li>
                <Badge variant="outline" className="text-xs">
                  평일 09:00 - 18:00
                </Badge>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Company. 모든 권리 보유.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              이용약관
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              개인정보처리방침
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              쿠키 정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}