import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">L</span>
            </div>
            <span className="text-lg font-semibold">Company</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              홈
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              서비스
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              회사소개
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              연락처
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>시작하기</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                홈
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                서비스
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                회사소개
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                연락처
              </a>
              <Button className="w-full">시작하기</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}