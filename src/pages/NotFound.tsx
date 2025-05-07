
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold mb-4 text-green-800">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Страница не найдена</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Извините, запрашиваемая страница не существует или была перемещена. 
          Возможно, вы перешли по устаревшей ссылке или ввели неверный адрес.
        </p>
        <Link to="/">
          <Button className="bg-green-800 hover:bg-green-900">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
