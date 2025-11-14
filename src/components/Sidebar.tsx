import { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
} from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Typography', href: '/typography', icon: Building2 },
];

interface SidebarProps {
  onSignOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSignOut }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSignOut = () => {
    onSignOut();
  };

  const user = { name: 'John Doe' }; // Mock user for display

  return (
    <aside
      className={`relative flex flex-col border-r transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-muted/40`}
    >
      <div
        className={`flex items-center border-b h-16 transition-all ${
          isCollapsed ? 'justify-center px-2' : 'justify-center px-4'
        }`}
      >
        {isCollapsed ? (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <h1 className="text-xl font-bold text-primary">Velocity</h1>
        )}
      </div>
      <nav
        className={`flex flex-col gap-1 flex-1 ${
          isCollapsed ? 'px-2 py-4' : 'p-4'
        }`}
      >
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center rounded-lg transition-colors text-sm font-medium ${
                isCollapsed
                  ? 'justify-center h-10 w-10 sidebar-tooltip'
                  : 'gap-3 px-3 py-2'
              } ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-primary'
              }`
            }
            data-tooltip={isCollapsed ? item.name : undefined}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      {user && (
        <div
          className={`border-t p-4 space-y-2 ${
            isCollapsed ? 'px-2' : 'px-4'
          }`}
        >
          {isCollapsed ? (
            <div className="flex flex-col gap-2">
              <Link
                to="/profile"
                className="flex items-center justify-center h-10 w-full rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:text-primary sidebar-tooltip"
                data-tooltip="My Account"
                title="My Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <button
                className="flex items-center justify-center h-10 w-full rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:text-primary sidebar-tooltip"
                onClick={handleSignOut}
                data-tooltip="Sign Out"
                title="Sign Out"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <User className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">
                  {user.name}
                </span>
              </Link>
              <button
                className="w-full justify-start gap-3 px-3 py-2 h-auto text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                <span>Sign Out</span>
              </button>
            </>
          )}
        </div>
      )}
      <button
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-background shadow-sm flex items-center justify-center"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
