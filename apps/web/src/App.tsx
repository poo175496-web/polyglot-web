import { Link, Route, Routes } from 'react-router-dom';

import { createAppShellModel } from './app-shell';
import { createRebuildWebRoutes } from './routes';

export default function RebuildApp() {
  const shell = createAppShellModel();
  const routes = createRebuildWebRoutes();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500">Polyglot Rebuild</p>
            <h1 className="text-2xl font-black">{shell.appName}</h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {shell.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
