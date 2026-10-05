import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { route } from './route/route';
import './index.css';

createRoot(document.getElementById('root')).render(<RouterProvider router={route} />);
