import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter, useParams, usePathname } from "next/navigation";
import { locales } from "@/config/locales";
import { Locale } from "@/types/Locale";

const LanguageSwitcher = () => {
  const router = useRouter();
  const params = useParams<{ locale: Locale }>();
  const pathname = usePathname();

  const setLanguage = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    const newUrl = pathname.replace(`/${params.locale}`, `/${newLocale}`);

    router.replace(newUrl);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          <span className="font-medium">{params.locale}</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Select Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.keys(locales).map((locale: string) => (
            <DropdownMenuItem
              onClick={() => setLanguage(locale as Locale)}
              key={locale}
            >
              {locales[locale as Locale]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
