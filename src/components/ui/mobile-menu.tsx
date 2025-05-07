
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white md:hidden">
          <Icon name="Menu" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <h2 className="text-xl font-bold text-forest">ГКС ТАЙГА</h2>
          <nav className="flex flex-col gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-lg font-medium hover:text-forest transition-colors py-2 border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <div className="flex flex-col gap-4">
              <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Phone" size={16} />
                <span>+7 (XXX) XXX-XX-XX</span>
              </a>
              <a href="mailto:info@гкстайга.рф" className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Mail" size={16} />
                <span>info@гкстайга.рф</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <Icon name="Instagram" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <Icon name="VkLogo" fallback="Dribbble" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <Icon name="YoutubeLogo" fallback="Youtube" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <Icon name="TelegramLogo" fallback="Send" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
