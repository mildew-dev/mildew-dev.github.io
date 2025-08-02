import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">연락처</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프로젝트를 시작해보세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            궁금한 점이 있으시거나 프로젝트 상담을 원하시면 
            언제든지 연락해 주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">이메일</h4>
                    <p className="text-muted-foreground">contact@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">전화번호</h4>
                    <p className="text-muted-foreground">02-1234-5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">주소</h4>
                    <p className="text-muted-foreground">서울시 강남구 테헤란로</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">운영시간</h4>
                    <p className="text-muted-foreground">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        이름 *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="홍길동" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        이메일 *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="hong@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        회사명
                      </label>
                      <Input 
                        id="company" 
                        placeholder="회사명을 입력해주세요" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        연락처
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="010-1234-5678" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      제목 *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="문의 제목을 입력해주세요" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      메시지 *
                    </label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      placeholder="상세한 문의 내용을 작성해주세요..." 
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    메시지 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}